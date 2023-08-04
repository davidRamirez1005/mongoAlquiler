import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'

dotenv.config();
const appAutomovil = Router();

const consulta = [
    {
        $lookup: {
            from: 'Automovil',
            localField: 'ID_Automovil',
            foreignField: 'ID',
            as: 'relacion'
        }
    },
    {
        $match: { Estado: 'Disponible' }
    },
    {
        $unwind: '$relacion'
    }
];

appAutomovil.get('/', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    try {
        const db = await con();
        const coleccion = db.collection('Contrato');
        const automovilDisponible = await coleccion.aggregate(consulta).toArray();
        res.send(automovilDisponible);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de la base de datos.');
    }
});


export default appAutomovil;