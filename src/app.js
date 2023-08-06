import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connec.js';
import {limitget} from './helpers/configLimit.js'
import appClientes from './routers/clientesRouter.js';
import appAutomovil from './routers/automovilesRouter.js';
import appEjemplo from './routers/usuarioEjemplo.js';
import appAlquilerActivo from './routers/alquilerActivos.js';

dotenv.config();
const appExpress = express();


appExpress.use(express.json());
appExpress.use('/ej',limitget(), appEjemplo)
appExpress.use('/clientes',limitget(), appClientes)
appExpress.use('/auto',limitget(), appAutomovil)
appExpress.use('/alquiler',limitget(), appAlquilerActivo)


appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;