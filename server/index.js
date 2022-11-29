const express = require("express");
const currency = require('./currency');
const itinerary = require('./itinerary')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Hello !");
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use('/currency', currency.convert);
app.use('/itinerary/updateCurrentItinerary', itinerary.updateCurrentItinerary);
app.use('/itinerary/getCurrentItinerary', itinerary.getCurrentItinerary);
app.use('/itinerary/getItineraries', itinerary.getItineraries);
app.use('/itinerary/getDayPlans', itinerary.getDayPlans);
app.use('/itinerary/insertItinerary', itinerary.insertItinerary);
app.use('/itinerary/updateItinerary', itinerary.updateItinerary);
app.use('/itinerary/deleteItinerary', itinerary.deleteItinerary);
app.use('/itinerary/insertDayPlan', itinerary.insertDayPlan);
app.use('/itinerary/updateDayPlan', itinerary.updateDayPlan);
app.use('/itinerary/deleteDayPlan', itinerary.deleteDayPlan);

module.exports = app;
