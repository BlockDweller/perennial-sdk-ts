export const VaultArtifact = {
  _format: "hh-sol-artifact-1",
  contractName: "VaultLens",
  sourceName: "contracts/Lens.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "int256",
          name: "value",
          type: "int256",
        },
      ],
      name: "UFixed6UnderflowError",
      type: "error",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "contract IPythOracle",
              name: "pyth",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "index",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "version",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "updateData",
              type: "bytes",
            },
          ],
          internalType: "struct PriceCommitData[]",
          name: "commits",
          type: "tuple[]",
        },
        {
          internalType: "contract Lens",
          name: "marketLens",
          type: "address",
        },
        {
          internalType: "contract IVault[]",
          name: "vaults",
          type: "address[]",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "multiInvoker",
          type: "address",
        },
      ],
      name: "snapshot",
      outputs: [
        {
          components: [
            {
              internalType: "bytes[]",
              name: "commitmentStatus",
              type: "bytes[]",
            },
            {
              internalType: "bytes[]",
              name: "updateStatus",
              type: "bytes[]",
            },
            {
              internalType: "bytes[]",
              name: "settleStatus",
              type: "bytes[]",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "cap",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct VaultParameter",
                      name: "parameter",
                      type: "tuple",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalAssets",
                      type: "int256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalShares",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalMarkets",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "weight",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "leverage",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Registration[]",
                      name: "registrations",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "vaultAccount",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "latestCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "currentCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "latestMapping",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "currentMapping",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalSettlementFee",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalMarketCollateral",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "fundingFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "interestFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "positionFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "oracleFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "riskFee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "maxPendingGlobal",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "maxPendingLocal",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerRewardRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "longRewardRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "shortRewardRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "settlementFee",
                              type: "uint256",
                            },
                            {
                              internalType: "bool",
                              name: "takerCloseAlways",
                              type: "bool",
                            },
                            {
                              internalType: "bool",
                              name: "makerCloseAlways",
                              type: "bool",
                            },
                            {
                              internalType: "bool",
                              name: "closed",
                              type: "bool",
                            },
                          ],
                          internalType: "struct MarketParameter",
                          name: "parameter",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "margin",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maintenance",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "takerFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "takerSkewFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "takerImpactFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerImpactFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerLimit",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "efficiencyLimit",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "liquidationFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "minLiquidationFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maxLiquidationFee",
                              type: "uint256",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "minRate",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "maxRate",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "targetRate",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "targetUtilization",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UJumpRateUtilizationCurve6",
                              name: "utilizationCurve",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "k",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "max",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct PController6",
                              name: "pController",
                              type: "tuple",
                            },
                            {
                              internalType: "UFixed6",
                              name: "minMargin",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "minMaintenance",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "virtualTaker",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "staleAfter",
                              type: "uint256",
                            },
                            {
                              internalType: "bool",
                              name: "makerReceiveOnly",
                              type: "bool",
                            },
                          ],
                          internalType: "struct RiskParameter",
                          name: "riskParameter",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "currentId",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "latestId",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "protocolFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "oracleFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "riskFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "donation",
                              type: "uint256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "_skew",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct PAccumulator6",
                              name: "pAccumulator",
                              type: "tuple",
                            },
                            {
                              internalType: "Fixed6",
                              name: "latestPrice",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Global",
                          name: "global",
                          type: "tuple",
                        },
                        {
                          internalType: "address",
                          name: "oracle",
                          type: "address",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "position",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "nextPosition",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position[]",
                          name: "pendingPositions",
                          type: "tuple[]",
                        },
                        {
                          components: [
                            {
                              internalType: "bool",
                              name: "valid",
                              type: "bool",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "makerValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "longValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "shortValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "makerReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "longReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "shortReward",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Version[]",
                          name: "versions",
                          type: "tuple[]",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "price",
                              type: "int256",
                            },
                            {
                              internalType: "bool",
                              name: "valid",
                              type: "bool",
                            },
                          ],
                          internalType: "struct OracleVersion",
                          name: "latestOracleVersion",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "currentOracleVersion",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Lens.MarketSnapshot[]",
                      name: "marketSnapshots",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          internalType: "address",
                          name: "account",
                          type: "address",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "currentId",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "latestId",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "reward",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "protection",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Local",
                          name: "local",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "position",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "nextPosition",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position[]",
                          name: "pendingPositions",
                          type: "tuple[]",
                        },
                        {
                          components: [
                            {
                              internalType: "bool",
                              name: "valid",
                              type: "bool",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "makerValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "longValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "shortValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "makerReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "longReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "shortReward",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Version[]",
                          name: "versions",
                          type: "tuple[]",
                        },
                        {
                          internalType: "Fixed6[]",
                          name: "prices",
                          type: "int256[]",
                        },
                      ],
                      internalType: "struct Lens.MarketAccountSnapshot[]",
                      name: "marketVaultSnapshots",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct VaultLens.VaultSnapshot[]",
                  name: "vaultSnapshots",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "accountData",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "assets",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "multiInvokerApproved",
                      type: "bool",
                    },
                  ],
                  internalType: "struct VaultLens.VaultAccountSnapshot[]",
                  name: "vaultAccountSnapshots",
                  type: "tuple[]",
                },
              ],
              internalType: "struct VaultLens.SnapshotResult",
              name: "preUpdate",
              type: "tuple",
            },
            {
              components: [
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "cap",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct VaultParameter",
                      name: "parameter",
                      type: "tuple",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalAssets",
                      type: "int256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalShares",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "totalMarkets",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "weight",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "leverage",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Registration[]",
                      name: "registrations",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "vaultAccount",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "latestCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "assets",
                          type: "int256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "fee",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "keeper",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "count",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Checkpoint",
                      name: "currentCheckpoint",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "latestMapping",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256[]",
                          name: "_ids",
                          type: "uint256[]",
                        },
                      ],
                      internalType: "struct Mapping",
                      name: "currentMapping",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "totalSettlementFee",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "totalMarketCollateral",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "fundingFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "interestFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "positionFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "oracleFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "riskFee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "maxPendingGlobal",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "maxPendingLocal",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerRewardRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "longRewardRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "shortRewardRate",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "settlementFee",
                              type: "uint256",
                            },
                            {
                              internalType: "bool",
                              name: "takerCloseAlways",
                              type: "bool",
                            },
                            {
                              internalType: "bool",
                              name: "makerCloseAlways",
                              type: "bool",
                            },
                            {
                              internalType: "bool",
                              name: "closed",
                              type: "bool",
                            },
                          ],
                          internalType: "struct MarketParameter",
                          name: "parameter",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "UFixed6",
                              name: "margin",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maintenance",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "takerFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "takerSkewFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "takerImpactFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerImpactFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "makerLimit",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "efficiencyLimit",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "liquidationFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "minLiquidationFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maxLiquidationFee",
                              type: "uint256",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "minRate",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "maxRate",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "targetRate",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "targetUtilization",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UJumpRateUtilizationCurve6",
                              name: "utilizationCurve",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "k",
                                  type: "uint256",
                                },
                                {
                                  internalType: "UFixed6",
                                  name: "max",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct PController6",
                              name: "pController",
                              type: "tuple",
                            },
                            {
                              internalType: "UFixed6",
                              name: "minMargin",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "minMaintenance",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "virtualTaker",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "staleAfter",
                              type: "uint256",
                            },
                            {
                              internalType: "bool",
                              name: "makerReceiveOnly",
                              type: "bool",
                            },
                          ],
                          internalType: "struct RiskParameter",
                          name: "riskParameter",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "currentId",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "latestId",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "protocolFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "oracleFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "riskFee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "donation",
                              type: "uint256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "_skew",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct PAccumulator6",
                              name: "pAccumulator",
                              type: "tuple",
                            },
                            {
                              internalType: "Fixed6",
                              name: "latestPrice",
                              type: "int256",
                            },
                          ],
                          internalType: "struct Global",
                          name: "global",
                          type: "tuple",
                        },
                        {
                          internalType: "address",
                          name: "oracle",
                          type: "address",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "position",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "nextPosition",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position[]",
                          name: "pendingPositions",
                          type: "tuple[]",
                        },
                        {
                          components: [
                            {
                              internalType: "bool",
                              name: "valid",
                              type: "bool",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "makerValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "longValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "shortValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "makerReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "longReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "shortReward",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Version[]",
                          name: "versions",
                          type: "tuple[]",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "price",
                              type: "int256",
                            },
                            {
                              internalType: "bool",
                              name: "valid",
                              type: "bool",
                            },
                          ],
                          internalType: "struct OracleVersion",
                          name: "latestOracleVersion",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "currentOracleVersion",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Lens.MarketSnapshot[]",
                      name: "marketSnapshots",
                      type: "tuple[]",
                    },
                    {
                      components: [
                        {
                          internalType: "contract IMarket",
                          name: "market",
                          type: "address",
                        },
                        {
                          internalType: "address",
                          name: "account",
                          type: "address",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "currentId",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "latestId",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "reward",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "protection",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Local",
                          name: "local",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "position",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position",
                          name: "nextPosition",
                          type: "tuple",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "timestamp",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "maker",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "long",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "short",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "UFixed6",
                              name: "keeper",
                              type: "uint256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "collateral",
                              type: "int256",
                            },
                            {
                              internalType: "Fixed6",
                              name: "delta",
                              type: "int256",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "maker",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "long",
                                  type: "int256",
                                },
                                {
                                  internalType: "Fixed6",
                                  name: "short",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Invalidation",
                              name: "invalidation",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Position[]",
                          name: "pendingPositions",
                          type: "tuple[]",
                        },
                        {
                          components: [
                            {
                              internalType: "bool",
                              name: "valid",
                              type: "bool",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "makerValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "longValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "Fixed6",
                                  name: "_value",
                                  type: "int256",
                                },
                              ],
                              internalType: "struct Accumulator6",
                              name: "shortValue",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "makerReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "longReward",
                              type: "tuple",
                            },
                            {
                              components: [
                                {
                                  internalType: "UFixed6",
                                  name: "_value",
                                  type: "uint256",
                                },
                              ],
                              internalType: "struct UAccumulator6",
                              name: "shortReward",
                              type: "tuple",
                            },
                          ],
                          internalType: "struct Version[]",
                          name: "versions",
                          type: "tuple[]",
                        },
                        {
                          internalType: "Fixed6[]",
                          name: "prices",
                          type: "int256[]",
                        },
                      ],
                      internalType: "struct Lens.MarketAccountSnapshot[]",
                      name: "marketVaultSnapshots",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct VaultLens.VaultSnapshot[]",
                  name: "vaultSnapshots",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "contract IVault",
                      name: "vault",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "account",
                      type: "address",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "current",
                          type: "uint256",
                        },
                        {
                          internalType: "uint256",
                          name: "latest",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "shares",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "assets",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "deposit",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "redemption",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct Account",
                      name: "accountData",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "assets",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "multiInvokerApproved",
                      type: "bool",
                    },
                  ],
                  internalType: "struct VaultLens.VaultAccountSnapshot[]",
                  name: "vaultAccountSnapshots",
                  type: "tuple[]",
                },
              ],
              internalType: "struct VaultLens.SnapshotResult",
              name: "postUpdate",
              type: "tuple",
            },
          ],
          internalType: "struct VaultLens.SnapshotReturnValue",
          name: "result",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IVault",
          name: "vault",
          type: "address",
        },
        {
          internalType: "contract Lens",
          name: "marketLens",
          type: "address",
        },
        {
          internalType: "bool",
          name: "postSettle",
          type: "bool",
        },
      ],
      name: "snapshotVault",
      outputs: [
        {
          components: [
            {
              internalType: "contract IVault",
              name: "vault",
              type: "address",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "cap",
                  type: "uint256",
                },
              ],
              internalType: "struct VaultParameter",
              name: "parameter",
              type: "tuple",
            },
            {
              internalType: "Fixed6",
              name: "totalAssets",
              type: "int256",
            },
            {
              internalType: "UFixed6",
              name: "totalShares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalMarkets",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "contract IMarket",
                  name: "market",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "weight",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "leverage",
                  type: "uint256",
                },
              ],
              internalType: "struct Registration[]",
              name: "registrations",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "current",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "latest",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "assets",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
              ],
              internalType: "struct Account",
              name: "vaultAccount",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "assets",
                  type: "int256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "count",
                  type: "uint256",
                },
              ],
              internalType: "struct Checkpoint",
              name: "latestCheckpoint",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "Fixed6",
                  name: "assets",
                  type: "int256",
                },
                {
                  internalType: "UFixed6",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "keeper",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "count",
                  type: "uint256",
                },
              ],
              internalType: "struct Checkpoint",
              name: "currentCheckpoint",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256[]",
                  name: "_ids",
                  type: "uint256[]",
                },
              ],
              internalType: "struct Mapping",
              name: "latestMapping",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256[]",
                  name: "_ids",
                  type: "uint256[]",
                },
              ],
              internalType: "struct Mapping",
              name: "currentMapping",
              type: "tuple",
            },
            {
              internalType: "UFixed6",
              name: "totalSettlementFee",
              type: "uint256",
            },
            {
              internalType: "Fixed6",
              name: "totalMarketCollateral",
              type: "int256",
            },
            {
              components: [
                {
                  internalType: "contract IMarket",
                  name: "market",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "fundingFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "interestFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "positionFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "oracleFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "riskFee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPendingGlobal",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "maxPendingLocal",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "makerRewardRate",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "longRewardRate",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "shortRewardRate",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "settlementFee",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "takerCloseAlways",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "makerCloseAlways",
                      type: "bool",
                    },
                    {
                      internalType: "bool",
                      name: "closed",
                      type: "bool",
                    },
                  ],
                  internalType: "struct MarketParameter",
                  name: "parameter",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "UFixed6",
                      name: "margin",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maintenance",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "takerFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "takerSkewFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "takerImpactFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "makerFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "makerImpactFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "makerLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "efficiencyLimit",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "liquidationFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "minLiquidationFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maxLiquidationFee",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "minRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "maxRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "targetRate",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "targetUtilization",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct UJumpRateUtilizationCurve6",
                      name: "utilizationCurve",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "k",
                          type: "uint256",
                        },
                        {
                          internalType: "UFixed6",
                          name: "max",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct PController6",
                      name: "pController",
                      type: "tuple",
                    },
                    {
                      internalType: "UFixed6",
                      name: "minMargin",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "minMaintenance",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "virtualTaker",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "staleAfter",
                      type: "uint256",
                    },
                    {
                      internalType: "bool",
                      name: "makerReceiveOnly",
                      type: "bool",
                    },
                  ],
                  internalType: "struct RiskParameter",
                  name: "riskParameter",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "currentId",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "latestId",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "protocolFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "oracleFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "riskFee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "donation",
                      type: "uint256",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "_value",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "_skew",
                          type: "int256",
                        },
                      ],
                      internalType: "struct PAccumulator6",
                      name: "pAccumulator",
                      type: "tuple",
                    },
                    {
                      internalType: "Fixed6",
                      name: "latestPrice",
                      type: "int256",
                    },
                  ],
                  internalType: "struct Global",
                  name: "global",
                  type: "tuple",
                },
                {
                  internalType: "address",
                  name: "oracle",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maker",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "long",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "short",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "keeper",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "collateral",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "delta",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "maker",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "long",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "short",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Invalidation",
                      name: "invalidation",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Position",
                  name: "position",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maker",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "long",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "short",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "keeper",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "collateral",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "delta",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "maker",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "long",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "short",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Invalidation",
                      name: "invalidation",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Position",
                  name: "nextPosition",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maker",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "long",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "short",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "keeper",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "collateral",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "delta",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "maker",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "long",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "short",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Invalidation",
                      name: "invalidation",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Position[]",
                  name: "pendingPositions",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "valid",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "_value",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Accumulator6",
                      name: "makerValue",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "_value",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Accumulator6",
                      name: "longValue",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "_value",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Accumulator6",
                      name: "shortValue",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "_value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct UAccumulator6",
                      name: "makerReward",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "_value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct UAccumulator6",
                      name: "longReward",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "_value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct UAccumulator6",
                      name: "shortReward",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Version[]",
                  name: "versions",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "price",
                      type: "int256",
                    },
                    {
                      internalType: "bool",
                      name: "valid",
                      type: "bool",
                    },
                  ],
                  internalType: "struct OracleVersion",
                  name: "latestOracleVersion",
                  type: "tuple",
                },
                {
                  internalType: "uint256",
                  name: "currentOracleVersion",
                  type: "uint256",
                },
              ],
              internalType: "struct Lens.MarketSnapshot[]",
              name: "marketSnapshots",
              type: "tuple[]",
            },
            {
              components: [
                {
                  internalType: "contract IMarket",
                  name: "market",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "account",
                  type: "address",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "currentId",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "latestId",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "collateral",
                      type: "int256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "reward",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "protection",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Local",
                  name: "local",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maker",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "long",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "short",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "keeper",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "collateral",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "delta",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "maker",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "long",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "short",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Invalidation",
                      name: "invalidation",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Position",
                  name: "position",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maker",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "long",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "short",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "keeper",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "collateral",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "delta",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "maker",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "long",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "short",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Invalidation",
                      name: "invalidation",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Position",
                  name: "nextPosition",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "timestamp",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "maker",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "long",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "short",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "UFixed6",
                      name: "keeper",
                      type: "uint256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "collateral",
                      type: "int256",
                    },
                    {
                      internalType: "Fixed6",
                      name: "delta",
                      type: "int256",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "maker",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "long",
                          type: "int256",
                        },
                        {
                          internalType: "Fixed6",
                          name: "short",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Invalidation",
                      name: "invalidation",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Position[]",
                  name: "pendingPositions",
                  type: "tuple[]",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "valid",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "_value",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Accumulator6",
                      name: "makerValue",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "_value",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Accumulator6",
                      name: "longValue",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "Fixed6",
                          name: "_value",
                          type: "int256",
                        },
                      ],
                      internalType: "struct Accumulator6",
                      name: "shortValue",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "_value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct UAccumulator6",
                      name: "makerReward",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "_value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct UAccumulator6",
                      name: "longReward",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "UFixed6",
                          name: "_value",
                          type: "uint256",
                        },
                      ],
                      internalType: "struct UAccumulator6",
                      name: "shortReward",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Version[]",
                  name: "versions",
                  type: "tuple[]",
                },
                {
                  internalType: "Fixed6[]",
                  name: "prices",
                  type: "int256[]",
                },
              ],
              internalType: "struct Lens.MarketAccountSnapshot[]",
              name: "marketVaultSnapshots",
              type: "tuple[]",
            },
          ],
          internalType: "struct VaultLens.VaultSnapshot",
          name: "vaultSnapshot",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IVault",
          name: "vault",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "multiInvoker",
          type: "address",
        },
        {
          internalType: "UFixed6",
          name: "vaultShares",
          type: "uint256",
        },
        {
          internalType: "Fixed6",
          name: "vaultAssets",
          type: "int256",
        },
      ],
      name: "snapshotVaultAccount",
      outputs: [
        {
          components: [
            {
              internalType: "contract IVault",
              name: "vault",
              type: "address",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "current",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "latest",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "shares",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "assets",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "deposit",
                  type: "uint256",
                },
                {
                  internalType: "UFixed6",
                  name: "redemption",
                  type: "uint256",
                },
              ],
              internalType: "struct Account",
              name: "accountData",
              type: "tuple",
            },
            {
              internalType: "UFixed6",
              name: "assets",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "multiInvokerApproved",
              type: "bool",
            },
          ],
          internalType: "struct VaultLens.VaultAccountSnapshot",
          name: "vaultAccountSnapshot",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IVault",
          name: "vault",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "UFixed6",
          name: "totalSettlementFee",
          type: "uint256",
        },
      ],
      name: "updateAndSettle",
      outputs: [
        {
          internalType: "bytes",
          name: "updateErr",
          type: "bytes",
        },
        {
          internalType: "bytes",
          name: "settleErr",
          type: "bytes",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b5061560280620000216000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f8b00d81461005157806366e7f423146100825780637204a64d146100b2578063ea646943146100e2575b600080fd5b61006b60048036038101906100669190611dea565b610112565b604051610079929190611ecd565b60405180910390f35b61009c60048036038101906100979190611f7a565b610327565b6040516100a9919061315d565b60405180910390f35b6100cc60048036038101906100c79190613579565b610cb1565b6040516100d99190613b66565b60405180910390f35b6100fc60048036038101906100f79190613bb4565b61133e565b6040516101099190613c9a565b60405180910390f35b6060806101ac858673ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101889190613ce2565b73ffffffffffffffffffffffffffffffffffffffff1661159790919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff1663d2c3aaf230856000806040518563ffffffff1660e01b81526004016101ec9493929190613d2d565b600060405180830381600087803b15801561020657600080fd5b505af1925050508015610217575060015b610256573d8060008114610247576040519150601f19603f3d011682016040523d82523d6000602084013e61024c565b606091505b5080925050610269565b6040518060200160405280600081525091505b8473ffffffffffffffffffffffffffffffffffffffff16636a256b29856040518263ffffffff1660e01b81526004016102a29190613d72565b600060405180830381600087803b1580156102bc57600080fd5b505af19250505080156102cd575060015b61030c573d80600081146102fd576040519150601f19603f3d011682016040523d82523d6000602084013e610302565b606091505b508091505061031f565b6040518060200160405280600081525090505b935093915050565b61032f611717565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103b2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103db9190613e2e565b81602001819052508373ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b8152600401602060405180830381865afa15801561042e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104529190613ec8565b81604001819052508373ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c99190613f0a565b8160600181815250508373ffffffffffffffffffffffffffffffffffffffff16633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561051d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105419190613f37565b8160800181815250508373ffffffffffffffffffffffffffffffffffffffff16638162486b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b99190613f79565b8160a00181815250508060a0015167ffffffffffffffff8111156105e0576105df613184565b5b60405190808252806020026020018201604052801561061957816020015b6106066117ce565b8152602001906001900390816105fe5790505b508160c001819052508060a0015167ffffffffffffffff8111156106405761063f613184565b5b60405190808252806020026020018201604052801561067957816020015b610666611805565b81526020019060019003908161065e5790505b50816101c001819052508060a0015167ffffffffffffffff8111156106a1576106a0613184565b5b6040519080825280602002602001820160405280156106da57816020015b6106c76118af565b8152602001906001900390816106bf5790505b50816101e001819052508373ffffffffffffffffffffffffffffffffffffffff16635e5c06e260006040518263ffffffff1660e01b815260040161071e9190613d72565b60c060405180830381865afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f9190614046565b8160e001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151602001516040518263ffffffff1660e01b81526004016107a89190614082565b60e060405180830381865afa1580156107c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e99190614151565b8161010001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151600001516040518263ffffffff1660e01b81526004016108339190614082565b60e060405180830381865afa158015610850573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108749190614151565b8161012001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151602001516040518263ffffffff1660e01b81526004016108be9190614082565b600060405180830381865afa1580156108db573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109049190614299565b8161014001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151600001516040518263ffffffff1660e01b815260040161094e9190614082565b600060405180830381865afa15801561096b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109949190614299565b81610160018190525060005b8160a00151811015610c78578473ffffffffffffffffffffffffffffffffffffffff1663f4ddb5be826040518263ffffffff1660e01b81526004016109e59190614082565b606060405180830381865afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190614384565b8260c001518281518110610a3d57610a3c6143b1565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16636eb79f6a8360c001518381518110610a7b57610a7a6143b1565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610aa391906143ef565b600060405180830381865afa158015610ac0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610ae99190614ec7565b826101c001518281518110610b0157610b006143b1565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16637987bd7f8360c001518381518110610b3f57610b3e6143b1565b5b602002602001015160000151876040518363ffffffff1660e01b8152600401610b69929190614f10565b600060405180830381865afa158015610b86573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610baf91906151aa565b826101e001518281518110610bc757610bc66143b1565b5b6020026020010181905250610c12826101c001518281518110610bed57610bec6143b1565b5b602002602001015160200151610140015183610180015161163a90919063ffffffff16565b82610180018181525050610c5b826101e001518281518110610c3757610c366143b1565b5b60200260200101516040015160400151836101a0015161165090919063ffffffff16565b826101a00181815250508080610c7090615222565b9150506109a0565b508115610caa57610ca081610120015160600151826101a0015161165090919063ffffffff16565b8160600181815250505b9392505050565b610cb9611932565b6000845167ffffffffffffffff811115610cd657610cd5613184565b5b604051908082528060200260200182016040528015610d0f57816020015b610cfc611717565b815260200190600190039081610cf45790505b5090506000855167ffffffffffffffff811115610d2f57610d2e613184565b5b604051908082528060200260200182016040528015610d6857816020015b610d5561196d565b815260200190600190039081610d4d5790505b50905060005b8651811015610e4f57610d9d878281518110610d8d57610d8c6143b1565b5b6020026020010151896000610327565b838281518110610db057610daf6143b1565b5b6020026020010181905250610e1e878281518110610dd157610dd06143b1565b5b60200260200101518787868581518110610dee57610ded6143b1565b5b602002602001015160800151878681518110610e0d57610e0c6143b1565b5b60200260200101516060015161133e565b828281518110610e3157610e306143b1565b5b60200260200101819052508080610e4790615222565b915050610d6e565b508183606001516000018190525080836060015160200181905250875167ffffffffffffffff811115610e8557610e84613184565b5b604051908082528060200260200182016040528015610eb857816020015b6060815260200190600190039081610ea35790505b50836000018190525060005b8851811015611021578773ffffffffffffffffffffffffffffffffffffffff16637e8306ad8a8381518110610efc57610efb6143b1565b5b6020026020010151600001518b8481518110610f1b57610f1a6143b1565b5b6020026020010151602001518c8581518110610f3a57610f396143b1565b5b6020026020010151604001518d8681518110610f5957610f586143b1565b5b6020026020010151606001518e8781518110610f7857610f776143b1565b5b6020026020010151608001516040518663ffffffff1660e01b8152600401610fa495949392919061528b565b6000604051808303816000875af1158015610fc3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610fec9190615355565b84600001518281518110611003576110026143b1565b5b6020026020010181905250808061101990615222565b915050610ec4565b50855167ffffffffffffffff81111561103d5761103c613184565b5b60405190808252806020026020018201604052801561107057816020015b606081526020019060019003908161105b5790505b508360400181905250855167ffffffffffffffff81111561109457611093613184565b5b6040519080825280602002602001820160405280156110c757816020015b60608152602001906001900390816110b25790505b50836020018190525060005b865181101561117f576111288782815181106110f2576110f16143b1565b5b6020026020010151878660600151600001518481518110611116576111156143b1565b5b60200260200101516101800151610112565b8560200151838151811061113f5761113e6143b1565b5b602002602001018660400151848151811061115d5761115c6143b1565b5b602002602001018290528290525050808061117790615222565b9150506110d3565b506000865167ffffffffffffffff81111561119d5761119c613184565b5b6040519080825280602002602001820160405280156111d657816020015b6111c3611717565b8152602001906001900390816111bb5790505b5090506000875167ffffffffffffffff8111156111f6576111f5613184565b5b60405190808252806020026020018201604052801561122f57816020015b61121c61196d565b8152602001906001900390816112145790505b50905060005b885181101561131657611264898281518110611254576112536143b1565b5b60200260200101518b6001610327565b838281518110611277576112766143b1565b5b60200260200101819052506112e5898281518110611298576112976143b1565b5b602002602001015189898685815181106112b5576112b46143b1565b5b6020026020010151608001518786815181106112d4576112d36143b1565b5b60200260200101516060015161133e565b8282815181106112f8576112f76143b1565b5b6020026020010181905250808061130e90615222565b915050611235565b5081856080015160000181905250808560800151602001819052505050505095945050505050565b61134661196d565b85816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff16635e5c06e2866040518263ffffffff1660e01b81526004016113ef9190613d72565b60c060405180830381865afa15801561140c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114309190614046565b816040018190525061144183611666565b6114825761147d61146461145f60008561167290919063ffffffff16565b611686565b848360400151604001516116db9092919063ffffffff16565b61148c565b8060400151604001515b8160600181815250508573ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150491906153dc565b73ffffffffffffffffffffffffffffffffffffffff16632637588e86866040518363ffffffff1660e01b815260040161153e929190615409565b602060405180830381865afa15801561155b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157f9190615432565b81608001901515908115158152505095945050505050565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016115f292919061545f565b6020604051808303816000875af1158015611611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116359190615432565b505050565b600081836116489190615488565b905092915050565b6000818361165e91906154bc565b905092915050565b60008082149050919050565b600061167e83836116fd565b905092915050565b60008082905060008112156116d257806040517fb02ef0870000000000000000000000000000000000000000000000000000000081526004016116c9919061550f565b60405180910390fd5b80915050919050565b60008183856116ea919061552a565b6116f4919061559b565b90509392505050565b60008183121561170d578161170f565b825b905092915050565b604051806102000160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200161174f6119d0565b8152602001600081526020016000815260200160008152602001606081526020016117786119e3565b8152602001611785611a19565b8152602001611792611a19565b815260200161179f611a56565b81526020016117ac611a56565b8152602001600081526020016000815260200160608152602001606081525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611836611a69565b8152602001611843611ade565b8152602001611850611b7e565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161187a611bc9565b8152602001611887611bc9565b815260200160608152602001606081526020016118a2611c1b565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016118fd611c3e565b815260200161190a611bc9565b8152602001611917611bc9565b81526020016060815260200160608152602001606081525090565b6040518060a0016040528060608152602001606081526020016060815260200161195a611c6d565b8152602001611967611c6d565b81525090565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016119ba6119e3565b8152602001600081526020016000151581525090565b6040518060200160405280600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b604051806102600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611b46611c87565b8152602001611b53611caf565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611bbc611cc9565b8152602001600081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c15611ce3565b81525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060608152602001606081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d4382611d18565b9050919050565b6000611d5582611d38565b9050919050565b611d6581611d4a565b8114611d7057600080fd5b50565b600081359050611d8281611d5c565b92915050565b611d9181611d38565b8114611d9c57600080fd5b50565b600081359050611dae81611d88565b92915050565b6000819050919050565b611dc781611db4565b8114611dd257600080fd5b50565b600081359050611de481611dbe565b92915050565b600080600060608486031215611e0357611e02611d0e565b5b6000611e1186828701611d73565b9350506020611e2286828701611d9f565b9250506040611e3386828701611dd5565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e77578082015181840152602081019050611e5c565b60008484015250505050565b6000601f19601f8301169050919050565b6000611e9f82611e3d565b611ea98185611e48565b9350611eb9818560208601611e59565b611ec281611e83565b840191505092915050565b60006040820190508181036000830152611ee78185611e94565b90508181036020830152611efb8184611e94565b90509392505050565b6000611f0f82611d38565b9050919050565b611f1f81611f04565b8114611f2a57600080fd5b50565b600081359050611f3c81611f16565b92915050565b60008115159050919050565b611f5781611f42565b8114611f6257600080fd5b50565b600081359050611f7481611f4e565b92915050565b600080600060608486031215611f9357611f92611d0e565b5b6000611fa186828701611d73565b9350506020611fb286828701611f2d565b9250506040611fc386828701611f65565b9150509250925092565b6000819050919050565b6000611ff2611fed611fe884611d18565b611fcd565b611d18565b9050919050565b600061200482611fd7565b9050919050565b600061201682611ff9565b9050919050565b6120268161200b565b82525050565b600081519050919050565b600082825260208201905092915050565b60006120538261202c565b61205d8185612037565b935061206d818560208601611e59565b61207681611e83565b840191505092915050565b600061209c61209761209284611db4565b611fcd565b611db4565b9050919050565b6120ac81612081565b82525050565b6020820160008201516120c860008501826120a3565b50505050565b6000819050919050565b60006120f36120ee6120e9846120ce565b611fcd565b6120ce565b9050919050565b612103816120d8565b82525050565b61211281611db4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061214f82611ff9565b9050919050565b61215f81612144565b82525050565b60608201600082015161217b6000850182612156565b50602082015161218e6020850182612109565b5060408201516121a160408501826120a3565b50505050565b60006121b38383612165565b60608301905092915050565b6000602082019050919050565b60006121d782612118565b6121e18185612123565b93506121ec83612134565b8060005b8381101561221d57815161220488826121a7565b975061220f836121bf565b9250506001810190506121f0565b5085935050505092915050565b60c0820160008201516122406000850182612109565b5060208201516122536020850182612109565b50604082015161226660408501826120a3565b50606082015161227960608501826120a3565b50608082015161228c60808501826120a3565b5060a082015161229f60a08501826120a3565b50505050565b60e0820160008201516122bb60008501826120a3565b5060208201516122ce60208501826120a3565b5060408201516122e160408501826120a3565b5060608201516122f460608501826120fa565b50608082015161230760808501826120a3565b5060a082015161231a60a08501826120a3565b5060c082015161232d60c0850182612109565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061236b8383612109565b60208301905092915050565b6000602082019050919050565b600061238f82612333565b612399818561233e565b93506123a48361234f565b8060005b838110156123d55781516123bc888261235f565b97506123c783612377565b9250506001810190506123a8565b5085935050505092915050565b600060208301600083015184820360008601526123ff8282612384565b9150508091505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61244181611f42565b82525050565b6101c08201600082015161245e60008501826120a3565b50602082015161247160208501826120a3565b50604082015161248460408501826120a3565b50606082015161249760608501826120a3565b5060808201516124aa60808501826120a3565b5060a08201516124bd60a0850182612109565b5060c08201516124d060c0850182612109565b5060e08201516124e360e08501826120a3565b506101008201516124f86101008501826120a3565b5061012082015161250d6101208501826120a3565b506101408201516125226101408501826120a3565b50610160820151612537610160850182612438565b5061018082015161254c610180850182612438565b506101a08201516125616101a0850182612438565b50505050565b60808201600082015161257d60008501826120a3565b50602082015161259060208501826120a3565b5060408201516125a360408501826120a3565b5060608201516125b660608501826120a3565b50505050565b6040820160008201516125d260008501826120a3565b5060208201516125e560208501826120a3565b50505050565b6102e08201600082015161260260008501826120a3565b50602082015161261560208501826120a3565b50604082015161262860408501826120a3565b50606082015161263b60608501826120a3565b50608082015161264e60808501826120a3565b5060a082015161266160a08501826120a3565b5060c082015161267460c08501826120a3565b5060e082015161268760e08501826120a3565b5061010082015161269c6101008501826120a3565b506101208201516126b16101208501826120a3565b506101408201516126c66101408501826120a3565b506101608201516126db6101608501826120a3565b506101808201516126f0610180850182612567565b506101a08201516127056102008501826125bc565b506101c082015161271a6102408501826120a3565b506101e082015161272f6102608501826120a3565b506102008201516127446102808501826120a3565b506102208201516127596102a0850182612109565b5061024082015161276e6102c0850182612438565b50505050565b60408201600082015161278a60008501826120fa565b50602082015161279d60208501826120fa565b50505050565b610120820160008201516127ba6000850182612109565b5060208201516127cd6020850182612109565b5060408201516127e060408501826120a3565b5060608201516127f360608501826120a3565b50608082015161280660808501826120a3565b5060a082015161281960a08501826120a3565b5060c082015161282c60c0850182612774565b5060e08201516128406101008501826120fa565b50505050565b61284f81611d38565b82525050565b60608201600082015161286b60008501826120fa565b50602082015161287e60208501826120fa565b50604082015161289160408501826120fa565b50505050565b610160820160008201516128ae6000850182612109565b5060208201516128c160208501826120a3565b5060408201516128d460408501826120a3565b5060608201516128e760608501826120a3565b5060808201516128fa60808501826120a3565b5060a082015161290d60a08501826120a3565b5060c082015161292060c08501826120fa565b5060e082015161293360e08501826120fa565b50610100820151612948610100850182612855565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006129868383612897565b6101608301905092915050565b6000602082019050919050565b60006129ab8261294e565b6129b58185612959565b93506129c08361296a565b8060005b838110156129f15781516129d8888261297a565b97506129e383612993565b9250506001810190506129c4565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b602082016000820151612a4060008501826120fa565b50505050565b602082016000820151612a5c60008501826120a3565b50505050565b60e082016000820151612a786000850182612438565b506020820151612a8b6020850182612a2a565b506040820151612a9e6040850182612a2a565b506060820151612ab16060850182612a2a565b506080820151612ac46080850182612a46565b5060a0820151612ad760a0850182612a46565b5060c0820151612aea60c0850182612a46565b50505050565b6000612afc8383612a62565b60e08301905092915050565b6000602082019050919050565b6000612b20826129fe565b612b2a8185612a09565b9350612b3583612a1a565b8060005b83811015612b66578151612b4d8882612af0565b9750612b5883612b08565b925050600181019050612b39565b5085935050505092915050565b606082016000820151612b896000850182612109565b506020820151612b9c60208501826120fa565b506040820151612baf6040850182612438565b50505050565b600061098083016000830151612bce6000860182612156565b506020830151612be16020860182612447565b506040830151612bf56101e08601826125eb565b506060830151612c096104c08601826127a3565b506080830151612c1d6105e0860182612846565b5060a0830151612c31610600860182612897565b5060c0830151612c45610760860182612897565b5060e08301518482036108c0860152612c5e82826129a0565b9150506101008301518482036108e0860152612c7a8282612b15565b915050610120830151612c91610900860182612b73565b50610140830151612ca6610960860182612109565b508091505092915050565b6000612cbd8383612bb5565b905092915050565b6000602082019050919050565b6000612cdd8261240c565b612ce78185612417565b935083602082028501612cf985612428565b8060005b85811015612d355784840389528151612d168582612cb1565b9450612d2183612cc5565b925060208a01995050600181019050612cfd565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612d896000850182612109565b506020820151612d9c6020850182612109565b506040820151612daf60408501826120fa565b506060820151612dc260608501826120a3565b506080820151612dd56080850182612109565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612e1383836120fa565b60208301905092915050565b6000602082019050919050565b6000612e3782612ddb565b612e418185612de6565b9350612e4c83612df7565b8060005b83811015612e7d578151612e648882612e07565b9750612e6f83612e1f565b925050600181019050612e50565b5085935050505092915050565b600061040083016000830151612ea36000860182612156565b506020830151612eb66020860182612846565b506040830151612ec96040860182612d73565b506060830151612edc60e0860182612897565b506080830151612ef0610240860182612897565b5060a08301518482036103a0860152612f0982826129a0565b91505060c08301518482036103c0860152612f248282612b15565b91505060e08301518482036103e0860152612f3f8282612e2c565b9150508091505092915050565b6000612f588383612e8a565b905092915050565b6000602082019050919050565b6000612f7882612d47565b612f828185612d52565b935083602082028501612f9485612d63565b8060005b85811015612fd05784840389528151612fb18582612f4c565b9450612fbc83612f60565b925060208a01995050600181019050612f98565b50829750879550505050505092915050565b600061042083016000830151612ffb600086018261201d565b50602083015184820360208601526130138282612048565b915050604083015161302860408601826120b2565b50606083015161303b60608601826120fa565b50608083015161304e60808601826120a3565b5060a083015161306160a0860182612109565b5060c083015184820360c086015261307982826121cc565b91505060e083015161308e60e086018261222a565b506101008301516130a36101a08601826122a5565b506101208301516130b86102808601826122a5565b506101408301518482036103608601526130d282826123e2565b9150506101608301518482036103808601526130ee82826123e2565b9150506101808301516131056103a08601826120a3565b506101a083015161311a6103c08601826120fa565b506101c08301518482036103e08601526131348282612cd2565b9150506101e08301518482036104008601526131508282612f6d565b9150508091505092915050565b600060208201905081810360008301526131778184612fe2565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6131bc82611e83565b810181811067ffffffffffffffff821117156131db576131da613184565b5b80604052505050565b60006131ee611d04565b90506131fa82826131b3565b919050565b600067ffffffffffffffff82111561321a57613219613184565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600061324582611d38565b9050919050565b6132558161323a565b811461326057600080fd5b50565b6000813590506132728161324c565b92915050565b61328181611db4565b811461328c57600080fd5b50565b60008135905061329e81613278565b92915050565b600080fd5b600067ffffffffffffffff8211156132c4576132c3613184565b5b6132cd82611e83565b9050602081019050919050565b82818337600083830152505050565b60006132fc6132f7846132a9565b6131e4565b905082815260208101848484011115613318576133176132a4565b5b6133238482856132da565b509392505050565b600082601f8301126133405761333f61317f565b5b81356133508482602086016132e9565b91505092915050565b600060a0828403121561336f5761336e613230565b5b61337960a06131e4565b9050600061338984828501613263565b600083015250602061339d8482850161328f565b60208301525060406133b18482850161328f565b60408301525060606133c58482850161328f565b606083015250608082013567ffffffffffffffff8111156133e9576133e8613235565b5b6133f58482850161332b565b60808301525092915050565b600061341461340f846131ff565b6131e4565b905080838252602082019050602084028301858111156134375761343661322b565b5b835b8181101561347e57803567ffffffffffffffff81111561345c5761345b61317f565b5b8086016134698982613359565b85526020850194505050602081019050613439565b5050509392505050565b600082601f83011261349d5761349c61317f565b5b81356134ad848260208601613401565b91505092915050565b600067ffffffffffffffff8211156134d1576134d0613184565b5b602082029050602081019050919050565b60006134f56134f0846134b6565b6131e4565b905080838252602082019050602084028301858111156135185761351761322b565b5b835b81811015613541578061352d8882611d73565b84526020840193505060208101905061351a565b5050509392505050565b600082601f8301126135605761355f61317f565b5b81356135708482602086016134e2565b91505092915050565b600080600080600060a0868803121561359557613594611d0e565b5b600086013567ffffffffffffffff8111156135b3576135b2611d13565b5b6135bf88828901613488565b95505060206135d088828901611f2d565b945050604086013567ffffffffffffffff8111156135f1576135f0611d13565b5b6135fd8882890161354b565b935050606061360e88828901611d9f565b925050608061361f88828901611d9f565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061367482611e3d565b61367e8185613658565b935061368e818560208601611e59565b61369781611e83565b840191505092915050565b60006136ae8383613669565b905092915050565b6000602082019050919050565b60006136ce8261362c565b6136d88185613637565b9350836020820285016136ea85613648565b8060005b85811015613726578484038952815161370785826136a2565b9450613712836136b6565b925060208a019950506001810190506136ee565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006104208301600083015161377d600086018261201d565b50602083015184820360208601526137958282612048565b91505060408301516137aa60408601826120b2565b5060608301516137bd60608601826120fa565b5060808301516137d060808601826120a3565b5060a08301516137e360a0860182612109565b5060c083015184820360c08601526137fb82826121cc565b91505060e083015161381060e086018261222a565b506101008301516138256101a08601826122a5565b5061012083015161383a6102808601826122a5565b5061014083015184820361036086015261385482826123e2565b91505061016083015184820361038086015261387082826123e2565b9150506101808301516138876103a08601826120a3565b506101a083015161389c6103c08601826120fa565b506101c08301518482036103e08601526138b68282612cd2565b9150506101e08301518482036104008601526138d28282612f6d565b9150508091505092915050565b60006138eb8383613764565b905092915050565b6000602082019050919050565b600061390b82613738565b6139158185613743565b93508360208202850161392785613754565b8060005b85811015613963578484038952815161394485826138df565b945061394f836138f3565b925060208a0199505060018101905061392b565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610140820160008201516139b8600085018261201d565b5060208201516139cb6020850182612846565b5060408201516139de604085018261222a565b5060608201516139f26101008501826120a3565b506080820151613a06610120850182612438565b50505050565b6000613a1883836139a1565b6101408301905092915050565b6000602082019050919050565b6000613a3d82613975565b613a478185613980565b9350613a5283613991565b8060005b83811015613a83578151613a6a8882613a0c565b9750613a7583613a25565b925050600181019050613a56565b5085935050505092915050565b60006040830160008301518482036000860152613aad8282613900565b91505060208301518482036020860152613ac78282613a32565b9150508091505092915050565b600060a0830160008301518482036000860152613af182826136c3565b91505060208301518482036020860152613b0b82826136c3565b91505060408301518482036040860152613b2582826136c3565b91505060608301518482036060860152613b3f8282613a90565b91505060808301518482036080860152613b598282613a90565b9150508091505092915050565b60006020820190508181036000830152613b808184613ad4565b905092915050565b613b91816120ce565b8114613b9c57600080fd5b50565b600081359050613bae81613b88565b92915050565b600080600080600060a08688031215613bd057613bcf611d0e565b5b6000613bde88828901611d73565b9550506020613bef88828901611d9f565b9450506040613c0088828901611d9f565b9350506060613c1188828901611dd5565b9250506080613c2288828901613b9f565b9150509295509295909350565b61014082016000820151613c46600085018261201d565b506020820151613c596020850182612846565b506040820151613c6c604085018261222a565b506060820151613c806101008501826120a3565b506080820151613c94610120850182612438565b50505050565b600061014082019050613cb06000830184613c2f565b92915050565b613cbf81611d38565b8114613cca57600080fd5b50565b600081519050613cdc81613cb6565b92915050565b600060208284031215613cf857613cf7611d0e565b5b6000613d0684828501613ccd565b91505092915050565b613d1881611d38565b82525050565b613d2781612081565b82525050565b6000608082019050613d426000830187613d0f565b613d4f6020830186613d1e565b613d5c6040830185613d1e565b613d696060830184613d1e565b95945050505050565b6000602082019050613d876000830184613d0f565b92915050565b600067ffffffffffffffff821115613da857613da7613184565b5b613db182611e83565b9050602081019050919050565b6000613dd1613dcc84613d8d565b6131e4565b905082815260208101848484011115613ded57613dec6132a4565b5b613df8848285611e59565b509392505050565b600082601f830112613e1557613e1461317f565b5b8151613e25848260208601613dbe565b91505092915050565b600060208284031215613e4457613e43611d0e565b5b600082015167ffffffffffffffff811115613e6257613e61611d13565b5b613e6e84828501613e00565b91505092915050565b600081519050613e8681611dbe565b92915050565b600060208284031215613ea257613ea1613230565b5b613eac60206131e4565b90506000613ebc84828501613e77565b60008301525092915050565b600060208284031215613ede57613edd611d0e565b5b6000613eec84828501613e8c565b91505092915050565b600081519050613f0481613b88565b92915050565b600060208284031215613f2057613f1f611d0e565b5b6000613f2e84828501613ef5565b91505092915050565b600060208284031215613f4d57613f4c611d0e565b5b6000613f5b84828501613e77565b91505092915050565b600081519050613f7381613278565b92915050565b600060208284031215613f8f57613f8e611d0e565b5b6000613f9d84828501613f64565b91505092915050565b600060c08284031215613fbc57613fbb613230565b5b613fc660c06131e4565b90506000613fd684828501613f64565b6000830152506020613fea84828501613f64565b6020830152506040613ffe84828501613e77565b604083015250606061401284828501613e77565b606083015250608061402684828501613e77565b60808301525060a061403a84828501613e77565b60a08301525092915050565b600060c0828403121561405c5761405b611d0e565b5b600061406a84828501613fa6565b91505092915050565b61407c81611db4565b82525050565b60006020820190506140976000830184614073565b92915050565b600060e082840312156140b3576140b2613230565b5b6140bd60e06131e4565b905060006140cd84828501613e77565b60008301525060206140e184828501613e77565b60208301525060406140f584828501613e77565b604083015250606061410984828501613ef5565b606083015250608061411d84828501613e77565b60808301525060a061413184828501613e77565b60a08301525060c061414584828501613f64565b60c08301525092915050565b600060e0828403121561416757614166611d0e565b5b60006141758482850161409d565b91505092915050565b600067ffffffffffffffff82111561419957614198613184565b5b602082029050602081019050919050565b60006141bd6141b88461417e565b6131e4565b905080838252602082019050602084028301858111156141e0576141df61322b565b5b835b8181101561420957806141f58882613f64565b8452602084019350506020810190506141e2565b5050509392505050565b600082601f8301126142285761422761317f565b5b81516142388482602086016141aa565b91505092915050565b60006020828403121561425757614256613230565b5b61426160206131e4565b9050600082015167ffffffffffffffff81111561428157614280613235565b5b61428d84828501614213565b60008301525092915050565b6000602082840312156142af576142ae611d0e565b5b600082015167ffffffffffffffff8111156142cd576142cc611d13565b5b6142d984828501614241565b91505092915050565b60006142ed82611d38565b9050919050565b6142fd816142e2565b811461430857600080fd5b50565b60008151905061431a816142f4565b92915050565b60006060828403121561433657614335613230565b5b61434060606131e4565b905060006143508482850161430b565b600083015250602061436484828501613f64565b602083015250604061437884828501613e77565b60408301525092915050565b60006060828403121561439a57614399611d0e565b5b60006143a884828501614320565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6143e981612144565b82525050565b600060208201905061440460008301846143e0565b92915050565b60008151905061441981611f4e565b92915050565b60006101c0828403121561443657614435613230565b5b6144416101c06131e4565b9050600061445184828501613e77565b600083015250602061446584828501613e77565b602083015250604061447984828501613e77565b604083015250606061448d84828501613e77565b60608301525060806144a184828501613e77565b60808301525060a06144b584828501613f64565b60a08301525060c06144c984828501613f64565b60c08301525060e06144dd84828501613e77565b60e0830152506101006144f284828501613e77565b6101008301525061012061450884828501613e77565b6101208301525061014061451e84828501613e77565b610140830152506101606145348482850161440a565b6101608301525061018061454a8482850161440a565b610180830152506101a06145608482850161440a565b6101a08301525092915050565b60006080828403121561458357614582613230565b5b61458d60806131e4565b9050600061459d84828501613e77565b60008301525060206145b184828501613e77565b60208301525060406145c584828501613e77565b60408301525060606145d984828501613e77565b60608301525092915050565b6000604082840312156145fb576145fa613230565b5b61460560406131e4565b9050600061461584828501613e77565b600083015250602061462984828501613e77565b60208301525092915050565b60006102e0828403121561464c5761464b613230565b5b6146576102606131e4565b9050600061466784828501613e77565b600083015250602061467b84828501613e77565b602083015250604061468f84828501613e77565b60408301525060606146a384828501613e77565b60608301525060806146b784828501613e77565b60808301525060a06146cb84828501613e77565b60a08301525060c06146df84828501613e77565b60c08301525060e06146f384828501613e77565b60e08301525061010061470884828501613e77565b6101008301525061012061471e84828501613e77565b6101208301525061014061473484828501613e77565b6101408301525061016061474a84828501613e77565b610160830152506101806147608482850161456d565b61018083015250610200614776848285016145e5565b6101a08301525061024061478c84828501613e77565b6101c0830152506102606147a284828501613e77565b6101e0830152506102806147b884828501613e77565b610200830152506102a06147ce84828501613f64565b610220830152506102c06147e48482850161440a565b6102408301525092915050565b60006040828403121561480757614806613230565b5b61481160406131e4565b9050600061482184828501613ef5565b600083015250602061483584828501613ef5565b60208301525092915050565b6000610120828403121561485857614857613230565b5b6148636101006131e4565b9050600061487384828501613f64565b600083015250602061488784828501613f64565b602083015250604061489b84828501613e77565b60408301525060606148af84828501613e77565b60608301525060806148c384828501613e77565b60808301525060a06148d784828501613e77565b60a08301525060c06148eb848285016147f1565b60c08301525061010061490084828501613ef5565b60e08301525092915050565b60008151905061491b81611d88565b92915050565b60006060828403121561493757614936613230565b5b61494160606131e4565b9050600061495184828501613ef5565b600083015250602061496584828501613ef5565b602083015250604061497984828501613ef5565b60408301525092915050565b6000610160828403121561499c5761499b613230565b5b6149a76101206131e4565b905060006149b784828501613f64565b60008301525060206149cb84828501613e77565b60208301525060406149df84828501613e77565b60408301525060606149f384828501613e77565b6060830152506080614a0784828501613e77565b60808301525060a0614a1b84828501613e77565b60a08301525060c0614a2f84828501613ef5565b60c08301525060e0614a4384828501613ef5565b60e083015250610100614a5884828501614921565b6101008301525092915050565b600067ffffffffffffffff821115614a8057614a7f613184565b5b602082029050602081019050919050565b6000614aa4614a9f84614a65565b6131e4565b9050808382526020820190506101608402830185811115614ac857614ac761322b565b5b835b81811015614af25780614add8882614985565b84526020840193505061016081019050614aca565b5050509392505050565b600082601f830112614b1157614b1061317f565b5b8151614b21848260208601614a91565b91505092915050565b600067ffffffffffffffff821115614b4557614b44613184565b5b602082029050602081019050919050565b600060208284031215614b6c57614b6b613230565b5b614b7660206131e4565b90506000614b8684828501613ef5565b60008301525092915050565b600060208284031215614ba857614ba7613230565b5b614bb260206131e4565b90506000614bc284828501613e77565b60008301525092915050565b600060e08284031215614be457614be3613230565b5b614bee60e06131e4565b90506000614bfe8482850161440a565b6000830152506020614c1284828501614b56565b6020830152506040614c2684828501614b56565b6040830152506060614c3a84828501614b56565b6060830152506080614c4e84828501614b92565b60808301525060a0614c6284828501614b92565b60a08301525060c0614c7684828501614b92565b60c08301525092915050565b6000614c95614c9084614b2a565b6131e4565b90508083825260208201905060e08402830185811115614cb857614cb761322b565b5b835b81811015614ce15780614ccd8882614bce565b84526020840193505060e081019050614cba565b5050509392505050565b600082601f830112614d0057614cff61317f565b5b8151614d10848260208601614c82565b91505092915050565b600060608284031215614d2f57614d2e613230565b5b614d3960606131e4565b90506000614d4984828501613f64565b6000830152506020614d5d84828501613ef5565b6020830152506040614d718482850161440a565b60408301525092915050565b60006109808284031215614d9457614d93613230565b5b614d9f6101606131e4565b90506000614daf8482850161430b565b6000830152506020614dc38482850161441f565b6020830152506101e0614dd884828501614635565b6040830152506104c0614ded84828501614841565b6060830152506105e0614e028482850161490c565b608083015250610600614e1784828501614985565b60a083015250610760614e2c84828501614985565b60c0830152506108c082015167ffffffffffffffff811115614e5157614e50613235565b5b614e5d84828501614afc565b60e0830152506108e082015167ffffffffffffffff811115614e8257614e81613235565b5b614e8e84828501614ceb565b61010083015250610900614ea484828501614d19565b61012083015250610960614eba84828501613f64565b6101408301525092915050565b600060208284031215614edd57614edc611d0e565b5b600082015167ffffffffffffffff811115614efb57614efa611d13565b5b614f0784828501614d7d565b91505092915050565b6000604082019050614f2560008301856143e0565b614f326020830184613d0f565b9392505050565b600060a08284031215614f4f57614f4e613230565b5b614f5960a06131e4565b90506000614f6984828501613f64565b6000830152506020614f7d84828501613f64565b6020830152506040614f9184828501613ef5565b6040830152506060614fa584828501613e77565b6060830152506080614fb984828501613f64565b60808301525092915050565b600067ffffffffffffffff821115614fe057614fdf613184565b5b602082029050602081019050919050565b6000615004614fff84614fc5565b6131e4565b905080838252602082019050602084028301858111156150275761502661322b565b5b835b81811015615050578061503c8882613ef5565b845260208401935050602081019050615029565b5050509392505050565b600082601f83011261506f5761506e61317f565b5b815161507f848260208601614ff1565b91505092915050565b6000610400828403121561509f5761509e613230565b5b6150aa6101006131e4565b905060006150ba8482850161430b565b60008301525060206150ce8482850161490c565b60208301525060406150e284828501614f39565b60408301525060e06150f684828501614985565b60608301525061024061510b84828501614985565b6080830152506103a082015167ffffffffffffffff8111156151305761512f613235565b5b61513c84828501614afc565b60a0830152506103c082015167ffffffffffffffff81111561516157615160613235565b5b61516d84828501614ceb565b60c0830152506103e082015167ffffffffffffffff81111561519257615191613235565b5b61519e8482850161505a565b60e08301525092915050565b6000602082840312156151c0576151bf611d0e565b5b600082015167ffffffffffffffff8111156151de576151dd611d13565b5b6151ea84828501615088565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061522d82611db4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361525f5761525e6151f3565b5b600182019050919050565b600061527582611ff9565b9050919050565b6152858161526a565b82525050565b600060a0820190506152a0600083018861527c565b6152ad6020830187614073565b6152ba6040830186614073565b6152c76060830185614073565b81810360808301526152d98184611e94565b90509695505050505050565b60006152f86152f3846132a9565b6131e4565b905082815260208101848484011115615314576153136132a4565b5b61531f848285611e59565b509392505050565b600082601f83011261533c5761533b61317f565b5b815161534c8482602086016152e5565b91505092915050565b60006020828403121561536b5761536a611d0e565b5b600082015167ffffffffffffffff81111561538957615388611d13565b5b61539584828501615327565b91505092915050565b60006153a982611d38565b9050919050565b6153b98161539e565b81146153c457600080fd5b50565b6000815190506153d6816153b0565b92915050565b6000602082840312156153f2576153f1611d0e565b5b6000615400848285016153c7565b91505092915050565b600060408201905061541e6000830185613d0f565b61542b6020830184613d0f565b9392505050565b60006020828403121561544857615447611d0e565b5b60006154568482850161440a565b91505092915050565b60006040820190506154746000830185613d0f565b6154816020830184614073565b9392505050565b600061549382611db4565b915061549e83611db4565b92508282019050808211156154b6576154b56151f3565b5b92915050565b60006154c7826120ce565b91506154d2836120ce565b9250828201905082811215600083121683821260008412151617156154fa576154f96151f3565b5b92915050565b615509816120ce565b82525050565b60006020820190506155246000830184615500565b92915050565b600061553582611db4565b915061554083611db4565b925082820261554e81611db4565b91508282048414831517615565576155646151f3565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006155a682611db4565b91506155b183611db4565b9250826155c1576155c061556c565b5b82820490509291505056fea26469706673582212204d7694e0a1cda496686fdf8e635dcec7e30dc26c8a295d8a4eef402e7a6e81ea64736f6c63430008130033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f8b00d81461005157806366e7f423146100825780637204a64d146100b2578063ea646943146100e2575b600080fd5b61006b60048036038101906100669190611dea565b610112565b604051610079929190611ecd565b60405180910390f35b61009c60048036038101906100979190611f7a565b610327565b6040516100a9919061315d565b60405180910390f35b6100cc60048036038101906100c79190613579565b610cb1565b6040516100d99190613b66565b60405180910390f35b6100fc60048036038101906100f79190613bb4565b61133e565b6040516101099190613c9a565b60405180910390f35b6060806101ac858673ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610164573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101889190613ce2565b73ffffffffffffffffffffffffffffffffffffffff1661159790919063ffffffff16565b8473ffffffffffffffffffffffffffffffffffffffff1663d2c3aaf230856000806040518563ffffffff1660e01b81526004016101ec9493929190613d2d565b600060405180830381600087803b15801561020657600080fd5b505af1925050508015610217575060015b610256573d8060008114610247576040519150601f19603f3d011682016040523d82523d6000602084013e61024c565b606091505b5080925050610269565b6040518060200160405280600081525091505b8473ffffffffffffffffffffffffffffffffffffffff16636a256b29856040518263ffffffff1660e01b81526004016102a29190613d72565b600060405180830381600087803b1580156102bc57600080fd5b505af19250505080156102cd575060015b61030c573d80600081146102fd576040519150601f19603f3d011682016040523d82523d6000602084013e610302565b606091505b508091505061031f565b6040518060200160405280600081525090505b935093915050565b61032f611717565b83816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156103b2573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906103db9190613e2e565b81602001819052508373ffffffffffffffffffffffffffffffffffffffff1663ad4d4e296040518163ffffffff1660e01b8152600401602060405180830381865afa15801561042e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104529190613ec8565b81604001819052508373ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c99190613f0a565b8160600181815250508373ffffffffffffffffffffffffffffffffffffffff16633a98ef396040518163ffffffff1660e01b8152600401602060405180830381865afa15801561051d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105419190613f37565b8160800181815250508373ffffffffffffffffffffffffffffffffffffffff16638162486b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610595573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b99190613f79565b8160a00181815250508060a0015167ffffffffffffffff8111156105e0576105df613184565b5b60405190808252806020026020018201604052801561061957816020015b6106066117ce565b8152602001906001900390816105fe5790505b508160c001819052508060a0015167ffffffffffffffff8111156106405761063f613184565b5b60405190808252806020026020018201604052801561067957816020015b610666611805565b81526020019060019003908161065e5790505b50816101c001819052508060a0015167ffffffffffffffff8111156106a1576106a0613184565b5b6040519080825280602002602001820160405280156106da57816020015b6106c76118af565b8152602001906001900390816106bf5790505b50816101e001819052508373ffffffffffffffffffffffffffffffffffffffff16635e5c06e260006040518263ffffffff1660e01b815260040161071e9190613d72565b60c060405180830381865afa15801561073b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075f9190614046565b8160e001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151602001516040518263ffffffff1660e01b81526004016107a89190614082565b60e060405180830381865afa1580156107c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e99190614151565b8161010001819052508373ffffffffffffffffffffffffffffffffffffffff1663b8a242528260e00151600001516040518263ffffffff1660e01b81526004016108339190614082565b60e060405180830381865afa158015610850573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108749190614151565b8161012001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151602001516040518263ffffffff1660e01b81526004016108be9190614082565b600060405180830381865afa1580156108db573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109049190614299565b8161014001819052508373ffffffffffffffffffffffffffffffffffffffff1663ecf053d98260e00151600001516040518263ffffffff1660e01b815260040161094e9190614082565b600060405180830381865afa15801561096b573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052508101906109949190614299565b81610160018190525060005b8160a00151811015610c78578473ffffffffffffffffffffffffffffffffffffffff1663f4ddb5be826040518263ffffffff1660e01b81526004016109e59190614082565b606060405180830381865afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190614384565b8260c001518281518110610a3d57610a3c6143b1565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16636eb79f6a8360c001518381518110610a7b57610a7a6143b1565b5b6020026020010151600001516040518263ffffffff1660e01b8152600401610aa391906143ef565b600060405180830381865afa158015610ac0573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610ae99190614ec7565b826101c001518281518110610b0157610b006143b1565b5b60200260200101819052508373ffffffffffffffffffffffffffffffffffffffff16637987bd7f8360c001518381518110610b3f57610b3e6143b1565b5b602002602001015160000151876040518363ffffffff1660e01b8152600401610b69929190614f10565b600060405180830381865afa158015610b86573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610baf91906151aa565b826101e001518281518110610bc757610bc66143b1565b5b6020026020010181905250610c12826101c001518281518110610bed57610bec6143b1565b5b602002602001015160200151610140015183610180015161163a90919063ffffffff16565b82610180018181525050610c5b826101e001518281518110610c3757610c366143b1565b5b60200260200101516040015160400151836101a0015161165090919063ffffffff16565b826101a00181815250508080610c7090615222565b9150506109a0565b508115610caa57610ca081610120015160600151826101a0015161165090919063ffffffff16565b8160600181815250505b9392505050565b610cb9611932565b6000845167ffffffffffffffff811115610cd657610cd5613184565b5b604051908082528060200260200182016040528015610d0f57816020015b610cfc611717565b815260200190600190039081610cf45790505b5090506000855167ffffffffffffffff811115610d2f57610d2e613184565b5b604051908082528060200260200182016040528015610d6857816020015b610d5561196d565b815260200190600190039081610d4d5790505b50905060005b8651811015610e4f57610d9d878281518110610d8d57610d8c6143b1565b5b6020026020010151896000610327565b838281518110610db057610daf6143b1565b5b6020026020010181905250610e1e878281518110610dd157610dd06143b1565b5b60200260200101518787868581518110610dee57610ded6143b1565b5b602002602001015160800151878681518110610e0d57610e0c6143b1565b5b60200260200101516060015161133e565b828281518110610e3157610e306143b1565b5b60200260200101819052508080610e4790615222565b915050610d6e565b508183606001516000018190525080836060015160200181905250875167ffffffffffffffff811115610e8557610e84613184565b5b604051908082528060200260200182016040528015610eb857816020015b6060815260200190600190039081610ea35790505b50836000018190525060005b8851811015611021578773ffffffffffffffffffffffffffffffffffffffff16637e8306ad8a8381518110610efc57610efb6143b1565b5b6020026020010151600001518b8481518110610f1b57610f1a6143b1565b5b6020026020010151602001518c8581518110610f3a57610f396143b1565b5b6020026020010151604001518d8681518110610f5957610f586143b1565b5b6020026020010151606001518e8781518110610f7857610f776143b1565b5b6020026020010151608001516040518663ffffffff1660e01b8152600401610fa495949392919061528b565b6000604051808303816000875af1158015610fc3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610fec9190615355565b84600001518281518110611003576110026143b1565b5b6020026020010181905250808061101990615222565b915050610ec4565b50855167ffffffffffffffff81111561103d5761103c613184565b5b60405190808252806020026020018201604052801561107057816020015b606081526020019060019003908161105b5790505b508360400181905250855167ffffffffffffffff81111561109457611093613184565b5b6040519080825280602002602001820160405280156110c757816020015b60608152602001906001900390816110b25790505b50836020018190525060005b865181101561117f576111288782815181106110f2576110f16143b1565b5b6020026020010151878660600151600001518481518110611116576111156143b1565b5b60200260200101516101800151610112565b8560200151838151811061113f5761113e6143b1565b5b602002602001018660400151848151811061115d5761115c6143b1565b5b602002602001018290528290525050808061117790615222565b9150506110d3565b506000865167ffffffffffffffff81111561119d5761119c613184565b5b6040519080825280602002602001820160405280156111d657816020015b6111c3611717565b8152602001906001900390816111bb5790505b5090506000875167ffffffffffffffff8111156111f6576111f5613184565b5b60405190808252806020026020018201604052801561122f57816020015b61121c61196d565b8152602001906001900390816112145790505b50905060005b885181101561131657611264898281518110611254576112536143b1565b5b60200260200101518b6001610327565b838281518110611277576112766143b1565b5b60200260200101819052506112e5898281518110611298576112976143b1565b5b602002602001015189898685815181106112b5576112b46143b1565b5b6020026020010151608001518786815181106112d4576112d36143b1565b5b60200260200101516060015161133e565b8282815181106112f8576112f76143b1565b5b6020026020010181905250808061130e90615222565b915050611235565b5081856080015160000181905250808560800151602001819052505050505095945050505050565b61134661196d565b85816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505084816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508573ffffffffffffffffffffffffffffffffffffffff16635e5c06e2866040518263ffffffff1660e01b81526004016113ef9190613d72565b60c060405180830381865afa15801561140c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114309190614046565b816040018190525061144183611666565b6114825761147d61146461145f60008561167290919063ffffffff16565b611686565b848360400151604001516116db9092919063ffffffff16565b61148c565b8060400151604001515b8160600181815250508573ffffffffffffffffffffffffffffffffffffffff1663c45a01556040518163ffffffff1660e01b8152600401602060405180830381865afa1580156114e0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061150491906153dc565b73ffffffffffffffffffffffffffffffffffffffff16632637588e86866040518363ffffffff1660e01b815260040161153e929190615409565b602060405180830381865afa15801561155b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157f9190615432565b81608001901515908115158152505095945050505050565b8173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b81526004016115f292919061545f565b6020604051808303816000875af1158015611611573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116359190615432565b505050565b600081836116489190615488565b905092915050565b6000818361165e91906154bc565b905092915050565b60008082149050919050565b600061167e83836116fd565b905092915050565b60008082905060008112156116d257806040517fb02ef0870000000000000000000000000000000000000000000000000000000081526004016116c9919061550f565b60405180910390fd5b80915050919050565b60008183856116ea919061552a565b6116f4919061559b565b90509392505050565b60008183121561170d578161170f565b825b905092915050565b604051806102000160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200161174f6119d0565b8152602001600081526020016000815260200160008152602001606081526020016117786119e3565b8152602001611785611a19565b8152602001611792611a19565b815260200161179f611a56565b81526020016117ac611a56565b8152602001600081526020016000815260200160608152602001606081525090565b6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001611836611a69565b8152602001611843611ade565b8152602001611850611b7e565b8152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161187a611bc9565b8152602001611887611bc9565b815260200160608152602001606081526020016118a2611c1b565b8152602001600081525090565b604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016118fd611c3e565b815260200161190a611bc9565b8152602001611917611bc9565b81526020016060815260200160608152602001606081525090565b6040518060a0016040528060608152602001606081526020016060815260200161195a611c6d565b8152602001611967611c6d565b81525090565b6040518060a00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016119ba6119e3565b8152602001600081526020016000151581525090565b6040518060200160405280600081525090565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280606081525090565b604051806101c0016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581526020016000151581525090565b604051806102600160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611b46611c87565b8152602001611b53611caf565b8152602001600081526020016000815260200160008152602001600081526020016000151581525090565b604051806101000160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001611bbc611cc9565b8152602001600081525090565b6040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611c15611ce3565b81525090565b604051806060016040528060008152602001600081526020016000151581525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060608152602001606081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806000815260200160008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611d4382611d18565b9050919050565b6000611d5582611d38565b9050919050565b611d6581611d4a565b8114611d7057600080fd5b50565b600081359050611d8281611d5c565b92915050565b611d9181611d38565b8114611d9c57600080fd5b50565b600081359050611dae81611d88565b92915050565b6000819050919050565b611dc781611db4565b8114611dd257600080fd5b50565b600081359050611de481611dbe565b92915050565b600080600060608486031215611e0357611e02611d0e565b5b6000611e1186828701611d73565b9350506020611e2286828701611d9f565b9250506040611e3386828701611dd5565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e77578082015181840152602081019050611e5c565b60008484015250505050565b6000601f19601f8301169050919050565b6000611e9f82611e3d565b611ea98185611e48565b9350611eb9818560208601611e59565b611ec281611e83565b840191505092915050565b60006040820190508181036000830152611ee78185611e94565b90508181036020830152611efb8184611e94565b90509392505050565b6000611f0f82611d38565b9050919050565b611f1f81611f04565b8114611f2a57600080fd5b50565b600081359050611f3c81611f16565b92915050565b60008115159050919050565b611f5781611f42565b8114611f6257600080fd5b50565b600081359050611f7481611f4e565b92915050565b600080600060608486031215611f9357611f92611d0e565b5b6000611fa186828701611d73565b9350506020611fb286828701611f2d565b9250506040611fc386828701611f65565b9150509250925092565b6000819050919050565b6000611ff2611fed611fe884611d18565b611fcd565b611d18565b9050919050565b600061200482611fd7565b9050919050565b600061201682611ff9565b9050919050565b6120268161200b565b82525050565b600081519050919050565b600082825260208201905092915050565b60006120538261202c565b61205d8185612037565b935061206d818560208601611e59565b61207681611e83565b840191505092915050565b600061209c61209761209284611db4565b611fcd565b611db4565b9050919050565b6120ac81612081565b82525050565b6020820160008201516120c860008501826120a3565b50505050565b6000819050919050565b60006120f36120ee6120e9846120ce565b611fcd565b6120ce565b9050919050565b612103816120d8565b82525050565b61211281611db4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061214f82611ff9565b9050919050565b61215f81612144565b82525050565b60608201600082015161217b6000850182612156565b50602082015161218e6020850182612109565b5060408201516121a160408501826120a3565b50505050565b60006121b38383612165565b60608301905092915050565b6000602082019050919050565b60006121d782612118565b6121e18185612123565b93506121ec83612134565b8060005b8381101561221d57815161220488826121a7565b975061220f836121bf565b9250506001810190506121f0565b5085935050505092915050565b60c0820160008201516122406000850182612109565b5060208201516122536020850182612109565b50604082015161226660408501826120a3565b50606082015161227960608501826120a3565b50608082015161228c60808501826120a3565b5060a082015161229f60a08501826120a3565b50505050565b60e0820160008201516122bb60008501826120a3565b5060208201516122ce60208501826120a3565b5060408201516122e160408501826120a3565b5060608201516122f460608501826120fa565b50608082015161230760808501826120a3565b5060a082015161231a60a08501826120a3565b5060c082015161232d60c0850182612109565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061236b8383612109565b60208301905092915050565b6000602082019050919050565b600061238f82612333565b612399818561233e565b93506123a48361234f565b8060005b838110156123d55781516123bc888261235f565b97506123c783612377565b9250506001810190506123a8565b5085935050505092915050565b600060208301600083015184820360008601526123ff8282612384565b9150508091505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61244181611f42565b82525050565b6101c08201600082015161245e60008501826120a3565b50602082015161247160208501826120a3565b50604082015161248460408501826120a3565b50606082015161249760608501826120a3565b5060808201516124aa60808501826120a3565b5060a08201516124bd60a0850182612109565b5060c08201516124d060c0850182612109565b5060e08201516124e360e08501826120a3565b506101008201516124f86101008501826120a3565b5061012082015161250d6101208501826120a3565b506101408201516125226101408501826120a3565b50610160820151612537610160850182612438565b5061018082015161254c610180850182612438565b506101a08201516125616101a0850182612438565b50505050565b60808201600082015161257d60008501826120a3565b50602082015161259060208501826120a3565b5060408201516125a360408501826120a3565b5060608201516125b660608501826120a3565b50505050565b6040820160008201516125d260008501826120a3565b5060208201516125e560208501826120a3565b50505050565b6102e08201600082015161260260008501826120a3565b50602082015161261560208501826120a3565b50604082015161262860408501826120a3565b50606082015161263b60608501826120a3565b50608082015161264e60808501826120a3565b5060a082015161266160a08501826120a3565b5060c082015161267460c08501826120a3565b5060e082015161268760e08501826120a3565b5061010082015161269c6101008501826120a3565b506101208201516126b16101208501826120a3565b506101408201516126c66101408501826120a3565b506101608201516126db6101608501826120a3565b506101808201516126f0610180850182612567565b506101a08201516127056102008501826125bc565b506101c082015161271a6102408501826120a3565b506101e082015161272f6102608501826120a3565b506102008201516127446102808501826120a3565b506102208201516127596102a0850182612109565b5061024082015161276e6102c0850182612438565b50505050565b60408201600082015161278a60008501826120fa565b50602082015161279d60208501826120fa565b50505050565b610120820160008201516127ba6000850182612109565b5060208201516127cd6020850182612109565b5060408201516127e060408501826120a3565b5060608201516127f360608501826120a3565b50608082015161280660808501826120a3565b5060a082015161281960a08501826120a3565b5060c082015161282c60c0850182612774565b5060e08201516128406101008501826120fa565b50505050565b61284f81611d38565b82525050565b60608201600082015161286b60008501826120fa565b50602082015161287e60208501826120fa565b50604082015161289160408501826120fa565b50505050565b610160820160008201516128ae6000850182612109565b5060208201516128c160208501826120a3565b5060408201516128d460408501826120a3565b5060608201516128e760608501826120a3565b5060808201516128fa60808501826120a3565b5060a082015161290d60a08501826120a3565b5060c082015161292060c08501826120fa565b5060e082015161293360e08501826120fa565b50610100820151612948610100850182612855565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006129868383612897565b6101608301905092915050565b6000602082019050919050565b60006129ab8261294e565b6129b58185612959565b93506129c08361296a565b8060005b838110156129f15781516129d8888261297a565b97506129e383612993565b9250506001810190506129c4565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b602082016000820151612a4060008501826120fa565b50505050565b602082016000820151612a5c60008501826120a3565b50505050565b60e082016000820151612a786000850182612438565b506020820151612a8b6020850182612a2a565b506040820151612a9e6040850182612a2a565b506060820151612ab16060850182612a2a565b506080820151612ac46080850182612a46565b5060a0820151612ad760a0850182612a46565b5060c0820151612aea60c0850182612a46565b50505050565b6000612afc8383612a62565b60e08301905092915050565b6000602082019050919050565b6000612b20826129fe565b612b2a8185612a09565b9350612b3583612a1a565b8060005b83811015612b66578151612b4d8882612af0565b9750612b5883612b08565b925050600181019050612b39565b5085935050505092915050565b606082016000820151612b896000850182612109565b506020820151612b9c60208501826120fa565b506040820151612baf6040850182612438565b50505050565b600061098083016000830151612bce6000860182612156565b506020830151612be16020860182612447565b506040830151612bf56101e08601826125eb565b506060830151612c096104c08601826127a3565b506080830151612c1d6105e0860182612846565b5060a0830151612c31610600860182612897565b5060c0830151612c45610760860182612897565b5060e08301518482036108c0860152612c5e82826129a0565b9150506101008301518482036108e0860152612c7a8282612b15565b915050610120830151612c91610900860182612b73565b50610140830151612ca6610960860182612109565b508091505092915050565b6000612cbd8383612bb5565b905092915050565b6000602082019050919050565b6000612cdd8261240c565b612ce78185612417565b935083602082028501612cf985612428565b8060005b85811015612d355784840389528151612d168582612cb1565b9450612d2183612cc5565b925060208a01995050600181019050612cfd565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60a082016000820151612d896000850182612109565b506020820151612d9c6020850182612109565b506040820151612daf60408501826120fa565b506060820151612dc260608501826120a3565b506080820151612dd56080850182612109565b50505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000612e1383836120fa565b60208301905092915050565b6000602082019050919050565b6000612e3782612ddb565b612e418185612de6565b9350612e4c83612df7565b8060005b83811015612e7d578151612e648882612e07565b9750612e6f83612e1f565b925050600181019050612e50565b5085935050505092915050565b600061040083016000830151612ea36000860182612156565b506020830151612eb66020860182612846565b506040830151612ec96040860182612d73565b506060830151612edc60e0860182612897565b506080830151612ef0610240860182612897565b5060a08301518482036103a0860152612f0982826129a0565b91505060c08301518482036103c0860152612f248282612b15565b91505060e08301518482036103e0860152612f3f8282612e2c565b9150508091505092915050565b6000612f588383612e8a565b905092915050565b6000602082019050919050565b6000612f7882612d47565b612f828185612d52565b935083602082028501612f9485612d63565b8060005b85811015612fd05784840389528151612fb18582612f4c565b9450612fbc83612f60565b925060208a01995050600181019050612f98565b50829750879550505050505092915050565b600061042083016000830151612ffb600086018261201d565b50602083015184820360208601526130138282612048565b915050604083015161302860408601826120b2565b50606083015161303b60608601826120fa565b50608083015161304e60808601826120a3565b5060a083015161306160a0860182612109565b5060c083015184820360c086015261307982826121cc565b91505060e083015161308e60e086018261222a565b506101008301516130a36101a08601826122a5565b506101208301516130b86102808601826122a5565b506101408301518482036103608601526130d282826123e2565b9150506101608301518482036103808601526130ee82826123e2565b9150506101808301516131056103a08601826120a3565b506101a083015161311a6103c08601826120fa565b506101c08301518482036103e08601526131348282612cd2565b9150506101e08301518482036104008601526131508282612f6d565b9150508091505092915050565b600060208201905081810360008301526131778184612fe2565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6131bc82611e83565b810181811067ffffffffffffffff821117156131db576131da613184565b5b80604052505050565b60006131ee611d04565b90506131fa82826131b3565b919050565b600067ffffffffffffffff82111561321a57613219613184565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600061324582611d38565b9050919050565b6132558161323a565b811461326057600080fd5b50565b6000813590506132728161324c565b92915050565b61328181611db4565b811461328c57600080fd5b50565b60008135905061329e81613278565b92915050565b600080fd5b600067ffffffffffffffff8211156132c4576132c3613184565b5b6132cd82611e83565b9050602081019050919050565b82818337600083830152505050565b60006132fc6132f7846132a9565b6131e4565b905082815260208101848484011115613318576133176132a4565b5b6133238482856132da565b509392505050565b600082601f8301126133405761333f61317f565b5b81356133508482602086016132e9565b91505092915050565b600060a0828403121561336f5761336e613230565b5b61337960a06131e4565b9050600061338984828501613263565b600083015250602061339d8482850161328f565b60208301525060406133b18482850161328f565b60408301525060606133c58482850161328f565b606083015250608082013567ffffffffffffffff8111156133e9576133e8613235565b5b6133f58482850161332b565b60808301525092915050565b600061341461340f846131ff565b6131e4565b905080838252602082019050602084028301858111156134375761343661322b565b5b835b8181101561347e57803567ffffffffffffffff81111561345c5761345b61317f565b5b8086016134698982613359565b85526020850194505050602081019050613439565b5050509392505050565b600082601f83011261349d5761349c61317f565b5b81356134ad848260208601613401565b91505092915050565b600067ffffffffffffffff8211156134d1576134d0613184565b5b602082029050602081019050919050565b60006134f56134f0846134b6565b6131e4565b905080838252602082019050602084028301858111156135185761351761322b565b5b835b81811015613541578061352d8882611d73565b84526020840193505060208101905061351a565b5050509392505050565b600082601f8301126135605761355f61317f565b5b81356135708482602086016134e2565b91505092915050565b600080600080600060a0868803121561359557613594611d0e565b5b600086013567ffffffffffffffff8111156135b3576135b2611d13565b5b6135bf88828901613488565b95505060206135d088828901611f2d565b945050604086013567ffffffffffffffff8111156135f1576135f0611d13565b5b6135fd8882890161354b565b935050606061360e88828901611d9f565b925050608061361f88828901611d9f565b9150509295509295909350565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061367482611e3d565b61367e8185613658565b935061368e818560208601611e59565b61369781611e83565b840191505092915050565b60006136ae8383613669565b905092915050565b6000602082019050919050565b60006136ce8261362c565b6136d88185613637565b9350836020820285016136ea85613648565b8060005b85811015613726578484038952815161370785826136a2565b9450613712836136b6565b925060208a019950506001810190506136ee565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006104208301600083015161377d600086018261201d565b50602083015184820360208601526137958282612048565b91505060408301516137aa60408601826120b2565b5060608301516137bd60608601826120fa565b5060808301516137d060808601826120a3565b5060a08301516137e360a0860182612109565b5060c083015184820360c08601526137fb82826121cc565b91505060e083015161381060e086018261222a565b506101008301516138256101a08601826122a5565b5061012083015161383a6102808601826122a5565b5061014083015184820361036086015261385482826123e2565b91505061016083015184820361038086015261387082826123e2565b9150506101808301516138876103a08601826120a3565b506101a083015161389c6103c08601826120fa565b506101c08301518482036103e08601526138b68282612cd2565b9150506101e08301518482036104008601526138d28282612f6d565b9150508091505092915050565b60006138eb8383613764565b905092915050565b6000602082019050919050565b600061390b82613738565b6139158185613743565b93508360208202850161392785613754565b8060005b85811015613963578484038952815161394485826138df565b945061394f836138f3565b925060208a0199505060018101905061392b565b50829750879550505050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610140820160008201516139b8600085018261201d565b5060208201516139cb6020850182612846565b5060408201516139de604085018261222a565b5060608201516139f26101008501826120a3565b506080820151613a06610120850182612438565b50505050565b6000613a1883836139a1565b6101408301905092915050565b6000602082019050919050565b6000613a3d82613975565b613a478185613980565b9350613a5283613991565b8060005b83811015613a83578151613a6a8882613a0c565b9750613a7583613a25565b925050600181019050613a56565b5085935050505092915050565b60006040830160008301518482036000860152613aad8282613900565b91505060208301518482036020860152613ac78282613a32565b9150508091505092915050565b600060a0830160008301518482036000860152613af182826136c3565b91505060208301518482036020860152613b0b82826136c3565b91505060408301518482036040860152613b2582826136c3565b91505060608301518482036060860152613b3f8282613a90565b91505060808301518482036080860152613b598282613a90565b9150508091505092915050565b60006020820190508181036000830152613b808184613ad4565b905092915050565b613b91816120ce565b8114613b9c57600080fd5b50565b600081359050613bae81613b88565b92915050565b600080600080600060a08688031215613bd057613bcf611d0e565b5b6000613bde88828901611d73565b9550506020613bef88828901611d9f565b9450506040613c0088828901611d9f565b9350506060613c1188828901611dd5565b9250506080613c2288828901613b9f565b9150509295509295909350565b61014082016000820151613c46600085018261201d565b506020820151613c596020850182612846565b506040820151613c6c604085018261222a565b506060820151613c806101008501826120a3565b506080820151613c94610120850182612438565b50505050565b600061014082019050613cb06000830184613c2f565b92915050565b613cbf81611d38565b8114613cca57600080fd5b50565b600081519050613cdc81613cb6565b92915050565b600060208284031215613cf857613cf7611d0e565b5b6000613d0684828501613ccd565b91505092915050565b613d1881611d38565b82525050565b613d2781612081565b82525050565b6000608082019050613d426000830187613d0f565b613d4f6020830186613d1e565b613d5c6040830185613d1e565b613d696060830184613d1e565b95945050505050565b6000602082019050613d876000830184613d0f565b92915050565b600067ffffffffffffffff821115613da857613da7613184565b5b613db182611e83565b9050602081019050919050565b6000613dd1613dcc84613d8d565b6131e4565b905082815260208101848484011115613ded57613dec6132a4565b5b613df8848285611e59565b509392505050565b600082601f830112613e1557613e1461317f565b5b8151613e25848260208601613dbe565b91505092915050565b600060208284031215613e4457613e43611d0e565b5b600082015167ffffffffffffffff811115613e6257613e61611d13565b5b613e6e84828501613e00565b91505092915050565b600081519050613e8681611dbe565b92915050565b600060208284031215613ea257613ea1613230565b5b613eac60206131e4565b90506000613ebc84828501613e77565b60008301525092915050565b600060208284031215613ede57613edd611d0e565b5b6000613eec84828501613e8c565b91505092915050565b600081519050613f0481613b88565b92915050565b600060208284031215613f2057613f1f611d0e565b5b6000613f2e84828501613ef5565b91505092915050565b600060208284031215613f4d57613f4c611d0e565b5b6000613f5b84828501613e77565b91505092915050565b600081519050613f7381613278565b92915050565b600060208284031215613f8f57613f8e611d0e565b5b6000613f9d84828501613f64565b91505092915050565b600060c08284031215613fbc57613fbb613230565b5b613fc660c06131e4565b90506000613fd684828501613f64565b6000830152506020613fea84828501613f64565b6020830152506040613ffe84828501613e77565b604083015250606061401284828501613e77565b606083015250608061402684828501613e77565b60808301525060a061403a84828501613e77565b60a08301525092915050565b600060c0828403121561405c5761405b611d0e565b5b600061406a84828501613fa6565b91505092915050565b61407c81611db4565b82525050565b60006020820190506140976000830184614073565b92915050565b600060e082840312156140b3576140b2613230565b5b6140bd60e06131e4565b905060006140cd84828501613e77565b60008301525060206140e184828501613e77565b60208301525060406140f584828501613e77565b604083015250606061410984828501613ef5565b606083015250608061411d84828501613e77565b60808301525060a061413184828501613e77565b60a08301525060c061414584828501613f64565b60c08301525092915050565b600060e0828403121561416757614166611d0e565b5b60006141758482850161409d565b91505092915050565b600067ffffffffffffffff82111561419957614198613184565b5b602082029050602081019050919050565b60006141bd6141b88461417e565b6131e4565b905080838252602082019050602084028301858111156141e0576141df61322b565b5b835b8181101561420957806141f58882613f64565b8452602084019350506020810190506141e2565b5050509392505050565b600082601f8301126142285761422761317f565b5b81516142388482602086016141aa565b91505092915050565b60006020828403121561425757614256613230565b5b61426160206131e4565b9050600082015167ffffffffffffffff81111561428157614280613235565b5b61428d84828501614213565b60008301525092915050565b6000602082840312156142af576142ae611d0e565b5b600082015167ffffffffffffffff8111156142cd576142cc611d13565b5b6142d984828501614241565b91505092915050565b60006142ed82611d38565b9050919050565b6142fd816142e2565b811461430857600080fd5b50565b60008151905061431a816142f4565b92915050565b60006060828403121561433657614335613230565b5b61434060606131e4565b905060006143508482850161430b565b600083015250602061436484828501613f64565b602083015250604061437884828501613e77565b60408301525092915050565b60006060828403121561439a57614399611d0e565b5b60006143a884828501614320565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6143e981612144565b82525050565b600060208201905061440460008301846143e0565b92915050565b60008151905061441981611f4e565b92915050565b60006101c0828403121561443657614435613230565b5b6144416101c06131e4565b9050600061445184828501613e77565b600083015250602061446584828501613e77565b602083015250604061447984828501613e77565b604083015250606061448d84828501613e77565b60608301525060806144a184828501613e77565b60808301525060a06144b584828501613f64565b60a08301525060c06144c984828501613f64565b60c08301525060e06144dd84828501613e77565b60e0830152506101006144f284828501613e77565b6101008301525061012061450884828501613e77565b6101208301525061014061451e84828501613e77565b610140830152506101606145348482850161440a565b6101608301525061018061454a8482850161440a565b610180830152506101a06145608482850161440a565b6101a08301525092915050565b60006080828403121561458357614582613230565b5b61458d60806131e4565b9050600061459d84828501613e77565b60008301525060206145b184828501613e77565b60208301525060406145c584828501613e77565b60408301525060606145d984828501613e77565b60608301525092915050565b6000604082840312156145fb576145fa613230565b5b61460560406131e4565b9050600061461584828501613e77565b600083015250602061462984828501613e77565b60208301525092915050565b60006102e0828403121561464c5761464b613230565b5b6146576102606131e4565b9050600061466784828501613e77565b600083015250602061467b84828501613e77565b602083015250604061468f84828501613e77565b60408301525060606146a384828501613e77565b60608301525060806146b784828501613e77565b60808301525060a06146cb84828501613e77565b60a08301525060c06146df84828501613e77565b60c08301525060e06146f384828501613e77565b60e08301525061010061470884828501613e77565b6101008301525061012061471e84828501613e77565b6101208301525061014061473484828501613e77565b6101408301525061016061474a84828501613e77565b610160830152506101806147608482850161456d565b61018083015250610200614776848285016145e5565b6101a08301525061024061478c84828501613e77565b6101c0830152506102606147a284828501613e77565b6101e0830152506102806147b884828501613e77565b610200830152506102a06147ce84828501613f64565b610220830152506102c06147e48482850161440a565b6102408301525092915050565b60006040828403121561480757614806613230565b5b61481160406131e4565b9050600061482184828501613ef5565b600083015250602061483584828501613ef5565b60208301525092915050565b6000610120828403121561485857614857613230565b5b6148636101006131e4565b9050600061487384828501613f64565b600083015250602061488784828501613f64565b602083015250604061489b84828501613e77565b60408301525060606148af84828501613e77565b60608301525060806148c384828501613e77565b60808301525060a06148d784828501613e77565b60a08301525060c06148eb848285016147f1565b60c08301525061010061490084828501613ef5565b60e08301525092915050565b60008151905061491b81611d88565b92915050565b60006060828403121561493757614936613230565b5b61494160606131e4565b9050600061495184828501613ef5565b600083015250602061496584828501613ef5565b602083015250604061497984828501613ef5565b60408301525092915050565b6000610160828403121561499c5761499b613230565b5b6149a76101206131e4565b905060006149b784828501613f64565b60008301525060206149cb84828501613e77565b60208301525060406149df84828501613e77565b60408301525060606149f384828501613e77565b6060830152506080614a0784828501613e77565b60808301525060a0614a1b84828501613e77565b60a08301525060c0614a2f84828501613ef5565b60c08301525060e0614a4384828501613ef5565b60e083015250610100614a5884828501614921565b6101008301525092915050565b600067ffffffffffffffff821115614a8057614a7f613184565b5b602082029050602081019050919050565b6000614aa4614a9f84614a65565b6131e4565b9050808382526020820190506101608402830185811115614ac857614ac761322b565b5b835b81811015614af25780614add8882614985565b84526020840193505061016081019050614aca565b5050509392505050565b600082601f830112614b1157614b1061317f565b5b8151614b21848260208601614a91565b91505092915050565b600067ffffffffffffffff821115614b4557614b44613184565b5b602082029050602081019050919050565b600060208284031215614b6c57614b6b613230565b5b614b7660206131e4565b90506000614b8684828501613ef5565b60008301525092915050565b600060208284031215614ba857614ba7613230565b5b614bb260206131e4565b90506000614bc284828501613e77565b60008301525092915050565b600060e08284031215614be457614be3613230565b5b614bee60e06131e4565b90506000614bfe8482850161440a565b6000830152506020614c1284828501614b56565b6020830152506040614c2684828501614b56565b6040830152506060614c3a84828501614b56565b6060830152506080614c4e84828501614b92565b60808301525060a0614c6284828501614b92565b60a08301525060c0614c7684828501614b92565b60c08301525092915050565b6000614c95614c9084614b2a565b6131e4565b90508083825260208201905060e08402830185811115614cb857614cb761322b565b5b835b81811015614ce15780614ccd8882614bce565b84526020840193505060e081019050614cba565b5050509392505050565b600082601f830112614d0057614cff61317f565b5b8151614d10848260208601614c82565b91505092915050565b600060608284031215614d2f57614d2e613230565b5b614d3960606131e4565b90506000614d4984828501613f64565b6000830152506020614d5d84828501613ef5565b6020830152506040614d718482850161440a565b60408301525092915050565b60006109808284031215614d9457614d93613230565b5b614d9f6101606131e4565b90506000614daf8482850161430b565b6000830152506020614dc38482850161441f565b6020830152506101e0614dd884828501614635565b6040830152506104c0614ded84828501614841565b6060830152506105e0614e028482850161490c565b608083015250610600614e1784828501614985565b60a083015250610760614e2c84828501614985565b60c0830152506108c082015167ffffffffffffffff811115614e5157614e50613235565b5b614e5d84828501614afc565b60e0830152506108e082015167ffffffffffffffff811115614e8257614e81613235565b5b614e8e84828501614ceb565b61010083015250610900614ea484828501614d19565b61012083015250610960614eba84828501613f64565b6101408301525092915050565b600060208284031215614edd57614edc611d0e565b5b600082015167ffffffffffffffff811115614efb57614efa611d13565b5b614f0784828501614d7d565b91505092915050565b6000604082019050614f2560008301856143e0565b614f326020830184613d0f565b9392505050565b600060a08284031215614f4f57614f4e613230565b5b614f5960a06131e4565b90506000614f6984828501613f64565b6000830152506020614f7d84828501613f64565b6020830152506040614f9184828501613ef5565b6040830152506060614fa584828501613e77565b6060830152506080614fb984828501613f64565b60808301525092915050565b600067ffffffffffffffff821115614fe057614fdf613184565b5b602082029050602081019050919050565b6000615004614fff84614fc5565b6131e4565b905080838252602082019050602084028301858111156150275761502661322b565b5b835b81811015615050578061503c8882613ef5565b845260208401935050602081019050615029565b5050509392505050565b600082601f83011261506f5761506e61317f565b5b815161507f848260208601614ff1565b91505092915050565b6000610400828403121561509f5761509e613230565b5b6150aa6101006131e4565b905060006150ba8482850161430b565b60008301525060206150ce8482850161490c565b60208301525060406150e284828501614f39565b60408301525060e06150f684828501614985565b60608301525061024061510b84828501614985565b6080830152506103a082015167ffffffffffffffff8111156151305761512f613235565b5b61513c84828501614afc565b60a0830152506103c082015167ffffffffffffffff81111561516157615160613235565b5b61516d84828501614ceb565b60c0830152506103e082015167ffffffffffffffff81111561519257615191613235565b5b61519e8482850161505a565b60e08301525092915050565b6000602082840312156151c0576151bf611d0e565b5b600082015167ffffffffffffffff8111156151de576151dd611d13565b5b6151ea84828501615088565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061522d82611db4565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361525f5761525e6151f3565b5b600182019050919050565b600061527582611ff9565b9050919050565b6152858161526a565b82525050565b600060a0820190506152a0600083018861527c565b6152ad6020830187614073565b6152ba6040830186614073565b6152c76060830185614073565b81810360808301526152d98184611e94565b90509695505050505050565b60006152f86152f3846132a9565b6131e4565b905082815260208101848484011115615314576153136132a4565b5b61531f848285611e59565b509392505050565b600082601f83011261533c5761533b61317f565b5b815161534c8482602086016152e5565b91505092915050565b60006020828403121561536b5761536a611d0e565b5b600082015167ffffffffffffffff81111561538957615388611d13565b5b61539584828501615327565b91505092915050565b60006153a982611d38565b9050919050565b6153b98161539e565b81146153c457600080fd5b50565b6000815190506153d6816153b0565b92915050565b6000602082840312156153f2576153f1611d0e565b5b6000615400848285016153c7565b91505092915050565b600060408201905061541e6000830185613d0f565b61542b6020830184613d0f565b9392505050565b60006020828403121561544857615447611d0e565b5b60006154568482850161440a565b91505092915050565b60006040820190506154746000830185613d0f565b6154816020830184614073565b9392505050565b600061549382611db4565b915061549e83611db4565b92508282019050808211156154b6576154b56151f3565b5b92915050565b60006154c7826120ce565b91506154d2836120ce565b9250828201905082811215600083121683821260008412151617156154fa576154f96151f3565b5b92915050565b615509816120ce565b82525050565b60006020820190506155246000830184615500565b92915050565b600061553582611db4565b915061554083611db4565b925082820261554e81611db4565b91508282048414831517615565576155646151f3565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006155a682611db4565b91506155b183611db4565b9250826155c1576155c061556c565b5b82820490509291505056fea26469706673582212204d7694e0a1cda496686fdf8e635dcec7e30dc26c8a295d8a4eef402e7a6e81ea64736f6c63430008130033",
  linkReferences: {},
  deployedLinkReferences: {},
};