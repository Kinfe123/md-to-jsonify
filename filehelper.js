import fs from "fs";


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

