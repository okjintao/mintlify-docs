#!/bin/bash

# MCP Setup Script for Berachain Documentation
# This script helps set up Model Context Protocol for your Mintlify documentation

echo "🚀 Setting up MCP for Berachain Documentation"
echo ""

# Check if subdomain is provided
if [ -z "$1" ]; then
    echo "❌ Error: Subdomain is required"
    echo ""
    echo "Usage: ./setup-mcp.sh <your-subdomain>"
    echo ""
    echo "Examples:"
    echo "  ./setup-mcp.sh berachain          # For berachain.mintlify.app"
    echo "  ./setup-mcp.sh docs.berachain.com # For custom domain"
    echo ""
    echo "📝 Note: Your documentation must be deployed to Mintlify first!"
    echo "   Get your API keys from: https://app.mintlify.com/settings/api-keys"
    exit 1
fi

SUBDOMAIN=$1

echo "📦 Installing @mintlify/mcp package..."
echo ""

# Install and run MCP setup
npx @mintlify/mcp add "$SUBDOMAIN" --client cursor

echo ""
echo "✅ MCP setup complete!"
echo ""
echo "📚 Next steps:"
echo "   1. The setup should have configured MCP for Cursor"
echo "   2. Restart Cursor to use the MCP server"
echo "   3. Try asking questions about your documentation!"
echo ""
echo "💡 Example queries:"
echo "   - 'How does Proof-of-Liquidity work?'"
echo "   - 'Show me the HoneyFactory contract reference'"
echo "   - 'What are the block reward parameters?'"

