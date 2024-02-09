import { RpcInterface, chunk } from '@stay.hungry07212/umi';

export interface ChunkGetAccountsRpcOptions {
  getAccountsChunkSize?: number;
}

export const createChunkGetAccountsRpc = (
  rpc: RpcInterface,
  chunkSize = 100
): RpcInterface => ({
  ...rpc,
  getAccounts: async (publicKeys, options) => {
    const promises = chunk(publicKeys, chunkSize).map((chunk) =>
      rpc.getAccounts(chunk, options)
    );
    const chunks = await Promise.all(promises);
    return chunks.flat();
  },
});
