"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("@hapi/joi");
exports.validationSchema = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'sit', 'uat', 'production').required(),
    APP_PORT: Joi.number().default(3000),
    NODE_TLS_REJECT_UNAUTHORIZED: Joi.boolean().default(false),
});
//# sourceMappingURL=validation.js.map