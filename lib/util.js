// Generated by IcedCoffeeScript 1.7.1-b
(function() {
  var constants, createHash, json_stringify_sorted, strip;

  json_stringify_sorted = require('iced-utils').util.json_stringify_sorted;

  createHash = require('crypto').createHash;

  constants = require('./constants').constants;

  exports.strip = strip = function(x) {
    var m;
    if ((m = x.match(/^(\s*)(.*?)(\s*)$/))) {
      return m[2];
    } else {
      return x;
    }
  };

  exports.hash_json = function(x) {
    return createHash('SHA512').update(strip(json_stringify_sorted(x))).digest('hex');
  };

}).call(this);
