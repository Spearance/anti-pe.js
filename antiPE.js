/*
	https://github.com/Spearance/anti-pe.js

	Copyright 2022, Evgeniy Lepeshkin

	Released under the MIT license.
	http://www.opensource.org/licenses/mit-license.php

	Version: v 2.1.1
	Date: Jan 20, 2022
*/

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
export const antiPE = (str) => {
	if (!str) {
		return str
	}

	Object.entries(mask).forEach(([en, ru]) => {
		str = str.replaceAll(en, ru)
	})

	return str
}
