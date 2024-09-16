import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "qs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(url: string, defaultImage = "") {
  return url
    ? url.includes("https") || url.includes("http")
      ? url
      : process.env.REACT_APP_BE_URL + url
    : defaultImage;
}

export function createQuery(query: object) {
  return qs.stringify(query, { encodeValuesOnly: true });
}
