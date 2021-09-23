"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskMapper = void 0;
const enums_1 = require("../../../../core/domain/enums");
class RiskMapper {
    static CreateRiskToDomain(create) {
        var _a, _b;
        const partialRisk = {
            esContratanteAsegurado: (_a = create.contractorTraveling) !== null && _a !== void 0 ? _a : undefined,
            versionId: (_b = create.versionId) !== null && _b !== void 0 ? _b : undefined
        };
        Object.keys(partialRisk).forEach(key => partialRisk[key] === undefined && delete partialRisk[key]);
        return partialRisk;
    }
    static CreateRiskCollection(create) {
        var _a;
        const partialRiskCollection = {
            paqueteId: enums_1.DESTINATION_TYPE[create.trip],
            versionId: (_a = create.versionId) !== null && _a !== void 0 ? _a : undefined
        };
        Object.keys(partialRiskCollection).forEach(key => partialRiskCollection[key] === undefined && delete partialRiskCollection[key]);
        return partialRiskCollection;
    }
    static CreateRiskPerson(create) {
        var _a, _b, _c, _d, _e, _f, _g;
        const partialIWId = [{
                folioIdentificacion: (_a = create.rfc) !== null && _a !== void 0 ? _a : undefined,
                registroExisteOrigen: false,
                tipoIdentificacionId: 16
            }];
        const partialRiskPerson = {
            apellidoMaterno: (_b = create.firstLastName) !== null && _b !== void 0 ? _b : undefined,
            apellidoPaterno: (_c = create.secondLastName) !== null && _c !== void 0 ? _c : undefined,
            cotizacionRiesgoPersonaIdentificacionCollection: partialIWId,
            fechaNacimiento: (_d = create.dob) !== null && _d !== void 0 ? _d : undefined,
            folioIdentificacionTitular: (_e = create.rfc) !== null && _e !== void 0 ? _e : undefined,
            nombre: (_f = create.firstName) !== null && _f !== void 0 ? _f : undefined,
            nombreCompleto: (_g = create.secondName) !== null && _g !== void 0 ? _g : undefined,
            sexoId: create.gender
        };
        Object.keys(partialRiskPerson).forEach(key => partialRiskPerson[key] === undefined && delete partialRiskPerson[key]);
        return partialRiskPerson;
    }
}
exports.RiskMapper = RiskMapper;
//# sourceMappingURL=risk.mapper.js.map