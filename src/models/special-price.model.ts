import mongoose from "mongoose";

const SpecialPriceSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  user_id: {
    type: String,
  },
  special_price: {
    type: Number,
  },
});

export default mongoose.model("special_prices", SpecialPriceSchema);
