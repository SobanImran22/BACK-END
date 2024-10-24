const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('./routes/TaskRoutes');
require("dotenv").config(); 

const app = express(); 
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("mongodb is connected successfully "))
  .catch((error) => console.log(error));

app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))