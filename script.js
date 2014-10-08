$(function(){

	"use strict";

	function git(name){

		var setup = {

			init: function(){

				setup.getData('https://api.github.com/users/'+name+'/repos');

			},

			getData: function(url){

				$.ajax({

					url: url,
					type: 'GET',
					success: setup.successfulRequest

				});

			},

			successfulRequest: function(data) {

				for(var i = 0; i < data.length; i++){

					var entry = data[i];

					console.log(entry.svn_url);

					var entryHtml = '<a href="' + entry.owner.html_url + '">' + entry.owner.login + '</a>'
								  + '<span>/</span>'
								  + '<a href="' + entry.svn_url + '">' + entry.name + '</a> <br>'
								  + '<div>'+ entry.stargazers_count +'</div>';

					$('.json-feed').append(entryHtml);

				}

			}

		}

		this.getSexyData = function() {

			setup.getData('https://api.github.com/users/'+name+'/repos');

		}

		setup.init();

	}


	var gitRequest = new git("kirstyr");
	var gitRequest2 = new git("username");

});