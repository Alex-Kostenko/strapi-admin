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

function imageUrlToBase64<DataType extends Record<string, any>>(
  dataArray: DataType[]
): any[] {
  return dataArray.map((obj) => {
    if (obj.image && obj.image.url) {
      const filePath = path.join(__dirname, "../../../public", obj.image.url);

      try {
        const base64 = fs.readFileSync(filePath, { encoding: "base64" });
        obj.image.base64 = `data:image/${getFileExtension(obj.image.url)};base64,${base64}`;
      } catch (error) {
        console.error(`Error reading file at ${filePath}:`, error);
      }
    }

    return obj;
  });
}

function getMeta(ctx: Context, data: any[]) {
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
