const db = {
  user: [
    {
      id: 1,
      name: 'javaScript'
    },
    {
      id: 2,
      name: 'Go'
    },
    {
      id: 3,
      name: 'Ruby'
    }
  ]
};

async function list(table) {
  return db[table] || [];
};

async function get(table, id) {
  let collection = await list(table);
  return collection.filter(item => item.id == id)[0] || null;
};

async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  console.log(db);
};

async function query(table, q) {
  let collection = await list(table);
  let keys = Object.keys(q);
  let key = keys[0];
  return collection.filter(item => item[key] == q[key])[0] || null;
}

async function remove(table, id) {
  return true;
};

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
}