import { Magic } from 'magic-sdk';
import { ZilliqaExtension } from '@magic-ext/zilliqa';

const magic = new Magic('YOUR_API_KEY', {
  extensions: [
    new ZilliqaExtension({
      rpcUrl: 'Zilliqa_RPC_NODE_URL',
    }),
  ],
});