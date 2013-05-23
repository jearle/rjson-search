var objectContainsQuery = function(obj, query, containsQuery){
	
	if (typeof obj !== 'object') return;
	
	var keys = Object.keys(obj);
	
	for (var i = 0 ; i < keys.length ; i++) {
		var o = obj[keys[i]];
		console.log(o);
		objectContainsQuery(o, query);
	}
	
};

module.exports = {

	isRegularExpression: function(arg){

		return Object.prototype.toString.call(arg) === '[object RegExp]';

	},

	find: function(json, query){
		
		var results = [];

		for (var i = 0 ; i < json.length ; i++) {

			var obj = json[i];

			if (this.objectContainsQuery(obj, query))

				results.push(obj);

		}

		return results;
	},

	objectContainsQuery: function(obj, query){
		
		if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
			var s = obj.toString();
			if (s.match(query)) {
				return true;
			}
		} else if (typeof obj === 'object') {
			var keys = Object.keys(obj);

			for (var i = 0 ; i < keys.length ; i++) {

				if (this.objectContainsQuery(obj[keys[i]], query)) 
					return true;

			}
		}

		return false;

	}

};