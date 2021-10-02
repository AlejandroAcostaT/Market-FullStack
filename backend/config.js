const dotenv = require('dotenv');
const path = require('path');

const envPath = path.join(__dirname, "env");
console.log(path.resolve(envPath, `${process.env.NODE_ENV}.env`))

dotenv.config({
    path: path.resolve(envPath, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV || 'development',
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 3000,

    DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/Market',
}