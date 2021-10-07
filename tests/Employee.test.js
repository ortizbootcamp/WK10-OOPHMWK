const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("WBAT start employee inst", () => {
    const nEmp = new Employee();
    expect(typeof(nEmp).toBe("object"));
});

test("WBAT set name with constructor", () => {
    const nameTest = "Wrathion";
    const nEmp = new Employee(nameTest);
    expect(nEmp.name).toBe(nameTest);
});

test("WBAT set id with constructor", () => {
    const idTest = "007";
    const nEmp = new Employee("Wrathion", idTest);
    expect(nEmp.id).toBe(idTest);
});

test("WBAT set email with constructor", () => {
    const emailTest = "TheBlackEmperor@dragon.com";
    const nEmp = new Employee("Wrathion", 007, emailTest);
    expect(nEmp.email).toBe(emailTest);
});

test("WBAT getName w/ function", () => {
    const nameGet = "Wrathion";
    const nEmp = new Employee(nameGet);
    expect(nEmp.name).toBe(nameGet);
});

test("WBAT getId w/ function", () => {
    const idGet = 007;
    const nEmp = new Employee("Wrathion", idGet);
    expect(nEmp.getId()).toBe(idGet);
  });

  test("WBAT getEmail w/ function", () => {
    const emailGet = "TheBlackEmperor@dragon.com";
    const nEmp = new Employee("Wrathion", 007, emailGet);
    expect(nEmp.getEmail()).toBe(emailGet);
  });
  
  test("Role function returns Employee", () => {
    const roleTest = "Employee";
    const nEmp = new Employee("Wrathion", 007, "TheBlackEmperor@dragon.com");
    expect(nEmp.getRole()).toBe(roleTest);
  });