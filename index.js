var translations = {
};
var lang = null;

module.exports = {
  setTranslation: function(tt, l) {
    translations[l] = tt;
    if (!lang) {
       lang = (l || 'DEFAULT');
    }
  },
  setLanguage: function(l) {
    lang = l;
  },
  getTranslation: function() {
    var length = arguments.length;
    if (length > 0) {
      var t = translations[lang];
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
