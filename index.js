import express from 'express';
import  mongoose from 'mongoose'
import * as dotenv from 'dotenv';
import path from 'path'
import Data from './models/Table.js';
import Add from './models/Add.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();


const app = express()
app.use(express.static('UI'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
 .then( ()=>{console.log('Mongo dbga ulandi')})
 .catch( (error)=>{console.log(`Mongo  dbga ulanishda xatolik: ${error}`)})

app.post( '/' ,async (req , res )=>{

    const {ism , tovar} = req.body;
    
    try {
      const tblData = { ism , tovar }
      await Data.create(tblData)
      res.sendFile(path.join( __dirname , '/UI/index.html'));
      console.log("saqlandi" , tblData);

    } catch (error) {
        console.log("Jonatishda xatolik" , error);
        res.status(500).send("Serverda xatolik")
    }
})


app.post( '/add' ,async (req , res )=>{

  const {one , two} = req.body;
  
  try {
    const addData = { one , two }
    await Add.create(addData)
    res.sendFile(path.join( __dirname , '/UI/index.html'));
    console.log("saqlandi" , addData);

  } catch (error) {
      console.log("Jonatishda xatolik" , error);
      res.status(500).send("Serverda xatolik")
  }
})


 
app.get("/" ,  (req , res )=>{
    res.sendFile(__dirname + '/UI/index.html')
})

app.get('/data', async (req, res) => {
   
    const allTableData = await Data.find()

    res.json(allTableData);
  });



const port = 3003;
app.listen( port , ()=> console.log(`Server running  http://localhost:${port}`))