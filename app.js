const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

app.use(bodyParser.json());

//Import routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);


//Connect to DB
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true})
.then((result) => {
    console.log("connected to DB");
    app.listen(3000);
})  
.catch((err) => {
    console.log(err);
});

//ROUTES
app.get('/', (req, res) => {

    res.send('we are on home');
})

