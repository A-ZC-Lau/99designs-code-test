const {
  createTweet
} = require("./functions.js")

const MovieReviewsApp = function(reviews, movies) {
  let tweets = [];

  // Put your code here !
  for (let review of reviews)
  {
    let movie = movies.find( movie => movie.title === review.title )

    let tweet =
      createTweet({
        title: review.title,
        year: movie && movie.year || null,
        review: review.review,
        score: review.score
      })

    tweets.push(tweet)
  }
  console.log(tweets)

  return {
    getTweets: function() {
      return tweets;
    }
  };
};

module.exports = MovieReviewsApp;
