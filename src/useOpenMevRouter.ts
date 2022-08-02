/**
*
* useOpenMevRouter
*
* @export useOpenMevRouterRead
* @export useOpenMevRouter
*
* @see {@link TODO}
* 
*/

import { Signer as EthersSigner, providers } from "ethers";
import { useContract, useContractRead } from "wagmi";

export type Signer = EthersSigner | providers.Provider | null | undefined;

function config(signer: Signer) {
  return {
    addressOrName: {
      80001: "0x....",
    }[process.env.CHAIN_ID || 80001]!,
    contractInterface: require("./OpenMevRouter.abi.json").abi,
    signerOrProvider: signer,
  };
}

export function useOpenMevRouter(signer: Signer) {
  return useContract(config(signer));
}

export function useOpenMevRouterRead(signer: Signer, functionName: string, args: any[]) {
  return useContractRead(config(signer), functionName, { args });
}
