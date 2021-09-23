"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCATION_CATALOG = exports.LocationEntity = void 0;
class LocationEntity {
    constructor(obj) {
        this.nombreCatalogo = obj && obj.nombreCatalogo;
        this.id = obj && obj.id || 0;
        this.paisId = obj && obj.paisId || null;
        this.palabraClave = obj && obj.palabraClave || '';
    }
}
exports.LocationEntity = LocationEntity;
var LOCATION_CATALOG;
(function (LOCATION_CATALOG) {
    LOCATION_CATALOG["states"] = "_CESTADOS";
    LOCATION_CATALOG["municipality"] = "_CMUNICIPIOS";
    LOCATION_CATALOG["population"] = "_CPOBLACIONES";
    LOCATION_CATALOG["colonies"] = "_CCOLONIAS";
    LOCATION_CATALOG["countries"] = "_CPAISDESTINO";
    LOCATION_CATALOG["coloniesByZipCode"] = "_CCODIGOPOSTAL";
})(LOCATION_CATALOG = exports.LOCATION_CATALOG || (exports.LOCATION_CATALOG = {}));
//# sourceMappingURL=location.entity.js.map