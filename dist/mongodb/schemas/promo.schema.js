"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoSchemaName = exports.PromoSchema = exports.Promo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const promo_interface_1 = require("../interfaces/promo.interface");
const product_schema_1 = require("./product.schema");
const pharmacy_schema_1 = require("./pharmacy.schema");
const service_schema_1 = require("./service.schema");
let Promo = class Promo {
};
exports.Promo = Promo;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Promo.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Promo.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true }),
    __metadata("design:type", Number)
], Promo.prototype, "discount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Promo.prototype, "oldPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Promo.prototype, "newPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Promo.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Promo.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: promo_interface_1.PromoType, required: true }),
    __metadata("design:type", String)
], Promo.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: pharmacy_schema_1.PharmacySchemaName, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Promo.prototype, "pharmacyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: product_schema_1.ProductSchemaName, required: false }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Promo.prototype, "productId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: service_schema_1.ServiceSchemaName, required: false }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Promo.prototype, "serviceId", void 0);
exports.Promo = Promo = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false, timestamps: true })
], Promo);
exports.PromoSchema = mongoose_1.SchemaFactory.createForClass(Promo);
exports.PromoSchemaName = 'promos';
//# sourceMappingURL=promo.schema.js.map