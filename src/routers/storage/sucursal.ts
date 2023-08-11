import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class Branch {
    @Expose({ name: 'ID' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID es obligatoria`}}})
    ID: number;

    @Expose({ name: 'Nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Nombre es obligatoria`}}})
    Nombre: string;

    @Expose({ name: 'Direccion' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El Direccion es obligatoria`}}})
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    Direccion: string;

    @Expose({ name: 'Telefono' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Telefono es obligatoria`}}})
    Telefono: string;

    @Expose({ name: 'ID_Sucursal' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    ID_Sucursal: number;

    @Expose({ name: 'ID_Automovil' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    ID_Automovil: number;

    @Expose({ name: 'Cantidad_Disponible' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    Cantidad_Disponible: number;

    constructor(data:Partial<Branch>) {
        Object.assign(this, data);
        this.ID = 0;
        this.Nombre = "Faker";
        this.Direccion = "faker";
        this.Telefono = "faker";
    }
}