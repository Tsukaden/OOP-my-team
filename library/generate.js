const fs = require('fs');

function generateMyTeam(teamMembers) {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
    </head>
    <body>
      <h1>My Team</h1>
      <ul>
        ${teamMembers.map(member => `
          <li>
            <h2>${member.getName()}</h2>
            <p>ID: ${member.getId()}</p>
            <p>Email: <a href="mailto:${member.getEmail()}" target="_blank">${member.getEmail()}</a></p>
            ${member.getRole() === 'Manager' ? `<p>Office Number: ${member.getOfficeNumber()}</p>` : ''}
            ${member.getRole() === 'Engineer' ? `<p>GitHub: <a href="https://github.com/${member.getGithub()}" target="_blank">${member.getGithub()}</a></p>` : ''}
            ${member.getRole() === 'Intern' ? `<p>School: ${member.getSchool()}</p>` : ''}
          </li>
        `).join('')}
      </ul>
      <script>
        const emailLinks = document.querySelectorAll('a[href^="mailto"]');
        emailLinks.forEach(link => {
          link.addEventListener('click', event => {
            event.preventDefault();
            window.location.href = link.href;
          });
        });

        const githubLinks = document.querySelectorAll('a[href^="https://github.com"]');
        githubLinks.forEach(link => {
          link.addEventListener('click', event => {
            event.preventDefault();
            window.open(link.href);
          });
        });
      </script>
    </body>
    </html>
  `;

  fs.writeFile('my-team.html', htmlTemplate, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('My Team generated successfully!');
    }
  });
}