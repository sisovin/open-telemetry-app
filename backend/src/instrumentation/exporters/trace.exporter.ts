import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';
import { envConfig } from '../../config/env.config';

export function setupTraceExporter() {
  const exporter = new JaegerExporter({
    endpoint: envConfig.otelExporterEndpoint,
    serviceName: envConfig.otelServiceName,
  });

  return new SimpleSpanProcessor(exporter);
}
