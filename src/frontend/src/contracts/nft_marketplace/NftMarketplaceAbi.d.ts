/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
  BN,
} from "fuels";

export type ContractIdInput = { value: string };

export type ContractIdOutput = { value: string };

export type AddressInput = { value: string };

export type AddressOutput = { value: string };

export type ItemInput = {
  item_id: BigNumberish;
  contract_Id: ContractIdInput;
  token_id: BigNumberish;
  price: BigNumberish;
  seller: AddressInput;
  sold: boolean;
};

export type ItemOutput = {
  item_id: BN;
  contract_Id: ContractIdOutput;
  token_id: BN;
  price: BN;
  seller: AddressOutput;
  sold: boolean;
};

interface NftMarketplaceAbiInterface extends Interface {
  functions: {
    item_count: FunctionFragment;
    items: FunctionFragment;
    make_item: FunctionFragment;
    purchase_item: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "item_count",
    values?: undefined
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "items",
    values: [BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "make_item",
    values: [ContractIdInput, BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: "purchase_item",
    values: [BigNumberish]
  ): Uint8Array;

  decodeFunctionData(
    functionFragment: "item_count",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(functionFragment: "items", data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: "make_item",
    data: BytesLike
  ): DecodedValue;
  decodeFunctionData(
    functionFragment: "purchase_item",
    data: BytesLike
  ): DecodedValue;
}

export class NftMarketplaceAbi extends Contract {
  interface: NftMarketplaceAbiInterface;
  functions: {
    item_count: InvokeFunction<[], BN>;

    items: InvokeFunction<[id: BigNumberish], ItemOutput>;

    make_item: InvokeFunction<
      [
        contract_Id: ContractIdInput,
        token_id: BigNumberish,
        price: BigNumberish
      ],
      void
    >;

    purchase_item: InvokeFunction<[item_id: BigNumberish], void>;
  };
}