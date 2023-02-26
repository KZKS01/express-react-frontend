const express = require('express'); //object/function called require
var app = express(); //invoke it to use it

app.get('/', function(req, res){  //
    res.send("Hello, Seattle. I'm listening...");
});

app.listen(3000, () => {
    console.log('Express is listening for requests from the browser');
});

app.get('/frasier', function(req, res){  //
    res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be");
});

app.get('/niles', function(req, res){  //
    res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money");
});
app.get('/daphne', function(req, res){  //
    res.send("Well, have fun. I'm off to stick my head in the oven.");
});
app.get('/roz', function(req, res){  //
    res.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!");
});
app.get('/martin', function(req, res){  //
    res.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.");
});

app.get('/Scrappy', function(req, res){  //
    res.send("woof");
});

