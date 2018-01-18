# Adminer-Material-Theme

A new theme for Adminer which is inspired the material design language.

[Adminer](https://www.adminer.org/) is one of the best DB-Management tools out there... with the catch that it doesn't look any good at all.

### Usage
* Get a copy of [Adminer](https://www.adminer.org/).
* Download the adminer.css (or adminer.scss, see the customization section below) from this project.
* Put them both in the same web folder.
* You are done.

### Customization
* A SASS file is available under `src/adminer.scss`, allowing you to set the primary color, inactive color, and header color to customize the theme to your taste. You can also modify or replace `src/checkbox.svg` and `src/radio.svg` if needed.
* After you've finished modifying the stylesheet, you can transpile the `adminer.scss` file by going to the project's root and executing the following commands:
```
npm install
```
* This will install all necessary dependencies needed for the compilation. It should be executed only for the first time.
```
grunt build
```
* This will generate `adminer.css` file in the project's root directory.

You need to have `grunt-cli` and `sass` packages installed, in order to run those commands.

### Notes
* Works best in Google Chrome
* Please report rendering issues

### Preview
<img src="http://stillhart.biz/project/adminer/preview.png" alt="a preview"/>


<img src="http://stillhart.biz/project/adminer/preview-2.png" alt="a preview"/>
