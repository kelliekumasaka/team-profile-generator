const Employee = require("./Employee");

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