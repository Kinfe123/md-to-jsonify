import { extract, extractFromLink } from "./script.js";

const url =
  "https://api.github.com/repos/Kinfe123/md-to-json-based-api/git/blobs/9ce4bf952d956457f11c5937ce189aff6270f63c";
const data = await extractFromLink(url);

console.log("The data is: ", data);

