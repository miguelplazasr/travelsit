"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("@hapi/joi");
exports.validationSchema = Joi.object({
    PA_URL: Joi.string().required(),
    PA_IDENTITY: Joi.string().valid('AAD').required(),
    PA_ID: Joi.string().required(),
    PA_KEY: Joi.string().required(),
    PA_VERSION: Joi.number().default(1),
    PA_RESOURCE: Joi.string().required(),
    PROXY_URL: Joi.string().required(),
    PA_APIM: Joi.string().required()
});
//# sourceMappingURL=validation.js.map