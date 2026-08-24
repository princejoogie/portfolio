# Prince Juguilon API Authentication

## Authentication policy

The Prince Juguilon Portfolio API and MCP server are intentionally public and read-only. They expose the same professional profile, project, and article metadata already visible on the website. No account, API key, bearer token, OAuth 2.0 authorization, or user registration is required.

## Use the API

Send an unauthenticated HTTPS request to any operation documented in the [OpenAPI specification](https://prince.juguilon.com/openapi.json). For example:

```bash
curl https://prince.juguilon.com/api/v1/profile
```

MCP clients can connect directly to `https://prince.juguilon.com/api/mcp` with Streamable HTTP. Every MCP tool is annotated as read-only, idempotent, and non-destructive.

## Credentials and scopes

There are no credentials to register, claim, refresh, revoke, or place in an `Authorization` header. There are no delegated permissions or scopes because the service has no private resources and no write operations. The OpenAPI document declares an empty security requirement so clients can determine this automatically.

## Errors

REST validation failures use a JSON error object containing `code`, `message`, and `resolution`. MCP protocol and tool errors use structured JSON-RPC errors. An HTTP `401 Unauthorized` response is not part of the documented API contract.

## Security contact

Report a security concern through the contact details linked from [Prince Juguilon's portfolio](https://prince.juguilon.com/?tab=Contact).
