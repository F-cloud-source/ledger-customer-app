
//import  connectToDatabase  from './db.js'; 

import express from 'express';


 const app = express();


 app.use(express.json());

 //connectToDatabase();

 

 const PORT = 5000;

 app.get('/' , (req , res) => {
    res.send('Backend Server is runnign successfully ');
 })
 app.listen(PORT, () => {

    console.log("Server is running and Cooking");
 })
