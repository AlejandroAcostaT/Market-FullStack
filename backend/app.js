const express = require ('express');
const config =  require('./config.js');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(config.PORT, config.HOST, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})
  
