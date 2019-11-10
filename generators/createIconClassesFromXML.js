const node_xml_stream = require('node-xml-stream');
const parser = new node_xml_stream();
const fs = require('fs');

// temporary variables to construct final object
let classes = '';
let name, unicode, attr;

// callback contains the name of the node and any attributes associated
parser.on('opentag', function (name, attrs) {
  if (name === 'glyph' && attrs.name) {

    const indexOfSpace = attrs.name.indexOf(" ");
    let iconName = attrs.name.replace(',', '');

    if(indexOfSpace !== -1){
      iconName = iconName.substring(0, indexOfSpace).replace(',', '');
    }

    let message = `\r\n`;
    message += `.icon-${iconName} { \r\n`;
    message += `  @include  icon-${iconName}(); \r\n`;
    message += `} \r\n`; 

    console.log(message);
    classes += message + '\r\n';
  }
});

// callback contains the name of the node.
parser.on('closetag', function (name) {

});


// callback to do something after stream has finished
parser.on('finish', function () {
 // console.log(result);
  fs.writeFile('./theme/icons/_icon-classes.scss', classes, (err) => {
    if (err) throw err;
    console.log('_icon-classes.scss created successfully.');
  });
});

parser.on('error', function (e) {
  console.log(e);
});

// the following file i sthe svg file of the fonts but with the xml extension
let stream = fs.createReadStream('./theme/fonts/planday-icons.xml', 'UTF-8');
stream.pipe(parser);



