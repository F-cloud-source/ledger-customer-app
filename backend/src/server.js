

const express = require('express');
 const app = express();


 app.use(express.json());

 connectToDatatbase();

 

 const PORT = 5000;

 app.get('/' , (req , res) => {
    res.send('Backend Server is runnign successfully ');
 })
 app.listen(PORT, () => {

    console.log("Server is running and Cooking");
 })
