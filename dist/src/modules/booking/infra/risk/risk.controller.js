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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskController = void 0;
const common_1 = require("@nestjs/common");
const risk_service_1 = require("../../app/risk/risk.service");
const create_risk_dto_1 = require("../../domain/dto/risk/create-risk.dto");
let RiskController = class RiskController {
    constructor(riskService) {
        this.riskService = riskService;
    }
    create(createRiskDto) {
        try {
            return this.riskService.createRisk(createRiskDto);
        }
        catch (e) {
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_risk_dto_1.CreateRiskDto]),
    __metadata("design:returntype", void 0)
], RiskController.prototype, "create", null);
RiskController = __decorate([
    common_1.Controller('risk'),
    __metadata("design:paramtypes", [risk_service_1.RiskService])
], RiskController);
exports.RiskController = RiskController;
//# sourceMappingURL=risk.controller.js.map