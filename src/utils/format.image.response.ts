import { isValidUrl } from './check.format';
import { executeFolderImage } from './execute.folder.image';

export async function formatImageResponse(data: Record<string, any>) {
  if (!data || typeof data !== 'object') return data;

  if (Array.isArray(data)) {
    return Promise.all(data.map(formatImageResponse));
  }

  for (let key in data) {
    console.log('Key map: ', key, data[key]);

    if (!data[key]) {
      console.log('Skip!');
      continue;
    }

    if (Array.isArray(data[key])) {
      console.log('Inside field is array: ', data[key]);
      data[key] = await Promise.all(data[key].map(formatImageResponse));
    } else if (typeof data[key] === 'object') {
      if ('url' in data[key]) {
        console.log('URL: ', data[key].url);
        if (isValidUrl(data[key].url)) {
          console.log('WEB: ', data[key].url);
        } else {
          console.log('Folders: ', data[key].url);
          data[key] = executeFolderImage(data[key]);
        }
      }

      data[key] = await formatImageResponse(data[key]);
    }
  }

  return data;
}
