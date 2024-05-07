# Perennial Typescript SDK - DRAFT

A collection of functions to interact with the Perennial V2 markets. Within it you'll find:

- Read functions for:
  - Markets
  - Vaults
- Helper Functions
  - Building transaction data
  - Positions
  - Interest Rate& Funding
- Constants
  - Network (Chain & Oracle)
  - Contracts
  - Markets
- ABIs of contracts
- Types

## Getting Started

Use the following commands to install:

```bash
yarn add perennial-sdk-ts
```

## Utilization

**Important:** The provider passed to this library _must_ have the RPC call: `eth_call` available.

### Examples

You can check out the various examples of how to use this code base in the `/examples` folder. To run these examples use the following command:

```bash
  npx esno ./examples/onchain/fetchFormatMakerData.ts
```

If you need to add `env` variables you can front load them like this:

```bash
ALCHEMY_URL=<url_goes_here> npx esno ./examples/onchain/fetchFormatMakerData.ts
```

To fetch Maker position data for a specific user, define an `env` variable called `USER_ADDRESS` or front load as shown above

```bash
export USER_ADDRESS=<your_address_goes_here>
```


## To Do:

Chain Data:

- [x] Fetching account positions
- [x] Market Data
- [-] Taker Data
- [-] Maker Data

Graph:

- [x] Enable Graph usage
- [x] User PNL
- [x] Vault History
- [x] Market Volume

Examples:
- [x] Graph Fetch User PNL
- [-] Graph Fetch Vault History
- [-] Graph Fetch Market Volume
- [-] Fetch Maker Data

Housekeeping:

- [-] Normalize function names away from `use` to `fetch`
- [-] Clean up the file structure
- [-] Streamline the examples

