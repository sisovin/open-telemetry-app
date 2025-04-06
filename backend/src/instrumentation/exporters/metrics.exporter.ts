import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { envConfig } from '../../config/env.config';

export function setupMetricsExporter() {
  const exporter = new PrometheusExporter({
    endpoint: envConfig.otelMetricsExporterEndpoint,
  });

  return new PeriodicExportingMetricReader({
    exporter,
    exportIntervalMillis: 60000,
  });
}
