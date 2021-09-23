"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalWorkMapper = void 0;
class InternalWorkMapper {
    static CreateInternalWorkToDomain(create) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        console.log(create.dob);
        const partialInternalWork = {
            primerNombre: (_a = create.firstName) !== null && _a !== void 0 ? _a : undefined,
            segundoNombre: (_b = create.secondName) !== null && _b !== void 0 ? _b : undefined,
            apellidoPaterno: (_c = create.firstLastName) !== null && _c !== void 0 ? _c : undefined,
            apellidoMaterno: (_d = create.secondLastName) !== null && _d !== void 0 ? _d : undefined,
            fechaNacimiento: (_e = create.dob) !== null && _e !== void 0 ? _e : undefined,
            sexoId: (_f = create.gender) !== null && _f !== void 0 ? _f : undefined,
            rfc: (_g = create.rfc) !== null && _g !== void 0 ? _g : undefined,
            rfcHomoclave: (_h = create.homoKey) !== null && _h !== void 0 ? _h : undefined,
        };
        Object.keys(partialInternalWork).forEach(key => partialInternalWork[key] === undefined && delete partialInternalWork[key]);
        console.log(partialInternalWork.fechaNacimiento);
        return partialInternalWork;
    }
    static CreateInternalWorkAddressToDomain(create) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const partialInternalWorkAddress = {
            calle: (_a = create.street) !== null && _a !== void 0 ? _a : undefined,
            numeroExterior: (_b = create.exteriorNumber) !== null && _b !== void 0 ? _b : undefined,
            numeroInterior: (_c = create.internalNumber) !== null && _c !== void 0 ? _c : undefined,
            codigoPostal: (_d = create.zipCode) !== null && _d !== void 0 ? _d : undefined,
            estadoId: (_e = create.state) !== null && _e !== void 0 ? _e : undefined,
            poblacionId: (_f = create.city) !== null && _f !== void 0 ? _f : undefined,
            municipioId: (_g = create.municipality) !== null && _g !== void 0 ? _g : undefined,
            coloniaId: (_h = create.colony) !== null && _h !== void 0 ? _h : undefined
        };
        Object.keys(partialInternalWorkAddress).forEach(key => partialInternalWorkAddress[key] === undefined && delete partialInternalWorkAddress[key]);
        return partialInternalWorkAddress;
    }
}
exports.InternalWorkMapper = InternalWorkMapper;
//# sourceMappingURL=internal-work.mapper.js.map