/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */

// const path = require('path');
// require('dotenv').config({
//   path: path.resolve(__dirname, '../.env')
// });
require('dotenv').config();
const mysql = require("mysql2/promise");
const CoinAPI = require("../CoinAPI");

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

class MySQLBackend {
  constructor() {
    this.coinAPI = new CoinAPI();
    this.connection = null;
  }

  async connect() {
    console.log('hereISpassword', dbUsername);
    this.connection = await mysql.createConnection({
      host: "localhost",
      port: "3406",
      user: "root",
      password: dbPassword,
      database: "coincheck",
    });
    console.log('connectionHERERERERE', this.connection);

    return this.connection;
  }

  async disconnect() {
    return this.connection.end();
  }

  async insert() {
    const data = await this.coinAPI.fetch();
    const sql = "INSERT INTO coinvalues (valuedate, coinvalue) VALUES ?";
    const values = [];
    Object.entries(data.bpi).forEach((entry) => {
      values.push([entry[0], entry[1]]);
    });
    return this.connection.query(sql, [values]);
  }

  async getMax() {
    return this.connection.query(
      "SELECT * FROM coinvalues ORDER by coinvalue DESC LIMIT 0,1"
    );
  }

  async max() {
    console.info("Connection to MySQL");
    console.time("mysql-connect");
    const connection = this.connect();
    if (connection) {
      console.info("Successfully connected to MySQL");

    } else {
      throw new Error("Connecting to MySQL failed");
    }
    console.timeEnd("mysql-connect");

    console.info("Inserting into MySQL");
    console.time("mysql-insert");
    const insertResult = await this.insert();
    console.timeEnd("mysql-insert");

    console.info(
      `Inserted ${insertResult[0].affectedRows} documents into MySQL`
    );

    console.info("Querying MySQL");
    console.time("mysql-find");
    const result = await this.getMax();
    console.timeEnd("mysql-find");

    console.info("Disconnecting from MySQL");
    console.time("mysql-disconnect");
    await this.disconnect();
    console.timeEnd("mysql-disconnect");
    return result[0];
  }
}

module.exports = MySQLBackend;