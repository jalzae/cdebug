declare module 'jalz-cdebug' {
  export function log(...args: any[]): void;
  export function note(...args: any[]): void;
  export function encryptCha(message: string, key: Uint8Array): string | null;
  export function stringToKey(keyString: string): Uint8Array;
  export function readCha(keyString: string): string;
  export function decryptCha(encrypted: Uint8Array, nonce: Uint8Array, key: Uint8Array): string | null;
}
