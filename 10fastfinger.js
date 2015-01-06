  var startPlay = function() {
    var kids = $("#row1").children();
    var index = 0;
    var iterate = function() {
      if (index >= kids.length) {
        clearInterval(interval);
        return;
      }
      var word = $(kids[index]).html();
      $("#inputfield").val(word + ' ');

      var e = $.Event('keyup');
      e.which= 32; // space
      $('#inputfield').trigger(e);

      index += 1;
    };
    var interval = setInterval(iterate, 300);
  };
  setTimeout(startPlay, 500);
