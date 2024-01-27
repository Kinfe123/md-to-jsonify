

const tableMarkdown = `
| Name  | Age | Country | Website            |
|-------|-----|---------|--------------------|
| John  | 25  | USA     | [John's Website](https://example.com/john) |
| Alice | 30  | Canada  | [Alice's Website](https://example.com/alice) |
`;

const result = []
const trimmed = tableMarkdown.trim()
const eachRow = trimmed.split('\n')


const headerParser = (row) => {
  return row[0].split('|').map((r) => r.trim()).filter(r => r!=='')

}



const headers = headerParser(eachRow)


const theRest = eachRow.slice(2 , eachRow.length)
 


const linkFlag = ['https://' , 'http://']
for(eachCol of theRest) {
  let current_parsed = headerParser(eachCol)
  for(eachVal of eachCol) {
     if(eachVal.includes(linkFlag[0]) || eachVal.includes(linkFlag[1])) {
      console.log('I FOUND OEN: ' , eachVal)
     }
  }

}







const url =
  "https://api.github.com/repos/workos/awesome-developer-experience/git/blobs/fe28415d2d46ac325a12df8292f7cc005aef57ce";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Retrieve the Base64 encoded content from the response
    const content = data.content;

    // Decode the Base64 content into a binary string
    const binaryString = atob(content);

    const trimmedTableMarkdown = binaryString.trim();

    // Split the table content into rows
    const rows = trimmedTableMarkdown.split("\n");

    // Extract the table headers from the first row
    const headers = rows[0]
      .split("|")
      .map((header) => header.trim())
      .filter((header) => header !== "");

    // Extract the table data from the remaining rows
    const datas = rows.slice(2).map((row) => {
      const columns = row
        .split("|")
        .map((column) => column.trim())
        .filter((column) => column !== "");
      const rowData = {};
      headers.forEach((header, index) => {
        if (header !== "Website") {
          rowData[header] = columns[index];
        } else {
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/;
          const linkMatch = columns[index].match(linkRegex);
          if (linkMatch) {
            rowData["Link"] = {
              text: linkMatch[1],
              url: linkMatch[2],
            };
          } else {
            rowData["Link"] = {
              text: "",
              url: "",
            };
          }
        }
      });
      return rowData;
    });

    // Convert the table data to JSON format
    const jsonData = JSON.stringify(datas, null, 2);
    // console.log('The data is : ' , jsonData)

    // Use the binary string as needed

    // the time to convert the readme file to the actual JSON file
    // const trimmedTableMarkdown = binaryString.trim();
    // console.log(Extractor.extractObject(trimmedTableMarkdown, "columns", true));

    // // Split the table content into rows
    // const rows = trimmedTableMarkdown.split("\n");

    // // Extract the table headers from the first row
    // const headers = rows[0]
    //   .split("|")
    //   .map((header) => header.trim())
    //   .filter((header) => header !== "");

    // // Extract the table data from the remaining rows
    // const datas = rows.slice(2).map((row) => {
    //   const columns = row
    //     .split("|")
    //     .map((column) => column.trim())
    //     .filter((column) => column !== "");
    //   const rowData = {};
    //   headers.forEach((header, index) => {
    //     rowData[header] = columns[index];
    //   });
    //   return rowData;
    // });

    // // Convert the table data to JSON format
    // const jsonData = JSON.stringify(datas, null, 2);

    // console.log("The json data : ", jsonData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
