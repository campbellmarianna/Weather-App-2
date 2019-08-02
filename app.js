/*
Plan
- Create interface for user (text field + button)
- Get user input
- Get weather data from API
- Associate weather data with moods
- Display mood options to users
- Find Mood and return associated weather
*/
// Required Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
app.get('/:username', (req, res) => {
    // Here you would look up the user from the database
    // Then render the template to display the user's info
});

app.get('/', (req, res) => {
    console.log(req.query);
    res.render('home');
});

// Start Server

app.listen(3000, () => {
    console.log('Weather My Mood listening on port localhost:3000!');
});
