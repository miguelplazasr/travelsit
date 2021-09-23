"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const entity_1 = require("../../../../core/domain/entity");
class Country extends entity_1.Entity {
    get id() {
        return this._id;
    }
    get value() {
        return this.props.value;
    }
    constructor(props, id) {
        super(props, id);
    }
}
exports.Country = Country;
//# sourceMappingURL=country.js.map