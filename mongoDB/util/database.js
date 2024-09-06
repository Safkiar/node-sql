const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

//  "mongodb+srv://Max:Max@firstmango.6ykl4.mongodb.net/?retryWrites=true&w=majority&appName=FirstMango"
//  "mongodb+srv://Max:Max@firstmango.6ykl4.mongodb.net/shop?retryWrites=true&w=majority&appName=FirstMango"
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://Max:Max@firstmango.6ykl4.mongodb.net/?retryWrites=true&w=majority&appName=FirstMango"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
