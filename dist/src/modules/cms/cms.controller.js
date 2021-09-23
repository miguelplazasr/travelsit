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
exports.CmsController = void 0;
const common_1 = require("@nestjs/common");
const cms_service_1 = require("./cms.service");
const create_cms_dto_1 = require("./domain/dto/create-cms.dto");
let CmsController = class CmsController {
    constructor(cmsService) {
        this.cmsService = cmsService;
    }
    findAll() {
        return this.cmsService.findAll();
    }
    findByName(name) {
        return this.cmsService.findByName(name);
    }
    create(createCmsDto) {
        console.log(createCmsDto.data);
        return this.cmsService.create(createCmsDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CmsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':name'),
    common_1.Header('content-type', 'application/json'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CmsController.prototype, "findByName", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cms_dto_1.CreateCmsDto]),
    __metadata("design:returntype", void 0)
], CmsController.prototype, "create", null);
CmsController = __decorate([
    common_1.Controller('/cms'),
    __metadata("design:paramtypes", [cms_service_1.CmsService])
], CmsController);
exports.CmsController = CmsController;
//# sourceMappingURL=cms.controller.js.map