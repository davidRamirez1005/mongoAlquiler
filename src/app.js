import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connec.js';
import {limitget} from './helpers/configLimit.js'
import appClientes from './routers/clientesRouter.js';

dotenv.config();
const appExpress = express();


appExpress.use(express.json());
appExpress.use('/clientes',limitget(), appClientes)


appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;