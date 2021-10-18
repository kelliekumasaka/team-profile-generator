const Employee = require("./Employee");

class Manager extends Employee{
    constructor(managerName, managerId, managerEmail, officeNumber){
        super(managerName, managerId, managerEmail);
        this.officeNumber = officeNumber;
    };
    getRole(){
        return 'Manager'
    };
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager