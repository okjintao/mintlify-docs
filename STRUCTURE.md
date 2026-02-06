# Berachain Docs Structure

## Tab Navigation Overview

The documentation uses **top-level tabs** to organize content for three main products under one unified documentation site:

```
┌─────────────────────────────────────────────────────────┐
│  [Berachain] [BEX] [Bend]                               │
└─────────────────────────────────────────────────────────┘
```

## Tab 1: Berachain

**Purpose**: Core blockchain documentation

```
Berachain/
├── Getting Started
│   └── Introduction
│
├── Learn
│   ├── Overview
│   ├── Proof-of-Liquidity
│   └── Tokenomics
│
├── Developers
│   └── Quickstart
│
└── Infrastructure
    ├── Node Setup
    └── Validator Overview
```

**Key Pages**:
- `/berachain/introduction.mdx` - Main landing page
- `/berachain/learn/proof-of-liquidity.mdx` - Core innovation
- `/berachain/developers/quickstart.mdx` - Developer onboarding

## Tab 2: BEX

**Purpose**: Decentralized Exchange (DEX) documentation

```
BEX/
├── Overview
│   └── Introduction
│
├── User Guides
│   ├── Trading
│   └── Providing Liquidity
│
├── Developers
│   └── Integration Guide
│
└── Contracts
    └── Smart Contract Overview
```

**Key Pages**:
- `/bex/introduction.mdx` - BEX overview
- `/bex/guides/trading.mdx` - How to trade
- `/bex/developers/integration.mdx` - SDK integration

## Tab 3: Bend

**Purpose**: Lending & Borrowing protocol documentation

```
Bend/
├── Overview
│   └── Introduction
│
├── User Guides
│   ├── Lending
│   └── Borrowing
│
├── Developers
│   └── Integration Guide
│
└── Contracts
    └── Smart Contract Overview
```

**Key Pages**:
- `/bend/introduction.mdx` - Bend overview
- `/bend/guides/lending.mdx` - How to lend
- `/bend/developers/integration.mdx` - SDK integration

## Navigation Flow

### User Journey Examples

#### New User Learning About Berachain:
```
1. Click "Berachain" tab
2. Read Introduction
3. Navigate to "Learn" → "Proof-of-Liquidity"
4. Navigate to "Learn" → "Tokenomics"
```

#### Trader Using BEX:
```
1. Click "BEX" tab
2. Read Introduction
3. Navigate to "User Guides" → "Trading"
4. Navigate to "User Guides" → "Providing Liquidity"
```

#### Developer Building with Bend:
```
1. Click "Bend" tab
2. Read Introduction
3. Navigate to "Developers" → "Integration Guide"
4. Reference "Contracts" → "Smart Contract Overview"
```

## Global Navigation Elements

### Top Navbar Links:
- **BEX** → External link to https://bex.berachain.com
- **Bend** → External link to https://bend.berachain.com
- **Faucet** → External link to https://faucet.berachain.com
- **Launch App** (button) → https://berachain.com

### Sidebar Anchors (visible on all tabs):
- **Website** → https://berachain.com
- **GitHub** → https://github.com/berachain
- **Discord** → https://discord.gg/berachain
- **Blog** → https://blog.berachain.com

### Footer Social Links:
- Twitter (X)
- GitHub
- Discord
- Telegram

## Configuration File

All navigation is configured in `docs.json`:

```json
{
  "navigation": {
    "tabs": [
      {
        "tab": "Berachain",
        "icon": "cube",
        "groups": [...]
      },
      {
        "tab": "BEX",
        "icon": "arrow-right-arrow-left",
        "groups": [...]
      },
      {
        "tab": "Bend",
        "icon": "hand-holding-dollar",
        "groups": [...]
      }
    ]
  }
}
```

## Cross-References Between Tabs

Documentation frequently cross-references between tabs:

### Example 1: Berachain → BEX
```mdx
Learn how to trade on [BEX](/bex/guides/trading)
```

### Example 2: BEX → Bend
```mdx
Use your LP tokens as collateral in [Bend](/bend/guides/borrowing)
```

