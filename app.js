const express = require('express');
const fs = require ('fs');

const app = express();

//query params ?
app.get('/products', (req , res ) =>{
    console.log(req.query)
    const { model, year} = req.query;
    let value =(`your handset model is : ${model} and manufactured year is : ${year} \n`);
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

// path params
app.get('/users/:id' ,(req ,res) => {

    console.log(req.params);
    const cid = (`First customer id is : ${req.params.id}\n`);

    const {id } = req.params;
    fs.appendFile('customerIDs.txt',cid, (err) => {
        if(err){
            console.log('its not done' ,err);
        }else{
            console.log('its done');
        }
    })

    res.json({
        id
    })
})

app.listen(3003 , () => {
    console.log('server running at 3003');
})