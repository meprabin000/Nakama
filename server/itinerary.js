const { query } = require('express');
const url = require('url');

const {MongoClient} = require('mongodb');
const mongo = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
const dbName = 'local';

async function getDayPlans(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    if (Object.keys(queryParam).length == 1 && queryParam.Itinerary_identifier) { //only allows for one query param
        const database = client.db(dbName);
        let cursor = database.collection('itinerary');
        const found = await cursor.find({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)}).toArray();
        if (found[0])
            res.send(found[0].DayPlans);
        else
            res.send({"error":"400"});
    }
    else {  //errors when there's too many query params
        res.send({"error" : "400"})
    }
}

module.exports.getDayPlans = getDayPlans;