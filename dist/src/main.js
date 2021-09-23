"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appConfig = app.get('AppConfigService');
    app.setGlobalPrefix('api');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    await app.listen(appConfig.port, '0.0.0.0', () => {
        console.log(`Our app is running on port ${appConfig.port}`);
        console.log(`Running in ${appConfig.env} mode`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map