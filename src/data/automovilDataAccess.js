/**
 * ? Listar automoviles disponibles.
 * * http://127.0.0.3:5012/auto
 */
export const auto_disponible = [
    {
        $lookup: {
            from: 'Automovil',
            localField: 'ID_Automovil',
            foreignField: 'ID',
            as: 'automovil_relacionado'
        }
    },
    {
        $match: { Estado: { $eq: 'Disponible' } }
    },
    {
        $unwind: '$automovil_relacionado'
    },
    {
        $project: {
            Fecha_Fin: 0,
            Fecha_Inicio: 0,
            ID_Cliente : 0,
            Tipo : 0,
            Costo_Total : 0,
            _id: 0, 
            'automovil_relacionado._id': 0 
        }
    }
];
/**
 * ? Mostrar todos los automóviles con una capacidad mayor a 5 personas
 * * http://127.0.0.3:5012/max
 */
export const capacidad_max = [

    {
        $match: { Capacidad: { $gte: 5 } }
    },
    {
        $project: {
            _id: 0
        }
    }
];