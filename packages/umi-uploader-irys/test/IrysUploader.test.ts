import {
  Context,
  createGenericFile,
  createUmi,
  generatedSignerIdentity,
  sol,
  utf8,
} from '@stay.hungry07212/umi';
import { httpDownloader } from '@stay.hungry07212/umi-downloader-http';
import { web3JsEddsa } from '@stay.hungry07212/umi-eddsa-web3js';
import { fetchHttp } from '@stay.hungry07212/umi-http-fetch';
import { web3JsRpc } from '@stay.hungry07212/umi-rpc-web3js';
import test from 'ava';
import { irysUploader, IrysUploaderOptions } from '../src';

test('example test', async (t) => {
  t.is(typeof irysUploader, 'function');
});

// TODO(loris): Unskip these tests when we can mock the Irys API.

const getContext = async (options?: IrysUploaderOptions): Promise<Context> => {
  const context = createUmi().use({
    install(umi) {
      umi.use(web3JsRpc('https://metaplex.devnet.rpcpool.com/'));
      umi.use(web3JsEddsa());
      umi.use(fetchHttp());
      umi.use(httpDownloader());
      umi.use(irysUploader(options));
      umi.use(generatedSignerIdentity());
    },
  });
  await context.rpc.airdrop(context.payer.publicKey, sol(1));
  return context;
};

test.skip('it can upload one file', async (t) => {
  // Given a Context using NFT.Storage.
  const context = await getContext();

  // When we upload some asset.
  const [uri] = await context.uploader.upload([
    createGenericFile('some-image', 'some-image.jpg'),
  ]);

  // Then the URI should be a valid IPFS URI.
  t.truthy(uri);
  t.true(uri.startsWith('https://nftstorage.link/ipfs/'));

  // and it should point to the uploaded asset.
  const [asset] = await context.downloader.download([uri]);
  t.is(utf8.deserialize(asset.buffer)[0], 'some-image');
});
