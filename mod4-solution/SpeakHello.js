
(function(window){

      var speak = function(name){
      console.log(speakWord + " " + name);
    }

    var helloSpeaker = {
      speak: function(name){
        console.log(speakWord + " " + name);
      }
    }

    var speakWord = "Hello";

    window.helloSpeaker = helloSpeaker;

})(window);




