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
exports.CreateRiskDto = void 0;
const class_validator_1 = require("class-validator");
const data_insured_dto_1 = require("./data-insured.dto");
const class_transformer_1 = require("class-transformer");
const enums_1 = require("../../../../../core/domain/enums");
const risk_coverage_dto_1 = require("../risk-coverage/risk-coverage.dto");
class CreateRiskDto {
}
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => data_insured_dto_1.DataInsuredDto),
    __metadata("design:type", data_insured_dto_1.DataInsuredDto)
], CreateRiskDto.prototype, "dataInsured", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], CreateRiskDto.prototype, "contractorTraveling", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateRiskDto.prototype, "versionId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn([enums_1.DESTINATION.NACIONAL, enums_1.DESTINATION.INTERNACIONAL]),
    __metadata("design:type", String)
], CreateRiskDto.prototype, "trip", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_validator_1.IsNotEmpty(),
    class_transformer_1.Type(() => risk_coverage_dto_1.RiskCoverageDto),
    __metadata("design:type", Array)
], CreateRiskDto.prototype, "coverages", void 0);
exports.CreateRiskDto = CreateRiskDto;
//# sourceMappingURL=create-risk.dto.js.map