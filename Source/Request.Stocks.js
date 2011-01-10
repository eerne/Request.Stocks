/*
---
name: Request.Stocks

description: fetch stock quotes from yahoo and display on your website.

authors:
  - Enrique Erne (http://mild.ch/)

license:
  - MIT license

requires:
  - Core/Class
  - More/Request.JSONP

provides: [Request.Stocks]
...
*/

Request.Stocks = new Class({

	Extends: Request.JSONP, 

	options: {
		display: ['Name', 'Ask', 'Change', 'ChangeinPercent'],
		sortBy: 'Name',
		desc: false,
		baseURL: 'http://query.yahooapis.com/v1/public/yql?q=',
		query: 'select symbol, {display} from yahoo.finance.quotes where symbol in ({quotes}) | sort(field="{sortBy}", descending="{desc}")',
		data: {
			env: 'http://datatables.org/alltables.env',
			format: 'json'
		}
	}, 

	initialize: function(quotes, options){
		var query = {
			display: this.options.display.join(', '),
			quotes: Array.from(quotes).map(function(item){
					return '"' + item + '"';
				}).join(', '),
			sortBy: this.options.sortBy,
			desc: this.options.desc
		};
		this.options.url = this.options.baseURL + this.options.query.substitute(query);
		this.parent(options);
	}
	
});
