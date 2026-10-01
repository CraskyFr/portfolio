// Emballe un PNG dans un fichier .ico (format ICO avec image PNG embarquée).
// Usage : node scripts/png-to-ico.mjs <entrée.png> <sortie.ico>
import { readFileSync, writeFileSync } from 'node:fs';

const [input, output] = process.argv.slice(2);
const png = readFileSync(input);
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // réservé
header.writeUInt16LE(1, 2); // type : icône
header.writeUInt16LE(1, 4); // nombre d'images

const entry = Buffer.alloc(16);
entry.writeUInt8(width >= 256 ? 0 : width, 0);
entry.writeUInt8(height >= 256 ? 0 : height, 1);
entry.writeUInt16LE(1, 4); // plans de couleur
entry.writeUInt16LE(32, 6); // bits par pixel
entry.writeUInt32LE(png.length, 8);
entry.writeUInt32LE(header.length + entry.length, 12);

writeFileSync(output, Buffer.concat([header, entry, png]));
