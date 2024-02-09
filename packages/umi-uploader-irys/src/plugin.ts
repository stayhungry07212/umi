import type { UmiPlugin } from '@stay.hungry07212/umi';
import { IrysUploaderOptions, createIrysUploader } from './createIrysUploader';

export const irysUploader = (options?: IrysUploaderOptions): UmiPlugin => ({
  install(umi) {
    umi.uploader = createIrysUploader(umi, options);
  },
});
