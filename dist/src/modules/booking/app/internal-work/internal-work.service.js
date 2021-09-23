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
var InternalWorkService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalWorkService = void 0;
const common_1 = require("@nestjs/common");
const citi_proxy_service_1 = require("../../../../utils/citi-proxy/app/citi-proxy.service");
const internal_work_entity_1 = require("../../domain/entities/internal-work/internal-work.entity");
const internal_work_mapper_1 = require("../../domain/mappers/internal-work.mapper");
const internal_work_address_entity_1 = require("../../domain/entities/internal-work/internal-work-address.entity");
const internal_work_id_entity_1 = require("../../domain/entities/internal-work/internal-work-id.entity");
const internal_work_media_entity_1 = require("../../domain/entities/internal-work/internal-work-media.entity");
const details_amount_mapper_1 = require("../../domain/mappers/details-amount.mapper");
let InternalWorkService = InternalWorkService_1 = class InternalWorkService {
    constructor(_citiProxyService) {
        this._citiProxyService = _citiProxyService;
    }
    async createInternalWork(createInternalWorkDto) {
        let internal;
        let detailsAmount;
        try {
            const internalWorkData = InternalWorkService_1.mappingInternalWork(createInternalWorkDto);
            internal = await this.callToInternalWork(internalWorkData);
        }
        catch (e) {
        }
        try {
            detailsAmount = await this.callToDetailsAmount(createInternalWorkDto.planAmount, createInternalWorkDto.versionId);
        }
        catch (e) {
        }
        return { internal, detailsAmount };
    }
    async callToInternalWork(internalWorkModel) {
        try {
            const uri = `/Person/InternalWork`;
            return this._citiProxyService.post(uri, internalWorkModel).then((response) => response);
        }
        catch (e) {
        }
    }
    static mappingInternalWork(createInternalWorkDto) {
        let mediaArr = [];
        const internalWork = internal_work_mapper_1.InternalWorkMapper.CreateInternalWorkToDomain(createInternalWorkDto.dataContractor);
        const internalWorkAddress = internal_work_mapper_1.InternalWorkMapper.CreateInternalWorkAddressToDomain(createInternalWorkDto.addressContractor);
        const internalWorkEntity = new internal_work_entity_1.InternalWorkEntity(internalWork);
        internalWorkEntity.direcciones = [new internal_work_address_entity_1.InternalWorkAddressEntity(internalWorkAddress)];
        const id = `${internalWork.rfc}${internalWork.rfcHomoclave}`;
        internalWorkEntity.identificaciones = [new internal_work_id_entity_1.InternalWorkIdEntity({ folioIdentificacion: id })];
        const mediaEmail = new internal_work_media_entity_1.InternalWorkMediaEntity({ cadenaLibre: createInternalWorkDto.dataContractor.email, tipoMedioComunicacionId: 9 });
        const mediaPhone = new internal_work_media_entity_1.InternalWorkMediaEntity({ numero: createInternalWorkDto.dataContractor.phone, tipoMedioComunicacionId: 4 });
        mediaArr.push(mediaEmail, mediaPhone);
        internalWorkEntity.mediosComunicacion = mediaArr;
        return internalWorkEntity;
    }
    async callToDetailsAmount(planAmount, versionId) {
        try {
            const uri = `/Quote/DetailsAmount`;
            const data = details_amount_mapper_1.DetailsAmountMapper.createDetailsAmount(planAmount, versionId);
            console.log(`Comenzando ===> ${JSON.stringify(data)}`);
            return await this._citiProxyService.post(uri, data).then((response) => response);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
};
InternalWorkService = InternalWorkService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [citi_proxy_service_1.CitiProxyService])
], InternalWorkService);
exports.InternalWorkService = InternalWorkService;
//# sourceMappingURL=internal-work.service.js.map