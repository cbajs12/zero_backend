import * as dotenv from 'dotenv';
import * as fs from 'fs';

if(fs.existsSync(".env")){
    dotenv.config({path: ".env"});
}else{
    dotenv.config({path: ".env.example"});
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production";

export const MYSQL_HOST = process.env["MYSQL_HOST"];
export const MYSQL_USER = process.env["MYSQL_USER"];
export const MYSQL_PWD = process.env["MYSQL_PWD"];
export const MYSQL_PORT = process.env["MYSQL_PORT"];
export const MYSQL_DB = process.env["MYSQL_DB"];

if(!MYSQL_HOST){
    console.log('No Mongo URL');
    process.exit(1);
}