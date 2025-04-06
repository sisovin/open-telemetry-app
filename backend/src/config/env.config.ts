import * as dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  port: process.env.PORT || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
  otelExporterEndpoint: process.env.OTEL_EXPORTER_ENDPOINT || 'http://localhost:4317',
  otelServiceName: process.env.OTEL_SERVICE_NAME || 'nestjs-app',
};
