import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    currencyCode: { type: String, required: true },
    numberOfSale: { type: Number, required: true },
    rating: { type: Number, required: true },
    isFreeShipping: { type: Boolean, required: true },
    shopName: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
