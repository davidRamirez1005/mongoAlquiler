/**
 * ? Mostrar la cantidad total de automóviles disponibles en cada sucursal.
 *  * http://127.0.0.3:5012/sucursal/totalScucursal
 */
export const total_sucursal = [
    {
        $project: {
            _id: 0,
            Telefono : 0,
            ID_Sucursal : 0,
            ID_Automovil :0,
        }
    }
];