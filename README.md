# OpenTelemetry NestJS Application

This project is a NestJS application that integrates OpenTelemetry for tracing, metrics, and logging. The purpose of this project is to demonstrate how to set up and use OpenTelemetry in a NestJS application.

## Project Structure

```
/open-telemetry-app
|-
/backend 
│
├── src/
│   ├── app.module.ts          # Root module
│   ├── main.ts                # App entry point (bootstrap NestJS)
│   │
│   ├── config/                # Configuration files
│   │   ├── otel.config.ts      # OpenTelemetry configuration
│   │   ├── logger.config.ts    # Logging config (optional)
│   │   └── env.config.ts       # Environment variables setup
│   │
│   ├── instrumentation/       # OpenTelemetry Instrumentation Setup
│   │   ├── otel.module.ts      # OpenTelemetry module
│   │   ├── otel-sdk.ts         # SDK initialization (manual instrumentation)
│   │   ├── tracing.middleware.ts  # Middleware to auto-trace requests
│   │   └── exporters/          # Exporters to send data
│   │       ├── trace.exporter.ts
│   │       ├── metrics.exporter.ts
│   │       └── logs.exporter.ts
│   │
│   ├── microservices/          # Your business logic (services/controllers)
│   │   ├── service-a/
│   │   │   ├── service-a.controller.ts
│   │   │   ├── service-a.service.ts
│   │   │   └── service-a.module.ts
│   │   └── service-b/
│   │       ├── service-b.controller.ts
│   │       ├── service-b.service.ts
│   │       └── service-b.module.ts
│   │
│   ├── shared/                 # Shared modules and utilities
│   │   ├── logger/             # Centralized logger (Winston, Pino)
│   │   │   ├── logger.service.ts
│   │   │   └── logger.module.ts
│   │   └── interceptors/       # NestJS interceptors for tracing
│   │       └── tracing.interceptor.ts
│   │
│   └── infra/                  # Infrastructure-related stuff (Kubernetes, Proxies)
│       └── k8s/
│           ├── deployment.yaml
│           ├── service.yaml
│           └── otel-collector-config.yaml  # OpenTelemetry Collector config
│
├── test/                       # Tests (unit/integration)
│   └── app.e2e-spec.ts
│
├── .env                         # Environment variables (local dev)
├── .env.production              # Environment variables (prod)
├── nest-cli.json                # NestJS CLI config
├── package.json                 # Node.js dependencies
├── tsconfig.json                # TypeScript config
└── README.md                    # Project documentation
```

## Setup and Run

1. Clone the repository:
   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank/open-telemetry-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add the necessary environment variables.
   - For production, create a `.env.production` file and add the necessary environment variables.

4. Run the application:
   ```bash
   npm run start
   ```

## OpenTelemetry Configuration

1. OpenTelemetry configuration is located in `src/config/otel.config.ts`.
2. The OpenTelemetry module is set up in `src/instrumentation/otel.module.ts`.
3. Middleware for auto-tracing requests is implemented in `src/instrumentation/tracing.middleware.ts`.
4. Exporters for sending data are located in `src/instrumentation/exporters/`.

### Example OpenTelemetry Collector Config

The OpenTelemetry Collector configuration is defined in `src/infra/k8s/otel-collector-config.yaml`.

### Recommended Libraries

- `@nestjs/terminus`
- `@opentelemetry/api`
- `@opentelemetry/sdk-node`
- `@opentelemetry/instrumentation-http`
- `@opentelemetry/instrumentation-express`
- `@opentelemetry/exporter-jaeger`
- `@opentelemetry/exporter-prometheus`
- `@opentelemetry/exporter-collector-grpc`

### Step-by-Step Setup Guide

1. Set up the folder structure as described in the project structure section.
2. Implement the OpenTelemetry configuration in `src/config/otel.config.ts`.
3. Set up the OpenTelemetry module in `src/instrumentation/otel.module.ts`.
4. Implement the tracing middleware in `src/instrumentation/tracing.middleware.ts`.
5. Set up the exporters in `src/instrumentation/exporters/`.
6. Configure the environment variables in `.env` and `.env.production`.
7. Deploy the application using the Kubernetes manifests in `src/infra/k8s/`.

For more detailed instructions, refer to the comments and documentation within the code files.
