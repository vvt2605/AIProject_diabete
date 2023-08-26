
const  express = require('express')
const path = require('path');
const  app = express()
const route = require('./routes')
const exphbs =require('express-handlebars');
const db = require('./config/db')


//connect to db
db.connect()

//file static
app.use(express.static(__dirname + '/public'));

//use extname hbs
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: "main",
    helpers: {
        subtr: (a,b)=> a-b
    }
    
}));
// Rendering engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log(path.join(__dirname, 'resources/views'));

app.use(express.urlencoded({
    extended: true
}))
// Routes init 
route(app)

app.listen(3000)
