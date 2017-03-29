import JSON5 from 'json5';

export default {
    pack: function (value, expire = -1) {
        let pack = {
            "value": value
        };
        if (expire >= 0) {
            pack.expire = expire;
        }
        return pack;
    },

    encode: function (pack) {
        return JSON5.stringify(pack);
    },

    decode: function (sec) {
        return JSON5.parse(sec);
    },
	supports_html5_storage: function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }
}