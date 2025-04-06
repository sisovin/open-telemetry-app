import { Module } from '@nestjs/common';
import { OtelModule } from './instrumentation/otel.module';

@Module({
  imports: [OtelModule],
})
export class AppModule {}
