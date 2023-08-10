import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
import { cargo_vendedor, gerente_cargo, Asistente_cargo } from '../data/empleadoDataAcess.js';
import { middlewareEmployeeVerify } from '../middleware/empleado.js'

dotenv.config();
const appEmpleado = Router();


/**
 * ? Listar los empleados con el cargo de "Vendedor"
 *  * http://127.0.0.3:5012/empleado/vendedor
 */
appEmpleado.get('/vendedor', limitget(), middlewareEmployeeVerify, async(req, res) =>{
    if(!req.rateLimit) return;

    let db = await con();
    let coleccion = db.collection('Empleado');
    let result = await coleccion.aggregate(cargo_vendedor).toArray();
    res.send(result)
})
/**
 * ? Mostrar los empleados con cargo de "Gerente" o "Asistente"
 *  * http://127.0.0.3:5012/empleado/gerente
 */
appEmpleado.get('/:cargo', limitget(), middlewareEmployeeVerify, async (req, res) => {
    if (!req.rateLimit) return;

    const cargo = req.params.cargo;
    let db = await con();
    let coleccion = db.collection('Empleado');
    let consulta;

    if (cargo === 'gerente') {
        consulta = gerente_cargo;
    } else if (cargo === 'asistente') {
        consulta = Asistente_cargo;
    } else {
        res.status(400).send('Cargo no válido');
        return;
    }

    let result = await coleccion.aggregate(consulta).toArray();
    res.send(result);
});




export default appEmpleado;