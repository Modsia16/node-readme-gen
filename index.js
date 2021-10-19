//node modules needed for applications
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//quesitons array
const questions = [
        {
            type: 'input',
            message: "What is the project title?",
            name: "title",
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
        {
            type: 'input',
            message: "Briefly describe your project?",
            name: "description",
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
        {
            type: 'input',
            message: "What are the instructions to install your application?",
            name: "installation",
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
        {
            type: 'input',
            message: "Enter usage instructions?",
            name: "usage",
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
        {
            type: 'input',
            message: "Enter the projects contributor guidelines?",
            name: "contributing",
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
        {
            type: 'input',
            message: "Enter your porject test instructions",
            name: "test",
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onwaard'}},
        },
        {
            type: 'list',
            message: "Which licence will your project be under?",
            name: "licence",
            choices: ['MIT', 'Apache', 'GPL'],
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
        {
            type: 'input',
            message: 'What is your GitHib username?',
            name: 'username',
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
        {
            type: 'input',
            message: 'What is you email address?',
            name: 'email',
            validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
        },
    ];

//function for readme file
function writeTofile(fileName, data) {
    const mdPageContent = generateMarkdown(data);
    fs.writeFile(fileName, mdPageContent, (err) =>
    err ? console.error(err) : console.log('success')
    );
}

//function to initilaize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const fileName = `README.md`;
        writeToFile(fileName, data)
    })
}

//function to call to initilize app
init();
