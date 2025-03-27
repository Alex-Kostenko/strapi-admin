import { isValidUrl } from './check.format';
import { executeFolderImage } from './execute.folder.image';

export async function formatImageResponse(data: Record<string, any>) {
  if (!data || typeof data !== 'object') return data;

  if (Array.isArray(data)) {
    return Promise.all(data.map(formatImageResponse));
  }

  console.log('First: ', data);

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
        if (isValidUrl(data[key].url)) {
          console.log('WEB: ', data[key].url);
        } else {
          console.log('Folders: ', data[key].url);
          executeFolderImage(data[key]);
        }
      }
      // Рекурсивна обробка вкладених об'єктів (щоб не втрачати їх)
      data[key] = await formatImageResponse(data[key]);
    }
  }

  return data;
}
