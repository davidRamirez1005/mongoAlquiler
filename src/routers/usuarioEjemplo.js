// import {ObjectId} from 'mongodb'
import {Router} from 'express';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
import { middlewareUsuarioVerify, appDTOData } from '../middleware/usuario.js';


const appEjemplo = Router();

let db = await con();
let usuario = db.collection("usuario");

appEjemplo.get('/', limitget(),middlewareUsuarioVerify, async(req, res) =>{
    if(!req.rateLimit) return;

    // let db = await con();
    // let usuario = db.collection('usuario');
    let result = await usuario.find().toArray();
    res.send(result)
})

appEjemplo.post("/", limitget(), middlewareUsuarioVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await usuario.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
        // resul = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        // res.status(resul.status).send(resul);
    }
});
export default appEjemplo;