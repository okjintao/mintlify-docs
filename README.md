# Berachain Documentation

Welcome to the unified Berachain documentation! This repository contains comprehensive documentation for Berachain and its native protocols: BEX and Bend.

## 📚 Documentation Structure

This documentation is organized into three main tabs:

### 🔷 Berachain (Core)
Documentation for the Berachain L1 blockchain:
- **Getting Started**: Introduction and overview
- **Learn**: Deep dives into Proof-of-Liquidity, tokenomics, and architecture
- **Developers**: Quickstart guides, API references, and development resources
- **Infrastructure**: Node setup, validator guides, and network operations

### 🔄 BEX (Decentralized Exchange)
Native DEX protocol on Berachain:
- **Overview**: Introduction to BEX and its features
- **User Guides**: Trading, providing liquidity, and earning rewards
- **Developers**: SDK integration, smart contract references, and examples
- **Contracts**: Smart contract addresses and technical details

### 💰 Bend (Lending Protocol)
Native lending and borrowing protocol:
- **Overview**: Introduction to Bend and its features
- **User Guides**: Lending, borrowing, and position management
- **Developers**: SDK integration, smart contract references, and examples
- **Contracts**: Smart contract addresses and risk parameters

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

Install the Berachain CLI:

```bash
npm i -g mint
```

### Local Development

Run the documentation locally:

```bash
mint dev
```

View at `http://localhost:3000`

### Building for Production

```bash
mint build
```

## 📁 Project Structure

```
mintlify-docs/
├── berachain/              # Berachain core documentation
│   ├── introduction.mdx
│   ├── learn/
│   │   ├── overview.mdx
│   │   ├── proof-of-liquidity.mdx
│   │   └── tokenomics.mdx
│   ├── developers/
│   │   └── quickstart.mdx
│   ├── nodes/
│   │   └── setup.mdx
│   └── validators/
│       └── overview.mdx
│
├── bex/                    # BEX DEX documentation
│   ├── introduction.mdx
│   ├── guides/
│   │   ├── trading.mdx
│   │   └── liquidity.mdx
│   ├── developers/
│   │   └── integration.mdx
│   └── contracts/
│       └── overview.mdx
│
├── bend/                   # Bend lending documentation
│   ├── introduction.mdx
│   ├── guides/
│   │   ├── lending.mdx
│   │   └── borrowing.mdx
│   ├── developers/
│   │   └── integration.mdx
│   └── contracts/
│       └── overview.mdx
│
├── docs.json              # Berachain configuration
├── logo/
│   ├── light.svg
│   └── dark.svg
└── images/
```

## 🎨 Customization

### Theme & Branding

The documentation uses Berachain's brand colors (orange/brown theme). To customize:

1. Edit `docs.json`
2. Update colors in the `colors` section:
```json
{
  "colors": {
    "primary": "#E17726",
    "light": "#F89D4E",
    "dark": "#C96516"
  }
}
```

### Navigation

Navigation is configured in `docs.json` under the `navigation.tabs` section. Each tab represents a major section (Berachain, BEX, Bend).

To add a new page:
1. Create the `.mdx` file in the appropriate directory
2. Add the page path to `docs.json` under the relevant group

Example:
```json
{
  "group": "User Guides",
  "pages": [
    "bex/guides/trading",
    "bex/guides/liquidity",
    "bex/guides/your-new-page"  // Add here
  ]
}
```

### Logos

Replace the logo files in `/logo/`:
- `light.svg` - Logo for light mode
- `dark.svg` - Logo for dark mode

## 📝 Content Guidelines

### MDX Features

This documentation uses Berachain's extended MDX features:

#### Cards
```mdx
<Card title="Title" icon="icon-name" href="/path">
  Description
</Card>
```

#### Card Groups
```mdx
<CardGroup cols={2}>
  <Card>...</Card>
  <Card>...</Card>
</CardGroup>
```

#### Steps
```mdx
<Steps>
  <Step title="First Step">Content</Step>
  <Step title="Second Step">Content</Step>
</Steps>
```

#### Callouts
```mdx
<Note>Important information</Note>
<Tip>Helpful tip</Tip>
<Warning>Warning message</Warning>
<Check>Success message</Check>
```

#### Code Blocks
```mdx
\`\`\`javascript
// Your code here
\`\`\`
```

#### Accordions
```mdx
<AccordionGroup>
  <Accordion title="Question">
    Answer
  </Accordion>
</AccordionGroup>
```

## 🔗 Links & Resources

### Berachain Ecosystem

- **Website**: [berachain.com](https://berachain.com)
- **GitHub**: [github.com/berachain](https://github.com/berachain)
- **Discord**: [discord.gg/berachain](https://discord.gg/berachain)
- **Twitter**: [@berachain](https://x.com/berachain)

### Products

- **BEX**: [bex.berachain.com](https://bex.berachain.com)
- **Bend**: [bend.berachain.com](https://bend.berachain.com)
- **Faucet**: [faucet.berachain.com](https://faucet.berachain.com)
- **Explorer**: [artio.beratrail.io](https://artio.beratrail.io)

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally with `mint dev`
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Content Contributions

When adding new documentation:
- Follow existing content structure and style
- Use Berachain components appropriately
- Include code examples where relevant
- Add cross-references to related pages
- Test all links and code snippets

## 📄 License

This documentation is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 🆘 Support

Need help?

- **Documentation Issues**: Open an issue on GitHub
- **Technical Support**: Join our [Discord](https://discord.gg/berachain)
- **Developer Questions**: Visit the #developers channel on Discord

## 🔄 Updates

This documentation is continuously updated. To stay current:

1. **Watch** this repository for updates
2. Join our Discord for announcements
3. Follow [@berachain](https://x.com/berachain) on Twitter

## ✨ Features

- ✅ Unified documentation for Berachain, BEX, and Bend
- ✅ Tab-based navigation at the top
- ✅ Comprehensive user and developer guides
- ✅ Code examples and integration tutorials
- ✅ Smart contract references
- ✅ Interactive components (cards, accordions, steps)
- ✅ Search functionality
- ✅ Dark/light mode support
- ✅ Mobile responsive
- ✅ SEO optimized

## 🎯 Roadmap

- [ ] Add video tutorials
- [ ] Expand API documentation
- [ ] Add interactive code playgrounds
- [ ] Multi-language support
- [ ] Enhanced search with AI
- [ ] More code examples
- [ ] Community tutorials section

---

Built with ❤️ by the Berachain team
