import express from 'express';
import dotenv from 'dotenv';
import {servidor} from './config/connec.js';
import {limitget} from './helpers/configLimit.js'
import { appToken, appVerify } from "./jwt/configToken.js";
import appClientes from './routers/clientesRouter.js';
import appAutomovil from './routers/automovilesRouter.js';
import appEjemplo from './routers/usuarioEjemplo.js';
import appContrato from './routers/contratoRouter.js';
import appEmpleado from './routers/empleadoRouter.js';
import appSucursal from './routers/sucursalRouter.js';


dotenv.config();
const appExpress = express();


appExpress.use(express.json());

appExpress.use('/token',limitget(),appToken)
appExpress.use('/ej',limitget(), appVerify, appEjemplo)
appExpress.use('/cliente',limitget(),appVerify, appClientes)
appExpress.use('/automovil',limitget(), appVerify, appAutomovil)
appExpress.use('/contrato',limitget(), appVerify, appContrato)
appExpress.use('/empleado',limitget(), appVerify, appEmpleado)
appExpress.use('/sucursal',limitget(), appVerify, appSucursal)


appExpress.listen(servidor.port, () => {
    console.log(`Servidor escuchando en http://${servidor.addresses}:${servidor.port}`);
});

export default appExpress;