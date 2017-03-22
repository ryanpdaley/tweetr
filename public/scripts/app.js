/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  let tweetsHTML = ''
  for (let tweet in tweets){
    tweetsHTML += createTweetElement(tweets[tweet]);
  }
  return tweetsHTML;
}

function createTweetElement(tweet) {
  let tweetTime = new Date(tweet['created_at']).toLocaleString()
  html = `<article class='tweet'>
          <header>
            <img class='avatar' src="${tweet['user']['avatars']['small']}">
            <span class='userName'>${tweet['user']['name']}</span>
            <span class='acctName'>${tweet['user']['handle']}</span>
          </header>
          <div class='tweetBodyContainer'>
            <div class='tweetText'>${tweet['content']['text']}</div>
          </div>
            <footer>
            <span class='timeStamp'>${tweetTime}</span>
            <span class='footerButtons'>
              <a href =''>&#9873;</a>
              <a href =''>&#8618;</a>
              <a href =''>&#10084;</a>
            </span>
          </footer>
        </article>`
  return html;
}

$( document ).ready(function() {
  var $tweets = renderTweets(data);
  $('.tweets').append($tweets);
  $(this).find( ".footerButtons" ).hide();
  $( ".tweet" ).hover(function() {
    $(this).css("opacity", "1");
    $(this).find( ".footerButtons" ).show();
  }, function() {
    $(this).css("opacity", "0.5");
    $(this).find( ".footerButtons" ).hide();
  })
});
