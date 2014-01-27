##Lesson 2: 01/26/2014
---
**Intro**

* Introduce the new concept of trying to record lectures and add screencasts throughout the week
* Introduce abhi
* Ask any questions

**Getting Started**

* Today is going to be a tutorial. 
* I am going to assume that you have installed the things I asked and hopefully in the next hour we can get everyone a little website up on github.

**Finish Installation**

* Make sure vagrant is set up
* Show how to forward ports in the Vagrantfile
* Show how to setup a shared directory
* Install git
* Go to github and create a new repository with a nodejs gitignore
* Create a directory where you want to keep your hello world page
* initiate the git repo


**Tutorial**

Okay so now we are all set up to start coding

Our mini-application stack

* Http Server: For serving web pages
* Request Routing: So that different pages are served depending on the url
* Request Handlers: To actually fulfill the requests and to return responses
* Data Handling: For handling Post data and give it to the request handlers

Starting

* Install express via npm
* Get to hello world and show it rendering on screen. 
	* Show how exports work with the haiku as an example
* Show how git status works to do this then show the commit in the log

V2

* Go through and get to v2.
	* Explain modularity
	* Explain require if you have not
	* Go over query params and what they are
	* Show them the express documentation
* If we are completely finished with v2 and have time. Stop and take questions
* If we have no questions and still have time begin to show them how to push this thing to heroku

Heroku

* Find all this info at <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs">https://devcenter.heroku.com/articles/getting-started-with-nodejs</a>
* Create an account on heroku.com
* Install the toolbelt on your ubuntu vagrant box using:
	* wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
* Login using by typeing 'heroku login' and enter your credentials
* Create a processfile using Procfile and write
	* web: node server.js
* Change how the value of your var port in server.js to be:
	* var port = Number(process.env.PORT || 5000);
* make sure your app is in a git repo (git status will tell you)
* Type heroku create <your-app-name-without-these-brackets>
* Make sure you have the engines flag in your package.json file
	* "engines": {"node": "0.10.x" }
* Add and commit your changes to git:
	* git add .
	* git commit -m "Commit Message"
* Push your code to heroku using 'git push heroku master'
	* It will initialize and tell you when it is done
	* This can take a few minutes
* You can now check the status of your site using heroku ps
	* Other useful commands:
		* heroku logs
		* heroku ps
		* heroku run "some command"
* What is heroku?
	* Heroku is a PAAS (Platform as a service) that makes it super simple to deploy code to the internet using git
		* This differs from something like Amazon AWS (which is a IAAS or Infrastructure as a Service) because heroku handles a lot of the heavy lifting for you whereas on AWS you have to setup everything yourself.
	* Why heroku?
		* besides the incredible ease of use that you just saw to get a web server setup?
		* Your first web-dyno (the machine/probably virtual machine that heroku runs your code on) is free
		* They offer tons of addons that can help make your apps more robust while keeping most of the details abstracted away from you. (This makes your life easier)
			* Cool addons?
				* MongoDB, Redis, Postgres, Memcached, websolr, the list goes on
				* See the full list at <a href=""https://addons.heroku.com/">https://addons.heroku.com/</a>