import path from 'path';
import { Context } from 'koa';
import fs from 'fs';
import { getFileExtension } from './functions';

export function executeFolderImage(objec: Record<string, any>) {
  if (!('url' in objec)) {
    return;
  }

  const filePath = path.join(__dirname, '../../../public', objec.url);

  try {
    const base64 = fs.readFileSync(filePath, { encoding: 'base64' });

    return {
      ...objec,
      base64: `data:image/${getFileExtension(objec.url)};base64,${base64}`,
    };
  } catch (error) {
    return objec;
  }
}
