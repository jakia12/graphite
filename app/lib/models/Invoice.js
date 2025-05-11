import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Invoice ||
  mongoose.model("Invoice", InvoiceSchema);
