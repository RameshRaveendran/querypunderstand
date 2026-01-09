const express = require('express');
const fs = require ('fs');

const app = express();


app.get('/products', (req , res ) =>{

    console.log(req.query)
    const { model, year} = req.query;
    let value =`your handset model is : ${model} and manufactured year is : ${year} \n`;
    console.log(value)

    fs.appendFile('test.txt',value , (err) => {
        if(err){
            console.log('its not done' , err);

        }else{
            console.log('write done');
        }
    })



    res.json({
    model,
    year,
    });



})


app.listen(3003 , () => {
    console.log('server running at 3003');
})