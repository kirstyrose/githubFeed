$(function(){

	"use strict";

	function git(name){

				var setup = {

					init: function(){

						setup.getData('https://api.github.com/users/'+name+'/repos?sort=updated');

					},

					getData: function(url){

						$.ajax({

							url: url,
							type: 'GET',
							success: setup.successfulRequest

						});

					},

					successfulRequest: function(data) {
						var max = 5;
						var limit = data.length < max ? data.length : max;

						for(var i = 0; i < limit; i++){

							var entry = data[i];

							console.log(data);

							var html = '<div class="repo">'
									   + '<div class="desc">'	
									   + '<p class="title"> <a target="_blank" href="' + entry.owner.html_url + '">' + entry.name + '</a> </p>'
									   + '<p class="fork">' +  entry.description + '</p>'
									   + '<p class="status">' +  entry.created_at + '</p>'
									   + '</div>'
									   + '<div class="stats">'
									   + '<p class="forks icon">' + entry.forks_count +'<span>g</span></p>'
									   + '<p class="stars icon">' + entry.stargazers_count +'<span>s</span></p>'
									   + '<p class="lang">' + entry.language +'</p>'
									   + '</div>'
									   + '</div>';
									
							$('.repos').append(html);

						}

					}

				}

				this.getSexyData = function() {

					setup.getData('https://api.github.com/users/'+name+'/repos');

				}

				setup.init();

			}

			var gitRequest = new git("kirstyrose");

		

});