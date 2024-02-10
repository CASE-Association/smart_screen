# CASE LAB Smart screen
> Created by CASE Board 21/22
  
## Installation
[Install magic mirror 2](https://docs.magicmirror.builders/getting-started/installation.html) on the raspberry pi behind the screen, make sure ssh is enabled.

Make sure the default configuration is working, autostarting in the case of reboot, and that the screen is oriented the right way.

Clone this repository:
```sh
git clone https://github.com/CASE-Association/smart_screen.git
```

Copy the custom mounts folder into the magic mirror directory:
```sh
cd smart_screen
cp -r mounts/ ~/magicmirror/mounts/
```

Restart and enjoy!

## Usage

Configuration (like adding more quotes to the top of the screen) can be found in the file "~/magicmirror/mounts/config/config.js".

Documentation for magicmirror can be found ... 

## License
MIT

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
