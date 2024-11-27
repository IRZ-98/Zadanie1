import mongoose from "mongoose";
import JWTokenSchema from "../schemas/tokens.js";
import {Collections} from "../constants.js";
const JWToken = mongoose.model(Collections.JWT_WHITELIST, JWTokenSchema);
export default JWToken;