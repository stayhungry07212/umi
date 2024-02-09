import { generatedSignerIdentity, UmiPlugin } from '@stay.hungry07212/umi';
import { web3JsEddsa } from '@stay.hungry07212/umi-eddsa-web3js';
import { fetchHttp } from '@stay.hungry07212/umi-http-fetch';
import { defaultProgramRepository } from '@stay.hungry07212/umi-program-repository';
import {
  web3JsRpc,
  Web3JsRpcOptions,
} from '@stay.hungry07212/umi-rpc-web3js';
import { dataViewSerializer } from '@stay.hungry07212/umi-serializer-data-view';
import { mockStorage } from '@stay.hungry07212/umi-storage-mock';
import { web3JsTransactionFactory } from '@stay.hungry07212/umi-transaction-factory-web3js';

export const testPlugins = (
  endpoint: string = 'http://127.0.0.1:8899',
  rpcOptions: Web3JsRpcOptions = 'confirmed'
): UmiPlugin => ({
  install(umi) {
    umi.use(dataViewSerializer());
    umi.use(defaultProgramRepository());
    umi.use(fetchHttp());
    umi.use(web3JsEddsa());
    umi.use(web3JsRpc(endpoint, rpcOptions));
    umi.use(web3JsTransactionFactory());
    umi.use(mockStorage());
    umi.use(generatedSignerIdentity());
  },
});
