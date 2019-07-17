var highscore=0;
var scoreEntry = "hello";

jQuery("#scoresbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append(scoreEntry);
})

jQuery("#creditsbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append("<p>"+"Game made by Marietta"+"</p>")
})

jQuery("#helpbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append("<ul> <li> Press SPACE to flap your wings. </li>   <li> Avoid the pipes. </li> <li> If you crash, just try again! </li>"+"</ul>")
})

function registerScore(score){
  var playerName = prompt("What's your name?");
  if (score> highscore){
    scoreEntry = "<li>" + playerName + ":" + score.toString() + "</li>";
    highscore=score;
  }
}
