import { extract } from "./script.js";

// const data = await extract('readme.md')

const url =
  "https://api.github.com/repos/Kinfe123/md-to-json-based-api/git/blobs/9ce4bf952d956457f11c5937ce189aff6270f63c";


const res = await fetch(url)
const response = await res.json()
const content = await response.content
const binaryString = await atob(content)
console.log(binaryString)

  // console.log("THe data is: ", data);
