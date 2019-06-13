'use strict';
import ibmdb from 'ibm_db';
import config from '../config';
import { Promise } from 'es6-promise';


const CONNECTION_URL = 'DATABASE=' + config.db2_dbname + ';HOSTNAME=' + config.db2_url + ';UID=' + config.db2_user + ';PWD=' + config.db2_pass + ';PORT=' + config.db2_port + ';PROTOCOL=TCPIP';

class DB2 {
    constructor() {

    }

    /**
     * Run a sql query and return the result.
     * @param {*} query 
     */
    runSQL(query) {
        console.log(`Executing query:: ${query}`);
        return new Promise((resolve, reject) => {
            ibmdb.open(CONNECTION_URL, (error, conn) => {
                if (error) {
                    console.error("error: ", error.message);
                    return;
                }
                conn.query(query, function (err, result, moreResultSets) {
                    if (err) {
                        console.log(err);
                        conn.close();
                        reject(err)
                    }
                    console.log("closing connection")
                    conn.close();
                    // return the data;
                    resolve(result)
                });


            });
        });
    }
}

export default DB2;