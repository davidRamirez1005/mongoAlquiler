import 'reflect-metadata';
import {plainToClass, classToPlain} from 'class-transformer';
import { User } from "../routers/storage/usuario.js";
import { con } from "../../db/atlas.js";
import { Router } from "express";
const middlewareUsuarioVerify = Router();

let db = await con();
let usuario = db.collection("usuario");

middlewareUsuarioVerify.use( async(req,res,next) => {
    if(!req.rateLimit) return; 
    let {payload} = req.data;
    delete payload.iat;
    delete payload.exp;
    let Clone = JSON.stringify(classToPlain(plainToClass(User, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    if(!Verify) res.status(406).send({status: 406, message: "No Autorizado"});

    // try {
    //     let result = await usuario.insertOne(req.body);
    //     console.log(result);
    //     res.send(":)");
    // } catch (error) {
    //     console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
    //     res.send(":(");
    // }
    next();
});

export {
    middlewareUsuarioVerify
};