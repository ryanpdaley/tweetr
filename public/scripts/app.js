/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function renderTweets(tweets) {
  let tweetsHTML = ''
  for (let tweet in tweets){
    tweetsHTML = createTweetElement(tweets[tweet]) + tweetsHTML;
  }
  $('.tweets').html(tweetsHTML);
  doHover()
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

function loadTweets(){
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: function (jsonTweets) {
      renderTweets(jsonTweets);
    }
  });
}

function toggleCompose() {
  $(document).find( ".new-tweet" ).hide();
  $( ".btn-compose" ).hover(function() {
    $(this).css("opacity", "1");
  }, function() {
    $(this).css("opacity", "0.5");
  });
  $( ".btn-compose" ).click(function() {
    $(document).find( ".new-tweet" ).slideToggle( "slow" );
    $( "#tweetText").focus();
  });
}

function doHover() {
  $(document).ajaxStop(function () {
    toggleCompose()
    $(this).find( ".footerButtons" ).hide();

    $( ".tweet" ).hover(function() {
     $(this).css("opacity", "1");
      $(this).find( ".footerButtons" ).show();
    }, function() {
      $(this).css("opacity", "0.5");
      $(this).find( ".footerButtons" ).hide();
    });
  });
}

function validTweet(serializedTweet) {
  tweet = serializedTweet.split("=")[1];
  if (tweet.length > 140) {
    alert("Error: Your tweet is too long - please make it shorter!");
    return false;
  } else if (tweet.length === 0 || tweet === 'null') {
    alert("Error: Your tweet is blank - please grace us with  your thoughts!");
    return false;
  } else {
    return true;
  }

}

$( document ).ready(function() {
  loadTweets()
  $('#form-new-tweet').submit(function (ev) {
    ev.preventDefault();
    let tweetText = $('#form-new-tweet').serialize();
    if (validTweet(tweetText)){
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: tweetText,
        success: function () {
         loadTweets();
         $('#tweetText').val('');
        }
      });
    }
  });
});
