import { extract, extractFromString,  extractFromLink } from "./script.js";

// const url =
//   "https://api.github.com/repos/Kinfe123/md-to-json-based-api/git/blobs/9ce4bf952d956457f11c5937ce189aff6270f63c";
// const data = await extractFromLink(url);


const markdownTable = `
| Name  | Age | Website                |
|-------|-----|------------------------|
| John  | 25  | [Example Website 1](https://example.com) |
| Alice | 30  | [Example Website 2](https://example.org) |
`;
const theMinMdTable = `
| Name  | 
|-------|
| John  | 

`;
 
 


// const  markdownTable = `
// some really happends and 
// i dont understand it well but i always try
// somehow new but strange
// `




// const prune = (mdString) => {

//   const findPipe = mdString.includes('|')
//   const st =  mdString.toString()
//   let pipes = 0;
//   let bars = 0;
//   for(let s of st) {
//    if(s === '|') pipes+=1;
//    if(s === '-') bars+=1; 
//   }

//   console.log(pipes , bars)
  
  



// }
// const result = extractFromString(theMinMdTable)
// prune(theMinMdTable)
// console.log(result)