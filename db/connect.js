const mongoose = require('mongoose');


const connectDB = (url) => {
  mongoose.connect(url, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

module.exports = connectDB;