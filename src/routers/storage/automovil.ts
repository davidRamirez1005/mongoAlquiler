import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class Car {
    @Expose({ name: 'ID' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID es obligatoria`}}})
    ID: number;

    @Expose({ name: 'Marca' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Marca es obligatoria`}}})
    Marca: string;

    @Expose({ name: 'Modelo' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Modelo es obligatoria`}}})
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    Modelo: string;

    @Expose({ name: 'Anio' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Anio es obligatoria`}}})
    Anio: number;

    @Expose({ name: 'Tipo' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Tipo es obligatoria`}}})
    Tipo: string;

    @Expose({ name: 'Capacidad' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Capacidad es obligatoria`}}})
    Capacidad: number;

    @Expose({ name: 'precio_Diario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El precio_Diario es obligatorio`}}})
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    Precio_Diario: number;

    constructor(data:Partial<Car>) {
        Object.assign(this, data);
        this.ID = 0;
        this.Marca = "Faker";
        this.Modelo = "faker";
        this.Anio = 0;
        this.Tipo = "faker";
        this.Capacidad = 0;
        this.Precio_Diario = 0;
    }
}