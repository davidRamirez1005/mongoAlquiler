import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class Contract {
    @Expose({ name: 'ID' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La ID es obligatoria`}}})
    ID: number;

    @Expose({ name: 'ID_Cliente' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Cliente es obligatoria`}}})
    ID_Cliente: number;

    @Expose({ name: 'ID_Automovil' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El ID_Automovil es obligatoria`}}})
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    ID_Automovil: number;

    @Expose({ name: 'Fecha_Inicio' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Fecha_Inicio es obligatoria`}}})
    Fecha_Inicio: string;

    @Expose({ name: 'Fecha_Fin' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Fecha_Fin es obligatoria`}}})
    Fecha_Fin: string;

    @Expose({ name: 'Estado' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Estado es obligatoria`}}})
    Estado: string;

    @Expose({ name: 'Tipo' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Tipo es obligatoria`}}})
    Tipo: string;

    @Expose({ name: 'Costo_Total' })
    @Transform(({ value }) => { if(value) return value ; else 0})
    Costo_Total: number;

    constructor(data:Partial<Contract>) {
        Object.assign(this, data);
        this.ID = 0;
        this.ID_Cliente = 0;
        this.ID_Automovil = 0;
        this.Fecha_Inicio = "faker";
        this.Fecha_Fin = "faker";
        this.Estado = "faker";
        this.Tipo = "faker";

    }
}