import type { UmiPlugin } from '@stay.hungry07212/umi';
import {
  createNftStorageUploader,
  NftStorageUploaderOptions,
} from './createNftStorageUploader';

export const nftStorageUploader = (
  options?: NftStorageUploaderOptions
): UmiPlugin => ({
  install(umi) {
    umi.uploader = createNftStorageUploader(umi, options);
  },
});
