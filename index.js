require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");

const { PositionsModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
// Demo data
// app.get("/addholdings", async (req, res) => {
//   const tempHoldings = [
//     {
//       name: "HBL",
//       qty: 10,
//       avg: 98.5,
//       price: 102.35,
//       net: "+3.91%",
//       day: "+0.45%",
//     },
//     {
//       name: "ENGRO",
//       qty: 5,
//       avg: 300.0,
//       price: 288.7,
//       net: "-3.77%",
//       day: "-0.92%",
//       isLoss: true,
//     },
//     {
//       name: "LUCK",
//       qty: 2,
//       avg: 520.0,
//       price: 536.25,
//       net: "+3.13%",
//       day: "+1.24%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newHolding.save();
//   });
//   res.send("Holdings added successfully");
// });

// Demo Data 2
// app.get("/addpostions", async (req, res) => {
//   const tempPostions = [
//     {
//       product: "CNC",
//       name: "OGDC",
//       qty: 4,
//       avg: 96.5,
//       price: 94.15,
//       net: "-2.43%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "OGDC",
//       qty: 4,
//       avg: 96.5,
//       price: 94.15,
//       net: "-2.43%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//   ];
//   tempPostions.forEach((item) => {
//     let newPostions = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPostions.save();
//   });
//     res.send("Postions added successfully");
// });




app.get('/allHoldings' , async(req ,res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
})


app.get('/allPositions' , async(req ,res) => {
  let allPositions= await PositionsModel.find({});
  res.json(allPositions);
})





app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  mongoose.connect(uri);
  console.log("Connected to MongoDB");
});
