# MCP Setup Guide for Berachain Documentation

This guide explains how to set up Model Context Protocol (MCP) for the Berachain documentation.

## What is MCP?

Model Context Protocol (MCP) is a standardized way for AI tools like Claude, Cursor, and Windsurf to interact with your documentation. It allows AI assistants to:
- Search your documentation
- Access API endpoints (if you have OpenAPI specs)
- Provide real-time, contextual answers about your product

## Prerequisites

1. **Deployed Mintlify Site**: Your documentation must be deployed to Mintlify and have a subdomain (e.g., `berachain.mintlify.app` or a custom domain)
2. **Mintlify Account**: You need access to the Mintlify dashboard
3. **API Keys**: You'll need API keys from your Mintlify dashboard

## Setup Steps

### 1. Get Your API Keys

1. Go to your [Mintlify Dashboard](https://app.mintlify.com)
2. Navigate to **Settings > API Keys**
3. Copy the following keys:
   - **External Admin Key**
   - **Assistant API Key**

### 2. Install MCP Server

Use the official Mintlify MCP package:

```bash
npx @mintlify/mcp add <your-subdomain>
```

Replace `<your-subdomain>` with your actual Mintlify subdomain. For example:
- If your docs are at `berachain.mintlify.app`, use `berachain`
- If you have a custom domain like `docs.berachain.com`, use that full domain

**Note**: You can also install it globally for easier access:
```bash
npm install -g @mintlify/mcp
mcp add <your-subdomain>
```

### 3. Authenticate

When prompted, enter your API keys:
- External Admin Key
- Assistant API Key

### 4. Select MCP Clients

Choose which MCP clients to enable:
- **Claude Desktop**
- **Cursor**
- **Windsurf**
- **Other MCP-compatible tools**

### 5. Verify Setup

Once configured, your MCP server will be ready. It includes:
- **Search tool**: Query information across your entire documentation
- **API tools**: If you have OpenAPI specs configured with `x-mcp` extensions

## Using MCP with Your Documentation

After setup, users can interact with your documentation through AI tools:

### Example Queries

- "How does Proof-of-Liquidity work?"
- "Show me how to integrate with Berachain's PoL system"
- "What are the block reward parameters?"
- "How do I use the HoneyFactory contract?"

### API Integration

If you have OpenAPI specifications, you can expose specific endpoints as MCP tools by adding the `x-mcp` extension:

**File-level** (enable for all endpoints):
```json
{
  "openapi": "3.1.0",
  "x-mcp": {
    "enabled": true
  }
}
```

**Endpoint-level** (enable for specific endpoints):
```json
{
  "paths": {
    "/api/v1/users": {
      "x-mcp": {
        "enabled": true
      }
    }
  }
}
```

## Current Documentation Structure

Your documentation is organized into three main tabs:

1. **Berachain** - Core blockchain documentation
   - Proof of Liquidity (POL)
   - Integration guides
   - Block rewards
   - Honey stablecoin

2. **BEX** - Decentralized Exchange documentation
   - Trading guides
   - Liquidity provision
   - Developer integration

3. **Bend** - Lending protocol documentation
   - Lending guides
   - Borrowing guides
   - Developer integration

## Next Steps

1. **Deploy your documentation to Mintlify** (if not already deployed)
   - Push your docs to a Git repository
   - Connect it to Mintlify
   - Your docs will be available at `<subdomain>.mintlify.app`

2. **Get your API keys** from the Mintlify dashboard
   - Go to Settings > API Keys
   - Copy External Admin Key and Assistant API Key

3. **Install MCP server**:
   ```bash
   npx @mintlify/mcp add <your-subdomain>
   ```

4. **Configure for your MCP client** (Cursor, Claude Desktop, Windsurf, etc.)
   - The setup will guide you through client configuration
   - You can specify clients with: `npx @mintlify/mcp add <subdomain> --client cursor`

5. **Test MCP queries** with your preferred AI tool

## Resources

- [Mintlify MCP Documentation](https://www.mintlify.com/docs/mcp)
- [What is MCP Blog Post](https://www.mintlify.com/blog/what-is-mcp-and-how-to-get-started)
- [MCP Specification](https://modelcontextprotocol.io)

