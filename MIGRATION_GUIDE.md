# Documentation Migration Guide

This guide outlines the process for migrating documentation from the existing VitePress docs repository to the new Mintlify-based documentation structure.

---

## Source and Target

| | Path |
|---|---|
| **Source (Old)** | `/Users/jintaobera/Documents/docs/apps/` |
| **Target (New)** | `/Users/jintaobera/Documents/mintlify-docs/` |

---

## Current Source Structure

The existing documentation is organized as a VitePress monorepo:

```
docs/
├── apps/
│   ├── core/           # Core Berachain docs
│   │   └── content/
│   │       ├── beacon-kit/       # BeaconKit reference
│   │       ├── developers/       # Developer guides & contracts
│   │       ├── learn/            # Conceptual docs & guides
│   │       └── nodes/            # Validator/node docs
│   ├── bex/            # BEX (DEX) docs
│   │   └── content/
│   │       ├── developers/       # BEX SDK & contracts
│   │       └── learn/            # BEX concepts
│   └── bend/           # Bend (lending) docs
│       └── content/
│           ├── developers/       # Bend contracts
│           └── learn/            # Bend concepts
└── packages/           # Shared components (not migrated)
```

---

## Target Mintlify Structure

The new structure uses tabbed navigation for cleaner separation:

```
mintlify-docs/
├── general/            # Chain concepts (Tab 1)
│   ├── introduction/
│   ├── tokens/
│   ├── proof-of-liquidity/
│   ├── governance/
│   └── help/
├── bex/                # BEX concepts + dev docs (Tab 2)
│   ├── learn/
│   └── developers/
├── bend/               # Bend concepts + dev docs (Tab 3)
│   ├── learn/
│   └── developers/
├── build/              # All developer guides (Tab 4)
│   ├── getting-started/
│   ├── quickstart/
│   ├── guides/
│   ├── contracts/
│   ├── apis/
│   └── beaconkit/
└── validators/         # Node operation (Tab 5)
    ├── overview/
    ├── architecture/
    ├── guides/
    └── operations/
```

---

## Migration Steps

### Phase 1: Setup Directory Structure

Create the target directory structure in the Mintlify repo:

```bash
# General tab
mkdir -p general/introduction
mkdir -p general/tokens
mkdir -p general/proof-of-liquidity
mkdir -p general/governance
mkdir -p general/help

# BEX tab
mkdir -p bex/learn/concepts/pools
mkdir -p bex/learn/guides/liquidity
mkdir -p bex/developers/contracts/swaps
mkdir -p bex/developers/contracts/pools
mkdir -p bex/developers/contracts/factory
mkdir -p bex/developers/contracts/lp-tokens
mkdir -p bex/developers/sdk
mkdir -p bex/developers/help

# Bend tab
mkdir -p bend/learn/concepts/market
mkdir -p bend/learn/concepts/vault
mkdir -p bend/learn/guides
mkdir -p bend/developers/contracts
mkdir -p bend/developers/onchain

# Build tab
mkdir -p build/getting-started
mkdir -p build/quickstart
mkdir -p build/guides
mkdir -p build/contracts
mkdir -p build/apis
mkdir -p build/beaconkit

# Validators tab
mkdir -p validators/overview
mkdir -p validators/architecture
mkdir -p validators/guides
mkdir -p validators/operations
```

### Phase 2: File Migration Mapping

#### General Tab (from `core/content/learn/`)

| Source | Target |
|--------|--------|
| `core/learn/index.md` | `general/introduction/what-is-berachain.mdx` |
| `core/learn/what-is-proof-of-liquidity.md` | `general/introduction/what-is-proof-of-liquidity.mdx` |
| `core/learn/connect-to-berachain.md` | `general/introduction/connect-to-berachain.mdx` |
| `core/learn/how-to-get-bera.md` | `general/introduction/how-to-get-bera.mdx` |
| `core/learn/pol/tokens/tokenomics.md` | `general/tokens/overview.mdx` |
| `core/learn/pol/tokens/bera.md` | `general/tokens/bera.mdx` |
| `core/learn/pol/tokens/bgt.md` | `general/tokens/bgt.mdx` |
| `core/learn/pol/tokens/honey.md` | `general/tokens/honey.mdx` |
| `core/learn/pol/tokens/swbera.md` | `general/tokens/swbera.mdx` |
| `core/learn/pol/index.md` | `general/proof-of-liquidity/overview.mdx` |
| `core/learn/pol/participants.md` | `general/proof-of-liquidity/participants.mdx` |
| `core/learn/pol/rewardvaults.md` | `general/proof-of-liquidity/reward-vaults.mdx` |
| `core/learn/pol/incentives.md` | `general/proof-of-liquidity/incentives.mdx` |
| `core/learn/pol/blockrewards.md` | `general/proof-of-liquidity/block-rewards.mdx` |
| `core/learn/pol/faqs.md` | `general/proof-of-liquidity/faqs.mdx` |
| `core/learn/governance/index.md` | `general/governance/overview.mdx` |
| `core/learn/governance/rewardvault.md` | `general/governance/reward-vault-governance.mdx` |
| `core/learn/help/faqs.md` | `general/help/faqs.mdx` |
| `core/learn/help/glossary.md` | `general/help/glossary.mdx` |

