const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
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