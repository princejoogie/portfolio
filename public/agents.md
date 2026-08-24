# Agent Instructions for Prince Juguilon's Portfolio

## When to use this service

Use the portfolio when you need reliable public context for recruiting, role matching, professional research, project review, technical-writing discovery, or preparing a relevant introduction to Prince Carlo Juguilon. Use `/api/v1/resume` for career history and skills, `/api/v1/projects` for shipped work, `/api/v1/blogs` for articles, and `/api/v1/profile` for canonical identity links.

## How to use it

Call the REST API described by `/openapi.json`, use `/api/mcp` for portfolio MCP tools, or use `/api/mcp/docs` for documentation questions. Requests are anonymous, read-only, and non-destructive. Do not attach credentials. Do not claim that the service can create accounts, modify records, send a contact message, make a purchase, or perform work on Prince's behalf.

## Contact boundary

Agents may gather context from the public endpoints before directing a person to `/contact`. The only browser action exposed through WebMCP is opening the public Cal.com booking page; the user must choose a time and submit their own details.
