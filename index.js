//node modules
const fs = require('fs')
const inq = require('inquirer')

//quesitons
inq.prompt([
    {
        type: 'input',
        message: "What is the project title?",
        name: "title",
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    },
    {
        type: 'input',
        message: "how do you install?",
        name: "installation",
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    },
    {
        type: 'input',
        message: "instructions to follow?",
        name: "instructions",
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    },
    {
        type: 'input',
        message: "credentials?",
        name: "credits",
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    },
    {
        type: 'input',
        message: "how do you use your app?",
        name: "usage",
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onwaard'}},
    },
    {
        type: 'list',
        message: "licences?",
        name: "licences",
        choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    },
    {
        type: 'input',
        message: "how do you use your app?",
        name: "confirm",
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    },
    {
        type: 'input',
        message: 'GitHib username:',
        name: 'git',
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
        validate: (value)=>{if(value){return true} else{ return 'needs a value to move onward'}},
    }
]) .then(({
    title,
    installation,
    instructions,
    credit,
    licence,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{
    const template = `# ${title}
    `;
})

    