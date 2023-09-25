import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ppdb_sma",
});

export default conn;
