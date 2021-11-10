//node modules needed for applications
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
let data, fileName
//quesitons array
const questions = [
        {
            type: 'input',
            message: "What is the project title?",
            name: "title",
        },
        {
            type: 'input',
            message: "Briefly describe your project?",
            name: "about",
        },
        {
            type: 'input',
            message: "What are the instructions to install your application?",
            name: "installation",
        },
        {
            type: 'input',
            message: "Enter usage instructions?",
            name: "usage",
        },
        {
            type: 'input',
            message: "Enter the projects contributor guidelines?",
            name: "contribution",
        },
        {
            type: 'input',
            message: "Enter your porject test instructions",
            name: "tests",
        },
        {
            type: 'list',
            message: "Which license will your project be under?",
            name: "license",
            choices: ['MIT', 'GPL', 'Apache', 'None'],
        },
        {
            type: 'input',
            message: 'What is your GitHib username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is you email address?',
            name: 'email',
        },
    ];

//function for readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('success')
    );
}

//function to initilaize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        data = response;
        fileName = `${data.title}-README.md`;
        writeToFile(fileName, data)
    })
}

//function to call to initilize app
init();
