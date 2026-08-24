# Prince Juguilon Developer Resources

Prince Carlo Juguilon's portfolio provides public, read-only professional data as JSON and through Model Context Protocol. No account, API key, bearer token, OAuth flow, or payment is required.

## REST quickstart

```bash
curl https://prince.juguilon.com/api/v1/profile
```

The versioned REST resources are `/api/v1/profile`, `/api/v1/resume`, `/api/v1/projects`, and `/api/v1/blogs`. Pass `status=all` to the projects endpoint to include archived work. The complete typed contract, operation descriptions, response schemas, and error model are in [openapi.json](https://prince.juguilon.com/openapi.json).

## MCP

Connect a Streamable HTTP MCP client to `https://prince.juguilon.com/api/mcp` for portfolio tools. Connect to `https://prince.juguilon.com/api/mcp/docs` for API guidance, the authentication policy, and the OpenAPI contract. Both servers are anonymous, read-only, idempotent, and non-destructive.

## Scope

The service has no GraphQL endpoint, mutations, user accounts, webhooks, payments, API key generation, or private data. Production is safe for integration testing because there are no write operations. Breaking REST changes use a new versioned path.
