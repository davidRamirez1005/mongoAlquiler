import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
import { auto_disponible } from '../data/automovilDataAccess.js';
import { capacidad_max } from '../data/automovilDataAccess.js';


dotenv.config();
const appAutomovil = Router();

/**
 * ? Listar automoviles disponibles.
 * * http://127.0.0.3:5012/auto
 */
appAutomovil.get('/auto', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    try {
        const db = await con();
        const coleccion = db.collection('Contrato');
        const automovilDisponible = await coleccion.aggregate(auto_disponible).toArray();
        res.send(automovilDisponible);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de la base de datos.');
    }
});

/**
 * ? Mostrar todos los automóviles con una capacidad mayor a 5 personas
 * * http://127.0.0.3:5012/max
 */
appAutomovil.get('/max', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    try {
        const db = await con();
        const coleccion = db.collection('Automovil');
        const result = await coleccion.aggregate(capacidad_max).toArray();
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de la base de datos.');
    }
});


export default appAutomovil;