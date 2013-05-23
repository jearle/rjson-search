rjson-search
============

A recursive JSON search for words anywhere within the structure.

## Installation

    $ npm install rjson-search

## Example

```javascript
var rjsonSearch = require('rjson-search');

var programmers = [
	{
		"id": 1,
		"name": "jesse",
		"age": 104,
		"programmer": true,
		"experience": "Programs in javascript, objective-c, and ruby",
		"employmentHistory": [
			{
				"name": "Chromocell"
			},
			{
				"name": "Rutgers"
			},
			{
				"name": "ICC Lowe Thermal"
			},
			{
				"name": "Littlebigberry"
			},
			{
				"name": "Shopbeam"
			},
			{
				"name": "Media Group"
			}
		],
		"beverage": [
			{
				"name": "coffee",
				"condiments": [
					{
						"name": "sugar",
						"amount": "2tbs"
					}
				]
			}
		]
	},
	{
		"id": 2,
		"name": "matt",
		"age": 105,
		"programmer": true,
		"experience": "Programs in javascript and actionscript",
		"employmentHistory": [
			{
				"name": "ICC Lowe Thermal"
			},
			{
				"name": "Media Group"
			}
		]
	},
	{
		"id": 3,
		"name": "stephen",
		"age": 105,
		"programmer": true,
		"experience": "Programs in javascript and objective-c",
		"employmentHistory": [
			{
				"name": "ICC Lowe Thermal"
			},
			{
				"name": "Canfield"
			}
		]
	}
];

var jesseObj = programmers[0];

var result = rjsonSearch.objectContainsQuery(jesseObj, 'jesse'); 
// result === true

var javascriptProgrammers = rjsonSearch.find(programmers, 'javascript');
// javascriptProgrammers.length === 3, true
// javascriptProgrammers[0].name === "jesse", true
// javascriptProgrammers[1].name === "matt", true
// javascriptProgrammers[2].name === "stephen", true

var shopbeamEmployees = rjsonSearch.find(programmers, 'Shopbeam'); 
// javascriptProgrammers.length === 3, true
// javascriptProgrammers[0].name === "jesse", true
```