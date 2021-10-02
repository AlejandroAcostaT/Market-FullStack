const express = require ('express');
const config =  require('./config.js');

const cors = require("cors");
const app = express();

//MONGO_DB SETUP
const mongoose = require('mongoose')
const connection = mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {
    console.log("DB is connected now!")
  })

//MAIN APP SETUP
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});
  