#### BEX Tab (from `bex/content/`)

| Source | Target |
|--------|--------|
| `bex/learn/index.md` | `bex/learn/overview.mdx` |
| `bex/learn/concepts/dex.md` | `bex/learn/concepts/dex.mdx` |
| `bex/learn/concepts/vault.md` | `bex/learn/concepts/vault.mdx` |
| `bex/learn/concepts/flash-loans.md` | `bex/learn/concepts/flash-loans.mdx` |
| `bex/learn/concepts/pools/index.md` | `bex/learn/concepts/pools/overview.mdx` |
| `bex/learn/concepts/pools/weighted-pools.md` | `bex/learn/concepts/pools/weighted-pools.mdx` |
| `bex/learn/concepts/pools/stable-pools.md` | `bex/learn/concepts/pools/stable-pools.mdx` |
| `bex/learn/guides/swaps.md` | `bex/learn/guides/swaps.mdx` |
| `bex/learn/guides/fees.md` | `bex/learn/guides/fees.mdx` |
| `bex/learn/guides/add-token.md` | `bex/learn/guides/add-token.mdx` |
| `bex/learn/guides/pool-configuration.md` | `bex/learn/guides/pool-configuration.mdx` |
| `bex/learn/guides/pool-creation.md` | `bex/learn/guides/pool-creation.mdx` |
| `bex/learn/guides/liquidity/intro.md` | `bex/learn/guides/liquidity/intro.mdx` |
| `bex/learn/guides/liquidity/pol.md` | `bex/learn/guides/liquidity/pol.mdx` |
| `bex/developers/index.md` | `bex/developers/overview.mdx` |
| `bex/developers/contracts/vault.md` | `bex/developers/contracts/vault.mdx` |
| `bex/developers/contracts/query.md` | `bex/developers/contracts/query.mdx` |
| `bex/developers/contracts/relayers.md` | `bex/developers/contracts/relayers.mdx` |
| `bex/developers/contracts/swaps/single_swap.md` | `bex/developers/contracts/swaps/single-swap.mdx` |
| `bex/developers/contracts/swaps/batch_swap.md` | `bex/developers/contracts/swaps/batch-swap.mdx` |
| `bex/developers/contracts/pools/pool-interfacing.md` | `bex/developers/contracts/pools/interfacing.mdx` |
| `bex/developers/contracts/pools/joins.md` | `bex/developers/contracts/pools/joins.mdx` |
| `bex/developers/contracts/pools/exit.md` | `bex/developers/contracts/pools/exit.mdx` |
| `bex/developers/contracts/factory/pool-creation-helper.md` | `bex/developers/contracts/factory/pool-creation-helper.mdx` |
| `bex/developers/contracts/factory/stable-pool-factory.md` | `bex/developers/contracts/factory/stable-pool-factory.mdx` |
| `bex/developers/contracts/factory/weighted-pool-factory.md` | `bex/developers/contracts/factory/weighted-pool-factory.mdx` |
| `bex/developers/contracts/lp_tokens/valuing.md` | `bex/developers/contracts/lp-tokens/valuing.mdx` |
| `bex/developers/contracts/lp_tokens/underlying.md` | `bex/developers/contracts/lp-tokens/underlying.mdx` |
| `bex/developers/sdk/index.md` | `bex/developers/sdk/overview.mdx` |
| `bex/developers/sdk/swap.md` | `bex/developers/sdk/swap.mdx` |
| `bex/developers/sdk/add-liquidity.md` | `bex/developers/sdk/add-liquidity.mdx` |
| `bex/developers/sdk/remove-liquidity.md` | `bex/developers/sdk/remove-liquidity.mdx` |
| `bex/developers/sdk/sor.md` | `bex/developers/sdk/sor.mdx` |
| `bex/developers/sdk/reference.md` | `bex/developers/sdk/reference.mdx` |
| `bex/developers/help/error-codes.md` | `bex/developers/help/error-codes.mdx` |

#### Bend Tab (from `bend/content/`)

