import {ObjectId} from 'mongodb'
import {Router} from 'express';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'


const appEjemplo = Router();


appEjemplo.get('/:id', limitget(), async(req, res) =>{
    if(!req.rateLimit) return;

    let { id } = req.params
    let db = await con();
    let usuario = db.collection('usuario');
    let result = await usuario.find({_id : new ObjectId(id)}).toArray();
    res.send(result)
})

appEjemplo.post('/', limitget(), async(req, res) => {
    if(!req.rateLimit) return;

    let db = await con();
    let usuario = db.collection('usuario');
    try {
        let result = await usuario.insertOne(req.body);
        console.log(result);
        res.send(':)')
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send(':(')
    };
    
})

export default appEjemplo;