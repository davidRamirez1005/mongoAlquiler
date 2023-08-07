/**
 * ? Listar los empleados con el cargo de "Vendedor"
 *  * http://127.0.0.3:5012/vendedor
 */
export const cargo_vendedor = [
    {
        $match:{cargo : 'vendedor'}
    }
]