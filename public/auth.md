# Prince Juguilon API Authentication

The resource server is `https://prince.juguilon.com`. It publishes only public professional information and intentionally does not implement agent registration, user accounts, or protected resources.

## 1. Discover

The Prince Juguilon Portfolio API and MCP server are intentionally public and read-only. They expose the same professional profile, project, and article metadata already visible on the website. No account, API key, bearer token, OAuth 2.0 authorization, or user registration is required.

There is no `WWW-Authenticate` challenge, OAuth Protected Resource Metadata, authorization server, or `agent_auth` registration block because every documented operation allows anonymous access. The OpenAPI document at `https://prince.juguilon.com/openapi.json` is the authoritative contract and declares an empty security requirement.

## 2. Pick a method

Use anonymous access. Do not choose `identity_assertion`, `service_auth`, ID-JAG, or an OAuth grant. If a client automatically attaches credentials, remove the `Authorization` header and session cookies before calling this public service.

## 3. Register

Registration does not apply. There is no `register_uri`, identity endpoint, claim endpoint, account, or credential issuance flow. An agent can proceed directly to a documented GET operation or connect to the MCP endpoint.

## 4. Claim

There is no user claim ceremony, `claim_uri`, user code, or identity assertion. The API cannot create or claim an account and does not act on private user data.

## 5. Use the credential

No credential is used. Send an unauthenticated HTTPS request to any operation documented in the [OpenAPI specification](https://prince.juguilon.com/openapi.json). For example:

```bash
curl https://prince.juguilon.com/api/v1/profile
```

MCP clients can connect directly to `https://prince.juguilon.com/api/mcp` with Streamable HTTP. Every MCP tool is annotated as read-only, idempotent, and non-destructive.

## 6. Errors

REST validation failures use a JSON error object containing `code`, `message`, and `resolution`. MCP protocol and tool errors use structured JSON-RPC errors. An HTTP `401 Unauthorized` response is not part of the documented API contract.

If a request returns `401`, verify that the request reached `prince.juguilon.com` and that an intermediary has not replaced the response. Do not hunt for a token endpoint or retry with guessed credentials. A `404` means the resource is not in the API index; fetch `/api/v1` or `/openapi.json` for canonical URLs.

## 7. Revocation

Revocation does not apply because the service does not issue access tokens, identity assertions, refresh tokens, API keys, or sessions. There is no `revocation_uri`. Stop access by ceasing requests; there is no credential state to clean up.

## Security contact

Report a security concern through the contact details on [Prince Juguilon's contact page](https://prince.juguilon.com/contact).
