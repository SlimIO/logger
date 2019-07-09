/**
 * @namespace Utils
 */

/**
 * @func format
 * @memberof Utils#
 * @param {String | Date} [date] date
 * @param {String} [local="en-GB"] local timezone
 * @returns {String}
 */
function format(date = new Date(), local = "en-GB") {
    // eslint-disable-next-line
    return Intl.DateTimeFormat(local, {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }).format(date instanceof Date ? date : new Date(date));
}

module.exports = { format };
