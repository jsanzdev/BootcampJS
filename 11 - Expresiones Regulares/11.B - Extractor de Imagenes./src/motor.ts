import { imgRegex } from "./model";

export const extractImages = (html: string): string[] => {
  const images: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = imgRegex.exec(html)) !== null) {
    images.push(match[1]);
  }
  return images;
};
