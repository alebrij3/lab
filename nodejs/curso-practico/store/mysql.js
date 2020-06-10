const mysql = require('mysql');

const config = require('../config');

const dbconfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

// Connection

let connection;

function handleConn() {
  connection = mysql.createConnection(dbconfig);

  connection.connect(err => {
    if (err) {
      console.error('[db error]' + err);
      setTimeout(handleConn, 2000);
    } else {
      console.log('Database connected');
    }
  });

  connection.on('error', err => {
    console.error('[db error]' + err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleConn();
    } else {
      throw err;
    }
  })
}

handleConn();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
}

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id=${id}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    })
  })
}

function query(table, query) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, query, (err, res) => {
      if (err) return reject(err);
      resolve(res[0] || null);
    })
  })
}

function upsert(table, data) {
  //console.log(data)
  if (data && data.id) {
    return update(table, data);
  } else {
    return insert(table, data);
  }
}

module.exports = {
  list,
  get,
  upsert,
  query,
}