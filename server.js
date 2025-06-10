
/*-------------------------------- Constants and packages --------------------------------*/
// express - mongoose - ejs - dotenv - morgan - method-override - Packages
const express= require('express')
const app = express();
const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();
const morgan=require('morgan');
const methodOverride = require('method-override');
const path = require('path'); //to reference the path to stylesheet
PORT= 3000;

/*-------------------------------- Database Set up --------------------------------*/
//create models and create the schema 
//create the .env file and insert the database connection string-
//"reminder to add the password and teh name of the model after ?" 

//database connections
mongoose.connect(process.env.MONGOOB_URI);
mongoose.connection.on('connected',()=>{
    console.log(`connected to the Database: ${mongoose.connection.name}`);
});

//Parse the data from the form "body" which will store the data correclty into the database

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

/*-------------------------------- Style sheet connections --------------------------------*/
//Style sheet set up
app.use(express.static(path.join(__dirname,'public')));


/*-------------------------------- GET Fuction set up for the homePage --------------------------------*/
//HomePage set up
app.get('/',async(req,res)=>{  
    res.render('index.ejs');
} )

/*-------------------------------- Controller set up --------------------------------*/
//you need to create a controller .js
// const SurveyOperation= require('../models/surverOperation'); -- To import the Model 
// const router= require('express').Router(); -- set up the router
// module.exports=router; -- export the router
const SurveyOperationCtrl= require('./controllers/surveyOperations');
app.use('/',SurveyOperationCtrl);


/*-------------------------------- Listen event --------------------------------*/
app.listen(PORT,()=>{
    console.log(`Server is hopst on http://localhost:${PORT}`);
});