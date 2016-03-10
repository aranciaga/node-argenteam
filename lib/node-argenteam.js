var request = require('request')

api_search_url  = "http://argenteam.net/api/v1/search"
api_tvshow_url  = "http://argenteam.net/api/v1/tvshow"
api_episode_url = "http://argenteam.net/api/v1/episode"
api_movie_url   = "http://argenteam.net/api/v1/movie"

module.exports = {

	search: function(query, callback){
		request(api_search_url + "?q=" + query, function(err, res, body){
			callback(err, JSON.parse(body))
		});
	},

	getTvShow: function(id, callback){
		request(api_tvshow_url + "?id=" + id, function(err, res, body){
			callback(err, JSON.parse(body))
		});		
	},

	getEpisode: function(id, callback){
		request(api_tvshow_url + "?id=" + id, function(err, res, body){
			callback(err, JSON.parse(body))
		});		
	}, 

	getMovie: function(id, callback){
		request(api_tvshow_url + "?id=" + id, function(err, res, body){
			callback(err, JSON.parse(body))
		});				
	}

};
