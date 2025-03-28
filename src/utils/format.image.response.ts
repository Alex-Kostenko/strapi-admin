import { isValidUrl } from './check.format';
import { executeFolderImageByUrl } from './execute.folder.image';
import { fetchWebImageAsBase64 } from './execute.web.image';

const EMPTY_BASE64_IMAGE = 'data:image/png;base64,';

export async function formatImageResponse(data: Record<string, any>) {
  if (!data || typeof data !== 'object') return data;

  if (Array.isArray(data)) {
    return Promise.all(data.map(formatImageResponse));
  }

  for (let key in data) {
    if (!data[key]) {
      continue;
    }

    if (Array.isArray(data[key])) {
      data[key] = await Promise.all(data[key].map(formatImageResponse));
    } else if (typeof data[key] === 'object') {
      if ('url' in data[key]) {
        const url = data[key].url;
        let base64: string = EMPTY_BASE64_IMAGE;
        try {
          if (isValidUrl(url)) {
            base64 = await fetchWebImageAsBase64(url);
          } else {
            base64 = executeFolderImageByUrl(url);
          }
        } catch (e) {
          console.log('Error: ', e);
        }

        data[key] = { ...data[key], base64 };
      }

      data[key] = await formatImageResponse(data[key]);
    }
  }

  return data;
}
