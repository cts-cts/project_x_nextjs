import axios from "axios";

class VideoService {
  static async getVideo() {
    try {
      const res = await axios.get(
        // `https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4`,
        `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4`,
        // `https://store10.gofile.io/download/45588b39-f66c-4d37-8452-bdad46186be4/video.mp4`,
        {
          headers: {
            Accept: "*/*",
            Cookie: "accountToken=LepJhWd63YCL0w6Dfs6ce8KnDfXvGQ7t",
          },

          responseType: "blob",
        }
      );

      const videoUrl = URL.createObjectURL(res.data);
      //   console.log(res.data);

      return videoUrl;
    } catch (error) {
      console.error("Error fetching video:", error);
      throw error;
    }
  }
}

export default VideoService;
