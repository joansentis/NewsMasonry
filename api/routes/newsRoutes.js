'use strict';
module.exports = function (app) {
    var newsList = require('../controllers/newsControllers');

    app.route('/api/news')
        .get(newsList.getAllNews)
        .post(newsList.createNews);

    app.route('/api/news/:newsId')
        .get(newsList.readNews)
        .put(newsList.updateNews)
        .delete(newsList.deleteNews);
};