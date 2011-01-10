/*
---
name: Request.Stocks.element

description: Loading stock quotes in an Element adding method to the Element using: $('elem').loadStocks()

authors:
  - Enrique Erne (http://mild.ch/)

license:
  - MIT license

requires:
  - Core/Element
  - Request.Stocks

provides: [Request.Stocks]
...
*/

Element.implement({

	loadStocks: function(quote, options){
		var self = this;
		new Request.Stocks(quote, {
			onSuccess: function(yahoo){
				var result = '';
				Array.each(Array.from(yahoo.query.results.quote), function(quote){
					result += '<h2>' + quote.Name + '</h2>';
					result += '<p>' + quote.ChangeinPercent + '</p>';
				});
				           
				self.set('html', result);
			}, 
			onRequest: function(script){
				if (window.console){
					//console.log(script);
				}
				self.set('text', 'Loading...');
			}
		}).send();
		return this;
	}
	  
});
