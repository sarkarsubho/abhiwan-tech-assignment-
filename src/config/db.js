const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/defaultTournament?retryWrites=true&w=majority"
  );
};
module.exports = connect;
