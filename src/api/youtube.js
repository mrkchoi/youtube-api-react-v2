import axios from "axios";
const KEY = "AIzaSyD-Gp9u3W7psYfkyT9-fcdyilggvGlVJec";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
