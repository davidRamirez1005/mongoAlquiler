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
export class Contract {
    constructor(data) {
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
__decorate([
    Expose({ name: 'ID' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID es obligatoria` }; } }),
    __metadata("design:type", Number)
], Contract.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'ID_Cliente' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Cliente es obligatoria` }; } }),
    __metadata("design:type", Number)
], Contract.prototype, "ID_Cliente", void 0);
__decorate([
    Expose({ name: 'ID_Automovil' }),
    IsDefined({ message: () => { throw { status: 422, message: `El ID_Automovil es obligatoria` }; } })
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    ,
    __metadata("design:type", Number)
], Contract.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: 'Fecha_Inicio' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Fecha_Inicio es obligatoria` }; } }),
    __metadata("design:type", String)
], Contract.prototype, "Fecha_Inicio", void 0);
__decorate([
    Expose({ name: 'Fecha_Fin' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Fecha_Fin es obligatoria` }; } }),
    __metadata("design:type", String)
], Contract.prototype, "Fecha_Fin", void 0);
__decorate([
    Expose({ name: 'Estado' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Estado es obligatoria` }; } }),
    __metadata("design:type", String)
], Contract.prototype, "Estado", void 0);
__decorate([
    Expose({ name: 'Tipo' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Tipo es obligatoria` }; } }),
    __metadata("design:type", String)
], Contract.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: 'Costo_Total' }),
    Transform(({ value }) => { if (value)
        return value;
    else
        0; }),
    __metadata("design:type", Number)
], Contract.prototype, "Costo_Total", void 0);
