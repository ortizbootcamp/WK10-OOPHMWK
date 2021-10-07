const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const buildHTML = require("");

const yourTeam = [];


function pickTeam() {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please input your manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Please input your manager's id:"
        },
        {
            type: "input",
            name: "email",
            message: "Please input your manager's email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please input your manager's office number:"
        }
    ])

    .then(function (info) {
        let manager = new Manager(info.name, info.id, info.email, info.officeNumber);
        yourTeam.push(manager)
        pickNext();
    })

    function pickNext() {
        let addChoice = await inquirer.prompt([
            {
                type:"list",
                name: "nextmemb",
                message: "Choose your next team member - or choose to finish adding to your team:",
                choices: ["Intern", "Engineer", "I have finished building my team."]
            }
        ]);

        if (addChoice.team === "Engineer") {

            inquirer.prompt([
                {
                    type: "input",
                    message: "Please input your Engineer's name:",
                    name: "name",
                },
                {
                    type: "input",
                    message: "Please input your Engineer's id:",
                    name: "id",
                },
                {
                    type: "input",
                    message: "Please input your Engineer's email:",
                    name: "email",
                },
                {
                    type: "input",
                    message: "Please input your Engineer's GitHub username:",
                    name: "github",
                }
            ]) 

            .then(function (info) {
                let engineer = new Engineer(info.name, info.id, info.email, info.officeNumber);
                yourTeam.push(engineer)
                pickNext();
            })

        } else if (addChoice.team === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Please input your Intern's name:",
                    name: "name",
                },
                {
                    type: "input",
                    message: "Please input your Intern's id:",
                    name: "id",
                },
                {
                    type: "input",
                    message: "Please input your Intern's email:",
                    name: "email",
                },
                {
                    type: "input",
                    message: "Please input your Intern's school:",
                    name: "school",
                }
            ])

                .then(function (info) {
                    let intern = new Intern(info.name, info.id, info.email, info.school);
                    yourTeam.push(intern);
                    pickNext();
                })
            
            } else {
                
                buildHTML();
            
            }
        }   
}

pickTeam();
