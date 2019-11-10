# The aim of this package is to extract the codes for icons that are in an .svg file

We want to be able to produce a list of `scss variables` and `mixins` that could then together with some other files form the theme in our react application.

## Start

run `npm i` to install the packages


## Steps

Open the project with VSCode and make sure that you replace the font files under `theme\fonts` with your files.

Then using the `.svg` file - in our case is `planday-icons.svg` - we need to do two things:

- copy the file in the same directory and change it's extension to `.xml` from `.svg`
- Globaly run a rename in the file the `glyph-name` attribute to `name`. This is because the name `glyph-name` canno be handled by our parser.

## Finaly 

Then from the command line type the following:

`npm start`

Once run the output in the console will conain the necessary files that have been saved locally as well.

## Usage 

Now copy the `theme` folder in your solution and start using the theme.