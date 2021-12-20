'use strict';

const mask = {
	"A": "А",
	"a": "а",
	"E": "Е",
	"e": "е",
	"T": "Т",
	"y": "у",
	"O": "О",
	"o": "о",
	"P": "Р",
	"p": "р",
	"H": "Н",
	"K": "К",
	"X": "Х",
	"x": "х",
	"C": "С",
	"c": "с",
	"B": "В",
	"M": "М"
}

/**
 * @param {string} str
 */
const antiPE = (str) => {
	if (!str) {
		return str
	}

	for (let key in mask) {
		str = str.replaceAll(key, mask[key])
	}
}
