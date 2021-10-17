const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor(internName, internId, internEmail, school){
        super(internName, internId, internEmail)
        this.school = school;
    };
    getRole() {
        return 'Intern'
    };
    getSchool() {
        return this.school
    }
}

module.exports = Intern