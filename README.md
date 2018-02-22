# Adminer-Material-Theme

An Adminer theme inspired by material design.

[Adminer](https://www.adminer.org/) is one of the best DB-Management tools out there... with the catch that it doesn't look any good.

### Usage
* Get a copy of [Adminer](https://www.adminer.org/)
* Download the adminer.css
* Put them both in the same web folder
* ✓

(works best in Google Chrome)

### Customization
A SCSS file is available under `src/adminer.scss`, allowing you to set the primary color, inactive color, header color, etc. . You can also modify the icons if needed.

After you've finished modifying, you can then transpile the `adminer.scss` file by going to the project's root and executing `grunt`. After you'll have a new `adminer.css` file

For this to work you first need to execute `npm install` and `npm install grunt -g`, also check out [this](https://github.com/gruntjs/grunt-contrib-sass#sass-task)

### Preview
<img src="https://stillh.art/project/adminer/preview.png" alt="a preview"/>
