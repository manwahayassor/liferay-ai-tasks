# Liferay AI Tasks and AI Content Wizard Showcase

A Docker Compose setup to demonstrate using the AI Content Wizard and AI Tasks with Liferay DXP.

## Setup environment
### Build Client Extensions and OSGi modules
This step builds the CX assets and modules before extracting the ZIP and JAR files for the Liferay runtime.
```
cd liferay/liferay-workspace && blade gw clean deploy && cd ../../
```
### Extracts the AI Content Wizard Bun Microservice so it can be containerised
```
cd contentwizard && tar -xf ../liferay/liferay-workspace/bundles/osgi/client-extensions/liferay-content-wizard-bun.zip --exclude=Dockerfile --exclude=LCP.json --exclude=liferay-content-wizard-bun.client-extension-config.json && cd ..
```

## Start environment
```
docker compose up -d --build
```
This will start the following services:

- PostgreSQL (§4)
- Elasticsearch (8.11.4)
- Liferay DXP (2024.q4.7)
- AI Content Wizard CX Bun

Once everything started, you need to login into Liferay DXP and configure the AI services. For example, configure the AI Content Wizard to use your OpenAI key. The services use volumes and therefore any database or document library changes will be persisted, so you only need to configure your services the first time.

> Do not commit any AI keys to source control as this will likely invalidate them.