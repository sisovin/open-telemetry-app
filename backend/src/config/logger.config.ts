import { LoggerOptions } from 'winston';

export const loggerConfig: LoggerOptions = {
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    // Add other transports like file, HTTP, etc. if needed
  ],
};
