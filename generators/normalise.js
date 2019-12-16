const fs = require('fs');

const pathToFile = './theme/fonts/planday-icons.xml';

fs.readFile(pathToFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  const searchValueRegEx = /glyph-name/g;
  const replacement = 'name';

  const result = data.replace(searchValueRegEx, replacement);


  fs.writeFile(pathToFile, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
