db.auth('admin', 'admin');
db = db.getSiblingDB('tp_no_sql');
db.createUser({
  user: 'root',
  pwd: 'root',
  roles: [ { role: "dbOwner", db: "tp_no_sql" } ]
});