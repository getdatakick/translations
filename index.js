var t = null;

module.exports = {
  setTranslation: function(tt) {
    t = tt;
  },
  getTranslation: function() {
    var length = arguments.length;
    if (length > 0) {
      var s = arguments[0];
      s = (t && t[s]) ? t[s] : s;
      if (s && length > 1) {
        for (var i=1; i<length; i++) {
          var repl = arguments[i];
          s = s.replace('%s', repl);
        }
      }
      return s;
    }
  }
}
