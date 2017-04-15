import _       from 'lodash';

module.exports = {
    mapObject(object, callback) {
        return Object.keys(object).map((key) => callback(key, object[key]));
    },

    chunk(arr, len) {
        let chunks = [],
            i = 0,
                n = arr.length;

                while (i < n) {
                    chunks.push(arr.slice(i, i += len));
                }

                return chunks;
    },

    isEmpty(str) {
        return (!str || str.length === 0);
    },

    isEmptyObj(obj) {
        if (!obj) {
             return true;
        }
        return Object.getOwnPropertyNames(obj).length === 0;
    },

    parseTime(timeStr, dt) {
        const re1     = '(\\d+)';	// Integer Number 1
        const re2     = '(?:\\:)';	// Any Single Character 1
        const re3     = '(\\d+)';	// Integer Number 2
        const re4     = '(?:\\s*)';	// White Space 1
        const re5     = '(am|AM|pm|PM)';// Word 1

        const pattern = new RegExp(re1 + re2 + re3 + re4 + re5, ["i"]);

        if (!dt) {
            dt = new Date();
        }

        const timeMatch = pattern.exec(timeStr);

        if (!timeMatch) {
            return NaN;
        }
        let hours  = parseInt(timeMatch[1], 10);
        const AMPM = timeMatch[3];

        if (AMPM === "PM" && hours < 12) hours = hours + 12;
        if (AMPM === "AM" && hours === 12) hours = hours - 12;

        dt.setHours(hours);
        dt.setMinutes(parseInt(timeMatch[2], 10) || 0);
        dt.setSeconds(0, 0);
        return dt;
    },

    dateToHours(date) {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const suffix = (hours >= 12) ? 'pm' : 'am';
        const hh = ((hours + 11) % 12 + 1);
        const mm = (minutes < 10 ? "0" : "") + minutes;
        const formattedTime = hh + ":" + mm + suffix;
        return formattedTime;
    },

    // Filtering based on object keys
    filter( obj, predicate) {
        const result = {};
        let key;
        for (key in obj) {
            if (obj.hasOwnProperty(key) && predicate(key)) {
                result[key] = obj[key];
            }
        }
        return result;
    },

    toRoundStr(number, precision) {
        return _.round(number, precision).toFixed(precision);
    }
};

