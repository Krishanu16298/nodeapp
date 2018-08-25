let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/',(req, res) => {
    res.render('index', {
        title:'Krishanu'
    });
    console.log('Running ..');
});

app.listen('4200', () => console.log('Server started ...'));