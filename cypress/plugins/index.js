const postgreSQL = require("cypress-postgresql")
const pg = require('pg');
const dbConfig = require('../../cypress.json');

module.exports = (on, config) => {
  on("task", {
    queryDb({ dbConfig, sql, values}){
      const pool = new pg.Pool(dbConfig)
      try{
        return pool.query(sql, values)
      } catch(e) {
        
      }
    }
  })
}










/*module.exports = (on, config) => {
  function queryTestDb(query, dbConfig) {
    const connection = new pg.Connection(dbConfig.db);
    connection.connect();
    return new Promise((resolve, reject) => { 
      connection.query(query, (error, results) => {
        if (error) reject(error)
        else{
          connection.end(); 
          return resolve(results);
        }
        }) 
      });
    };
     postgreSQL.loadDBPlugin(connection);
  on("task", {
    queryDb: (query)=>{
      return queryTestDb(query, config)}
    })
  }*/

