jQuery("#scoresbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append("<p>"+"score"+"</p>")
})

jQuery("#creditsbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append("<p>"+"credits"+"</p>")
})

jQuery("helpbtn").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append("<p>"+"Help"+"</p>")
})
