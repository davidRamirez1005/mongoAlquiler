var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class Car {
    constructor(data) {
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
__decorate([
    Expose({ name: 'ID' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID es obligatoria` }; } }),
    __metadata("design:type", Number)
], Car.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'Marca' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Marca es obligatoria` }; } }),
    __metadata("design:type", String)
], Car.prototype, "Marca", void 0);
__decorate([
    Expose({ name: 'Modelo' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Modelo es obligatoria` }; } })
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    ,
    __metadata("design:type", String)
], Car.prototype, "Modelo", void 0);
__decorate([
    Expose({ name: 'Anio' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Anio es obligatoria` }; } }),
    __metadata("design:type", Number)
], Car.prototype, "Anio", void 0);
__decorate([
    Expose({ name: 'Tipo' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Tipo es obligatoria` }; } }),
    __metadata("design:type", String)
], Car.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: 'Capacidad' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Capacidad es obligatoria` }; } }),
    __metadata("design:type", Number)
], Car.prototype, "Capacidad", void 0);
__decorate([
    Expose({ name: 'precio_Diario' }),
    IsDefined({ message: () => { throw { status: 422, message: `El precio_Diario es obligatorio` }; } })
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    ,
    __metadata("design:type", Number)
], Car.prototype, "Precio_Diario", void 0);
