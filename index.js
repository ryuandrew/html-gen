const inquirer = require('inquirer');
const fs = require("fs")

inquirer
  .prompt([{
    /* Pass your questions in here */
    type: "input",
    message: "What is your name?",
    name: "yourName"
  },
  {type: "input",
  message: "Where is your locations?",
  name: "location"
  },
  {type: "input",
  message: "What is your bio?",
  name: "yourBio"
  },
  {type: "input",
  message: "What is your LinkedIn URL?",
  name: "linkedIn"
  },
  {type: "input",
  message: "What is your GitHub URL?",
  name: "gitHub"
  },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Group Project</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <main>
            <h1>My name</h1>
            <p>${answers.yourName}</p>
            <h1>My location</h1>
            <p>${answers.location}</p>
            <h1>My bio</h1>
            <p>${answers.yourBio}</p>
            <h1>My LinkedIn Profile</h1>
            <a href="${answers.linkedIn}">${answers.linkedIn}</a>
            <h1>My GitHub Profile</h1>
            <a href="${answers.gitHub}">${answers.gitHub}</a>
        </main>
    </body>
    </html>`
    fs.writeFile(`./${answers.yourName}.html`, content, err => {
        if(err) {
            console.error(err)
            return
        }
    })
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   }
//   );