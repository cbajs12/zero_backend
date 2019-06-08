import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import route from './routes/route';
import * as bluebird from 'bluebird';
import { MONGODB_URI } from "./util/secrets";

dotenv.config({path: '.env'});

// Express Config
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
(<any>mongoose).Promise = bluebird;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
    .then(() => {console.log('Connected to MongoDB')},).catch((err:any) =>{
    console.log("MongoDB Connection error." + err);
});

app.use('/', route);

export default app;