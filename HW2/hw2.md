## CS 1501 HW 2
---

**Find the tutorial screen cast <a href="https://vimeo.com/85287432">here</a>**

The point of homework 2 is to finish installing the necessary pacakges on your vagrant virtual machine, and to create and push the hello world server to github. In class there were a few issues with installing node and npm on ubuntu, but I have figured out the issue and have outline more detailed instructions below. I am also going to ask that everyone install sublime text, which is a fantastic text editor that is free and easy to use on Mac, Windows, and Linux.

Below are some of the written instructions covering things that I discuss in the screen cast linked to above.

**Vagrant**

* By now I am hoping that most everyone has been able to successfully install vagrant on their machines. Installing it very simple. **NOTE: IF YOU ALREADY HAVE VAGRANT UP AND RUNNING DON'T DO THIS**
	1. cd into a directory where you would like to keep all your project files. For example I keep mine at /users/MichaelParis/sites/vagrantProjects/
	2. Once you are in whichever directory (you can type pwd on mac to make sure or echo %cd% on windows) enter the command 'vagrant init precise32 http://files.vagrantup.com/precise32.box' without the quotes
	3. Once you have done this make sure there is a Vagrantfile in this directory by using ls on mac or DIR on windows
	4. If you see the Vagrantfile then run 'vagrant up' without quotes to install and start the machine.
* If you are still having problems and have possibly already tried to do this but it is still not working I recommend removing the Vagrantfile you downloaded previously from vagrant init and then open VirtualBox and delete the precise32 box on the left. After you have done this follow the 4 instructions above.
* To uncomment the two lines that start with 'config.vm.network' and 'config.vm.synced_folder' and remove the # on the left side of the line (vagrant is writtin in ruby, and # denotes a ruby comment). Then change the two lines to look exactly like these:
	* config.vm.network :forwarded_port, guest: 8000, host: 8000
	* config.vm.synced_folder ".", "/home/vagrant"

**Node.js and npm**

* Once you have vagrant up and running, you will need to install node on your vagrant box.
* This is what we had some trouble with in class. The problem was that we had to update apt-get and link to the node.js repository.
* if you have not already type 'vagrant ssh' (when i put quotes that is just to show explicity what to type but don't put the quotes when you do it) to get into your vagrant box and then type the following commands exactly and in order.
	1. If this is a fresh vagrant install run sudo apt-get update
	2. sudo apt-get install python-software-properties python g++ make
	3. sudo add-apt-repository ppa:chris-lea/node.js
	4. sudo apt-get update
	5. sudo apt-get install nodejs
* If you do this, it should automatically install npm as well so you do not have to do that manually
* At this point, you should be able to type 'node' on your vagrant command line and a javascript interpretter should start running (as signified by a little > on the left side of the screen)

**Remaining**

* From here, I want you to finish making the simple webserver and to read the go over the intro_to_javascript file in the this directory.

**Have a great week, and I'll see you next monday!**