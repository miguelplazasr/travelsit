"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crs = void 0;
class Crs {
    constructor(obj) {
        this.referenceTypeId = obj && obj.referenceTypeId || 9;
        this.countryId = obj && obj.countryId || 1;
        this.organisation = obj && obj.organisation || 'citibanamex';
        this.channelId = obj && obj.channelId || 35;
        this.cultureId = obj && obj.cultureId || 1;
        this.rqUID = obj && obj.rqUID || '00000000-0000-0000-0000-000000000000';
        this.includeBenefit = obj && obj.includeBenefit || true;
        this.useDefaultRegion = obj && obj.useDefaultRegion || true;
        this.coverTypeId = obj && obj.coverTypeId || 1;
        this.regionId = obj && obj.regionId || 0;
        this.excess = obj && obj.excess || '';
        this.quoteHighestRegion = obj && obj.quoteHighestRegion || true;
        this.paymentCurrencyId = obj && obj.paymentCurrencyId || 1;
        this.itineraryCurrencyId = obj && obj.itineraryCurrencyId || 2;
    }
}
exports.Crs = Crs;
//# sourceMappingURL=crs.entity.js.map