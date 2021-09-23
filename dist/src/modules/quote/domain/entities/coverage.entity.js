"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageEntity = exports.CoveragesEntity = void 0;
class CoveragesEntity {
    constructor(obj) {
        this.planName = obj && obj.planName || '';
        this.coverages = obj && obj.coverages || [];
    }
}
exports.CoveragesEntity = CoveragesEntity;
class CoverageEntity {
    constructor(obj) {
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.id = obj && obj.id || 0;
        this.amount = obj && obj.amount || '';
        this.associatedText = obj && obj.associatedText || '';
    }
}
exports.CoverageEntity = CoverageEntity;
//# sourceMappingURL=coverage.entity.js.map