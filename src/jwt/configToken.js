import 'reflect-metadata';
import {plainToClass } from 'class-transformer';
import dotenv from 'dotenv';
import {Router} from 'express';
import { jwtVerify } from 'jose';
import createJWT from './generateJwt..js';
import {User} from "../routers/storage/usuario.js";
import {Client} from "../routers/storage/clientes.js";
import {Employee} from "../routers/storage/empleado.js";


dotenv.config();
const appToken = Router();
const appVerify = Router();

const createInstance = (className) => {
  const classMap = {
    'usuario': User,
    'cliente': Client,
    'empleado': Employee
  };
  const Class = classMap[className];
  return (Class) ? plainToClass(Class, {}, { ignoreDecorators: true }) : undefined;
};
appToken.use("/:collection", async (req, res) => {
  try {
    const collectionName = req.params.collection;
    const inst = createInstance(collectionName);
    if (!inst)
    return res.status(404).send({ status: 404, message: "colección no encontrada" })

    const jwt = await createJWT(inst);
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