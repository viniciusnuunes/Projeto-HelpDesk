angular.module('helpdesk').filter("dateFilter", function($filter) {
	return function( items, fromDate, toDate ) {
		var filtered = [];
		var from_date = "";
		var to_date = "";

		if(isNaN(fromDate) || fromDate===undefined || fromDate===null) {
			from_date = 0;
		} else {
			from_date = Date.parse(fromDate);
		}
		if(isNaN(toDate) || toDate===undefined || toDate===null) {
			to_date = 999999999999999999999;
		} else {
			to_date = Date.parse(toDate);
		}

		angular.forEach(items, function(item) {
			var dataAtual = Date.parse(item.data);
			if(dataAtual > from_date && dataAtual < to_date) {
				filtered.push(item);
			}
		});
		return filtered;
	};
});
