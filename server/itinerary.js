const { query } = require('express');
const url = require('url');

const {MongoClient} = require('mongodb');
const mongo = require('mongodb');
const { builtinModules } = require('module');
const password = 'gomavs'
const uri = 'mongodb+srv://MAV:'+password+'@cluster0.sjuqqki.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
const dbName = 'study_abroad';

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

async function updateCurrentItinerary(req, res, next){

    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    if (Object.keys(queryParam).length == 1 && queryParam.Itinerary_identifier) { //only allows for one query param
        const database = client.db(dbName);
        let cursor = database.collection('itinerary');
        try {
            const found = await cursor.updateOne({CurrentItinerary : { $exists : true }}, 
                {$set: {'CurrentItinerary' : new mongo.ObjectId(queryParam.Itinerary_identifier)}});
            res.send({"status code": "200"});
        }
        catch (err){
            res.send({err});
        }
               
    }
    else {  //errors when there's too many query params
        res.send({"error" : "400"})
    }
}

async function getCurrentItinerary(req, res, next){
    const database = client.db(dbName);
    let cursor = database.collection('itinerary');
    const found = await cursor.find({ CurrentItinerary : { $exists : true } }).toArray();
    if (found[0].CurrentItinerary)
        res.send({"CurrentItinerary" : found[0].CurrentItinerary});
    else
        res.send({"error":"400"});
}

async function getItineraries(req, res, next){
    const database = client.db(dbName);
    let cursor = database.collection('itinerary');
    const found = await cursor.find({ StartDate : { $exists : true } }).toArray();
    if (found[0])
        res.send(found);
    else
        res.send({"error":"400"});
}

async function insertItinerary(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    if (Object.keys(queryParam).length == 3 && (queryParam.Name && queryParam.StartDate && queryParam.EndDate)) { //only allows for one query param
        const database = client.db(dbName);
        let cursor = database.collection('itinerary');
        try {
            found = await cursor.insertOne({
                "Name": queryParam.Name,
                "StartDate": queryParam.StartDate,
                "EndDate": queryParam.EndDate,
                "DayPlans": []
              })
            if (found)
                res.send({"status code":"200"});
        }
        catch (err) {
            console.log(err)
            res.send({"error" : "400"})
        }
    }
    else {  //errors when there's too many or not enough query params
        res.send({"error" : "400"})
    }
}

