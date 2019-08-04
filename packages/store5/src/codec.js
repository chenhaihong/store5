export default {
  pack: function(value, expire = -1) {
    let pack = {
      value: value,
    };
    if (expire >= 0) {
      pack.expire = expire;
    }
    return pack;
  },

  encode: function(pack) {
    return JSON.stringify(pack);
  },

  decode: function(sec) {
    return JSON.parse(sec);
  },
};
