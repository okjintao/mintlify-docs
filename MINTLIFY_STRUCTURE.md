# Mintlify Documentation Structure Mapping

Current docs → Proposed Mintlify structure based on navigation layout.

---

## Top Navigation

```
┌─────────┬─────┬──────┬───────┬────────────┐       ┌──────────┬────────────┬──────┐
│ General │ BEX │ Bend │ Build │ Validators │       │ Bera Hub │ Honey Swap │ Bend │
└─────────┴─────┴──────┴───────┴────────────┘       └──────────┴────────────┴──────┘
  (tabs)                                              (external dApp links)
```

---

## General (Chain Concepts)

Conceptual/explainer content only. No guides here - those go in Build.

```
Introduction/
├── what-is-berachain         ← core/learn/index.md
├── what-is-proof-of-liquidity ← core/learn/what-is-proof-of-liquidity.md
├── connect-to-berachain      ← core/learn/connect-to-berachain.md
└── how-to-get-bera           ← core/learn/how-to-get-bera.md

Tokens/
├── overview                  ← core/learn/pol/tokens/tokenomics.md
├── bera                      ← core/learn/pol/tokens/bera.md
├── bgt                       ← core/learn/pol/tokens/bgt.md
├── honey                     ← core/learn/pol/tokens/honey.md
└── swbera                    ← core/learn/pol/tokens/swbera.md

Proof of Liquidity/
├── overview                  ← core/learn/pol/index.md
├── participants              ← core/learn/pol/participants.md
├── reward-vaults             ← core/learn/pol/rewardvaults.md
├── incentives                ← core/learn/pol/incentives.md
├── block-rewards             ← core/learn/pol/blockrewards.md
└── faqs                      ← core/learn/pol/faqs.md

Governance/
├── overview                  ← core/learn/governance/index.md
└── reward-vault-governance   ← core/learn/governance/rewardvault.md

Help/
├── faqs                      ← core/learn/help/faqs.md
└── glossary                  ← core/learn/help/glossary.md
```

---

## BEX

All BEX content - concepts and BEX-specific developer docs.

```
Learn/
├── overview                  ← bex/learn/index.md
├── concepts/
│   ├── dex                   ← bex/learn/concepts/dex.md
│   ├── vault                 ← bex/learn/concepts/vault.md
│   ├── flash-loans           ← bex/learn/concepts/flash-loans.md
│   └── pools/
│       ├── overview          ← bex/learn/concepts/pools/index.md
│       ├── weighted-pools    ← bex/learn/concepts/pools/weighted-pools.md
│       └── stable-pools      ← bex/learn/concepts/pools/stable-pools.md
└── guides/
    ├── swaps                 ← bex/learn/guides/swaps.md
    ├── fees                  ← bex/learn/guides/fees.md
    ├── add-token             ← bex/learn/guides/add-token.md
    ├── pool-configuration    ← bex/learn/guides/pool-configuration.md
    ├── pool-creation         ← bex/learn/guides/pool-creation.md
    └── liquidity/
        ├── intro             ← bex/learn/guides/liquidity/intro.md
        └── pol               ← bex/learn/guides/liquidity/pol.md

Developers/
├── overview                  ← bex/developers/index.md
├── contracts/
│   ├── vault                 ← bex/developers/contracts/vault.md
│   ├── query                 ← bex/developers/contracts/query.md
│   ├── relayers              ← bex/developers/contracts/relayers.md
│   ├── swaps/
│   │   ├── single-swap       ← bex/developers/contracts/swaps/single_swap.md
│   │   └── batch-swap        ← bex/developers/contracts/swaps/batch_swap.md
│   ├── pools/
│   │   ├── interfacing       ← bex/developers/contracts/pools/pool-interfacing.md
│   │   ├── joins             ← bex/developers/contracts/pools/joins.md
│   │   └── exit              ← bex/developers/contracts/pools/exit.md
│   ├── factory/
│   │   ├── pool-creation-helper ← bex/developers/contracts/factory/pool-creation-helper.md
│   │   ├── stable-pool-factory  ← bex/developers/contracts/factory/stable-pool-factory.md
│   │   └── weighted-pool-factory← bex/developers/contracts/factory/weighted-pool-factory.md
│   └── lp-tokens/
│       ├── valuing           ← bex/developers/contracts/lp_tokens/valuing.md
│       └── underlying        ← bex/developers/contracts/lp_tokens/underlying.md
├── sdk/
│   ├── overview              ← bex/developers/sdk/index.md
│   ├── swap                  ← bex/developers/sdk/swap.md
│   ├── add-liquidity         ← bex/developers/sdk/add-liquidity.md
│   ├── remove-liquidity      ← bex/developers/sdk/remove-liquidity.md
│   ├── sor                   ← bex/developers/sdk/sor.md
│   └── reference             ← bex/developers/sdk/reference.md
└── help/
    └── error-codes           ← bex/developers/help/error-codes.md
```

---

## Bend

All Bend content - concepts and Bend-specific developer docs.

