import mongodb from 'mongodb'
/**
 * ? Listar todos los alquileres activos junto con los datos de los clientes relacionados.
 *  * http://127.0.0.3:5012/alquiler
 */
export const alquiler_activo = [
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

/**
 * ? Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado
 *  * http://127.0.0.3:5012/reservas
 */
export const reserva_pendiente = [
    { $match: { Estado: 'Pendiente', Tipo: 'Reserva' } },
    {
        $lookup: {
            from: 'Cliente',
            localField: 'ID_Cliente',
            foreignField: 'ID',
            as: 'clienteInfo'
        }
    },
    {
        $lookup: {
            from: 'Automovil',
            localField: 'ID_Automovil',
            foreignField: 'ID',
            as: 'automovilInfo'
        }
    },
    { $unwind: '$clienteInfo' },
    { $unwind: '$automovilInfo' },
    {
        $group: {
            _id: '$ID',
            Estado_Reserva: { $first: '$Estado' },
            Cliente: {
                $first: {
                    ID: '$clienteInfo.ID',
                    Nombre: '$clienteInfo.Nombre',
                    Apellido: '$clienteInfo.Apellido',
                    DNI: '$clienteInfo.DNI'
                }
            },
            Automovil: {
                $first: {
                    ID: '$automovilInfo.ID',
                    Marca: '$automovilInfo.Marca',
                    Modelo: '$automovilInfo.Modelo',
                    Anio: '$automovilInfo.Anio',
                    Tipo: '$automovilInfo.Tipo'
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            ID: '$_id',
            Estado_Reserva: 1,
            Cliente: 1,
            Automovil: 1
        }
    }
];

/**
 * ? Obtener el costo total de un alquiler específico.
 *  * http://127.0.0.3:5012/costo/3
 */
export const projection = {
    _id: 0,
    ID: 1,
    Costo_Total: 1
};

/**
 * ? Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'
 *  * http://127.0.0.3:5012/fecha
 */
export const fecha_inicio = [
    {
        $match: { Fecha_Inicio: new Date('2023-07-05') }
    },
    {
        $project : {
            _id : 0
            
        }
    }
];



