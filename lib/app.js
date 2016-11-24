var app = angular.module("projectApp", []);

app.controller("projectInfoController", function($scope){
	$scope.projectInfo = [
	{	title: "My Git Hub",
		image: "images/github.JPG",
		text: "See my source code on GitHub",
		link: "https://github.com/sjahlers"
	},
	{	title: "To Do List",
		image: "images/todolist.jpg",
		text: "My first Angular app, featuring directives, filters and controllers.",
		link: "https://sjahlers.github.io/Lab-12-To-Do-List/"
	},
	{	title: "Theatre Seat Reservations",
		image: "images/theatre.jpg",
		text: "A single-page theatre seat reservation app featuring jQuery.  This was a group midterm project.",
		link: "https://sjahlers.github.io/Lab-10-Theatre-Seating"
	},
	{	title: "Simple Shopping List",
		image: "images/shoppinglist.jpg",
		text: "A simple shopping list app featuring JavaScipt.",
		link: "https://sjahlers.github.io/Simple-Shopping-List/"
	},
	{	title: "Awww...Reddit Listing",
		image: "images/reddit.jpg",
		text: "A page using JSON to load the data feed from Reddit.",
		link: "https://sjahlers.github.io/Lab-11-Reddit-Listing/"
	},
	{	title: "Bootstrap",
		image: "images/bootstrap.JPG",
		text: "A tv show fan page built using Bootstrap",
		link: "https://sjahlers.github.io/Lab-4-Bootstrap/"
	},
	{	title: "Squarespace",
		image: "images/fcb.jpg",
		text: "Established the Farmington Community Band website using Squarespace.",
		link: "http://fcbmusic.org/"
	},
	{	title: "Coming Soon",
		image: "images/moorish-castle.jpg",
		text: "Moorish Castle in Sintra, Portugal",
		link: "#"
	},
	{	title: "Coming Soon",
		image: "images/temple.jpg",
		text: "Temple off the coast of Bali, Indonesia",
		link: "#"
	}];
});

app.directive("sjaProjectDirective", function(){
  return {
    restrict: "E",
    templateUrl: "projectdata.html",
	link: function(scope, elem, attrs) {
      elem.bind('click', function() {
		 alert("Thank you for viewing my project!");
	  });
	}
  }
});