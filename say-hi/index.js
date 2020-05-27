const fs = require('fs');
const greetings = ['Hola', '안녕하세요', 'Bonjour', 'Guten Tag', 'Hi']
let i = 0;
let sayHi = setInterval(() => {
  // set a date because it will be used in the file name
  let dateNow = new Date();

  // format the date into a readable string
  let timeNow = `${dateNow.getHours()}.${dateNow.getMinutes() + 1}.${dateNow.getSeconds()}`;
  dateNow = `${dateNow.getFullYear()}.${dateNow.getMonth() + 1}.${dateNow.getDate()}`;

  // log what's happening
  console.log(`${greetings[i]} at ${dateNow} ${timeNow}`);

  // set parameters and write the files
  let fileContent = greetings[i];
  let filePath = dateNow + '-' + timeNow + '.txt';
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) {
      console.log('There was an error');
    }
  })

  i++;
  i === greetings.length ? clearInterval(sayHi) : null;
}, 1000);
