import path from "path";
import { Context } from "koa";
import fs from "fs";

function removeUndefinedValues(obj: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined)
  );
}

function getFileExtension(filename: string): string | null {
  const ext = filename.split(".").pop();
  return ext ? ext : null;
}

function imageUrlToBase64(data: Record<string, any>) {
  if (Array.isArray(data)) {
    return data.map(imageUrlToBase64);
  } else if (typeof data === "object" && data !== null) {
    const newData = { ...data };

    for (const key in newData) {
      if (typeof newData[key] === "object" && newData[key] !== null) {
        if ("url" in newData[key] && typeof newData[key].url === "string") {
          const filePath = path.join(
            __dirname,
            "../../../public",
            newData[key].url
          );

          try {
            const base64 = fs.readFileSync(filePath, { encoding: "base64" });

            newData[key] = {
              ...newData[key],
              base64: `data:image/${getFileExtension(newData[key].url)};base64,${base64}`,
            };
          } catch (error) {
            console.error(`Error reading file at ${filePath}:`, error);
          }
        } else if (Array.isArray(newData[key])) {
          newData[key] = newData[key].map((item: any) => {
            if (typeof item === "object" && item !== null && "url" in item) {
              const filePath = path.join(
                __dirname,
                "../../../public",
                item.url
              );

              try {
                const base64 = fs.readFileSync(filePath, {
                  encoding: "base64",
                });

                return (item = {
                  ...item,
                  base64: `data:image/${getFileExtension(item.url)};base64,${base64}`,
                });
              } catch (error) {
                console.error(`Error reading file at ${filePath}:`, error);
              }
            }
            return imageUrlToBase64(item);
          });
        } else {
          newData[key] = imageUrlToBase64(newData[key]);
        }
      }
    }

    return newData;
  }

  return data;
}

function getMeta(ctx: Context, data: any[]) {
  if (!data) return {};
  const total = data.length;
  const pagination: Record<string, any> = ctx.query.pagination;

  return {
    ...pagination,
    start:
      pagination?.start !== undefined
        ? pagination?.start
        : pagination?.limit === "max"
          ? 0
          : undefined,
    limit: pagination?.limit === "max" ? 100 : undefined,
    total,
  };
}

export { getFileExtension, removeUndefinedValues, imageUrlToBase64, getMeta };
