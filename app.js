const express = require('express');
const path = require('path');


const app = express();

// load view engine
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// index route
app.get('/', (req, res)=>{
	res.render('index');
});


// set port
const port = process.env.PORT || 5000;

// start server
app.listen(port, function(){
	console.log(`Server started on port ${port}...`);
});