const auth = require('./auth_middleware');
const time = require('./routes/time');

const express = require('express');
const promMid = require('express-prometheus-middleware');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(auth);

app.get('/time', time);

app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    collectGCMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}));

app.listen(process.env.PORT || 3000);
