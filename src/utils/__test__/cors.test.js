import { getMattersHash } from "../index";
import publicCors from "../../public-cors";
import https from "https";
const publicCorsLength = publicCors.length;
test("ping cors proxy to matters", async () => {
  for (let i = 0; i < publicCorsLength; i++) {
    try {
      const result = await getMattersHash({
        mediaHash: "zdpuB1bvMnsAr4APk12FmdRxcqMaEsRo46vKE7p6Arvsg4YiF",
        corsIndex: i,
        config: {
          httpsAgent: new https.Agent({ rejectUnauthorized: false }),
          headers: {
            Accept: "application/json, text/plain, */*",
            Referer: "https://matters2ipfs.js.org",
            "X-Requested-With": "XMLHttpRequest",
            origin: "https://matters2ipfs.js.org",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
          }
        }
      });
      const dataHash = result.article.dataHash;
      expect(dataHash).toBe("QmXLmTmjichzZAad5gYnjDcsEcTyRiWxCVPp2K7YCKXCKr");
    } catch (error) {
      throw error;
    }
  }
}, 30000);
