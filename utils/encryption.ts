export function encryptNumber(id: string, key: number) {
  return Number(id) ^ key;
}

export function decryptNumber(encryptedNumber: string, key: number) {
  return Number(encryptedNumber) ^ key;
}
