"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsAmountMapper = void 0;
const details_amount_entity_1 = require("../entities/details-amount/details-amount.entity");
class DetailsAmountMapper {
    static createDetailsAmount(planAmount, versionId) {
        const partialAmounts = {
            primaTotalMto: planAmount
        };
        const partialDetailsAmount = {
            cotizacionDetalleMto: new details_amount_entity_1.QuoteDetailAmountModel(partialAmounts),
            versionId: versionId !== null && versionId !== void 0 ? versionId : undefined
        };
        Object.keys(partialDetailsAmount).forEach(key => partialDetailsAmount[key] === undefined && delete partialDetailsAmount[key]);
        return partialDetailsAmount;
    }
}
exports.DetailsAmountMapper = DetailsAmountMapper;
//# sourceMappingURL=details-amount.mapper.js.map