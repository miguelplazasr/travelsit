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
var RfcService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RfcService = void 0;
const common_1 = require("@nestjs/common");
const rfc_response_entity_1 = require("../../domain/entities/rfc/rfc-response.entity");
const citi_proxy_service_1 = require("../../../../utils/citi-proxy/app/citi-proxy.service");
let RfcService = RfcService_1 = class RfcService {
    constructor(_citiProxyService) {
        this._citiProxyService = _citiProxyService;
    }
    async callToRfc(createRfcDto) {
        let rfcResponse;
        try {
            rfcResponse = await this.getRfc(createRfcDto);
            return RfcService_1.splitResponse(rfcResponse);
        }
        catch (e) {
            throw e;
        }
    }
    async getRfc(createRfcDto) {
        try {
            const uri = `/Person/RFC?name=${createRfcDto.name}&lastName=${createRfcDto.lastName}&surname=${createRfcDto.surName}&dateOfBirth=${createRfcDto.dob}`;
            console.log(uri);
            return await this._citiProxyService.all(uri).then((response) => {
                return response;
            });
        }
        catch (e) {
            throw e;
        }
    }
    static splitResponse(rfcString) {
        const respSplit = rfcString.split('-');
        return new rfc_response_entity_1.RfcResponseEntity(respSplit[0].concat(respSplit[1]), respSplit[2]);
    }
};
RfcService = RfcService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [citi_proxy_service_1.CitiProxyService])
], RfcService);
exports.RfcService = RfcService;
//# sourceMappingURL=rfc.service.js.map