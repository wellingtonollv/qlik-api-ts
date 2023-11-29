import {
  getInvokeFetchRuntimeModule
} from "./chunk-WM7FQU2U.mjs";

// src/public/invoke-fetch.ts
async function invokeFetch(api, props) {
  const hostConfig = props.options?.hostConfig;
  return (await getInvokeFetchRuntimeModule(hostConfig)).invokeFetch(api, props);
}
function clearApiCache(api) {
  void getInvokeFetchRuntimeModule().then((runtimeModule) => runtimeModule.clearApiCache(api));
}

export {
  invokeFetch,
  clearApiCache
};
