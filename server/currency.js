const CC = require('currency-converter-lt');
const { query } = require('express');
const url = require('url');

async function convert(req, res, next){
    let queryParam = url.parse(req.url,true).query; //creates json object for query parameters
    if (Object.keys(queryParam).length == 1) { //only allows for one query param
        if (queryParam.yen != null && !isNaN(queryParam.yen)){ //converts yen to usd and checks if the value is a number
            let amount =  new CC({from:"JPY", to:"USD", amount:Number(queryParam.yen)})
            amount.convert().then((response) => {
               res.send({"amount" : String(amount.convertedValue)});
            });
        }
        else if (queryParam.us != null && !isNaN(queryParam.us)){  //converts usd to yen and checks if the value is a number
            let amount =  new CC({from:"USD", to:"JPY", amount:Number(queryParam.us)})
            amount.convert().then((response) => {
                res.send({"amount" : String(amount.convertedValue)});
            });
        }
        else {  //errors when there's invalid query params
            res.send({"error": "400"})
        }
    }
    else {  //errors when there's too many query params
        res.send({"error" : "400"})
    }
}


module.exports.convert = convert;