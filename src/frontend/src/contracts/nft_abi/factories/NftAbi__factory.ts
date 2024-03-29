/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider, Wallet, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type { NftAbi, NftAbiInterface } from "../NftAbi";
const _abi = [
  {
    type: "function",
    name: "admin",
    inputs: [],
    outputs: [
      {
        type: "struct Address",
        name: "",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        type: "struct Address",
        name: "approved",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
      {
        type: "u64",
        name: "token_id",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "approved",
    inputs: [
      {
        type: "u64",
        name: "token_id",
      },
    ],
    outputs: [
      {
        type: "struct Address",
        name: "",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "balance_of",
    inputs: [
      {
        type: "struct Address",
        name: "owner",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        type: "u64",
        name: "token_id",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "constructor",
    inputs: [
      {
        type: "bool",
        name: "access_control",
      },
      {
        type: "struct Address",
        name: "admin",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
      {
        type: "u64",
        name: "max_supply",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "is_approved_for_all",
    inputs: [
      {
        type: "struct Address",
        name: "operator",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
      {
        type: "struct Address",
        name: "owner",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "max_supply",
    inputs: [],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        type: "u64",
        name: "amount",
      },
      {
        type: "str[46]",
        name: "uri",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "meta_data",
    inputs: [
      {
        type: "u64",
        name: "token_id",
      },
    ],
    outputs: [
      {
        type: "struct TokenMetaData",
        name: "",
        components: [
          {
            type: "str[7]",
            name: "name",
          },
          {
            type: "str[4]",
            name: "symbol",
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "token_uri",
    inputs: [
      {
        type: "u64",
        name: "token_id",
      },
    ],
    outputs: [
      {
        type: "struct TokenURI",
        name: "",
        components: [
          {
            type: "str[46]",
            name: "base_uri",
          },
          {
            type: "u64",
            name: "token_id",
          },
          {
            type: "(_, _)",
            name: "token_uri",
            components: [
              {
                type: "str[46]",
                name: "__tuple_element",
              },
              {
                type: "u64",
                name: "__tuple_element",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "owner_of",
    inputs: [
      {
        type: "u64",
        name: "token_id",
      },
    ],
    outputs: [
      {
        type: "struct Address",
        name: "",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "set_admin",
    inputs: [
      {
        type: "struct Address",
        name: "admin",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "set_approval_for_all",
    inputs: [
      {
        type: "bool",
        name: "approve",
      },
      {
        type: "struct Address",
        name: "operator",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
  {
    type: "function",
    name: "total_supply",
    inputs: [],
    outputs: [
      {
        type: "u64",
        name: "",
      },
    ],
  },
  {
    type: "function",
    name: "transfer_from",
    inputs: [
      {
        type: "struct Address",
        name: "from",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
      {
        type: "struct Address",
        name: "to",
        components: [
          {
            type: "b256",
            name: "value",
          },
        ],
      },
      {
        type: "u64",
        name: "token_id",
      },
    ],
    outputs: [
      {
        type: "()",
        name: "",
        components: [],
      },
    ],
  },
];

export class NftAbi__factory {
  static readonly abi = _abi;
  static createInterface(): NftAbiInterface {
    return new Interface(_abi) as unknown as NftAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: Wallet | Provider
  ): NftAbi {
    return new Contract(id, _abi, walletOrProvider) as unknown as NftAbi;
  }
}
