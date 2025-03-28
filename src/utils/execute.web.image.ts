export async function fetchWebImageAsBase64(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Failed to fetch image: ${response.statusText}`);

  const arrayBuffer = await response.arrayBuffer();
  const base64String = Buffer.from(arrayBuffer).toString('base64');

  const contentType = response.headers.get('content-type') || 'image/png';

  return `data:${contentType};base64,${base64String}`;
}
