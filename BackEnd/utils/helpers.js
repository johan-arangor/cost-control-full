class Helpers {
    arrayParseString(arrayData) {
        return arrayData.map(item => `${item}`).join(', ');
    }
}

module.exports = Helpers;