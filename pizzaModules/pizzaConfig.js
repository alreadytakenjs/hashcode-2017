// Config du hashcode
module.exports.settings = {
  login: 'admin',
  mdp: 'pwd',
  apiUrl: 'http://api.url.com'
};

module.exports.params = {
  debug : 1
};

module.exports.utils = {
  clone: function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
  }
};