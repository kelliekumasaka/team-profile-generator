const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(engineerName, engineerId, engineerEmail, github){
        super (engineerName, engineerId, engineerEmail);
        this.github = github;
    };
    getRole(){
        return "Engineer"
    };
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;