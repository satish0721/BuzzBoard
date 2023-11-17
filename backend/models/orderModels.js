import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    order_id: { type: String },
    item_name: { type: String },
    cost: { type: String },
    order_date: { type: String },
    delivery_date: { type: String },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Order", orderSchema);

export default Product;
