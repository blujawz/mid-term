// do not change lines 2 - 6:
var twitter = {
  countCharacters: function(string) {
    return string.length;
  }
};

// 1. Dot notation:
twitter.stockPrice = 18;
// 2. Bracket notation:
twitter['Jack dorsey'] = 'ceo';
// 3. Practice on your own:
var twittersAddress = "1355 Market St #900, San Francisco, CA 94103";
twitter.address = twittersAddress;
//I needed some more time to figure this out, i just put his answer as a place holder.

// 4. Array:
twitter.tweets = ["tweet", "tweetle", "tweety"]
// 5. Loop through array:
for (var i = 0; i < twitter.tweets.length; i++) {
    console.log(twitter.tweets[i]);
}
// 5. Invoke countCharacters:
twitter.countCharacters(twitter.tweets[1])
//I think this function will return//I tested it, it returned 7.
// 6. Loop through twitter object:
for (var key in twitter){
	console.log(key);
}

//I tried to during the mid-term to keep it moving and not get stuck on one thing for too long.
//That was a goal of mine this time through.