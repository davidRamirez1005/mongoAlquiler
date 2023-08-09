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
export class Client {
    constructor(data) {
        Object.assign(this, data);
        this.ID = 0;
        this.Nombre = "Faker";
        this.Apellido = "faker";
        this.Apellido = "faker";
        this.DNI = "faker";
        this.Direccion = "faker";
        this.Telefono = "faker";
        this.Email = "faker";
    }
}
__decorate([
    Expose({ name: 'ID' }),
    IsDefined({ message: () => { throw { status: 422, message: `La ID es obligatoria` }; } }),
    __metadata("design:type", Number)
], Client.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'Nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Nombre es obligatoria` }; } }),
    __metadata("design:type", String)
], Client.prototype, "Nombre", void 0);
__decorate([
    Expose({ name: 'Apellido' }),
    IsDefined({ message: () => { throw { status: 422, message: `El Apellido es obligatoria` }; } })
    // @Transform(({ value }) => { if(value) return value ; else "Faker"})
    ,
    __metadata("design:type", String)
], Client.prototype, "Apellido", void 0);
__decorate([
    Expose({ name: 'DNI' }),
    IsDefined({ message: () => { throw { status: 422, message: `La DNI es obligatoria` }; } }),
    __metadata("design:type", String)
], Client.prototype, "DNI", void 0);
__decorate([
    Expose({ name: 'Direccion' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Direccion es obligatoria` }; } }),
    __metadata("design:type", String)
], Client.prototype, "Direccion", void 0);
__decorate([
    Expose({ name: 'Telefono' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Telefono es obligatoria` }; } }),
    __metadata("design:type", String)
], Client.prototype, "Telefono", void 0);
__decorate([
    Expose({ name: 'Email' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Email es obligatoria` }; } }),
    __metadata("design:type", String)
], Client.prototype, "Email", void 0);
