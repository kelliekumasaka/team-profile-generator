const inquirer = require ("inquirer");
const generateHtml = require ("./util/generateHtml");
const Manager  = require ("./lib/Manager");
const Intern = require ("./lib/Intern");
const Engineer = require ("./lib/Engineer");

const start = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'managerName',
            message:'Please enter manager name'
        },
        {
            type:'input',
            name:'managerId',
            message:'Please enter manager ID'
        },
        {
            type:'input',
            name:'managerEmail',
            message:'Please enter manager email'
        },
        {
            type:'input',
            name:'officeNumber',
            message:'Please enter office number'
        },
        {
            type:'list',
            name:'type',
            message:'Please select an option',
            choices:['Add an engineer', 'Add an intern', 'Finish building your team']
        }
    ]).then (answer => {
        generateManager(answer);
        switch(answer.type){
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            default:
                break;
        }
    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'engineerName',
            message:"Please enter an engineer's name"
        },
        {
            type:'input',
            name:'engineerId',
            message:"Please enter engineer's ID number"
        },
        {
            type:'input',
            name:'engineerEmail',
            message:"Please enter engineer's email"
        },
        {
            type:'input',
            name:'github',
            message:"Please enter engineer's GitHub username"
        }
    ]).then(answer => {
        generateEngineer(answer);
        keepGoing();
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'interName',
            message:"Please enter intern's name"
        },
        {
            type:'input',
            name:'internId',
            message:"Please enter intern's ID number"
        },
        {
            type:'input',
            name:'internEmail',
            message:"Please enter intern's email"
        },
        {
            type:'input',
            name:'university',
            message:"Please enter intern's university"
        }
    ]).then(answer => {
        generateIntern(answer);
        keepGoing();
    })
}

const keepGoing = () => {
    inquirer.prompt({
        type:'confirm',
        name:'continue',
        message:['Would you like to add more team members?']
    }).then(answer => {
        if (answer.continue){
            start();
        }else{
            console.log("You have completed your team!")
        }
    })
}

start();