import { readFileSync } from 'fs';
const mimeTypes = require('mime-types');

export enum FileAsset {
  IMAGE_20kb = 'image/test_20kb.jpg',
  IMAGE_75kb = 'image/test_75kb.jpg',
  IMAGE_5MB = 'image/test_5mb.jpg',
  IMAGE_25MB = 'image/test_25mb.bmp',
}

const base64toBlob = (base64Data: string, name: string, contentType: string = '') => {
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);
  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);
    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new File(byteArrays, name, { type: contentType });
};

interface FileLoaderProperties {
  name: FileAsset;
}

export default class FileLoader {
  private _asset: FileAsset;

  constructor({ name }: FileLoaderProperties) {
    this._asset = name;
  }
  async load(): Promise<File> {
    const path = `${__dirname}/../asset/${this._asset}`;
    const buffer = readFileSync(path);
    const type = mimeTypes.lookup(path);
    const base64 = buffer.toString('base64');
    return base64toBlob(base64, this._asset, typeof type === 'string' ? type : undefined);
  }
}
