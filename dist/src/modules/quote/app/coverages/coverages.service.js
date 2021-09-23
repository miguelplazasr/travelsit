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
exports.CoveragesService = void 0;
const common_1 = require("@nestjs/common");
const coverage_entity_1 = require("../../domain/entities/coverage.entity");
const citi_proxy_service_1 = require("../../../../utils/citi-proxy/app/citi-proxy.service");
const enums_1 = require("../../../../core/domain/enums");
let CoveragesService = class CoveragesService {
    constructor(_citiProxyService) {
        this._citiProxyService = _citiProxyService;
    }
    async generate(generateCoverages) {
        let coverages;
        try {
            coverages = await this.callToCoverages(generateCoverages);
            coverages = this.transformCoverages(coverages);
        }
        catch (e) {
            throw e;
        }
        return coverages;
    }
    callToCoverages(generateCoverages) {
        try {
            const uri = `/Product/Products?currencyId=2&packageId=${enums_1.DESTINATION_TYPE[generateCoverages.destination]}`;
            return this._citiProxyService.all(uri);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
    transformCoverages(response) {
        let res = [];
        response.caracteristicasOpcion[0].opciones.forEach(c => {
            let coverages = new coverage_entity_1.CoveragesEntity();
            coverages.planName = c.descripcion.toString().split(' ')[0];
            let planId = c.opcionId;
            response.coberturas.map(x => {
                let r = x.sumaAseguradaConfig.valores.filter(y => {
                    return y.planPaqueteId == planId;
                });
                if (r && r.length > 0) {
                    coverages.coverages.push({ amount: r[0].valor, description: x.descripcion, id: x.coberturaId, name: x.nombre, associatedText: r[0].textoAsociado });
                }
            });
            res.push(coverages);
        });
        return res;
    }
};
CoveragesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [citi_proxy_service_1.CitiProxyService])
], CoveragesService);
exports.CoveragesService = CoveragesService;
//# sourceMappingURL=coverages.service.js.map