### Example 3: Bend → Berachain
```mdx
Understand [Proof-of-Liquidity](/berachain/learn/proof-of-liquidity) to maximize BGT rewards
```

## Content Patterns

### Introduction Pages
Each tab has an introduction that includes:
- Overview of the product
- Key features (CardGroup)
- Quick navigation cards
- Links to getting started guides

### Guide Pages
User-facing guides include:
- Step-by-step instructions (Steps component)
- Visual examples
- Code snippets where relevant
- Warnings and tips (callouts)
- Next steps section

### Developer Pages
Technical integration guides include:
- Installation instructions (CodeGroup)
- SDK examples
- Direct contract interaction
- React integration examples
- Error handling
- Best practices

### Contract Pages
Smart contract documentation includes:
- Contract addresses (tables)
- Key functions
- Security audits
- Links to verified source code

## Visual Design Elements

### Color Scheme
- **Primary**: `#E17726` (Berachain orange)
- **Light**: `#F89D4E`
- **Dark**: `#C96516`

### Icons
- **Berachain**: cube
- **BEX**: arrow-right-arrow-left
- **Bend**: hand-holding-dollar

### Components Used
- `<Card>` - Navigation and feature highlights
- `<CardGroup>` - Grouped navigation
- `<Steps>` - Step-by-step instructions
- `<Accordion>` - FAQ and expandable content
- `<Note>`, `<Tip>`, `<Warning>`, `<Check>` - Callouts
- Code blocks with syntax highlighting
- Tables for comparisons and data

## File Naming Conventions

- Use kebab-case: `proof-of-liquidity.mdx`
- Use descriptive names: `trading.mdx`, not `guide1.mdx`
- Group related content in folders: `/guides/`, `/developers/`, `/contracts/`
- Main landing page: `introduction.mdx`

## Adding New Content

### To add a new page under Berachain:

1. Create the file:
```bash
touch berachain/learn/new-topic.mdx
```

2. Add to `docs.json`:
```json
{
  "group": "Learn",
  "pages": [
    "berachain/learn/overview",
    "berachain/learn/proof-of-liquidity",
    "berachain/learn/tokenomics",
    "berachain/learn/new-topic"  // Add here
  ]
}
```

3. Add frontmatter to the file:
```mdx
---
title: "New Topic"
description: "Description of new topic"
---

# Content here
```

### To add a new group:

```json
{
  "tab": "Berachain",
  "groups": [
    {
      "group": "New Group Name",
      "pages": [
        "berachain/new-group/page1",
        "berachain/new-group/page2"
      ]
    }
  ]
}
```

## URLs and Paths

### URL Structure:
```
https://docs.berachain.com/berachain/learn/proof-of-liquidity
                         └─tab─┘ └─group┘ └────page────┘

https://docs.berachain.com/bex/guides/trading
                         └tab┘ └group┘ └page┘

https://docs.berachain.com/bend/developers/integration
                         └tab┘ └──group──┘ └──page──┘
```

### Internal Links:
```mdx
[Link text](/berachain/learn/proof-of-liquidity)
[Link text](/bex/guides/trading)
[Link text](/bend/guides/lending)
```

## Search Configuration

Search is enabled by default and indexes all content across all three tabs. Users can search for content regardless of which tab they're on.

## Mobile Experience

The tab navigation adapts to mobile:
- Tabs become a dropdown selector on mobile
- Sidebar navigation is collapsible
- All components are responsive

## Best Practices

1. **Consistent Structure**: Keep similar structures across all three tabs
2. **Cross-Reference**: Link between tabs when concepts are related
3. **User-First**: Write for the user's journey, not the tech stack
4. **Code Examples**: Always include working code examples in developer guides
5. **Visual Hierarchy**: Use components (Cards, Steps, etc.) to break up text
6. **Keep Updated**: Update contract addresses when moving from testnet to mainnet
7. **Test Links**: Ensure all internal and external links work
8. **SEO**: Write descriptive titles and descriptions in frontmatter

---

This structure allows users to easily navigate between Berachain core documentation, BEX (DEX), and Bend (Lending) all within one unified documentation site! 🎉

