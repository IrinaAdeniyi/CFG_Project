  // Function to handle scroll event
  window.addEventListener('scroll', function() {
    var lightUpTextElement = document.getElementById("lightUpText");
    var words = lightUpTextElement.innerText.split(" ");
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Loop through each word
    words.forEach(function(word, index) {
      var wordElement = lightUpTextElement.getElementsByTagName("span")[index];
      var wordOffset = wordElement.offsetTop;
      var distanceFromTop = wordOffset - scrollPosition;
      var opacity = 1 - (distanceFromTop / (windowHeight / 2)); // Adjust denominator to control fade speed

      // Ensure opacity is between 0 and 1
      opacity = Math.min(1, Math.max(0, opacity));

      // Set the opacity of the word
      wordElement.style.opacity = opacity;
    });
  });

  // Wrap each word in a span element
  var lightUpTextElement = document.getElementById("lightUpText");
  lightUpTextElement.innerHTML = lightUpTextElement.innerText.split(" ").map(function(word) {
    return "<span>" + word + "</span>";
  }).join(" ");






