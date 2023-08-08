/**
 * ? Listar las reservas pendientes realizadas por un cliente específico
 *  * http://127.0.0.3:5012/cliente/esp/12345678
 */
export const reservas = [
    {
        $match : { Estado : 'Pendiente'}
    }
];
/**
 * ? Obtener los datos de los clientes que realizaron al menos un alquiler.
 *  * http://127.0.0.3:5012/cliente/datos
 */
export const datos_cliente = [
    {
        $lookup: {
            from: 'Cliente',
            localField: 'ID_Cliente',
            foreignField: 'ID',
            as: 'cliente_alquiler'
        }
    },
    {
        $match: { Tipo: { $eq: 'Alquiler' } }
    },
    {
        $unwind: '$cliente_alquiler'
    },
    {
        $project: {
            Fecha_Fin: 0,
            Fecha_Inicio: 0,
            ID_Automovil : 0,
            Estado : 0,
            Costo_Total : 0,
            _id: 0, 
            'cliente_alquiler._id': 0 
        }
    }
];
/**
 * ?  Obtener los datos del cliente que realizó la reserva con ID_Reserva específico
 *  * http://127.0.0.3:5012/cliente/reservaEsp/8
 */
export const cliente_especifico = [
    {
        $lookup: {
            from: 'Cliente',
            localField: 'ID_Cliente',
            foreignField: 'ID',
            as: 'cliente_especifico'
        }
    },
    {
        $match: { Tipo: { $eq: 'Reserva' } }
    },
    {
        $unwind: '$cliente_especifico'
    },
    {
        $project: {
            Fecha_Fin: 0,
            Fecha_Inicio: 0,
            ID_Automovil : 0,
            Estado : 0,
            Costo_Total : 0,
            _id: 0, 
            'cliente_especifico._id': 0 
        }
    }
];