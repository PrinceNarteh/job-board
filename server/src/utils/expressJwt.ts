import {expressjwt} from "express-jwt";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("Please provide JWT_SECRET in the .env file");
}

const secret = Buffer.from(JWT_SECRET, "base64");

export const expressJwt = expressjwt({
  secret,
  algorithms: ["HS256"],
  credentialsRequired: false,
});
