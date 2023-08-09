import 'reflect-metadata';
import {plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import {Router} from 'express';
import { SignJWT, jwtVerify } from 'jose';
// import {Usuario, Cliente} from '../class/classCollections.js'
import {User} from "../routers/storage/usuario.js";
import {Client} from "../routers/storage/clientes.js";

dotenv.config();
const appToken = Router();
const appVerify = Router();


const createInstance = (className) => {
  const classMap = {
    'usuario': User,
    'cliente': Client
  };
  const Class = classMap[className];
  if (!Class) {
    throw new Error('Clase no encontrada');
  }

  return plainToClass(Class, {}, { ignoreDecorators: true });
};

appToken.use("/:collection", async (req, res) => {
  try {
    const collectionName = req.params.collection;
    const inst = createInstance(collectionName);
    // let inst =  plainToClass(eval(req.params.collection), {}, { ignoreDecorators: true })
    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
    const jwt = await jwtconstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("30m")
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    req.data = jwt;
    res.status(201).send({ status: 201, message: jwt });
  } catch (error) {
    console.error(error); 
    res.status(404).send({ status: 404, message: "Token solicitado no válido" });
  }
});
  
  appVerify.use("/", async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).send({ status: 400, token: "Token no enviado" });
    try {
      const encoder = new TextEncoder();
      const jwtData = await jwtVerify(
        authorization,
        encoder.encode(process.env.JWT_PRIVATE_KEY)
      );
      req.data = jwtData;
      next();
    } catch (error) {
      console.error(error);
      res.status(498).send({ status: 498, token: "Token caducado" });
    }
  });

export {
    appToken,
    appVerify
};