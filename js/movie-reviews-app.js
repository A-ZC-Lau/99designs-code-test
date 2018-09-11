const MovieReviewsApp = function(reviews, movies) {
  let tweets = [];

  // Put your code here !
  for (let review of reviews)
  {
    let movie = movies.find( movie => movie.title === review.title )

    let tweet =
      createTweet({
        title: review.title,
        year: movie.year || null,
        review: review.review,
        score: review.score
      })
  }

  return {
    getTweets: function() {
      return tweets;
    }
  };
};

function createTweet({
  title,
  year,
  review,
  score
})
{
  let score = Math.round(score / 10) * 10
  let full_stars = "★".repeat(Math.round(score/2))
  let half_star = score % 2 ? "½" : ""
  let stars = full_stars + half_star
  return `${title} ${year}: ${review} ${stars}`
}

module.exports = MovieReviewsApp;
