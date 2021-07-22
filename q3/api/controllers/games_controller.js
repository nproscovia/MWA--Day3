
const dbConnection = require("../data/dbconnection");
const ObjectId = require("mongodb").ObjectId;



module.exports.gamesGetAll = function(req,res){

    const db = dbConnection.get();
    
    //console.log("get all games")
    const collection = db.collection("games");
    let count = 5;
    let offset =0;

    if(req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }

    if(req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }

   if(count > 7){
       count = 7;
   }

    collection.find().skip(offset).limit(count).toArray(function(err, games){
        console.log("found games", games);
        res.status(200).json(games);
    });
    
}