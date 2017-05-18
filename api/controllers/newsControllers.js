'use strict';

var mongoose = require('mongoose'),
    News = mongoose.model('News');

exports.getAllNews = function (req, res) {
    News.find({}, function (err, news) {
        if (err)
            res.send(err);
        res.json(news);
    });
};

exports.createNews = function (req, res) {
    var new_news = new News(req.body);
    new_news.save(function (err, news) {
        if (err)
            res.send(err);
        res.json(news);
    });
};

exports.readNews = function (req, res) {
    News.findById(req.params.newsId, function (err, news) {
        if (err)
            res.send(err);
        res.json(news);
    });
};

exports.updateNews = function (req, res) {
    News.findOneAndUpdate(req.params.newsId, req.body, { new: true }, function (err, news) {
        if (err)
            res.send(err);
        res.json(news);
    });
};

exports.deleteNews = function (req, res) {
    News.remove({
        _id: req.params.newsId
    }, function (err, news) {
        if (err)
            res.send(err);
        res.json({ message: 'News successfully deleted' });
    });
};
