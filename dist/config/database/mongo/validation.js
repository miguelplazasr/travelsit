"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("@hapi/joi");
exports.validationSchema = Joi.object({
    DB_URI: Joi.string().required()
});
//# sourceMappingURL=validation.js.map