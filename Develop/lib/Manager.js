const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(managerName, managerId, managerEmail, officeNumber){
        const name = managerName;
        const id = managerId;
        const email = managerEmail;
        
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.managerName = managerName;
        this.managerId = managerId
        this.managerEmail = managerEmail;
    }
}

module.exports = Manager