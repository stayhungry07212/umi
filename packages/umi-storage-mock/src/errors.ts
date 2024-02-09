import { SdkError } from '@stay.hungry07212/umi';

/** @category Errors */
export class AssetNotFoundError extends SdkError {
  readonly name: string = 'AssetNotFoundError';

  constructor(location: string) {
    super(`The asset at [${location}] could not be found.`);
  }
}
