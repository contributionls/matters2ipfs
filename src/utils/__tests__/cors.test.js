import { getMattersHash } from "../index";
import publicCors from "../../public-cors";
const publicCorsLength = publicCors.length;
test("ping cors proxy to matters", async () => {
  for (let i = 0; i < publicCorsLength; i++) {
    try {
      const result = await getMattersHash({
        mediaHash: "zdpuB1bvMnsAr4APk12FmdRxcqMaEsRo46vKE7p6Arvsg4YiF",
        corsIndex: i
      });
      const dataHash = result.article.dataHash;
      expect(dataHash).toBe("QmXLmTmjichzZAad5gYnjDcsEcTyRiWxCVPp2K7YCKXCKr");
    } catch (error) {
      throw error;
    }
  }
}, 30000);
