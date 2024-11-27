import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true},
    items: [{
        type: String,
        required: true}],
    total: {
        type: Number,
        required: true},
    amount: {
        type: Number,
        required: true,},
    orderStatus: {
        type: String,
        default: "processung"}
});
export default OrderSchema;