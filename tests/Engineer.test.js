const Engineer = require("../lib/Engineer");

test("WBAT set github acc with constructor", () => {
  const gitTest = "WowGitHub";
  const nEmp = new Engineer("Baine", 123, "moo@tauren.com", gitTest);
  expect(nEmp.github).toBe(gitTest);
});

test("Role function should return Engineer", () => {
  const roleT = "Engineer";
  const nEmp = new Engineer("Baine", 123, "moo@tauren.com", "WowGitHub");
  expect(nEmp.getRole()).toBe(roleT);
});

test("WBAT get GH username with function", () => {
  const gitGet = "WowGitHub";
  const nEmp = new Engineer("Baine", 123, "moo@tauren.com", gitGet);
  expect(nEmp.getGithub()).toBe(gitGet);
});