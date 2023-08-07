import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
import { total_sucursal } from '../data/sucursalDataAccess.js';

dotenv.config();
const appSucursal = Router();


/**
 * ? Mostrar la cantidad total de automóviles disponibles en cada sucursal.
 *  * http://127.0.0.3:5012/sucursal/totalScucursal
 */
appSucursal.get('/totalScucursal', limitget(), async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('Sucursal');
    let result = await coleccion.aggregate(total_sucursal).toArray();
    res.send(result)
})





export default appSucursal;