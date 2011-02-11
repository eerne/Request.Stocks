Request.Stocks
==============

Fetch stock quotes from yahoo and display on your website.

### Extends:

[Request.JSONP](http://mootools.net/docs/more/Request/Request.JSONP)

How to use
----------

	var myStocks = new Request.Stocks(stocks, [options]);

### Options:

* stocks - (*array*) all the titles to display, i.e. ['YHOO', 'AAPL', 'GOOG', 'MSFT']
* sortBy - (*string*: defaults to 'Name') which of the display value the result should be sorted by.
* desc - (*boolean*: defaults to false) whether the result shold be in descending order
* baseURL - (*string*: defaults to 'http://query.yahooapis.com/v1/public/yql?q=')
* query - (*string*: defaults to 'select symbol{display} from yahoo.finance.quotes where symbol in ({quotes}) | sort(field="{sortBy}", descending="{desc}")')
* display - (*array*: defaults to ['Name', 'Ask', 'Change', 'ChangeinPercent']) an array of the information you want to display, could be any of the following: Ask, AverageDailyVolume, Bid, AskRealtime, BidRealtime, BookValue, Change&PercentChange, Change, Commission, ChangeRealtime, AfterHoursChangeRealtime, DividendShare, LastTradeDate, TradeDate, EarningsShare, ErrorIndicationreturnedforsymbolchangedinvalid, EPSEstimateCurrentYear, EPSEstimateNextYear, EPSEstimateNextQuarter, DaysLow, DaysHigh, YearLow, YearHigh, HoldingsGainPercent, AnnualizedGain, HoldingsGain, HoldingsGainPercentRealtime, HoldingsGainRealtime, MoreInfo, OrderBookRealtime, MarketCapitalization, MarketCapRealtime, EBITDA, ChangeFromYearLow, PercentChangeFromYearLow, LastTradeRealtimeWithTime, ChangePercentRealtime, ChangeFromYearHigh, PercebtChangeFromYearHigh, LastTradeWithTime, LastTradePriceOnly, HighLimit, LowLimit, DaysRange, DaysRangeRealtime, FiftydayMovingAverage, TwoHundreddayMovingAverage, ChangeFromTwoHundreddayMovingAverage, PercentChangeFromTwoHundreddayMovingAverage, ChangeFromFiftydayMovingAverage, PercentChangeFromFiftydayMovingAverage, Name, Notes, Open, PreviousClose, PricePaid, ChangeinPercent, PriceSales, PriceBook, ExDividendDate, PERatio, DividendPayDate, PERatioRealtime, PEGRatio, PriceEPSEstimateCurrentYear, PriceEPSEstimateNextYear, Symbol, SharesOwned, ShortRatio, LastTradeTime, TickerTrend, OneyrTargetPrice, Volume, HoldingsValue, HoldingsValueRealtime, YearRange, DaysValueChange, DaysValueChangeRealtime, StockExchange, DividendYield

### Events

* onComplete - (*function*, optional) fired when the data returns; Passes the JSON response object from the request.

Demo
----

* [2011.mild.ch/projects/request-stocks.html](http://2011.mild.ch/projects/request-stocks.html)

