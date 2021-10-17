const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor(internName, internId, internEmail, school){
        const name = internName;
        const id = internId;
        const email = internEmail;

        super(name, id, email)
        this.internName = internName;
        this.internId = internId;
        this.internEmail = internEmail;
        this.school = school;
    }
}

module.exports = Intern