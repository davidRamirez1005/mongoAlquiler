import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connec.js';
import {limitget} from './helpers/configLimit.js'
import appClientes from './routers/clientesRouter.js';
import appAutomovil from './routers/automovilesRouter.js';
import appEjemplo from './routers/usuarioEjemplo.js';
import appContrato from './routers/contratoRouter.js';
import appEmpleado from './routers/empleadoRouter.js';
import appSucursal from './routers/sucursalRouter.js';


dotenv.config();
const appExpress = express();


appExpress.use(express.json());

appExpress.use('/token',limitget(), appEjemplo)
appExpress.use('/ej',limitget(), appEjemplo)
appExpress.use('/cliente',limitget(), appClientes)
appExpress.use('/automovil',limitget(), appAutomovil)
appExpress.use('/contrato',limitget(), appContrato)
appExpress.use('/empleado',limitget(), appEmpleado)
appExpress.use('/sucursal',limitget(), appSucursal)


appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;