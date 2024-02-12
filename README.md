# md-to-jsonify 
 
is npm package that helps you get the json data format out any data format like table , maps , anything that can be stored on key values pair for a sake of implementation.


You can find the full docs [here](https://md-jsonify.vercel.app)
## Features 

It comes with the following features out of the box and some unfinished tasks:


- [x]  Write content using MDX.
- [x]  Transform and validate content.
- [x]  Optimize the iteration for converting the data.
- [x]  Split out link in separate data feilds with ```link``` property.
- [x]  Passed multiple edgecase for symbols that does have a meaning on markdown like ```[]``` , ```()```.
- [x]  Numbering the links - ```linkX``` , while X being the number of links with a given row.
- [x]  More is comming like - parsing the convetable data's from the entire md file 
- [x]  Custom Playground for testing out the stuff.

- [ ]  Parsing the table and other data format from md containing other stuff not only the data contents.
- [ ]  Integrating with AI for curation.


## Installation

```bash 
npm i md-to-jsonify
```



## Usage 

```jsx 


//extracting from markdown string
import {extract ,extractFromString , extractFromLink} from 'md-to-jsonify'

const result = extractFromString(markdownTable)
console.log('The JSON data : ' , result)



// extracting from full text 
const markDownString =  `
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
const result = extractFromFull(markDownString)
console.log("The JSON data: " ,result  ) 
// extracting from the relative path in file system
const filepath = 'path/to/something.md'
const result = await extract(filepath)
console.log('JSON data is : ' , result)



// extracting from the link from github public api url 
const apiUrl = "https://api.github.com/repos/workos/awesome-developer-experience/git/blobs/{sha}"
// the way to get the this is by going to the url - https://api.github.com/repos/workos/awesome-developer-experience/git/trees/master
// from the above link you will get the sha from the endpiont 

const result = await extractFromLink(apiUrl)
console.log('JSON data is: ' , result)
```
## Output

```json
[
  {"Name":"John","Age":"25","Country":"USA","link":"https://example.com/john","Website":"JohPn's Website"},
  {"Name":"Alice","Age":"30","Country":"Canada","link":"https://example.com/alice","Website":"Alice's Website"}
]
```


## Features 



## Contribution 

I really welcome any individual who wants to participate and contribute on this project to make more stable , raise an issue and let discuss on them or send pr , i will review it anyways


