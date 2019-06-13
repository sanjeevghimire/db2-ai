import * as dotenv from 'dotenv';
dotenv.config();


let config = {    
    port: process.env.PORT || 5000,
    db2_url: process.env.DB2_HOST,
    db2_user: process.env.DB2_USER,
    db2_pass: process.env.DB2_PASS,
    db2_dbname: process.env.DB2_DBNAME,
    db2_port: process.env.DB2_PORT

}

export default config;