| Source | Target |
|--------|--------|
| `bend/learn/index.md` | `bend/learn/overview.mdx` |
| `bend/learn/concepts/bundlers.md` | `bend/learn/concepts/bundlers.mdx` |
| `bend/learn/concepts/curator.md` | `bend/learn/concepts/curator.mdx` |
| `bend/learn/concepts/flashloans.md` | `bend/learn/concepts/flashloans.mdx` |
| `bend/learn/concepts/irm.md` | `bend/learn/concepts/irm.mdx` |
| `bend/learn/concepts/oracle.md` | `bend/learn/concepts/oracle.mdx` |
| `bend/learn/concepts/market/index.md` | `bend/learn/concepts/market/overview.mdx` |
| `bend/learn/concepts/market/interest-rates.md` | `bend/learn/concepts/market/interest-rates.mdx` |
| `bend/learn/concepts/market/liquidation.md` | `bend/learn/concepts/market/liquidation.mdx` |
| `bend/learn/concepts/market/ltv.md` | `bend/learn/concepts/market/ltv.mdx` |
| `bend/learn/concepts/market/preliquidation.md` | `bend/learn/concepts/market/preliquidation.mdx` |
| `bend/learn/concepts/market/public-allocator.md` | `bend/learn/concepts/market/public-allocator.mdx` |
| `bend/learn/concepts/vault/index.md` | `bend/learn/concepts/vault/overview.mdx` |
| `bend/learn/concepts/vault/rewards-for-lenders.md` | `bend/learn/concepts/vault/rewards-for-lenders.mdx` |
| `bend/learn/concepts/vault/yield-fees.md` | `bend/learn/concepts/vault/yield-fees.mdx` |
| `bend/learn/guides/deposit-withdraw.md` | `bend/learn/guides/deposit-withdraw.mdx` |
| `bend/learn/guides/borrow-repay.md` | `bend/learn/guides/borrow-repay.mdx` |
| `bend/developers/index.md` | `bend/developers/overview.mdx` |
| `bend/developers/deployed-contracts.md` | `bend/developers/deployed-contracts.mdx` |
| `bend/developers/deployed-markets.md` | `bend/developers/deployed-markets.mdx` |
| `bend/developers/onchain/bundlers.md` | `bend/developers/onchain/bundlers.mdx` |
| `bend/developers/onchain/public-allocator.md` | `bend/developers/onchain/public-allocator.mdx` |
| `bend/developers/contracts/*.md` | `bend/developers/contracts/*.mdx` |

#### Build Tab (from `core/content/developers/`)

| Source | Target |
|--------|--------|
| `core/developers/index.md` | `build/getting-started/overview.mdx` |
| `core/developers/network-configurations.md` | `build/getting-started/network-configurations.mdx` |
| `core/developers/deployed-contracts.md` | `build/getting-started/deployed-contracts.mdx` |
| `core/developers/developer-tools.md` | `build/getting-started/developer-tools.mdx` |
| `core/developers/quickstart/index.md` | `build/quickstart/overview.mdx` |
| `core/developers/quickstart/bridge-to-berachain.md` | `build/quickstart/bridge-to-berachain.mdx` |
| `core/developers/quickstart/frontend.md` | `build/quickstart/frontend.mdx` |
| `core/developers/quickstart/pol-integration.md` | `build/quickstart/pol-integration.mdx` |
| `core/developers/guides/*.md` | `build/guides/*.mdx` |
| `core/learn/guides/*.md` | `build/guides/*.mdx` (PoL user guides) |
| `core/developers/contracts/*.md` | `build/contracts/*.mdx` |
| `core/developers/hub-api.md` | `build/apis/claim-api.mdx` |
| `core/learn/what-is-beaconkit.md` | `build/beaconkit/what-is-beaconkit.mdx` |
| `core/beacon-kit/*.md` | `build/beaconkit/*.mdx` |

#### Validators Tab (from `core/content/nodes/`)

| Source | Target |
|--------|--------|
| `core/nodes/index.md` | `validators/overview/index.mdx` |
| `core/nodes/quickstart.md` | `validators/overview/quickstart.mdx` |
| `core/nodes/production-checklist.md` | `validators/overview/production-checklist.mdx` |
| `core/nodes/beaconkit-consensus.md` | `validators/architecture/beaconkit-consensus.mdx` |
| `core/nodes/evm-execution.md` | `validators/architecture/evm-execution.mdx` |
| `core/nodes/validator-lifecycle.md` | `validators/architecture/validator-lifecycle.mdx` |
| `core/nodes/guides/*.md` | `validators/guides/*.mdx` |
| `core/nodes/monitoring.md` | `validators/operations/monitoring.mdx` |
| `core/nodes/faq.md` | `validators/operations/faq.mdx` |

### Phase 3: Content Conversion

For each migrated file:

