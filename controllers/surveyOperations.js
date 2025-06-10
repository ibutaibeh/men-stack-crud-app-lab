const SurveyOperation= require('../models/surverOperation');
const router= require('express').Router();

/*-------------------------------- View 1 Overview --------------------------------*/

//First View ( Show all Records and basic Nav for entrying new records)
router.get('/surveyoperation', async(req,res)=>{
const surveyOperations= await SurveyOperation.find();
res.render('surveyoperations/index.ejs',{
            surveyOperations
})
})

/*-------------------------------- View 2 Add --------------------------------*/

//New Form to add new entry

router.get('/surveyoperation/new',async (req,res)=>{
    res.render('surveyoperations/new.ejs')
})

router.post('/surveyoperation', async (req,res)=>{
await SurveyOperation.create(req.body);
res.redirect('/surveyoperation/new')
})

/*-------------------------------- View 3 Show --------------------------------*/

router.get('/surveyoperation/:id',async (req,res)=>{
    const surveyOp= await SurveyOperation.findById(req.params.id);
    res.render('surveyoperations/show.ejs',{
        surveyOp
    });
})

/*-------------------------------- View 4 Update (edit) --------------------------------*/
//part 1 to get you to the edit page
router.get('/surveyoperation/:id/edit',async(req,res)=>{
    const surveyOp= await SurveyOperation.findById(req.params.id);
    res.render('surveyoperations/edit.ejs',{
        surveyOp
    })
})

//part 2 to carry out the update and edit feature

router.put('/surveyoperation/:id',async(req,res)=>{
    await SurveyOperation.findByIdAndUpdate(req.params.id,req.body);
    res.redirect(`/surveyoperation/${req.params.id}`);
})

//note redirect takes path while render takes a file 

/*-------------------------------- View 5 Delete --------------------------------*/

router.delete('/surveyoperation/:id',async(req,res)=>{
    await SurveyOperation.findByIdAndDelete(req.params.id)
    res.redirect('/surveyoperation')
})

module.exports=router;