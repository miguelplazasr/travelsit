"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityId = void 0;
const identifier_1 = require("./identifier");
const uuid_1 = require("uuid");
class UniqueEntityId extends identifier_1.Identifier {
    constructor(id) {
        super(id ? id : uuid_1.v4());
    }
}
exports.UniqueEntityId = UniqueEntityId;
//# sourceMappingURL=unique-entity-id.js.map