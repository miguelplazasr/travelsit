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
var InternalService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalService = void 0;
const common_1 = require("@nestjs/common");
const cotizacion_entity_1 = require("../../domain/entities/cotizacion.entity");
const cotizacion_detalle_caractaristica_entity_1 = require("../../domain/entities/cotizacion-detalle-caractaristica.entity");
const crs_entity_1 = require("../../domain/entities/crs.entity");
const uuid_1 = require("uuid");
const citi_proxy_service_1 = require("../../../../utils/citi-proxy/app/citi-proxy.service");
const enums_1 = require("../../../../core/domain/enums");
let InternalService = InternalService_1 = class InternalService {
    constructor(_citiProxyService) {
        this._citiProxyService = _citiProxyService;
    }
    async createQuote(createQuoteDto) {
        let internal;
        let crs;
        let versionId;
        let quoteData;
        try {
            quoteData = this.mappingQuote(createQuoteDto);
        }
        catch (e) {
            throw e;
        }
        try {
            internal = await this.callToInternal(quoteData);
            versionId = String(internal.cotizacionVersion.versionId);
        }
        catch (e) {
            throw e;
        }
        try {
            crs = await this.callToCrs(createQuoteDto, versionId);
        }
        catch (e) {
            throw e;
        }
        return {
            internal,
            plans: crs,
            versionId
        };
    }
    callToCrs(createQuoteDto, versionId) {
        try {
            const uri = `/Quote/CRS`;
            const quoteCrs = new crs_entity_1.Crs();
            quoteCrs.referenceId = versionId;
            quoteCrs.productId = enums_1.PRODUCT_TYPE[createQuoteDto.package];
            quoteCrs.isSingleTrip = createQuoteDto.isSingleTrip;
            quoteCrs.departDate = createQuoteDto.departDate;
            quoteCrs.returnDate = createQuoteDto.returnDate;
            quoteCrs.countries = createQuoteDto.countries;
            quoteCrs.age = createQuoteDto.persons.children.concat(createQuoteDto.persons.adults);
            quoteCrs.promoCode = createQuoteDto.promoCode;
            quoteCrs.rqUID = uuid_1.v4();
            return this._citiProxyService.post(uri, quoteCrs).then((response) => response);
        }
        catch (e) {
            throw e;
        }
    }
    async callToInternal(quoteData) {
        try {
            const url = `/Quote/Internal`;
            return await this._citiProxyService.post(url, quoteData);
        }
        catch (e) {
            throw e;
        }
    }
    mappingQuote(createQuoteDto) {
        const quote = new cotizacion_entity_1.CotizacionEntity();
        quote.cotizacionVersion.cotizacionDetalle.inicioVigencia = quote.cotizacionVersion.cotizacionDetalleTravel.fechaInicio = createQuoteDto.departDate;
        quote.cotizacionVersion.cotizacionDetalle.finVigencia = quote.cotizacionVersion.cotizacionDetalleTravel.fechaFin = createQuoteDto.returnDate;
        quote.cotizacionVersion.cotizacionDetalle.negocioId = enums_1.TRIP_TYPE[createQuoteDto.package];
        quote.cotizacionVersion.cotizacionDetalle.paqueteId = enums_1.DESTINATION_TYPE[createQuoteDto.destination];
        const characteristicCollection = InternalService_1.getTravelersByRange(createQuoteDto.persons.adults, createQuoteDto.persons.children.length);
        characteristicCollection.concat(InternalService_1.setCountriesCollection(createQuoteDto.countries));
        quote.cotizacionVersion.cotizacionDetalleTravel.cotizacionDetalleCaracteristicaCollection = characteristicCollection;
        return quote;
    }
    static getTravelerChildren(children) {
        const characteristic = {
            catalogoId: 408,
            catalogoOpcionId: '1',
            tipoValorId: 2,
            valor: String(children)
        };
        return new cotizacion_detalle_caractaristica_entity_1.CotizacionDetalleCaractaristica(characteristic);
    }
    static getTravelersByRange(adults, children) {
        const optRange = [];
        adults.forEach((x) => {
            switch (true) {
                case (x >= 18 && x < 41):
                    optRange['2'] = optRange['2'] + 1 || 1;
                    break;
                case (x >= 41 && x < 65):
                    optRange['3'] = optRange['3'] + 1 || 1;
                    break;
                case (x >= 65 && x < 75):
                    optRange['4'] = optRange['4'] + 1 || 1;
                    break;
                case (x >= 75 && x < 80):
                    optRange['5'] = optRange['5'] + 1 || 1;
                    break;
            }
        });
        const travelersDetail = this.setRange(optRange);
        if (children !== 0) {
            travelersDetail.push(this.getTravelerChildren(children));
        }
        return travelersDetail;
    }
    static setRange(arr) {
        let detChar = [];
        for (let key in arr) {
            const characteristic = {
                catalogoId: 408,
                catalogoOpcionId: String(key),
                tipoValorId: 2,
                valor: String(arr[key])
            };
            detChar.push(new cotizacion_detalle_caractaristica_entity_1.CotizacionDetalleCaractaristica(characteristic));
        }
        return detChar;
    }
    static setCountriesCollection(arr) {
        let detChar = [];
        arr.map((country) => {
            const characteristic = {
                catalogoId: 406,
                catalogoOpcionId: String(country),
                tipoValorId: 3,
                valor: String(1)
            };
            detChar.push(new cotizacion_detalle_caractaristica_entity_1.CotizacionDetalleCaractaristica(characteristic));
        });
        return detChar;
    }
};
InternalService = InternalService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [citi_proxy_service_1.CitiProxyService])
], InternalService);
exports.InternalService = InternalService;
//# sourceMappingURL=internal.service.js.map