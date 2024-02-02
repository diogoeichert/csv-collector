"use strict";

const LINE_BREAK = "\n";
const LINE_BREAK_PATTERN = /\r?\n/;
const SEPARATOR = ",";

function reconcileRemainingLines(lines, numberOfFields) {
	const result = [];
	let currentLine = "";
	let fieldCount = 0;

	while (lines.length) {
		const substring = lines.shift();

		if (currentLine.length) {
			currentLine += LINE_BREAK;
		}

		currentLine += substring;
		fieldCount += substring.split(SEPARATOR).length;

		if (fieldCount > numberOfFields - 1) {
			result.push(currentLine);
			currentLine = "";
			fieldCount = 0;
		}
	}

	return result;
}

/**
 * Returns a collection of tuples parsed from the CSV content
 * @param {string} content CSV content with header
 * @returns {Array<Object>} Array of objects parsed from the content
 */
function collectCSV(content) {
	const rawLines = content.split(LINE_BREAK_PATTERN);
	const header = rawLines.shift();
	const fields = header.split(SEPARATOR);
	const numberOfFields = fields.length;
	const lines = reconcileRemainingLines(rawLines, numberOfFields);
	const result = [];

	for (const line of lines) {
		const tuple = {};
		const values = line.split(SEPARATOR);

		for (let i = 0; i < numberOfFields; ++i) {
			const field = fields[i];
			const value = values[i];
			tuple[field] = value;
		}

		result.push(tuple);
	}

	return result;
}

module.exports = collectCSV;
