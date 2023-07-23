const express = require('express');
const app = express();
const port = 3003;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const http = require('http');
const catArray = require('./data/cats');

console.log(catArray, `GREAT BIG CATTTS`, catArray[0].number, `WKKKKKKKKKKK`);



app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// CLIENT DATA OBJECT

let fakeDB = [], cleientData;

app.post('/reg', (req, res) => {
    console.log(`REQ.BODY`, req.body, req.body.first, `LOOOOOOK ATTTTT MEEEEEE.  nowwwwwwww`);
    cleientData = req.body;
    fakeDB.push(cleientData);
   res.json(cleientData)
  });


  
  
  // THE CAT DATA OBJECT


  let c, idx = 0, cList = [], catPage, name, image;
  
  app.post('/kat', (req, res) => {

    console.log(req.body,`Tes`)
  
  
    cNum = req.body.catt;
    // cNum = parseInt(convertToNum);
    console.log(typeof cNum, cNum)

    
    for (c of catArray) {
      // console.log(cNum,`CNUMMMMM`, c.number, `NUMBER CHECKKKKK`);
        // cList.push(c.number);
          
        if (c.number === cNum) {
            console.log("I GOT THAT SHITTTTTTT", c.number, c.image);
            name = c.name;
            image = c.images
            console.log(name, `NAME`, image, `IMAGE`);
        }


    }
   res.json({name, image})
  // });
  
  
});


   
////////



app.listen(port, () => {
  console.log(`Cat scratching on port ${port}`)
})