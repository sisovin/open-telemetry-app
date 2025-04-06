import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { context, trace } from '@opentelemetry/api';

@Injectable()
export class TracingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const tracer = trace.getTracer('default');
    const span = tracer.startSpan(`HTTP ${request.method} ${request.url}`);

    return context.with(trace.setSpan(context.active(), span), () =>
      next.handle().pipe(
        tap(() => {
          span.setAttribute('http.status_code', response.statusCode);
          span.end();
        }),
      ),
    );
  }
}
