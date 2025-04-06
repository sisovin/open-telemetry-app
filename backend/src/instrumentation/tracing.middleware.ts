import { Request, Response, NextFunction } from 'express';
import { context, trace } from '@opentelemetry/api';

export function TracingMiddleware(req: Request, res: Response, next: NextFunction) {
  const tracer = trace.getTracer('default');
  const span = tracer.startSpan(`HTTP ${req.method} ${req.url}`);

  context.with(trace.setSpan(context.active(), span), () => {
    res.on('finish', () => {
      span.setAttribute('http.status_code', res.statusCode);
      span.end();
    });
    next();
  });
}
