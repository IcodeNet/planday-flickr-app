# The aim of this package is to extract the codes for icons that are in an fonts .svg file
## It will generate a few files that can be used as a basis for an application theme.

We want to be able to produce a list of `scss variables`, `classes` and `mixins` 
that could then together with some other files form the theme in our react application.

> the following tasks need to be run once when we get a new .svg icon file

## Start

From the `root` directory and from the command line type the following:

`npm start` This will initialise and normalise the source file that is the basis for our icon theme and generate the following files:

- `./icons/_icon-classes.scss`
- `./mixins/_icon-mixins.scss`
- `./icons/_icon-variables.scss`

Once run the output in the console will contain the necessary files that have been saved `ALSO` locally as well.

## Usage 

Now copy the `theme` folder in your solution and start using the theme.
