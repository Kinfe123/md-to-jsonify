import { extract, extractFromString,  extractFromLink  , extractFromFull} from "./script.js";

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


function extractMarkdownTables(text) {
  // Define the regular expression pattern for Markdown tables
  var pattern = /\|(.+)\|\n\|[-]+\|\n((?:\|.*\|\n)+)/g ;

  // Find all matches of the pattern in the text
  var matches = text.match(pattern)
  var tables = []
  // while ((matches = pattern.exec(text)) !== null) {
  //   var headers = matches[1].trim().split('|');
  //   var rows = matches[2].trim().split('\n').map(row => row.trim().split('|'));

  //   // Add the table to the list
  //   tables.push({ headers, rows });
  // }
  
  return matches || [];
}

var text = `
Some text here...

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

Some more text...

| First Name | Last Name |
| ---------- | --------- |
| John       | Doe       |
| Jane       | Smith     |
`;



// console.log(extractMarkdownTables(text))


// Example Markdown content
const markdown = `
# Title

Some text...

| Name  | Age | Email             |
|-------|-----|-------------------|
| Chandler  | 25  | john@example.com  |
| Rose | 30  | alice@example.com |
| Joey | 30  | alice@example.com |
| Monica | 30  | alice@example.com |
| Pheobe | 30  | alice@example.com |
| Rachel | 30  | alice@example.com |
| Chandler | 30  | alice@example.com |

More text...

| ID | Product | Price |
|----|---------|-------|
| 1  | Apple   | $1.99 |
| 2  | Orange  | $0.99 |
`;

// Function to extract tables from Markdown
// function extractTables(markdown) {
//   const tableRegex = /\|.*\|\n((?:\|.*\|\n)+)/g;
//   const tables = [];
//   let match;
//   let str = ''

//   while ((match = tableRegex.exec(markdown)) !== null) {
//     console.log(match)
//     for(let x of match) {
//      str+=x
//     }
//   }
//   return str;
// }

// Extract tables from Markdown
const extractedTables = extractFromFull(markdown);

// Log the extracted tables
console.log('The result is : ', extractedTables)