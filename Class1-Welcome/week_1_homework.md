#Week 1 Homework
---

The assignment for week one is to begin to setup your development environment. Generally this means that you are going to need to create a means to access an ubuntu virtual machine and to install node on that machine. This document will walk you through the steps to get your caught up to speed.

###Vagrant
* Vagrant is essentially a wrapper around VirtualBox that makes it super easy to spin up/down linux virtual machines from the command line. If you would prefer to interact with VirtualBox directly that is fine, but there are a couple reasons that I recommend using Vagrant.
* Installation
	1. Go to www.vagrantup.com and install the download from the downloads page for your respective machine
	2. Now go to the getting started guide from the home page and run the command listed (**vagrant init precise32 http://files.vagrantup.com/precise32.box**) from the command line
		* This command downloads something called a 'Vagrantfile' into the current working directory. This 'Vagrantfile' holds all of vagrant's configuration options in one location and makes it simple to change your vm's behavior.
	3. Once you have run the init command, type **ls** into the command line to list all the contents of the current working directory and make sure that you see a file called Vagrantfile.
	4. If you have a Vagrantfile, run **vagrant up** to install the vm and turn it on
		* vagrant up will only install the vm the first time you run it. Subsequent calls to **vagrant up** simply turn the vm on
* Usage
	* At any time you can run **vagrant status** to see if your machine is currenly on or off. If it is on, then you can run 'vagrant ssh' to ssh into the vm and begin interacting with it from the command line.
		* NOTE: If you are running windows, you will need to install some sort of ssh client. Vagrant will give you a few options when you run **vagrant ssh**.  If you are running a mac you are all good here.
	* If your vagrant is on, and you have ssh'd into it using 'vagrant ssh' your terminal is now a unix shell running on your vagrant vm's Ubuntu operating system. If you now were to type **pwd** (print working directory) into the terminal you should see something like **/home/vagrant/**. If you do not, you probably have not ssh'd into vagrant yet.
	* Clarification: **ssh** stands for 'secure shell'. When I say you are ssh'd into some other machine, this means that you are providing credentials (using private-public key encryption) to the foreign machine which tells that foreign machine that you are authorized to control that machine from the command line. i.e. when you ssh into another machine you are hijacking their command line. You can see why this is so important when you think about server maintanence type things at a company like Google which has literally millions of machines. Think of the travel costs/time it would take if you had to travel to the physical location of a machine whenever you wanted to interact with it.
		* Note: You may ask why we are using ssh when we have our computers in front of us? The reason is that your vm doesn't really know that it isn't a real computer. Virtual Machine Managers (software on your computer) have the responsibility to make your virtual machine think it is totally independent and thus you treat it as if it is its own physical machine that happens to be linked to your computer via localhost or in other terms the host address 127.0.0.1

###Node
* If you have successfully installed vagrant and have spun up a virtual machine the only other thing you need to do by class is to install nodejs on that machine. Fortunately, ubuntu makes this super easy with its package manager otherwise known as **apt-get**
* Installation
	* ssh into your newly spun up virtual machine (via **vagrant ssh**). Make sure your vagrant box is up first via **vagrant status**
	* Once in your vm, you can type **node** to see if it is already installed. It shouldn't be if this is a new vm. However you will see that even if node is not installed, Ubuntu gives you options for what it thinks you were trying to do. What we want is the nodejs package. 
	* To install run **sudo apt-get install nodejs**. When it asks type Y to give permission to install the package
	* That's it! Now you should be able to type **node** on the command line and it should open a javascript interpretter. Good work.

NOTE: If you are ever in something on the command line that you don't want to be in, try to type ctrl-c or ctrl-d to quit the current execution. These two commands kind of interchangeably act as quit on the command line to try both.

###Last Things
* I wanted to try to give a little bit on context for why I asked you guys to install a ubuntu virtual machine on your computer. The reason is that I wanted all of us to be working on the same operating system becuase each OS has its own way of doing things and finding bugs can differ a lot depending on the OS. Also Heroku runs a linux OS, which means that when we deploy our sites live we want to make sure that we are not switching contexts from development to production environments. If you were to develop on a windows machine, which uses path names like C:/some/file/over/here/ and then tried to deploy on linux, which uses paths like /home/vagrant/some/file/over/here/, you will have a lot of problems.
* So why are we using vagrant when we could just use virtual box?
	* Using plain virtualbox means that you have to do all of your work in a window running on top of your main OS. This means you cannot use any of the things (text editors, browsers, etc) that you have installed on your mac/windows pc unless you move out of that virtualbox window. I hate this. This is all a matter of good workflow, and for my workflow I like to use what I know.
	* What vagrant allows you to do is to code/browse/do everything on your native OS and then, when we need to, run our code on a linux VM from the command line. In the next class I will show you how to link a single directory on your vagrant to a single directory on your native OS. This gives you the option to add files on your Mac using sublime text or coda or some other text editor and that file is immediately synced to your VM. You can then run that file from vagrant which is running linux thus giving the same effect of running everything in plain old virtualbox but without the clunky, slow, power draining GUI.
	
I hope this helped explain things better! I look forward to next class where we will continue to build on all this.