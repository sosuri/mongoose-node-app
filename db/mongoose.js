const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sosuri:Freak123@ds137404.mlab.com:37404/ssuri', { useNewUrlParser: true });

module.exports = {mongoose};