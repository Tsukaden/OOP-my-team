const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const teamMembers = [];

function createManager() {
  console.log('Please enter information for the team manager:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the team manager:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the ID of the team manager:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the email address of the team manager:',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter the office number of the team manager:',
    },
  ])
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    addTeamMember();
  })
  .catch((error) => {
    console.log(error);
  });
}

function addTeamMember() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'memberType',
      message: 'What type of team member would you like to add?',
      choices: [
        'Engineer',
        'Intern',
        'Finish adding team members',
      ],
    },
  ])
  .then((answers) => {
    switch (answers.memberType) {
      case 'Engineer':
        createEngineer();
        break;
      case 'Intern':
        createIntern();
        break;
      default:
        generateTeam();
    }
  })
  .catch((error) => {
    console.log(error);
  });
}

function createEngineer() {
  console.log('Please enter information for the engineer:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the engineer:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the ID of the engineer:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the email address of the engineer:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the GitHub username of the engineer:',
    },
  ])
  .then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMembers.push(engineer);
    addTeamMember();
  })
  .catch((error) => {
    console.log(error);
  });
}

function createIntern() {
  console.log('Please enter information for the intern:');
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the intern:',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter the ID of the intern:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the email address of the intern:',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the school name of the intern:',
    },
  ])
  .then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamMembers.push(intern);
   
    console.log(`Added ${intern.getName()} to the team.`);
  
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberType',
          message: 'Would you like to add another team member?',
          choices: ['Engineer', 'Intern', 'Finish'],
        },
      ])
      .then((answer) => {
        switch (answer.memberType) {
          case 'Engineer':
            createEngineer();
            break;
          case 'Intern':
            createIntern();
            break;
          default:
            generateTeam();
            break;
        }
      })});
    };
