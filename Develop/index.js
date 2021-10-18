const inquirer = require ("inquirer");
const fs = require("fs");
const generateHtml = require ("./util/generateHtml");
const Manager  = require ("./lib/Manager");
const Intern = require ("./lib/Intern");
const Engineer = require ("./lib/Engineer");

const team = [];

const start = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'Please enter manager name'
        },
        {
            type:'input',
            name:'id',
            message:'Please enter manager ID'
        },
        {
            type:'input',
            name:'email',
            message:'Please enter manager email'
        },
        {
            type:'input',
            name:'officeNumber',
            message:'Please enter office number'
        },
    ]).then (answer => {
        const newManager = new Manager (answer.name, answer.id, answer.email, answer.officeNumber);
        team.push(newManager);
        keepGoing();
    })
}

const keepGoing = () => {
    inquirer.prompt({
        type:'list',
        name:'type',
        message:'Please select an option',
        choices:['Add an engineer', 'Add an intern', 'Finish building team']
    }).then(answer => {
        switch(answer.type){
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            default:
                makeTeam();
                break;
        }
    })
}

const makeTeam = () =>{
    fs.writeFile('team.html',generateHtml(team), (err) => {
        if (err) {
            console.error(err);
        }else{
            console.log("Your team is ready for you!");
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
        const newEngineer = new Engineer (answer.engineerName, answer.engineerId, answer.engineerEmail, answer.github);
        team.push(newEngineer);
        keepGoing();
    })
}

const addIntern = () => {
    inquirer.prompt([
        {
            type:'input',
            name:'internName',
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
            message:"Please enter intern's school"
        }
    ]).then(answer => {
        const newIntern = new Intern (answer.internName, answer.internId, answer.internEmail, answer.university);
        team.push(newIntern);
        keepGoing();
    })
}

start();