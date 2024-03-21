import mongoose, { Schema } from 'mongoose';

const volumeSchema = new mongoose.Schema({
    h24: String,
    h6: String,
    h1: String,
    m5: String,
})

const dataSchema = new Schema({
    price:{type: String, required: true},
    volume: {type: volumeSchema, required: true}
},{timestamps: true})

// dataSchema.methods.genrateResponse = function(){
//     return {
//         id: this._id,
//         price: this.price,
//         volume: this.volume,
//         createdAt: this.createdAt,
//         updatedAt: this.updatedAt
//     }
// }

export const Data = mongoose.model('Data', dataSchema);