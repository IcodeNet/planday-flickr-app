const fs = require('fs');

// destination.txt will be created or overwritten by default.
const sourceFile = './theme/fonts/planday-icons.svg';
const dest = './theme/fonts/planday-icons.xml';

fs.copyFile(sourceFile, dest, (err) => {
  if (err) throw err;
  console.log(`${sourceFile} was copied to ${dest}`);
});
