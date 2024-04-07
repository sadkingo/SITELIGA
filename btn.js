document.addEventListener("DOMContentLoaded", function() {
  var socialButton = document.querySelector("footer #socialButton");
  socialButton.addEventListener("click", function() {
    var icons = document.querySelector("footer .social-icons");
    if (icons.style.display === "block") {
      icons.style.display = "none";
    } else {
      icons.style.display = "block";
      var socialIcons = document.querySelectorAll(".social-icons .icon");
      socialIcons.forEach(function(icon, index) {
        icon.style.animationDelay = (index * 0.1) + "s";
      });
    }
  });
});
