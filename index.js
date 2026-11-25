const express = require('express');
const app = express();
const path = require('path');

const userRoutes = require("./server/routes/user");

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use("/users", userRoutes);

app.get('/{*splat}', function (req, res) { //I looked and express 5 needs "splat compared to * used in express4"
  res.sendFile(path.resolve(__dirname, 'public', 'login.html'));
});

const PORT = process.env.PORT || 3000;
