import * as dotenv from 'dotenv';
import * as fs from 'fs';

if(fs.existsSync(".env")){
    dotenv.config({path: ".env"});
}else{
    dotenv.config({path: ".env.example"});
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production";

export const MONGODB_URI = process.env["MONGO_URI"];

if(!MONGODB_URI){
    console.log('No Mongo URL');
    process.exit(1);
}