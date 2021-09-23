"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TlsRejectInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const https = require("https");
const axios_1 = require("axios");
let TlsRejectInterceptor = class TlsRejectInterceptor {
    constructor() {
        this.tlsReject = false;
    }
    intercept(context, next) {
        const agent = new https.Agent({
            rejectUnauthorized: this.tlsReject
        });
        axios_1.default.interceptors.request.use((config) => {
            return { httpsAgent: agent };
        });
        return next.handle().pipe(operators_1.tap(data => console.log('After...', data)));
    }
};
TlsRejectInterceptor = __decorate([
    common_1.Injectable()
], TlsRejectInterceptor);
exports.TlsRejectInterceptor = TlsRejectInterceptor;
//# sourceMappingURL=tls-reject.interceptor.js.map