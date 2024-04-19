import { Schema, model } from 'mongoose';
const dataSocketSchema = new Schema({
    nameSensor: String,
    value: Number
},{
    versionKey:false,
    timestamps:true
})

export default model('dataSocket', dataSocketSchema)