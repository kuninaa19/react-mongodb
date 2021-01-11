import mongoose from 'mongoose';

const drinkSchema = new mongoose.Schema({
    name: String,
    price: Number
});

export default mongoose.model('Drink', drinkSchema);