import { UmiPlugin } from '@stay.hungry07212/umi';
import { createWeb3JsTransactionFactory } from './createWeb3JsTransactionFactory';

export const web3JsTransactionFactory = (): UmiPlugin => ({
  install(umi) {
    umi.transactions = createWeb3JsTransactionFactory();
  },
});