async function updateItinerary(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    let queryLength = Object.keys(queryParam).length
    if ((queryLength >= 2 || queryLength <= 4) && queryParam.Itinerary_identifier) { //allows for 2-4 query params
        const database = client.db(dbName)
        let cursor = database.collection('itinerary');
        if (queryLength == 2){
            if (queryParam.Name){
                try {
                    found = await cursor.updateOne({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)},
                        {$set: {'Name': queryParam.Name}});
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else if (queryParam.StartDate){
                try {
                    found = await cursor.updateOne({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)},
                        {$set: {'StartDate': queryParam.StartDate}});
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else if (queryParam.EndDate){
                try {
                    found = await cursor.updateOne({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)},
                        {$set: {'EndDate': queryParam.EndDate}});
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else {
                res.send({"error" : "400"})
            }
        }
        else if (queryLength == 3)
        {
            if (queryParam.Name && queryParam.StartDate){
                try {
                    found = await cursor.updateOne({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)},
                        {$set: {'Name': queryParam.Name, 'StartDate': queryParam.StartDate}});
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else if (queryParam.Name && queryParam.EndDate){
                try {
                    found = await cursor.updateOne({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)},
                        {$set: {'Name': queryParam.Name, 'EndDate': queryParam.EndDate}});
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else if (queryParam.StartDate && queryParam.EndDate){
                try {
                    found = await cursor.updateOne({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)},
                        {$set: {'StartDate': queryParam.StartDate, 'EndDate': queryParam.EndDate}});
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else {
                res.send({"error" : "400"})
            }
        }
        else if (queryLength == 4)
        {
            if (queryParam.Name && queryParam.StartDate && queryParam.EndDate){
                try {
                    found = await cursor.updateOne({'_id': new mongo.ObjectId(queryParam.Itinerary_identifier)},
                        {$set: {'StartDate': queryParam.StartDate, 'EndDate': queryParam.EndDate, 'Name': queryParam.Name}});
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else {
                res.send({"error" : "400"})
            }
        }
    }
    else {  //errors when there's too many query params
        res.send({"error" : "400"})
    }
}

async function deleteItinerary(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    if (Object.keys(queryParam).length == 1 && queryParam.Itinerary_identifier) { //only allows for one query param
        const database = client.db(dbName);
        let cursor = database.collection('itinerary');
        try {
            found = await cursor.deleteOne({'_id':new mongo.ObjectId(queryParam.Itinerary_identifier)});
            if (found)
                res.send({"status code":"200"});
        }
        catch (err) {
            console.log(err)
            res.send({"error" : "400"})
        }
    }
    else {  //errors when there's too many or not enough query params
        res.send({"error" : "400"})
    }
}

async function insertDayPlan(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    if (Object.keys(queryParam).length == 3 && (queryParam.Itinerary_identifier && queryParam.DayDate && queryParam.Description)) { //only allows for one query param
        const database = client.db(dbName);
        let cursor = database.collection('itinerary');
        try {
            found = await cursor.updateOne({'_id':new mongo.ObjectId(queryParam.Itinerary_identifier)},
                {$push: {
                    DayPlans: {
                        '_id': mongo.ObjectId(),
                        'DayDate': queryParam.DayDate,
                        'Description':queryParam.Description
                    }
                }}
            );
            if (found)
                res.send({"status code":"200"});
        }
        catch (err) {
            console.log(err)
            res.send({"error" : "400"})
        }
    }
    else {  //errors when there's too many or not enough query params
        res.send({"error" : "400"})
    }
}

async function updateDayPlan(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    let queryLength = Object.keys(queryParam).length;
    if ((queryLength >= 3 || queryLength <= 4) && (queryParam.Itinerary_identifier && queryParam.DayPlan_identifier)) { //only allows for one query param
        const database = client.db(dbName);
        let cursor = database.collection('itinerary');
        if (queryLength == 3) {
            if (queryParam.DayDate) {
                try {
                    found = await cursor.updateOne({'_id':new mongo.ObjectId(queryParam.Itinerary_identifier), 'DayPlans._id': new mongo.ObjectId(queryParam.DayPlan_identifier)},
                        {$set: {'DayPlans.$.DayDate': queryParam.DayDate}}
                    );
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else {
                res.send({"error" : "400"})
            }
            if (queryParam.Description){
                try {
                    found = await cursor.updateOne({'_id':new mongo.ObjectId(queryParam.Itinerary_identifier), 'DayPlans._id': new mongo.ObjectId(queryParam.DayPlan_identifier)},
                        {$set: {'DayPlans.$.Description': queryParam.Description}}
                    );
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else {
                res.send({"error" : "400"})
            }
        }
        else if (queryLength == 4){
            if (queryParam.Description && queryParam.DayDate){
                try {
                    found = await cursor.updateOne({'_id':new mongo.ObjectId(queryParam.Itinerary_identifier), 'DayPlans._id': new mongo.ObjectId(queryParam.DayPlan_identifier)},
                        {$set: {'DayPlans.$.Description': queryParam.Description,
                                'DayPlans.$.DayDate':queryParam.DayDate}}
                    );
                    if (found)
                        res.send({"status code":"200"});
                }
                catch (err) {
                    console.log(err)
                    res.send({"error" : "400"})
                }
            }
            else {
                res.send({"error" : "400"})
            }
        }
    }
    else {  //errors when there's too many or not enough query params
        res.send({"error" : "400"})
    }
}

async function deleteDayPlan(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    if (Object.keys(queryParam).length == 2 && (queryParam.DayPlan_identifier && queryParam.Itinerary_identifier)) { //only allows for one query param
        const database = client.db(dbName);
        let cursor = database.collection('itinerary');
        try {
            found = await cursor.updateOne({'_id':new mongo.ObjectId(queryParam.Itinerary_identifier)},
                {$pull: {'DayPlans': {'_id': new mongo.ObjectId(queryParam.DayPlan_identifier)}}}                                
            );
            if (found)
                res.send({"status code":"200"});
        }
        catch (err) {
            console.log(err)
            res.send({"error" : "400"})
        }
    }
    else {  //errors when there's too many or not enough query params
        res.send({"error" : "400"})
    }
}

module.exports.updateCurrentItinerary = updateCurrentItinerary;
module.exports.getCurrentItinerary = getCurrentItinerary;
module.exports.getItineraries = getItineraries;
module.exports.getDayPlans = getDayPlans;
module.exports.insertItinerary = insertItinerary;
module.exports.updateItinerary = updateItinerary;
module.exports.deleteItinerary = deleteItinerary;
module.exports.insertDayPlan = insertDayPlan;
module.exports.updateDayPlan = updateDayPlan;
module.exports.deleteDayPlan = deleteDayPlan;