1. **Change extension**: `.md` → `.mdx`

2. **Add Mintlify frontmatter**:
   ```yaml
   ---
   title: "Page Title"
   description: "Brief description for SEO"
   ---
   ```

3. **Update internal links**:
   - Old: `/developers/guides/create-erc20-contract-using-foundry`
   - New: `/build/guides/create-erc20-foundry`

4. **Convert VitePress components to Mintlify**:

   | VitePress | Mintlify |
   |-----------|----------|
   | `::: tip` | `<Tip>` |
   | `::: warning` | `<Warning>` |
   | `::: danger` | `<Error>` |
   | `::: info` | `<Info>` |
   | `[[toc]]` | (auto-generated) |
   | Custom Vue components | Mintlify components or MDX |

5. **Update image paths**:
   - Move images to `/images/` directory
   - Update references accordingly

### Phase 4: Navigation Configuration

Update `docs.json` to reflect the new structure:

```json
{
  "tabs": [
    {
      "name": "General",
      "url": "general"
    },
    {
      "name": "BEX",
      "url": "bex"
    },
    {
      "name": "Bend",
      "url": "bend"
    },
    {
      "name": "Build",
      "url": "build"
    },
    {
      "name": "Validators",
      "url": "validators"
    }
  ],
  "navigation": [
    // Define sidebar navigation for each tab
  ],
  "topbarLinks": [
    {
      "name": "Bera Hub",
      "url": "https://hub.berachain.com"
    },
    {
      "name": "Honey Swap",
      "url": "https://honeyswap.xyz"
    },
    {
      "name": "Bend",
      "url": "https://bend.berachain.com"
    }
  ]
}
```

### Phase 5: Cleanup

Content to be **removed** (not migrated):
- `core/learn/dapps/` - Replaced by external nav links
- `core/learn/berachain-nfts.md` - Marketing content
- `core/learn/changelog.md` - Move to GitHub releases
- `core/learn/pol/vaults.md` - Redundant with rewardvaults.md

Content to be **consolidated**:
- `core/learn/guides/safe-add-incentives-for-reward-vault.md` → Merge into `add-incentives.mdx`
- `core/learn/using-safe-wallet.md` → Link to Safe docs instead
- `core/learn/guides/berascan-token-update.md` → Move to Berascan's own docs
- `core/developers/guides/community-guides.md` → External blog/community site
- `core/learn/help/reward-vault-guidelines.md` → Merge into `setup-reward-vault` guide

---

## Migration Script

A basic migration script to automate the file copying and renaming:

```bash
#!/bin/bash
# migrate-docs.sh

SOURCE_DIR="/Users/jintaobera/Documents/docs/apps"
TARGET_DIR="/Users/jintaobera/Documents/mintlify-docs"

# Function to migrate a file
migrate_file() {
    local src=$1
    local dest=$2
    
    # Create destination directory
    mkdir -p "$(dirname "$dest")"
    
    # Copy and rename
    if [ -f "$src" ]; then
        cp "$src" "$dest"
        echo "Migrated: $src -> $dest"
    else
        echo "WARNING: Source not found: $src"
    fi
}

# Example migrations
migrate_file "$SOURCE_DIR/core/content/learn/index.md" \
    "$TARGET_DIR/general/introduction/what-is-berachain.mdx"

# Add more migrations here...
```

---

## Validation Checklist

After migration, verify:

- [ ] All pages render without errors
- [ ] Internal links work correctly
- [ ] Images display properly
- [ ] Code blocks are syntax highlighted
- [ ] Navigation structure matches design
- [ ] SEO metadata is present on all pages
- [ ] Mobile responsiveness is intact
- [ ] Search indexes correctly

---

## Timeline & Priority

### Priority 1: Core Infrastructure
1. Set up directory structure
2. Configure `docs.json` navigation
3. Migrate landing pages

### Priority 2: General Tab
1. Introduction section
2. Tokens section
3. Proof of Liquidity section
4. Governance section
5. Help section

### Priority 3: Build Tab
1. Getting Started
2. Quickstart guides
3. Developer guides
4. Contract references

### Priority 4: BEX & Bend Tabs
1. BEX Learn + Developers
2. Bend Learn + Developers

### Priority 5: Validators Tab
1. Overview
2. Architecture
3. Guides
4. Operations

### Priority 6: Polish
1. Fix broken links
2. Update outdated content
3. Add missing images
4. Review SEO metadata

---

## Notes

- The source docs use VitePress with Vue components; these will need to be converted to MDX/Mintlify components
- Image assets should be audited for size and moved to a CDN if appropriate
- Some SDK/API reference docs may benefit from auto-generation from source
- Consider setting up redirects from old URLs to new URLs for SEO preservation
