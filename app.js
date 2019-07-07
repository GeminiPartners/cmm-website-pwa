const express = require('express');
const app = express();
var bodyParser = require('body-parser');

//Load environment variables in dev
require('dotenv-safe').config();

//Use pug to generate views
app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

var auth = require('./routes/auth');

app.use('/auth', auth);

app.get('/', (req, res) => {
    console.log(req.body)
    res.render('index', {
        title: 'Homepage'        
    });
});

app.get('/profile', (req, res) => {
    const person = people.profiles.find(p => p.id === req.query.id);
    res.render('profile', {
        title: `About ${person.firstname} ${person.lastname}`,
        person,
    });
});

//set the PORT for this server

const PWA_PORT = process.env.PWA_PORT
const server = app.listen(PWA_PORT, () => {
    console.log(`Express running => PORT ${server.address().port}`)
});

module.exports = {
    PWA_PORT
}