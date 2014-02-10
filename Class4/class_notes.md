Heroku

* Find all this info at <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs">https://devcenter.heroku.com/articles/getting-started-with-nodejs</a>
* Create an account on heroku.com
* Install the toolbelt on your ubuntu vagrant box using:
	* wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
* Login using by typeing 'heroku login' and enter your credentials
* Create a processfile using Procfile and write
	* web: node server.js
* Change how the value of your var port in server.js to be:
	* var port = Number(process.env.PORT || 8000);
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