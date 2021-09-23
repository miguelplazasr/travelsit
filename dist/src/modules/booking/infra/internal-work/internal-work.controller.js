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
exports.InternalWorkController = void 0;
const common_1 = require("@nestjs/common");
const internal_work_service_1 = require("../../app/internal-work/internal-work.service");
const create_internal_work_dto_1 = require("../../domain/dto/internal-work/create-internal-work.dto");
let InternalWorkController = class InternalWorkController {
    constructor(internalWorkService) {
        this.internalWorkService = internalWorkService;
    }
    create(createInternalWorkDto) {
        try {
            return this.internalWorkService.createInternalWork(createInternalWorkDto);
        }
        catch (e) {
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_internal_work_dto_1.CreateInternalWorkDto]),
    __metadata("design:returntype", void 0)
], InternalWorkController.prototype, "create", null);
InternalWorkController = __decorate([
    common_1.Controller('person'),
    __metadata("design:paramtypes", [internal_work_service_1.InternalWorkService])
], InternalWorkController);
exports.InternalWorkController = InternalWorkController;
//# sourceMappingURL=internal-work.controller.js.map