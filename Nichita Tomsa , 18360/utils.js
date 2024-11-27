import jwt from "jsonwebtoken"

import JWToken from "./models/tokens.js";
import {JWT_SECRET} from "./constants.js"

const generateToken = async (user) => {
    const token = jwt.sign({
        _id: user._id,
        email: user.email
    }, JWT_SECRET, {expiresIn: "3d"});

    const tokenEntry = new JWToken({token, userEmail: user.email});
    await tokenEntry.save();

    return token;
};

export default generateToken;