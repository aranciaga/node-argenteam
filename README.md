# node-argenteam

Get movies, TV shows  and subtitles from argenteam.net


## Installation


Vía NPM
```
npm install node-argenteam 
```

## Usage

### Search 

```
var argenteam = require('argenteam');

argenteam.search('insert a query', function(err, res){
  console.log(err, res);
});
```


##### Example ID: 74430, this ID is from Better call saul, you can get IDS using search function.*

### Fetch torrents and subs of TV Show

```
var argenteam = require('argenteam');

argenteam.getTvShow('TV SHOW ID', function(err, res){
  console.log(err, res);
});
```

### Fetch torrents and subs of movie
```
var argenteam = require('argenteam');

argenteam.getMovie('Movie ID', function(err, res){
  console.log(err, res);
});
```

### Fetch torrents and subs from an episode of TV show

```
var argenteam = require('argenteam');

argenteam.getEpisode('Episode ID', function(err, res){
  console.log(err, res);
});

```

