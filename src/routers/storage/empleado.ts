import { Expose } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class Employee {
    @Expose({ name: 'ID' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID es obligatoria`}}})
    ID: number;

    @Expose({ name: 'Nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Nombre es obligatoria`}}})
    Nombre: string;

    @Expose({ name: 'Apellido' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Apellido es obligatoria`}}})
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    Apellido: string;

    @Expose({ name: 'DNI' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La DNI es obligatoria`}}})
    DNI: string;

    @Expose({ name: 'Direccion' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Direccion es obligatoria`}}})
    Direccion: string;

    @Expose({ name: 'Telefono' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Telefono es obligatoria`}}})
    Telefono: string;

    @Expose({ name: 'cargo' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `EL cargo es obligatorio`}}})
    cargo: string;

    constructor(data:Partial<Employee>) {
        Object.assign(this, data);
        this.ID = 0;
        this.Nombre = "Faker";
        this.Apellido = "faker";
        this.Apellido = "faker";
        this.DNI = "faker";
        this.Direccion = "faker";
        this.Telefono = "faker";
        this.cargo = "faker";
    }
}