import type MetaMaskConnector from "@/lib/connectors/metamask";
import type WalletConnectConnector from "@/lib/connectors/walletconnect";
import type { Web3Provider } from "@ethersproject/providers";
import { omit } from "@disco3/omit";
import create from "zustand";

export type State = {
  account?: string;
  chainId?: number;
  connector?: MetaMaskConnector | WalletConnectConnector;
  library?: Web3Provider;
  active: boolean;
  reset: () => void;
};

const useWeb3Store = create<State>((set, get) => ({
  active:
    get()?.connector !== undefined &&
    get()?.chainId !== undefined &&
    get()?.account !== undefined,
  reset: () =>
    set(
      (state) => omit(state, ["account", "chainId", "connector", "library"]),
      true
    ),
}));

export default useWeb3Store;
