import {ObjectId} from 'mongodb'
import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'

dotenv.config();

const appClientes = Router();


// appClientes.get('/:id', limitget(), async(req, res) =>{
//     if(!req.rateLimit) return;
//     let { id } = req.params
//     let db = await con();
//     let usuario = db.collection('usuario');
//     let result = await usuario.find({_id : new ObjectId(id)}).toArray();
//     res.send(result)
// })
appClientes.get('/', limitget(), async(req, res) =>{
    if (!req.rateLimit) return;

    try {
        const db = await con();
        const cliente = db.collection('Cliente');
        const result = await cliente.find().toArray(); // Usa toArray() para obtener los documentos como un arreglo
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de la base de datos.');
    }
    });

appClientes.post('/', limitget(), async(req, res) => {
    if(!req.rateLimit) return;

    let db = await con();
    let usuario = db.collection('Cliente');
    try {
        let result = await usuario.insertOne(req.body);
        console.log(result);
        res.send(':)')
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send(':(')
    };
    
})

export default appClientes;