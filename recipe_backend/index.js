const express = require("express");
const cors = require("cors");
const app = express();
const loger = require("./loger");
const bcrypt = require('bcrypt');

require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const url = process.env.RECIPEAPI;


