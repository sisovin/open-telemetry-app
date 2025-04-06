import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';
import { ConsoleLogExporter } from '@opentelemetry/sdk-logs';

diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);

export const setupLogsExporter = () => {
  const logExporter = new ConsoleLogExporter();

  // Configure the exporter to send logs data to a backend
  // Add additional configuration here if needed

  return logExporter;
};
