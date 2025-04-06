import { Module } from '@nestjs/common';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { ConsoleMetricExporter } from '@opentelemetry/sdk-metrics';
import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

const traceExporter = new ConsoleSpanExporter();
const metricExporter = new ConsoleMetricExporter();

const sdk = new NodeSDK({
  traceExporter: new SimpleSpanProcessor(traceExporter),
  metricReader: new PeriodicExportingMetricReader({
    exporter: metricExporter,
    exportIntervalMillis: 60000,
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

@Module({
  providers: [
    {
      provide: 'OTEL_SDK',
      useValue: sdk,
    },
  ],
  exports: ['OTEL_SDK'],
})
export class OtelModule {}
