const {
    createTweet,
    createStars
} = require("../js/functions.js");

describe(
    "createStars",
    function ()
    {
        // ½
        let tests = [
            {
                stars: "★★★★★",
                score: 100,
                message: "5 stars"
            },
            {
                stars: "★★★★",
                score: 80,
                message: "4 stars"
            },
            {
                stars: "★★★½",
                score: 70,
                message: "3 stars and a half stars"
            },
            {
                stars: "½",
                score: 10,
                message: "half a star"
            },
            {
                stars: "½",
                score: 7,
                message: "half a star"
            },
            {
                stars: "",
                score: 0,
                message: "no star"
            },
            {
                stars: "",
                score: 3,
                message: "no star"
            },
        ]

        for (let test of tests)
        {
            it(
                `creates ${test.message} for score ${test.score}`,
                function ()
                {
                    let stars = createStars(test.score)
                    expect(stars).toEqual(test.stars)
                }
            )
        }
    }
)