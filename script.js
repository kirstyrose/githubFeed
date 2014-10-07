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

					console.log(entry.name);

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