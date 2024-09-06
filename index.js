const nacl = require('tweetnacl');
const naclUtil = require('tweetnacl-util');
const crypto = require('crypto');


require('dotenv').config();

function log(...args) {
  const newDate = new Date().toLocaleString()
  const nodeEnv = process.env.NODE_ENV || 'development';
  if (nodeEnv == 'development') console.log(`log ${newDate} :`, ...args)
}

function note(...args) {
  const newDate = new Date().toLocaleString()
  const nodeEnv = process.env.NODE_ENV || 'development';
  if (nodeEnv == 'production') console.log(`log ${newDate} :`, ...args)
}

function stringToKey(keyString) {
  const hash = crypto.createHash('sha256'); // Use SHA-256 to create a 32-byte key
  hash.update(keyString);
  return Uint8Array.from(hash.digest()); // Return the key as Uint8Array
}

// Function to encrypt using ChaCha20-Poly1305
function encryptCha(message, key) {
  const nonce = nacl.randomBytes(nacl.secretbox.nonceLength); // Generate a random nonce
  const messageUint8 = naclUtil.decodeUTF8(message); // Convert message to Uint8Array

  // Encrypt message using the key and nonce
  const encrypted = nacl.secretbox(messageUint8, nonce, key);

  return { nonce, encrypted };
}

// Function to decrypt using ChaCha20-Poly1305
function decryptCha(encrypted, nonce, key) {
  const decrypted = nacl.secretbox.open(encrypted, nonce, key);

  if (!decrypted) {
    console.log("Failed to decrypt.");
    return null;
  }

  return naclUtil.encodeUTF8(decrypted); // Convert Uint8Array back to string
}

function readCha(key) {
  return naclUtil.encodeBase64(key)
}


module.exports = {
  log, note, stringToKey, encryptCha, decryptCha, readCha
}