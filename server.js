const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Connection = require('./config/DBConfig');


//dotenv config
dotenv.config();

// DB Connection
Connection();

//rest object
const app = express();


//middlewares
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/user', require('./routes/userRoutes'));

//Port
const port = process.env.PORT || 8000

//listen
app.listen(port, () =>{
    console.log(`Server running in ${process.env.NODE_MODE} mode on port number ${process.env.PORT}`);
})