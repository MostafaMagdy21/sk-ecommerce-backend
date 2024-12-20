const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    categoryTitle: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: false },
    imageUrl: { type: String, required: true },
    stock: { type: Number, default: 0 },
    startingPrice: { type: String, required: false },
    createdBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
