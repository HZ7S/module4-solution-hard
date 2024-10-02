(function(window) {
  console.log("SpeakHello.js is loaded");
  var speakWord = "Hello";
  var helloSpeaker = {
    speak: function(name) {
      console.log(speakWord + " " + name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);