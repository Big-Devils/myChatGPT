export function createHash(bit = 4) {
  return Array.prototype.map.call(window.crypto.getRandomValues(new Uint8Array(bit)), (item) => item.toString()).join('')
}
