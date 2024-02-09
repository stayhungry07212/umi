import { UmiPlugin } from '@stay.hungry07212/umi';
import { createHttpDownloader } from './createHttpDownloader';

export const httpDownloader = (): UmiPlugin => ({
  install(umi) {
    umi.downloader = createHttpDownloader(umi);
  },
});
