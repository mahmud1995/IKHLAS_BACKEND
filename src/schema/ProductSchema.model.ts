import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  productType: {
    type: String,
    // enum: ProductType,
    // default: ProductType.SALE
  },
});
