const { MongoClient } = require("mongodb");
require("dotenv").config();
const url = process.env.MONGODB_URL;
const dbName = 'airbnb';
const client = new MongoClient(url);
const mongo = {
  db: null,
  async connect() {
    await client.connect();
    console.log("connected to mongodb");
    this.db = client.db(dbName);
  },
};
module.exports = mongo;
