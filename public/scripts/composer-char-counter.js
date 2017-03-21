$( document ).ready(function() {
  $( "#tweetText" ).keyup(function() {
    //countChars(this.form.tweetText.value)
    let count = countChars(this.form.tweetText.value);
    let counter = document.querySelector(".counter");
    if (count < 0) {
      counter.style.color = 'red';
    } else {
      counter.style.color = 'black';
    }
    counter.innerText = count;
  });
});

function countChars(tweet){
  const maxChars = 140;
  return maxChars - tweet.length;
}