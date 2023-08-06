import {ObjectId} from 'mongodb'
import {Router} from 'express';
import dotenv from 'dotenv';
import {limitget} from '../helpers/configLimit.js'
import {con} from '../../db/atlas.js'

dotenv.config();

const appClientes = Router();

/**
 * ! GET
 */
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

/**
* ! POST
*/
appClientes.post('/', limitget(), async(req, res) => {
    if(!req.rateLimit) return;

    let db = await con();
    let usuario = db.collection('Cliente');
    try {
        let result = await usuario.insertOne(req.body);
        console.log(result);
        res.status(201).send({status : 201, message : 'documento creado con exito'})
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.status(406).send('no se ha podido crear el documento')
    };
    
})

/**
* ! PUT
*/
appClientes.put('/:ID', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    const clienteId = req.params.ID;
    const newData = req.body;

    // Comprobar si el id enviado es válido (ObjectId de MongoDB) o si coincide con el campo ID
    if (!ObjectId.isValid(clienteId) && isNaN(parseInt(clienteId))) {
        return res.status(400).send('ID de cliente inválido');
    }

    let db = await con();
    let usuario = db.collection('Cliente');
    try {
        // Crear el filtro para la consulta (puede ser _id o ID)
        const filter = isNaN(parseInt(clienteId))
            ? { _id: new ObjectId(clienteId) }
            : { ID: parseInt(clienteId) };

        // Actualizar el documento por su _id o ID
        const result = await usuario.updateOne(filter, { $set: newData });
        // Comprobar si se encontró y actualizó el cliente correctamente
        if (result.matchedCount > 0 && result.modifiedCount > 0) {
            res.status(202).send({status : 202, message : 'cliente actualizado con exito'})
        } else {
            res.status(404).send('Cliente no encontrado');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar el cliente');
    }
});

/**
/**
 * ! DELETE
 */
appClientes.delete('/:ID', limitget(), async (req, res) => {
    if (!req.rateLimit) return;

    const ID = req.params.ID;

    try {
        const db = await con();
        const cliente = db.collection('Cliente');

        const filter = isNaN(parseInt(ID))
        ? { _id: new ObjectId(ID) }
        : { ID: parseInt(ID) };

        const result = await cliente.deleteOne(filter);
        (result.deletedCount === 1)
            ? res.send('Documento eliminado con éxito')
            : res.send('Documento no eliminado');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al eliminar los datos de la base de datos.');
    }
});

export default appClientes;