var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    News = require('./models/newsModels'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/newsDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

var routes = require('./routes/newsRoutes');
routes(app);

app.listen(port);

console.log('Server started on: ' + port);
