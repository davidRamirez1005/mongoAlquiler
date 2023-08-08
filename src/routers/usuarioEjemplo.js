import {ObjectId} from 'mongodb'
import {Router} from 'express';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
import middlewareUsuario from '../middleware/usuario.js';


const appEjemplo = Router();


appEjemplo.get('/:id', limitget(), middlewareUsuario, async(req, res) =>{
    if(!req.rateLimit) return;

    let { id } = req.params
    let db = await con();
    let usuario = db.collection('usuario');
    let result = await usuario.find({_id : new ObjectId(id)}).toArray();
    res.send(result)
})

appEjemplo.post('/', limitget(), middlewareUsuario, async(req, res) => {
    
    res.send(':)')
})

export default appEjemplo;