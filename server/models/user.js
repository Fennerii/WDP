const con = require("./db_connect");

async function createUserTable() {
  let sql = `CREATE TABLE IF NOT EXISTS User (
    UserID     INT          NOT NULL AUTO_INCREMENT,
    FirstName  VARCHAR(50)  NOT NULL,
    LastName   VARCHAR(50)  NOT NULL,
    Username   VARCHAR(50)  NOT NULL UNIQUE,
    Password   VARCHAR(255) NOT NULL,
    Email      VARCHAR(255) UNIQUE,
    Phone      VARCHAR(20),
    DateJoined DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT userPK PRIMARY KEY(UserID)
  );`
  await con.query(sql)
}
createUserTable()

async function getAllUsers() {
  let sql = `
    SELECT * FROM User;
  `
  return await con.query(sql)
}

module.exports = { getAllUsers }