const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(engineerName, engineerId, engineerEmail, github){
        const name = engineerName;
        const id = engineerId;
        const email = engineerEmail;

        super (name, id, email);
        this.engineerName = engineerName;
        this.engineerId = engineerId;
        this.engineerEmail = engineerEmail;
        this.github = github;
    }
}

module.exports = Engineer;