import { extract, extractFromString,  extractFromLink } from "./script.js";

const url =
  "https://api.github.com/repos/Kinfe123/md-to-json-based-api/git/blobs/9ce4bf952d956457f11c5937ce189aff6270f63c";
const data = await extractFromLink(url);


const markdownTable = `
| Name  | Age | Website                |
|-------|-----|------------------------|
| John  | 25  | [Example Website 1](https://example.com) |
| Alice | 30  | [Example Website 2](https://example.org) |
`;
 

const result = extractFromString(markdownTable)
