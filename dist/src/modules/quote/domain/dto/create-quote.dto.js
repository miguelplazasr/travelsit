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
exports.CreateQuoteDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../../core/domain/enums");
class CreateQuoteDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn([enums_1.PACKAGES.CASUAL, enums_1.PACKAGES.HABITUAL]),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "package", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn([enums_1.DESTINATION.NACIONAL, enums_1.DESTINATION.INTERNACIONAL]),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "destination", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateQuoteDto.prototype, "includeBenefit", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateQuoteDto.prototype, "isSingleTrip", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], CreateQuoteDto.prototype, "departDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], CreateQuoteDto.prototype, "returnDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Array)
], CreateQuoteDto.prototype, "countries", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "coverType", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CreateQuoteDto.prototype, "persons", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "promoCode", void 0);
exports.CreateQuoteDto = CreateQuoteDto;
//# sourceMappingURL=create-quote.dto.js.map