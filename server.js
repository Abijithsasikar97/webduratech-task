// Server

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 8080;

let corsOptions = {
  origin: "*",
  methods: "GET, PUT, POST, PATCH",
};

app.use(cors(corsOptions));

app.get("/rockets", (req, res) => {
  let rocketId = req.query.rocketId;
  let limitValue = req.query.limit;
  let offset = req.query.offset;
  let url = rocketId
    ? `https://api.spacexdata.com/v3/rockets/${rocketId}`
    : `https://api.spacexdata.com/v3/rockets?offset=${offset}&limit=${limitValue}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/launches", (req, res) => {
  let limitValue = req.query.limit;
  let flight_number = req.query.flightNumber;
  let offset = req.query.offset;
  let url = flight_number
    ? `https://api.spacexdata.com/v3/launches/${flight_number}`
    : `https://api.spacexdata.com/v3/launches/past?offset=${offset}&limit=${limitValue}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
