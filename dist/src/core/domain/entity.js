"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const unique_entity_id_1 = require("./unique-entity-id");
const isEntity = (v) => {
    return v instanceof Entity;
};
class Entity {
    constructor(props, id) {
        this._id = id ? id : new unique_entity_id_1.UniqueEntityId();
        this.props = props;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map