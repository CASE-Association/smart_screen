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
Restart the script and enjoy!

#The automatic cronjob!


Cronjobs can and are used to run things repetedly. A good tutorial can be found over at:
https://opensource.com/article/17/11/how-use-cron-linux
A cronjob is running a bash script, which in turn runs another bash script....
The bash script that is suposed to be located in /var/spool/cron is:

```sh
# crontab -e
SHELL=/bin/bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin

15 * * * * bash /home/pi/git_script.sh
```


The bash script that actually clones the smart_screen code is placed into /home/pi/git_script.sh.

The script that is running is: 


```sh
#!/bin/bash
sudo rm -rf smart_screen/
git clone https://github.com/CASE-Association/smart_screen.git
cp -r smart_screen/mounts/ ~/magicmirror/mounts/
sudo reboot
``` 



## Usage

Configuration (like adding more quotes to the top of the screen) can be found in the file `~/magicmirror/mounts/config/config.js`.

Documentation for magicmirror can be found at https://docs.magicmirror.builders/

## License
MIT

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
