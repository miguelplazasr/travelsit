"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const quote_module_1 = require("./modules/quote/quote.module");
const booking_module_1 = require("./modules/booking/booking.module");
const location_module_1 = require("./modules/location/location.module");
const config_module_1 = require("../config/app/config.module");
const config_1 = require("@nestjs/config");
const mongoose_config_service_1 = require("./core/app/mongoose-config/mongoose-config.service");
const config_module_2 = require("../config/database/mongo/config.module");
const citi_proxy_module_1 = require("./utils/citi-proxy/citi-proxy.module");
const config_module_3 = require("../config/apis/latam-auth/config.module");
const config_service_1 = require("../config/app/config.service");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_module_1.AppConfigModule,
            config_module_2.MongoConfigModule,
            config_module_3.LatamAuthConfigModule,
            quote_module_1.QuoteModule,
            booking_module_1.BookingModule,
            location_module_1.LocationModule,
            config_1.ConfigModule,
            citi_proxy_module_1.CitiProxyModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [config_service_1.AppConfigService, mongoose_config_service_1.MongooseConfigService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map