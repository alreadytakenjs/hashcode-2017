// Config du hashcode
module.exports.settings = {
  login: 'test',
  mdp: 'test',
  apiUrl: 'http://coucou.tuveux.voir.ma.fr',
  battleMode: false,
  botNumber: 1
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
}