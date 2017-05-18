'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    author: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    urlToImage: {
        type: String
    },
    publishedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', NewsSchema);