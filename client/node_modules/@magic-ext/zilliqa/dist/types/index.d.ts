import { Extension } from '@magic-sdk/commons';
import { ZilliqaConfig, ConfigType } from './type';
export declare class ZilliqaExtension extends Extension.Internal<'zilliqa', ZilliqaConfig> {
    zilliqaConfig: ZilliqaConfig;
    name: "zilliqa";
    config: ConfigType;
    constructor(zilliqaConfig: ZilliqaConfig);
    sendTransaction: (params: any, toDs: boolean) => Promise<any>;
    deployContract: (init: any, code: string, params: any, attempts: number, interval: number, toDs: boolean) => Promise<any>;
    callContract: (transition: string, args: any[], params: any, attempts: number | undefined, interval: number | undefined, toDs: boolean | undefined, contractAddress: string) => import("@magic-sdk/commons").PromiEvent<any, {
        done: (result: any) => void;
        error: (reason: any) => void;
        settled: () => void;
    }>;
    getWallet: () => Promise<object>;
}
