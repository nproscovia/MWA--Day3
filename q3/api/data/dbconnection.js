const MongoClient = require("mongodb").MongoClient;
const dbname = "meanGames";
const dburl = "mongodb://localhost:27017/" +dbname;


let _connection=null;

const open = function(){
      MongoClient.connect(dburl, function(err, client){
          if(err){
              console.log("DB connection failed");
              return;
          }
          _connection = client.db(dbname);
          console.log("db connection open", _connection);
 
      });
}

const get = function(){
    return _connection;
}

module.exports={
    open: open,
    get: get
}
