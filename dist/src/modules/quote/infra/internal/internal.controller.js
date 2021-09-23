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
exports.InternalController = void 0;
const common_1 = require("@nestjs/common");
const internal_service_1 = require("../../app/internal/internal.service");
const create_quote_dto_1 = require("../../domain/dto/create-quote.dto");
const plan_response_entity_1 = require("../../domain/entities/plan-response.entity");
let InternalController = class InternalController {
    constructor(internalService) {
        this.internalService = internalService;
    }
    create(createQuoteDto) {
        return this.internalService.createQuote(createQuoteDto).then((response) => {
            return response.plans.map((crsRes) => {
                const plan = new plan_response_entity_1.PlanResponseEntity();
                plan.planId = crsRes.planId;
                plan.planCost = crsRes.planCost;
                plan.versionId = Number(response.versionId);
                switch (crsRes.planId) {
                    case 7:
                        plan.planName = 'Roadtrip';
                        plan.coverageAmount = 3500;
                        break;
                    case 8:
                        plan.planName = 'Visitante';
                        plan.coverageAmount = 6000;
                        break;
                    case 9:
                        plan.planName = 'Turista';
                        plan.coverageAmount = 10000;
                        plan.recommended = true;
                        break;
                    case 10:
                        plan.planName = 'Roadtrip';
                        plan.coverageAmount = 35000;
                        break;
                    case 11:
                        plan.planName = 'Visitante';
                        plan.coverageAmount = 65000;
                        break;
                    case 12:
                        plan.planName = 'Turista';
                        plan.coverageAmount = 100000;
                        plan.recommended = true;
                        break;
                }
                return plan;
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quote_dto_1.CreateQuoteDto]),
    __metadata("design:returntype", void 0)
], InternalController.prototype, "create", null);
InternalController = __decorate([
    common_1.Controller('quote'),
    __metadata("design:paramtypes", [internal_service_1.InternalService])
], InternalController);
exports.InternalController = InternalController;
//# sourceMappingURL=internal.controller.js.map