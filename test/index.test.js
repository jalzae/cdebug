// Import the functions to be tested
const { stringToKey, encryptCha, decryptCha, readCha } = require("../index");

describe('ChaCha20 Encryption/Decryption', () => {
  const message = "Hello, ChaCha20!";
  const stringKey = "mysecretkey123"; // Your string key
  const key = stringToKey(stringKey); // Derive 32-byte key from string

  let nonce, encrypted;

  beforeAll(() => {
    // Encrypt the message before running tests
    ({ nonce, encrypted } = encryptCha(message, key));
  });

  test('should encrypt the message correctly', () => {
    // Convert encrypted message to readable format (base64)
    const encryptedBase64 = readCha(encrypted);
    expect(encryptedBase64).toBeDefined();
    expect(encryptedBase64).not.toBe(message); // Ensure that encryption changes the message
  });

  test('should decrypt the message correctly', () => {
    const decryptedMessage = decryptCha(encrypted, nonce, key);
    expect(decryptedMessage).toBe(message);
  });
});
