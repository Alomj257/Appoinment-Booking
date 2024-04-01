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
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'server started'
    });
});

//Port
const port = process.env.PORT || 8000

//listen
app.listen(port, () =>{
    console.log(`Sserver running in ${process.env.NODE_MODE} mode on port number ${process.env.PORT}`);
})