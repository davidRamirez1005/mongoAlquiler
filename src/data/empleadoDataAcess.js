/**
 * ? Listar los empleados con el cargo de "Vendedor"
 *  * http://127.0.0.3:5012/empleado/vendedor
 */
export const cargo_vendedor = [
    {
        $match:{cargo : 'vendedor'}
    },
    {
        $project : {
            _id : 0
            
        }
    }
];
/**
 * ? Listar los empleados con el cargo de "Gerente"
 *  * http://127.0.0.3:5012/empleado/asistente
 */
export const gerente_cargo = [
    {
        $match:{cargo : 'Gerente'}
    },
    {
        $project : {
            _id : 0
            
        }
    }
];
export const Asistente_cargo = [
    {
        $match:{cargo : 'Asistente'}
    },
    {
        $project : {
            _id : 0
            
        }
    }
];