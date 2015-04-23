PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){

	Template.leaderboard.events({
		'click .player': function(){
			Session.set("selectedPlayer", "session value test");
		}
	});

	Template.leaderboard.helpers({
 	'player': function(){
	return PlayersList.find()
	},
	'otherHelperFunction': function(){ 
  	return "Some other function"
	} 
	});
}
