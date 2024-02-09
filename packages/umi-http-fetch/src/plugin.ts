import { UmiPlugin } from '@stay.hungry07212/umi';
import { createFetchHttp } from './createFetchHttp';

export const fetchHttp = (): UmiPlugin => ({
  install(umi) {
    umi.http = createFetchHttp();
  },
});
