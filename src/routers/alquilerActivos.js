import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'
/**
 * ? Listar todos los alquileres activos junto con los datos de los clientes relacionados.
 */
dotenv.config();
const appAlquilerActivo = Router();
/**
 * ? Listar automoviles disponibles.
 */
const consulta = [
    // Filtrar solo los contratos activos
    { $match: { Estado: 'Activo' } },
    // Unir con la colección "Cliente" usando ID_Cliente como campo de unión
    {
        $lookup: {
            from: 'Cliente',
            localField: 'ID_Cliente',
            foreignField: 'ID',
            as: 'clienteInfo'
        }
    },
    { $unwind: '$clienteInfo' },
    // Proyectar solo los campos deseados
    {
        $project: {
            _id: 0,
            Fecha_Inicio : 0,
            Fecha_Fin : 0,
            ID_Cliente :0,
            ID_Automovil : 0,
            'clienteInfo._id' : 0
        }
    },
    {
        $group: {
            _id: '$ID',
            contratos: {
                $push: '$$ROOT'
            }
        }
    }
];

appAlquilerActivo.get('/', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    try {
        const db = await con();
        const coleccion = db.collection('Contrato');
        const alquilerActivo = await coleccion.aggregate(consulta).toArray();
        res.send(alquilerActivo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener los datos de la base de datos.');
    }
});


export default appAlquilerActivo;