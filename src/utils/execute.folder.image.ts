import path from 'path';
import { Context } from 'koa';
import fs from 'fs';
import { getFileExtension } from './functions';

export function executeFolderImage(objec: Record<string, any>) {
  for (const key in objec) {
    if (!('url' in objec[key])) {
      return;
    }

    const filePath = path.join(__dirname, '../../../public', objec[key].url);

    try {
      const base64 = fs.readFileSync(filePath, { encoding: 'base64' });

      objec[key] = {
        ...objec[key],
        base64: `data:image/${getFileExtension(objec[key].url)};base64,${base64}`,
      };
    } catch (error) {
      console.error(`Error reading file at ${filePath}:`, error);
    }
  }
}
