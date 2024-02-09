import { UmiPlugin } from '@stay.hungry07212/umi';
import { createWeb3JsEddsa } from './createWeb3JsEddsa';

export const web3JsEddsa = (): UmiPlugin => ({
  install(umi) {
    umi.eddsa = createWeb3JsEddsa();
  },
});
