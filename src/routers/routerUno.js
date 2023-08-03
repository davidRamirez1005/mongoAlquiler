import {ObjectId} from 'mongodb'
import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/config.js'
import {con} from '../../db/atlas.js'

dotenv.config();

const appPrueba = Router();


appPrueba.get('/:id', limitget(), async(req, res) =>{
    if(!req.rateLimit) return;
    let { id } = req.params
    let db = await con();
    let usuario = db.collection('usuario');
    let result = await usuario.find({_id : new ObjectId(id)}).toArray();
    res.send(result)

    

})

export default appPrueba;