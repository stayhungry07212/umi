import { UmiPlugin } from '@stay.hungry07212/umi';
import { createDefaultProgramRepository } from './createDefaultProgramRepository';

export const defaultProgramRepository = (): UmiPlugin => ({
  install(umi) {
    umi.programs = createDefaultProgramRepository(umi);
  },
});
