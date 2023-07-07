import { Schema , model } from "mongoose";

const AddSchema = new Schema({
    one : {type : String , required : true , unique : true},
    two : {type : String , required : true },
})

const Add = model("Add" , AddSchema) ;
 
export default Add;

