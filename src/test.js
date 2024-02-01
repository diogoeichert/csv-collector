const assert = require("assert");

const collectCSV = require("./index.js");

const SAMPLE_CSV = `name,phone,address,email
jane,555,no
street,jane@mail.com
john,666,that address
1234,john@mail.org`;

const SAMPLE_COLLECTION = [
	{
		"name": "jane",
		"phone": "555",
		"address": "no\nstreet",
		"email":"jane@mail.com"
	},

	{
		"name": "john",
		"phone": "666",
		"address": "that address\n1234",
		"email": "john@mail.org"
	}
];

const result = collectCSV(SAMPLE_CSV);
assert.equal(JSON.stringify(result), JSON.stringify(SAMPLE_COLLECTION));
