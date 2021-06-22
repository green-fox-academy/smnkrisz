// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let correctURL: string = url.slice(0, 5) + ':' + url.slice(5, -4) + 'odds';

url = correctURL;

console.log(url);