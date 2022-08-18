const dbConfig = require("../config/database.js");
const Sequelize = require("sequelize");
const path = require("path");
const fs = require("fs");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {}
const models = path.join(__dirname) // path to a models' folder
//console.log(models)  
const fileList = fs.readdirSync(models).filter(function (file) {
  return (file.indexOf('.') !== 0)  && (file !== 'index.js')
}).forEach(function (file) {
  const fullName = path.join(__dirname, file)
  const model = sequelize.import(fullName)
   //console.log(model)
   db[model.name] = model
})
//console.log("check 1", db)
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
})

db.sequelize = sequelize;
//console.log("check to DB", db)
module.exports = db; 
