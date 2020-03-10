import axios from "axios";
import publicCors from "../public-cors";
import Route from "route-parser";

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
export const getHash = url => {
  if (url.indexOf("matters.news") < 0) {
    return "";
  }
  const urlObj = new URL(url);
  const detailRoute = new Route("/@:author/:id");
  const routeMatchResult = detailRoute.match(urlObj.pathname);
  if (routeMatchResult && routeMatchResult.id) {
    const matchResult = routeMatchResult.id.match(/.+-(.+)/);
    if (matchResult && matchResult[1]) {
      const hashResult = matchResult[1];
      // check is inclue hash
      const hash = hashResult.split("#")[0];
      return hash;
    } else {
      return "";
    }
  } else {
    return "";
  }
};
export const getMattersHash = async options => {
  if (options && options.mediaHash) {
    // getRandom cors server
    const corsIndex = options.corsIndex;
    const finalCorsIndex =
      corsIndex >= 0 && corsIndex < publicCors.length
        ? corsIndex
        : Math.floor(Math.random() * publicCors.length);
    const theCorsApi = options.cors
      ? { url: options.cors, needEncode: options.corsNeedEncode }
      : publicCors[finalCorsIndex];
    const mattersEndpoint = "https://server.matters.news/graphql";
    const query = /* GraphQL */ `
    query {
      article(input: { mediaHash: "${options.mediaHash}" }) {
        dataHash
      }
    }
  `;
    const mattersUrl = `${mattersEndpoint}?query=${encodeURIComponent(query)}`;
    let endpoint = `${theCorsApi.url}${mattersUrl}`;

    if (theCorsApi.needEncode) {
      endpoint = `${theCorsApi.url}${encodeURIComponent(mattersUrl)}`;
    }
    const config = Object.assign({}, options.config);
    const data = await axios.get(endpoint, config);
    if (data.status === 200 && data.data && data.data.data) {
      return data.data.data;
    } else {
      throw new Error(
        `Can't get data hash, this may cause by matters server change their api, please let me know.`
      );
    }
  } else {
    throw new Error(`Can't found mediaHash`);
  }
};
