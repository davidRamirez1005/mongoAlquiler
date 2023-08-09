import { Expose, Transform } from 'class-transformer';
import { IsDefined} from 'class-validator';
export class User {
    @Expose({ name: 'cedula_usuario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La cedula_usuario es obligatoria`}}})
    cc: number;

    @Expose({ name: 'nombre_usuario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El nombre_usuario es obligatoria`}}})
    nombre: string;

    @Expose({ name: 'apellido_usuario' })
    @Transform(({ value }) => { if(value) return value ; else "Faker"})
    apellido: string;

    @Expose({ name: 'edad_usuario' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La edad_usuario es obligatoria`}}})
    edad: number;

    constructor(data:Partial<User>) {
      Object.assign(this, data);
      this.cc = 0;
      this.nombre = "Faker";
      this.edad = 0;
    }
}