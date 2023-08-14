import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class Client {
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

    @Expose({ name: 'email' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El email es obligatorio`}}})
    @Transform(({ value }) => { if(value) return value ; else "Faker"})
    Email: string;

    constructor(data:Partial<Client>) {
      Object.assign(this, data);
      this.ID = 0;
      this.Nombre = "Faker";
      this.Apellido = "faker";
      this.DNI = "faker";
      this.Direccion = "faker";
      this.Telefono = "faker";
    }
}