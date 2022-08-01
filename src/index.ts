/**
* @packageName Router API
* @license GPL-2.0-Only
* @version 0.0.0
*/

import useSWR from "swr";

const BASE = `https://${ROUTER_API_BASE}`;

function getSwapSim() {
  type Data = Record<string, bigint>;

  return async (): Promise<Data> => {
    const r = await fetch(BASE, {
      headers: {
        Accept: "application/json",
      },
    });

    if (r.ok) {
      return r.json();
    }

    throw new Error(r.status + "" + r.statusText);
  };
}

export default function useSwapSim() {
  const shouldFetch = true;

  return useSWR(shouldFetch ? ["SwapSim"] : null, getSwapSim(), {
    shouldRetryOnError: false,
  });
}
