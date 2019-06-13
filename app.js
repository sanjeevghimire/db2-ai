import express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import config from './src/config';
import AnalyticsService from './src/service/analytics.service'
import { resolve } from 'url';

const app = express();
const PORT = config.port
const analyticsService = new AnalyticsService();

// body parser for JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/build')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  // load the single view file (angular will handle the page changes on the front-end)
// app.use('*', function(req, res) {
//     res.sendFile('/build/index.html',{ root: __dirname });
// });


//Routes
app.post("/api/predict", (req, res) => {
    if (!req.body) {
        console.log("No data found in request.");
        res.status(400).send({
            message: "Bad request"
        });
        return;
    }

    analyticsService.getPredictions(req.body)
        .then((result) => res.status(200).send(result))
        .catch((error) =>
            res.status(400).send({
                message: error.message
            })
        )
});


//end: Routes


app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`)
});