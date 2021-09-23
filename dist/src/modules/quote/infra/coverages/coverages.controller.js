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
exports.CoveragesController = void 0;
const common_1 = require("@nestjs/common");
const coverages_service_1 = require("../../app/coverages/coverages.service");
const generate_coverages_dto_1 = require("../../domain/dto/generate-coverages.dto");
let CoveragesController = class CoveragesController {
    constructor(coverageService) {
        this.coverageService = coverageService;
    }
    generate(generateCoveragesDto) {
        return this.coverageService.generate(generateCoveragesDto);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_coverages_dto_1.GenerateCoveragesDto]),
    __metadata("design:returntype", void 0)
], CoveragesController.prototype, "generate", null);
CoveragesController = __decorate([
    common_1.Controller('coverages'),
    __metadata("design:paramtypes", [coverages_service_1.CoveragesService])
], CoveragesController);
exports.CoveragesController = CoveragesController;
//# sourceMappingURL=coverages.controller.js.map