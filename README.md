githubFeed
============

This plugin makes an ajax call to fetch a users github data and appends it to the DOM.

For more information on the github API and some useful libraries:

https://developer.github.com/v3/

Multiple Instances
=====

Change the configuration.

 	var gitRequest = new git("username");

This will pass through to the init function. 

	init: function(){

		setup.getData('https://api.github.com/users/'+name+'/repos');

	},

=====

This appends through to .repos

	$('.repos').append(html);

=====

Example hosted using Heroku (give it a min to load):

http://github-feed.herokuapp.com/
