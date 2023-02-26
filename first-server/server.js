const express = require('express'); //object/function called require
const app = express(); //invoke it to use it

//web servers need routes
//this is what gives them the ability to respond to http requests
app.get('/', function(req, res){  //
    //res.send('Hello World');
    const data = [
        {
            name: 'jane',
            location: 'New York'
        }, 

        {
            name: 'john',
            location: 'New Jersey'
        }
    ]
    res.json(data);
});

app.get('/cats', function(req, res){
    // res.send('here is your cat data');
    res.send(`
        <h1>Here are the cats</h1>
        <ul>
            <li>Fluffy</li>
            <li>Mr. Worms</li>
            <li>Mrs. Kitty</li>
        </ul>
    `);
})

app.get('/about', function(req, res){
    // res.send('Here is the about page');
    res.render('about.ejs'); //render calls upon built into express called template engine
})


app.listen(3000, () => {
    console.log('Express is listening for requests from the browser');
});