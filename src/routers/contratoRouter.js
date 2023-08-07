import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {ObjectId} from 'mongodb'
import {con} from '../../db/atlas.js'
import { alquiler_activo, reserva_pendiente, projection } from '../data/contratoDataAcess.js';

dotenv.config();
const appContrato = Router();

/**
 * ? Listar todos los alquileres activos junto con los datos de los clientes relacionados.
 *  * http://127.0.0.3:5012/alquiler
 */
appContrato.get('/alquiler', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    try {
        const db = await con();
        const coleccion = db.collection('Contrato');
        const alquilerActivo = await coleccion.aggregate(alquiler_activo).toArray();
        res.send(alquilerActivo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de la base de datos.');
    }
});

/**
 * ? Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado
 *  * http://127.0.0.3:5012/reservas
 */
appContrato.get('/reservas', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    try {
        const db = await con();
        const coleccion = db.collection('Contrato');
        const reservaPendiente = await coleccion.aggregate(reserva_pendiente).toArray();
        res.send(reservaPendiente);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de la base de datos.');
    }
});

/**
 * ? Obtener los detalles del alquiler con el ID_Alquilerespecífico.
 *  * http://127.0.0.3:5012/detalles/2
 */
appContrato.get('/detalles/:ID', limitget(), async(req, res) =>{
    if(!req.rateLimit) return;

    const ID = req.params.ID;
    let db = await con();
    let coleccion = db.collection('Contrato');
    const filter = {
        $and: [
            isNaN(parseInt(ID)) ? { _id: new ObjectId(ID) } : { ID: parseInt(ID) },
            { Tipo: 'Alquiler' }
        ]
    };
    let result = await coleccion.find(filter).toArray();
    res.send(result)
})

/**
 * ? Obtener el costo total de un alquiler específico.
 *  * http://127.0.0.3:5012/costo/3
 */
appContrato.get('/costo/:ID', limitget(), async(req, res) =>{
    if(!req.rateLimit) return;

    const ID = req.params.ID;
    let db = await con();
    let coleccion = db.collection('Contrato');
    const filter = {
        $and: [
            isNaN(parseInt(ID)) ? { _id: new ObjectId(ID) } : { ID: parseInt(ID) },
            { Tipo: 'Alquiler' }
        ]
    };
    let result = await coleccion.find(filter).project(projection).toArray();
    res.send(result)
})



export default appContrato;