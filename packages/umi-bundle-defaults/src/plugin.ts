import type { UmiPlugin } from '@stay.hungry07212/umi';
import { httpDownloader } from '@stay.hungry07212/umi-downloader-http';
import { web3JsEddsa } from '@stay.hungry07212/umi-eddsa-web3js';
import { fetchHttp } from '@stay.hungry07212/umi-http-fetch';
import { defaultProgramRepository } from '@stay.hungry07212/umi-program-repository';
import {
  web3JsRpc,
  Web3JsRpcOptions,
} from '@stay.hungry07212/umi-rpc-web3js';
import {
  chunkGetAccountsRpc,
  ChunkGetAccountsRpcOptions,
} from '@stay.hungry07212/umi-rpc-chunk-get-accounts';
import { dataViewSerializer } from '@stay.hungry07212/umi-serializer-data-view';
import { web3JsTransactionFactory } from '@stay.hungry07212/umi-transaction-factory-web3js';
import type { Connection as Web3JsConnection } from '@solana/web3.js';

export function defaultPlugins(
  endpoint: string,
  rpcOptions?: Web3JsRpcOptions & ChunkGetAccountsRpcOptions
): UmiPlugin;
export function defaultPlugins(
  connection: Web3JsConnection,
  rpcOptions?: ChunkGetAccountsRpcOptions
): UmiPlugin;
export function defaultPlugins(
  endpointOrConnection: string | Web3JsConnection,
  rpcOptions?: Web3JsRpcOptions & ChunkGetAccountsRpcOptions
): UmiPlugin {
  return {
    install(umi) {
      umi.use(dataViewSerializer());
      umi.use(defaultProgramRepository());
      umi.use(fetchHttp());
      umi.use(httpDownloader());
      umi.use(web3JsEddsa());
      umi.use(
        typeof endpointOrConnection === 'string'
          ? web3JsRpc(endpointOrConnection, rpcOptions)
          : web3JsRpc(endpointOrConnection)
      );
      umi.use(chunkGetAccountsRpc(rpcOptions?.getAccountsChunkSize));
      umi.use(web3JsTransactionFactory());
    },
  };
}
