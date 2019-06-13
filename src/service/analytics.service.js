import AnalyticsDAO from '../dao/analytics.dao'


class AnalyticsService {

    constructor() {
        this.dao = new AnalyticsDAO();
    }

    getPredictions(testData) {
        return new Promise((resolve, reject) => {
            this.dao.dropPredictionTable()
                .then((result) => {
                    console.log(result);
                    this.dao.getPredictions(testData)
                        .then((result) => resolve(result))
                        .catch((error) => reject(error));
                }).catch((error) => reject(error))
        });
    }
}

export default AnalyticsService;