```
Learn/
├── overview                  ← bend/learn/index.md
├── concepts/
│   ├── bundlers              ← bend/learn/concepts/bundlers.md
│   ├── curator               ← bend/learn/concepts/curator.md
│   ├── flashloans            ← bend/learn/concepts/flashloans.md
│   ├── irm                   ← bend/learn/concepts/irm.md
│   ├── oracle                ← bend/learn/concepts/oracle.md
│   ├── market/
│   │   ├── overview          ← bend/learn/concepts/market/index.md
│   │   ├── interest-rates    ← bend/learn/concepts/market/interest-rates.md
│   │   ├── liquidation       ← bend/learn/concepts/market/liquidation.md
│   │   ├── ltv               ← bend/learn/concepts/market/ltv.md
│   │   ├── preliquidation    ← bend/learn/concepts/market/preliquidation.md
│   │   └── public-allocator  ← bend/learn/concepts/market/public-allocator.md
│   └── vault/
│       ├── overview          ← bend/learn/concepts/vault/index.md
│       ├── rewards-for-lenders← bend/learn/concepts/vault/rewards-for-lenders.md
│       └── yield-fees        ← bend/learn/concepts/vault/yield-fees.md
└── guides/
    ├── deposit-withdraw      ← bend/learn/guides/deposit-withdraw.md
    └── borrow-repay          ← bend/learn/guides/borrow-repay.md

Developers/
├── overview                  ← bend/developers/index.md
├── deployed-contracts        ← bend/developers/deployed-contracts.md
├── deployed-markets          ← bend/developers/deployed-markets.md
├── onchain/
│   ├── bundlers              ← bend/developers/onchain/bundlers.md
│   └── public-allocator      ← bend/developers/onchain/public-allocator.md
└── contracts/
    ├── morpho                ← bend/developers/contracts/morpho.md
    ├── adaptive-curve-irm    ← bend/developers/contracts/adaptive-curve-irm.md
    ├── bundler3              ← bend/developers/contracts/bundler3.md
    ├── general-adapter-1     ← bend/developers/contracts/general-adapter-1.md
    ├── meta-morpho-v1_1      ← bend/developers/contracts/meta-morpho-v1_1.md
    ├── meta-morpho-factory   ← bend/developers/contracts/meta-morpho-factory-v1_1.md
    ├── meta-fee-partitioner  ← bend/developers/contracts/meta-fee-partitioner.md
    ├── morpho-chainlink-oracle ← bend/developers/contracts/morpho-chainlink-oracle-v2.md
    ├── morpho-oracle-factory ← bend/developers/contracts/morpho-chainlink-oracle-v2-factory.md
    ├── public-allocator      ← bend/developers/contracts/public-allocator.md
    ├── urd                   ← bend/developers/contracts/urd.md
    └── urd-factory           ← bend/developers/contracts/urd-factory.md
```

---

## Build (Developer Guides & How-Tos)

All guides, tutorials, and developer resources consolidated here.

```
Getting Started/
├── overview                  ← core/developers/index.md
├── network-configurations    ← core/developers/network-configurations.md
├── deployed-contracts        ← core/developers/deployed-contracts.md
└── developer-tools           ← core/developers/developer-tools.md

Quickstart/
├── overview                  ← core/developers/quickstart/index.md
├── bridge-to-berachain       ← core/developers/quickstart/bridge-to-berachain.md
├── frontend                  ← core/developers/quickstart/frontend.md
└── pol-integration           ← core/developers/quickstart/pol-integration.md

Guides/
├── create-erc20-foundry      ← core/developers/guides/create-erc20-contract-using-foundry.md
├── create-helloworld-hardhat ← core/developers/guides/create-helloworld-contract-using-hardhat.md
├── deploy-nextjs-walletconnect ← core/developers/guides/deploy-contract-using-nextjs-walletconnect.md
├── verify-contracts          ← core/developers/guides/verify-smart-contracts.md
├── eip-5792-overview         ← core/developers/guides/eip-5792-overview.md
├── eip-5792-metamask         ← core/developers/guides/eip-5792-metamask-guide.md
├── eip7702-basics            ← core/developers/guides/eip7702-basics.md
├── eip7702-batch-tx          ← core/developers/guides/eip7702-batch-transactions.md
├── eip7702-gas-sponsorship   ← core/developers/guides/eip7702-gas-sponsorship.md
├── advanced-pol              ← core/developers/guides/advanced-pol.md
├── partial-reward-claims     ← core/developers/guides/partial-reward-claims.md
├── staking-for-others        ← core/developers/guides/staking-for-other-accounts.md
├── bera-staking              ← core/learn/guides/bera-staking.md
├── claim-bgt                 ← core/learn/guides/claim-bgt.md
├── claim-incentives          ← core/learn/guides/claim-incentives.md
├── boost-a-validator        ← core/learn/guides/boost-a-validator.md
├── setup-reward-vault        ← core/learn/guides/setup-reward-vault.md
└── add-incentives            ← core/learn/guides/add-incentives-for-reward-vault.md

Contracts Reference/
├── beacondeposit             ← core/developers/contracts/beacondeposit.md
├── berachef                  ← core/developers/contracts/berachef.md
├── bgt-token                 ← core/developers/contracts/bgt-token.md
├── bgt-staker                ← core/developers/contracts/bgt-staker.md
├── bgt-incentive-fee-collector ← core/developers/contracts/bgt-incentive-fee-collector.md
├── bgtincentivedistributor   ← core/developers/contracts/bgtincentivedistributor.md
├── block-reward-controller   ← core/developers/contracts/block-reward-controller.md
├── distributor               ← core/developers/contracts/distributor.md
├── fee-collector             ← core/developers/contracts/fee-collector.md
├── governance                ← core/developers/contracts/governance.md
├── honey-token               ← core/developers/contracts/honey-token.md
├── honey-factory             ← core/developers/contracts/honey-factory.md
├── honey-factory-reader      ← core/developers/contracts/honey-factory-reader.md
├── reward-vault              ← core/developers/contracts/reward-vault.md
├── reward-vault-factory      ← core/developers/contracts/reward-vault-factory.md
├── wbera-token               ← core/developers/contracts/wbera-token.md
├── wbera-staker-vault        ← core/developers/contracts/wbera-staker-vault.md
├── timelock                  ← core/developers/contracts/timelock.md
├── create2                   ← core/developers/contracts/create2.md
├── multicall3                ← core/developers/contracts/multicall3.md
└── permit2                   ← core/developers/contracts/permit2.md

APIs/
└── claim-api                 ← core/developers/claim-api.md

BeaconKit/
├── what-is-beaconkit         ← core/learn/what-is-beaconkit.md
├── api                       ← core/beacon-kit/api.md
├── cli                       ← core/beacon-kit/cli.md
└── configuration             ← core/beacon-kit/configuration.md
```

