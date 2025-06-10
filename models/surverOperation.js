const mongoose= require('mongoose');
const surveyOperationSchema= new mongoose.Schema({

    name: String,
    type: String,
    year: Number,
    location:String,
    sensor: String,
    progress:Number,


});

const SurveyOperation= mongoose.model('SurveyOperation',surveyOperationSchema);

module.exports=SurveyOperation;