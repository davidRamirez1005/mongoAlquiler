import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
import { cargo_vendedor } from '../data/empleadoDataAcess.js';

dotenv.config();
const appEmpleado = Router();


/**
 * ? Listar los empleados con el cargo de "Vendedor"
 *  * http://127.0.0.3:5012/vendedor
 */
appEmpleado.get('/vendedor', limitget(), async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('Empleado');
    let result = await coleccion.aggregate(cargo_vendedor).toArray();
    res.send(result)
})





export default appEmpleado;