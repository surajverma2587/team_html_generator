const Employee = require("./Employee");

class Intern extends Employee {
  constructor({ school, ...rest }) {
    super(rest);

    this.school = school;
  }
}
module.exports = Intern;