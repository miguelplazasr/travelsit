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
exports.CreateRiskCoverageDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const risk_coverage_dto_1 = require("./risk-coverage.dto");
class CreateRiskCoverageDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateRiskCoverageDto.prototype, "riskId", void 0);
__decorate([
    class_validator_1.ValidateNested({ each: true }),
    class_transformer_1.Type(() => risk_coverage_dto_1.RiskCoverageDto),
    __metadata("design:type", Array)
], CreateRiskCoverageDto.prototype, "risks", void 0);
exports.CreateRiskCoverageDto = CreateRiskCoverageDto;
//# sourceMappingURL=create-risk-coverage.dto.js.map