---

## Validators (Running Nodes)

```
Overview/
├── index                     ← core/nodes/index.md
├── quickstart                ← core/nodes/quickstart.md
└── production-checklist      ← core/nodes/production-checklist.md

Architecture/
├── beaconkit-consensus       ← core/nodes/beaconkit-consensus.md
├── evm-execution             ← core/nodes/evm-execution.md
└── validator-lifecycle       ← core/nodes/validator-lifecycle.md

Guides/
├── run-validator             ← core/nodes/guides/validator.md
├── kurtosis-devnet           ← core/nodes/guides/kurtosis.md
├── docker-devnet             ← core/nodes/guides/docker-devnet.md
├── increase-stake            ← core/nodes/guides/increase-validator-bera-stake.md
├── withdraw-stake            ← core/nodes/guides/withdraw-stake.md
├── operator-address          ← core/nodes/guides/operator-address.md
├── reward-allocation         ← core/nodes/guides/reward-allocation.md
└── manage-incentives         ← core/nodes/guides/manage-incentives-commission.md

Operations/
├── monitoring                ← core/nodes/monitoring.md
└── faq                       ← core/nodes/faq.md
```

---

## External dApp Links (Right Nav)

```
Bera Hub     → https://hub.berachain.com
Honey Swap   → https://honeyswap.xyz
Bend         → https://bend.berachain.com
```

---

## Summary

| Tab | Content Type | Source |
|-----|--------------|--------|
| General | Chain concepts, PoL explainers | `core/learn/` (concepts only) |
| BEX | BEX concepts + BEX dev docs | `bex/` |
| Bend | Bend concepts + Bend dev docs | `bend/` |
| Build | All guides, tutorials, contract refs | `core/developers/` + `core/learn/guides/` |
| Validators | Node operation | `core/nodes/` |

---

## Extraneous / Remove

Content that doesn't fit the new structure or is redundant.

```
Remove:
├── core/learn/dapps/             # Replaced by external nav links
│   ├── berahub.md
│   ├── bex.md
│   ├── honey-swap.md
│   ├── bridge.md
│   └── beratrail.md
├── core/learn/berachain-nfts.md  # Marketing content, not protocol docs
├── core/learn/changelog.md       # Move to GitHub releases
└── core/learn/pol/vaults.md      # Overlaps with rewardvaults.md

Consolidate:
├── core/learn/guides/safe-add-incentives-for-reward-vault.md
│   └── → Merge into add-incentives.md
├── core/learn/using-safe-wallet.md
│   └── → Link to Safe docs instead
├── core/learn/guides/berascan-token-update.md
│   └── → Move to Berascan's own docs
├── core/developers/guides/community-guides.md
│   └── → External blog/community site
└── core/learn/help/reward-vault-guidelines.md
    └── → Merge into setup-reward-vault guide

Review:
├── bex/learn/guides/pool-creation/ (2 files)
│   └── → May overlap with pool-creation.md
├── bex/developers/guides/pool-creation.md
│   └── → May overlap with learn/guides version
└── core/learn/pol/faqs.md
    └── → May overlap with help/faqs.md
```

| Category | Count |
|----------|-------|
| Remove | 7 |
| Consolidate | 5 |
| Review for overlap | 4 |
