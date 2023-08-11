var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class Branch {
    constructor(data) {
        Object.assign(this, data);
        this.ID = 0;
        this.Nombre = "Faker";
        this.Direccion = "faker";
        this.Telefono = "faker";
    }
}
__decorate([
    Expose({ name: 'ID' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID es obligatoria` }; } }),
    __metadata("design:type", Number)
], Branch.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'Nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Nombre es obligatoria` }; } }),
    __metadata("design:type", String)
], Branch.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: 'Direccion' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Direccion es obligatoria` }; } })
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    ,
    __metadata("design:type", String)
], Branch.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: 'Telefono' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Telefono es obligatoria` }; } }),
    __metadata("design:type", String)
], Branch.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: 'ID_Sucursal' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], Branch.prototype, "ID_Sucursal", void 0);
__decorate([
    Expose({ name: 'ID_Automovil' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], Branch.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: 'Cantidad_Disponible' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], Branch.prototype, "Cantidad_Disponible", void 0);
