'use strict';
module.exports = function (app) {
    var newsList = require('../controllers/newsControllers');

    app.route('/news')
        .get(newsList.getAllNews)
        .post(newsList.createNews);

    app.route('/news/:newsId')
        .get(newsList.readNews)
        .put(newsList.updateNews)
        .delete(newsList.deleteNews);
};