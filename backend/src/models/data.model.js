import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    price: {
        type: Number,
    },
    volumne: {
        type: {
            h24: Number,
            h6: Number,
            h1: Number,
            m5: Number,
        }
    }
},{timestamps: true})

export const Data = mongoose.model('Data', dataSchema);