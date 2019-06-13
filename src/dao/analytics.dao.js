import DB2 from './db2.connection';
import { Promise } from 'es6-promise';

const TEST_DATA_TABLE_NAME = 'BFD12_TEST';
const SPLIT_DATA_SQL = 'CALL IDAX.SPLIT_DATA(\'intable=BFD_12MONTHS_VIEW, traintable=BFD12_TRAIN, testtable=BFD12_TEST,id=ID,fraction=0.35\')';
const LINEAR_REGRESSION_SQL = 'CALL IDAX.LINEAR_REGRESSION(\'model=BFD12_ARR,intable=BFD12_TRAIN,id=ID,target=ARR_DELAY,incolumn=OP_CARRIER; MANUFACTURER; MODEL; DAY_OF_WEEK; MONTH; DEP_TIME_BLK,coldefrole=ignore, calculatediagnostics=false\')';
const PREDICT_LR_SQL = 'CALL IDAX.PREDICT_LINEAR_REGRESSION(\'model=BFD12_ARR,intable=BFD12_TEST,outtable=BFD12_ARR_OUT,id=ID\')';
var INSERT_SQL = 'insert into ' + TEST_DATA_TABLE_NAME + ' (ID,op_carrier, tail_num, manufacturer, model, origin, origin_city_name, dest, dest_city_name, month, day_of_week, dep_time_blk) values ';
const DROP_TABLE = 'DROP TABLE BFD12_ARR_OUT'
const TABLE_IF_EXISTS = 'select tabname from syscat.tables where tabschema=\'DASH100355\' and tabname=\'BFD12_ARR_OUT\''
const MAXID = 'select max(id) + 1 as maxId from ' + TEST_DATA_TABLE_NAME;
const PREDICTION_RESULT = 'SELECT IN.ID, IN.ARR_DELAY as SOURCE_DELAY, OUT.ARR_DELAY AS SOURCE_PREDICT FROM BFD12_TEST AS IN, BFD12_ARR_OUT AS OUT WHERE IN.ID=OUT.ID LIMIT 10'

class AnalyticsDAO {

    constructor() {
        this.db2 = new DB2();
    }

    /*
    splitTrainingAndTestDataset(){
        return new Promise((resolve, reject) => {
            this.db2.runSQL(SPLIT_DATA_SQL)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
        });
    }

    runLinearRegression(){
        return new Promise((resolve, reject) => {
            this.db2.runSQL(LINEAR_REGRESSION_SQL)
            .then((result) => resolve(result))
            .catch((error) => reject(error));
        });
    }
    */

    /**
     * Insert prediciton input data and run prediciton on it.
     * @param {*} testData 
     */
    getPredictions(testData) {
        return new Promise((resolve, reject) => {

            this.db2.runSQL(MAXID)
                .then((result) => {
                    // load the test data and run prediction.
                    var SQL = INSERT_SQL + '(' + result[0].MAXID + ' ,\'' + testData.opCarrier + '\',\'' +
                        testData.tailNum + '\',\'' +
                        testData.manufacturer + '\',\'' +
                        testData.flightModel + '\',\'' +
                        testData.origin + '\',\'' +
                        testData.originCityName + '\',\'' +
                        testData.dest + '\',\'' +
                        testData.destinationCityName + '\',\'' +
                        testData.month + '\',\'' +
                        testData.dayOfWeek + '\',\'' +
                        testData.depTimeBlk + '\')';

                    this.db2.runSQL(SQL)
                        .then((result) => {
                            console.log(result)
                            // run prediciton against the test data
                            this.db2.runSQL(PREDICT_LR_SQL)
                                .then((result) => {
                                    console.log(result);
                                    this.db2.runSQL(PREDICTION_RESULT)
                                        .then((result) => resolve(result))
                                        .catch((error) => reject(error))
                                }).catch((error) => reject(error));
                        }).catch((error) => {
                            console.log(error);
                            reject(error)
                        });
                });
        });
    }


    /**
     * This is a workaround to make the prediction store proc 
     * work.
     */
    dropPredictionTable() {
        return new Promise((resolve, reject) => {
            this.db2.runSQL(TABLE_IF_EXISTS)
                .then((result) => {
                    if (!result.length) {
                        resolve()
                    } else {
                        this.db2.runSQL(DROP_TABLE)
                            .then((result) => {
                                console.log('Result: ' + result)
                                resolve(result)
                            }).catch((error) => {
                                console.log('Error: ' + error);
                                reject(error)
                            });
                    }
                }).catch((error) => { console.log(error); reject(error) });
        });
    }
}

export default AnalyticsDAO;