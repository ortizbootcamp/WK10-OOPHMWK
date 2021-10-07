const Manager = require("../lib/Manager");
const Employee = require("../lib/employee");

test("WBAT set office number w/ const", () => {
  const officeTest = 101;
  const nEmp = new Manager("Verlok", 055, "hermit@goaway.com", officeTest);
  expect(nEmp.officeNumber).toBe(officeTest);
});

test('Role test returns Manager', () => {
  const roleTest = "Manager";
  const nEmp = new Manager("Verlok", 055, "hermit@goaway.com", "101" );
  expect(nEmp.getRole()).toBe(roleTest);
});

test("WBAT get office w/ function", () => {
  const getOffice = 101;
  const nEmp = new Manager("Verlok", 055, "hermit@goaway.com", getOffice);
  expect(nEmp.getOfficeNumber()).toBe(getOffice);
});