import  { Schema, model } from 'mongoose'

const TableSchema = new Schema({
    ism : { type : String, required : true},
    tovar : { type : String, required : true},
})

const Data = model("Data" , TableSchema) 

// module.exports =  Data   /// common js

export default Data; /// module js 

