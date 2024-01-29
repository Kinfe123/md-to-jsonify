import fs from "fs";
let result = "";

// const d = fs.readFile('readme.md' , 'utf-8' ,  (err  ,data) => {
//     if(err){
//         console.log('Error has occured')
//         return
//     }
//     result = data
//     pro()
//     return data.toString()
// } )

function readFileContents(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, data);
  });
}

export function getFileAsString(filePath) {
  return new Promise((resolve, reject) => {
    readFileContents(filePath, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

// Usage example
const filePath = "readme.md";

// getFileAsString(filePath)
//   .then((data) => {
//     console.log(data); // Output the file contents
//   })
//   .catch((error) => {
//     console.error(error);
//   });
