(function(window) {
  console.log("SpeakGoodBye.js is loaded");
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: function(name) {
      console.log(speakWord + " " + name);
    }
  };
  window.byeSpeaker = byeSpeaker;
})(window);