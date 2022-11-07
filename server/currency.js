//appid from oxr account
const appID = '92f03d647c484ad7b15dce241f89fb8d';
const oxr = require('oxr');
const service = oxr.factory({
  appId: process.env.OXR_APP_ID || appID 
})

//grabs conversion rate and sends it (usd to yen)
async function convert(req, res, next){

    try {
        service.latest().then(function(result){
        var rates = result.rates;
        res.send({"rate":rates.JPY});
        })
    } catch (err) {
        res.send({"error":err})
    }
}


module.exports.convert = convert;