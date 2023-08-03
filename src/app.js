import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connec.js';
import {limitget} from './helpers/config.js'
import appPrueba from './routers/routerUno.js';

dotenv.config();
const appExpress = express();


appExpress.use(express.json());
appExpress.use('/prueba',limitget(), appPrueba)


appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;