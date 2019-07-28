export { api } from "./api";
export function getExtname(filename) {
  const ext = filename.split(".").pop();
  if (ext) {
    return `.${ext}`;
  }
}
export const isValidUrl = string => {
  if (!string) {
    return true;
  }
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};
