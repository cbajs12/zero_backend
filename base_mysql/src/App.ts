import * as express from 'express';
import * as dotenv from 'dotenv';
import route from './routes/routes';
import * as mysql from 'mysql'
import * as bluebird from 'bluebird';
import { MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_PORT, MYSQL_DB } from "./util/secrets";

dotenv.config({path: '.env'});

// Express Config
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

const connection = mysql.createConnection({
    host     : MYSQL_HOST,
    user     : MYSQL_USER,
    password : MYSQL_PWD,
    port     : MYSQL_PORT,
    database : MYSQL_DB
});

connection.connect();

connection.query('SELECT * from Persons', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.', err);
});

connection.end();

app.use('/', route);

export default app;