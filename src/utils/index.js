import { GraphQLClient } from "graphql-request";
const endpoint = "https://cors-anywhere.herokuapp.com/https://server.matters.news/graphql";
  const graphQLClient = new GraphQLClient(endpoint,{
      headers:{
          // origin:'https://matters.news',
          // 'x-requested-with':'matters'
      },
      mode: 'cors',
 
});
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
  const matchResult = url.match(/.+-(.+)/)
  if(matchResult && matchResult[1]){
    const hashResult = matchResult[1]
    // check is inclue hash
    const hash = hashResult.split('#')[0]
    return hash
  }else{
    return ''
  }
}
export const getMattersHash =async options => {
  if(options && options.mediaHash){
    const query = /* GraphQL */ `
    query {
      article(input: { mediaHash: "${options.mediaHash}" }) {
        dataHash
      }
    }
  `;
  const data = await graphQLClient.request(query);
  return data;
  }else{
    throw new Error(`Can't found mediaHash`)
  }
  
}