"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationSchema = void 0;
const Joi = require("@hapi/joi");
exports.validationSchema = Joi.object({
    PAYMENT_CNZD: Joi.string().required(),
    PAYMENT_TRC: Joi.string().required(),
    PAYMENT_URL: Joi.string().uri().required(),
    PAYMENT_URL_MIGRATION: Joi.string().uri().required()
});
//# sourceMappingURL=validation.js.map