const tableMarkdown = `


| Name                                   | Description                                                                                                 | Founded Year |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------ |
| [Apideck](https://apideck.com)   | Apideck provides access to a single integration layer with a rapidly growing ecosystem of APIs.                                                                                                                         | 2018         |
| [Appwrite](https://appwrite.io)   | Appwrite is a secure end-to-end backend server for Web, Mobile, and Flutter developers that is packaged as a set of Docker containers for easy deployment                                                                                                                         | 2020         |
| [Bannerbear](https://bannerbear.com)   | Bannerbear auto-generates social media visuals, ecommerce banners, and dynamic email images.                | 2019         |
| [Budibase](https://budibase.com)       | Budibase helps you build internal tools on your own infrastructure in minutes.                              | 2019         |
| [Cerbos](https://cerbos.dev)         | Cerbos is decoupled, open-source and low-toil application access control. | 2021 |
| [Chromatic](https://www.chromatic.com) | Chromatic automates gathering UI feedback, visual testing, and documentation, so developers can iterate faster with less manual work.                             | 2017         |
| [Dub.co](https://dub.co)       | Dub is the link management infrastructure for modern marketing teams.                              | 2023         |
| [Doppler](https://doppler.com)       | Doppler helps developers manage their API keys across their projects.                              | 2018         |
| [Feedback Fish](https://feedback.fish/)                  | A simple way to collect feedback & make your customers happy.                                          | 2020         |
| [Fig](https://fig.io)                  | Fig adds visual apps, shortcuts, and autocomplete to the terminal.                                          | 2020         |
| [Flightcontrol](https://flightcontrol.dev/)                  | Fullstack Deploy Platform that brings Vercel's world-class DX to your own cloud. Supports both containers & serverless functions, and is optimized for fullstack Next.js & Blitz.js apps                                          | 2021         |
| [Gitpod](https://gitpod.io)                  | Gitpod automates the provisioning of ready-to-code development environments.                                          | 2019         |
| [HostedHooks](https://hostedhooks.com)                  | HostedHooks is a webhooks sending as a service platform for developers                                           | 2021         |
| [Inspect](https://inspect.dev)                  | Inspect helps you debug mobile web apps and websites on iOS devices.                                          | 2020         |
| [Knock](https://knock.app)                  | Knock is a notifications-as-a-service platform. Send notifications to multiple channels such as in-app, email, push, Slack and more with a single API call.                                          | 2021         |
| [Linear](https://linear.app)           | Linear helps streamline software projects, sprints, tasks, and bug tracking.                                | 2019         |
| [Livecycle](https://livecycle.io)           | Livecycle is the inclusive, async collaboration platform for product-centric teams.                                | 2022         |
| [Mintlify](https://mintlify.com)       | Mintlify helps companies build beautiful documentation that converts users.                                 | 2022         |
| [Modulz](https://modulz.app)           | Closing the gap between design and dev. Building open source libraries such as Radix and Stitches.          | 2018         |
| [Nhost](https://nhost.io)              | Nhost is a open source Firebase alternative with GraphQL.                                                   | 2019         |
| [PlanetScale](https://planetscale.com) | PlanetScale is a serverless database platform that you can start in seconds.                                | 2018         |
| [Port](https://www.getport.io) | Port is a unified and self service Developer Portal | 2022 |
| [Prefect](https://prefect.io)          | Prefect is the easiest way to automate data pipelines.                                                      | 2018         |
| [Railway](https://railway.app)         | Railway helps you develop code in a cloud that feels local.                                                 | 2020         |
| [Raycast](https://raycast.com)         | Raycast lets you control your tools with a few keystrokes.                                                  | 2020         |
| [Render](https://render.com)           | Render is a unified cloud to build and run all your apps and websites.                                      | 2018         |
| [Resend](https://resend.com)           | Resend is an email API for developers.                                                                      | 2023         |
| [Roboflow](https://roboflow.com)       | Roboflow is a developer tool for building computer vision models faster and more accurately.                | 2019         |
| [Supabase](https://supabase.io)        | Supabase is the open source Firebase alternative.                                                           | 2020         |
| [SuperTokens](https://supertokens.io)  | SuperTokens is an open source alternative to Auth0, Okta, Firebase Auth and AWS Cognito.                                                           | 2019         |
| [Svix](https://www.svix.com)  | Svix makes sending webhooks easy and reliable by offering webhooks sending as a service.                             | 2021         |
| [Sturdy](https://getsturdy.com) | Real-Time Version Control. Share, and iterate on code together. Like Slack instead of email when coding as a team. | 2021         |
| [Temporal](https://temporal.io)        | Temporal enables its users to build and operate resilient applications using developer-friendly primitives. | 2019         |
| [Warrant](https://warrant.dev)         | Warrant provides APIs and infrastructure to help developers implement authorization and access control in their apps. | 2021 |
| [WorkOS](https://workos.com)           | WorkOS provides APIs to make applications enterprise-ready.                                                 | 2018         |


`;

// this will be for mocking the api blob response from readme file

const result = [];
const trimmed = tableMarkdown.trim();
const eachRow = trimmed.split("\n");

const headerParser = (row) => {
  return row
    .split("|")
    .map((r) => r.trim())
    .filter((r) => r !== "");
};

const headers = headerParser(eachRow[0]);

const theRest = eachRow.slice(2, eachRow.length);

const test = "[Alice's Website](https://example.com/alice)";

const linkFlag = ["https://", "http://"];

// const websiteIdx = headers.indexOf("Website");

for (eachCol of theRest) {
  let current_parsed = headerParser(eachCol);
  // console.log('the parsed one: ', current_parsed)
  let counter = 0;
  let currentObj = {};

  for (eachVal of current_parsed) {
    let currentKey = headers[counter];

  
    if (eachVal.includes(linkFlag[0]) || eachVal.includes(linkFlag[1])) {
      if (!currentObj["Website"]) {
        let openIdx = eachVal.indexOf("(");
        let openSquareIdx = eachVal.indexOf("[");
        let closeIdx = eachVal.indexOf(")");
        let closeSquareIdx = eachVal.indexOf("]");

        let parsedLink = eachVal.slice(openIdx + 1, closeIdx);
        let parsedLinkHelper = eachVal.slice(openSquareIdx + 1, closeSquareIdx);
        console.log(parsedLink, parsedLinkHelper);
        currentObj["link"] = parsedLink;
        currentObj[currentKey]= parsedLinkHelper;
      }
    
    }else {
      currentObj[currentKey] = eachVal;
    }
    counter += 1;

    result.push(currentObj);
  }
}

console.log("The result is: ", result[0]['Founded Year']);

const url =
  "https://api.github.com/repos/workos/awesome-developer-experience/git/blobs/fe28415d2d46ac325a12df8292f7cc005aef57ce";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Retrieve the Base64 encoded content from the response
    const content = data.content;

    // Decode the Base64 content into a binary string
    const binaryString = atob(content);

    const firstPipe = binaryString.indexOf("|");
    let title = "";
    // this is the trail implementatation for finding the title of the mdx content

    // for (let i = firstPipe - 2; i >= 0; i++) {
    //   let currentChar = binaryString[i];
    //   if (currentChar) {
    //     let c = i;

    //     while (binaryString[c] !== "") {
    //       title += binaryString[c];
    //       console.log("Findinf the title : ", title);
    //       c -= 1;
    //       if (binaryString[c] === "") {
    //         break;
    //       }
    //     }
    //   }
    // }
    const lineBefore = binaryString.slice(firstPipe - 2, binaryString.length);
    console.log("The binary data: ", title);

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
