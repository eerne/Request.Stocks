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

	loadStocks: function(options){
		var self = this;
		new Request.Stocks(Object.merge({
			onSuccess: function(yahoo){
				var result = '';
				Array.each(Array.from(yahoo.query.results.quote), function(quote){
					result += '<h3>{Name}</h3><p>{Ask} ChangeinPercent: {ChangeinPercent} Change: {Change}</p>'.substitute(quote);
				}, this);
				           
				self.set('html', result);
			}, 
			onRequest: function(script){
				if (window.console){
					//console.log(script);
				}
				self.set('text', 'Loading...');
			}
		}, options)).send();
		return this;
	}
	  
});
