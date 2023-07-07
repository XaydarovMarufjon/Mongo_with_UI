import express from 'express';
import  mongoose from 'mongoose'
import * as dotenv from 'dotenv';
import path from 'path'
import Data from './models/Table.js';
import Add from './models/Add.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import xlsx from 'xlsx';

const upload = multer({ dest: 'uploads/' });


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



app.post('/upload', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  
  console.log(filePath);
  // upload qilingan fileni oqish
  const workbook = xlsx.readFile(filePath);
  
  // 0 chi sheetdan malumotni tanlab olish
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(worksheet);
  console.log(data);
  // Send a response back to the client
  res.send('File uploaded and processed successfully');
});



const port = 3003;
app.listen( port , ()=> console.log(`Server running  http://localhost:${port}`))