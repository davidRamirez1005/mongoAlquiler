import 'reflect-metadata';
import {classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { SignJWT } from 'jose';

dotenv.config();

const createJWT = async (inst) => {
    const encoder = new TextEncoder();
    const jwtConstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
  
    return await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h")
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
};

export default createJWT;