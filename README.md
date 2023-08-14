# ALQUILER DE VEHICULOS



### Solicitar token: 

GET -- `/token`

seguido de la colección a la que desea generar el token:

`/token/cliente`

`/token/empleado`

`/token/auto`

`/token/sucursal`

`/token/contrato`

#### => Gestión de clientes:

Usar el endpoint `/cliente`

```
appExpress.use('/cliente',limitget(),appVerify, appClientes)
```



1. GET -- *Mostrar todos los clientes registrados en la base de datos* => `/clientes`: *http://127.0.0.3:5012/cliente/clientes*
2. GET -- l*Listar los clientes con el DNI específico*: `/DNI/12345678` => ej:*http://127.0.0.3:5012/cliente/DNI/12345678*
3. GET -- *Listar las reservas pendientes realizadas por un cliente específicoz* : `/res/12345678` => ej: *http://127.0.0.3:5012/cliente/res/12345678*
4. GET -- *Obtener los datos de los clientes que realizaron al menos un alquiler.*: `/datos` => ej: *http://127.0.0.3:5012/cliente/datos*
5. GET -- **Obtener los datos del cliente que realizó la reserva con ID_Reserva específico*.*: `/reservaEsp/8` => ej: *http://127.0.0.3:5012/cliente/reservaEsp/8*
6. POST -- agregar un nuevo cliente:

```
{
    "ID": 10,
    "Nombre": "Juan",
    "Apellido": "Perez",
    "DNI": "111111111",
    "Direccion": "calle 1 A",
    "Telefono": "123654"
  }
```

#### => Gestión de *automovil*:

Usar el endpoint `/automovil`

```
appExpress.use('/automovil',limitget(),appVerify, appClientes)
```



1. GET -- *Listar automoviles disponibles.* => `/auto`: *http://127.0.0.3:5012/automovil/auto*
2. GET -- *Mostrar todos los automóviles con una capacidad mayor a 5 personas*: `/max` => ej:*http://127.0.0.3:5012/automovil/max*
3. GET -- *Listar todos los automóviles ordenados por marca y modelo*: `/ordenados` => ej: *http://127.0.0.3:5012/automovil/ordenados*
4. GET -- *Obtener los datos de los clientes que realizaron al menos un alquiler.*: `/datos` => ej: *http://127.0.0.3:5012/cliente/datos*
5. GET -- *Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles* *.*: `/capDis` => ej: *http://127.0.0.3:5012/automovil/capDis*

 

#### => Gestión de **contrato**:

Usar el endpoint `/contrato`

```
appExpress.use('/contrato',limitget(),appVerify, appClientes)
```



1. GET -- *Listar todos los alquileres activos junto con los datos de los clientes relacionados.* => `/alquiler`: *http://127.0.0.3:5012/contrato/alquiler*
2. GET -- *Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado*: `/max` => ej:*http://127.0.0.3:5012/automovil/max*
3. GET -- *Listar todos los automóviles ordenados por marca y modelo*: `/reservas` => ej: *http://127.0.0.3:5012/contrato/reservas*
4. GET -- *Obtener los detalles del alquiler con el ID_Alquilerespecífico.*: `/detalles/2` => ej:*http://127.0.0.3:5012/contrato/detalles/2*
5. GET -- *Obtener el costo total de un alquiler específico.*: `/costo/3` => ej: *http://127.0.0.3:5012/contrato/costo/3*
6. GET -- *Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'*: `/costo/3` => ej: *http://127.0.0.3:5012/contrato/costo/3*
7. GET -- *Obtener el costo total de un alquiler específico.*: `/fecha` => ej:*http://127.0.0.3:5012/contrato/fecha*
8. GET -- *Obtener la cantidad total de alquileres registrados en la base de datos*: `/totales` => ej: *http://127.0.0.3:5012/contrato/totales*
9. GET -- *Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.*: `/inicioFin` => ej: *http://127.0.0.3:5012/contrato/inicioFin* 



#### => Gestión de ***empleado***:

Usar el endpoint `/empleado`

```
appExpress.use('/empleado',limitget(),appVerify, appClientes)
```



1. GET -- *Listar los empleados con el cargo de "Vendedor"* => `/vendedor`: *http://127.0.0.3:5012/empleado/vendedor*

2. GET -- *Mostrar los empleados con cargo de "Gerente" o "Asistente"*: `/gerente`o `/asistente` => ej:*http://127.0.0.3:5012/empleado/gerente*

   

#### => Gestión de ***sucursal***:

Usar el endpoint `/sucursal`

```
appExpress.use('/sucursal',limitget(),appVerify, appClientes)
```



1. GET -- *Mostrar la cantidad total de automóviles disponibles en cada sucursal.*=> `/totalScucursal`: *http://127.0.0.3:5012/sucursal/totalScucursal*

   