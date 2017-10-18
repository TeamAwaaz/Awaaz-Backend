var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/signup', (req, res)=>{
    let user = new User({
       name: req.body.name,
       email: req.body.email,
       password: req.body.password,
    });

    user.save().then((user)=>{
       res.status(200).send(user);
    }, (error)=>{
        res.status(400).send(error);
    });
});

app.listen(3000, ()=>{
   console.log("Started on port 3000");
});


