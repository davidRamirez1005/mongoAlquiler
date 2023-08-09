import {ObjectId} from 'mongodb'
import {Router} from 'express';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
import { middlewareUsuarioVerify } from '../middleware/usuario.js';


const appEjemplo = Router();


appEjemplo.get('/', limitget(), async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let usuario = db.collection('usuario');
    let result = await usuario.find().toArray();
    res.send(result)
})

appEjemplo.post('/', limitget(), middlewareUsuarioVerify, async(req, res) => {
    
    res.send(':)')
})

export default appEjemplo;