const Intern = require("../lib/Intern");

test("WBAT set school w/ const", () => {
  const schoolio = "WoWCollege";
  const nEmp = new Intern("Zarg", 016, "orc@zugzug.net", schoolio);
  expect(nEmp.school).toBe(schoolio);
});

test("role function returns Intern", () => {
  const roleCall = "Intern";
  const nEmp = new Intern("Zarg", 016, "orc@zugzug.net", "WoWCollege");
  expect(nEmp.getRole()).toBe(roleCall);
});

test("WBAT get school w/ function", () => {
  const schoolGet = "WoWCollege";
  const nEmp = new Intern("Zarg", 016, "orc@zugzug.net", schoolGet);
  expect(nEmp.getSchool()).toBe(schoolGet);
});