Request.Stocks
==============

Fetch stock quotes from yahoo and display on your website. See also: http://www.yqlblog.net/blog/2009/06/02/getting-stock-information-with-yql-and-open-data-tables/

### Extends:

[Request.JSONP](http://mootools.net/docs/more/Request/Request.JSONP)

How to use
----------

	var myStocks = new Request.Stocks(stocks, [options]);

### Arguments:

1. stocks - (*array*) of the stocks you want to display.
1. options - (*object*, optional) See below.

### Options:

* display - (*array*: defaults to ['Name', 'Ask', 'Change', 'ChangeinPercent']) an array of the information you want to display, could be any of the following: Ask, AverageDailyVolume, Bid, AskRealtime, BidRealtime, BookValue, Change&PercentChange, Change, Commission, ChangeRealtime, AfterHoursChangeRealtime, DividendShare, LastTradeDate, TradeDate, EarningsShare, ErrorIndicationreturnedforsymbolchangedinvalid, EPSEstimateCurrentYear, EPSEstimateNextYear, EPSEstimateNextQuarter, DaysLow, DaysHigh, YearLow, YearHigh, HoldingsGainPercent, AnnualizedGain, HoldingsGain, HoldingsGainPercentRealtime, HoldingsGainRealtime, MoreInfo, OrderBookRealtime, MarketCapitalization, MarketCapRealtime, EBITDA, ChangeFromYearLow, PercentChangeFromYearLow, LastTradeRealtimeWithTime, ChangePercentRealtime, ChangeFromYearHigh, PercebtChangeFromYearHigh, LastTradeWithTime, LastTradePriceOnly, HighLimit, LowLimit, DaysRange, DaysRangeRealtime, FiftydayMovingAverage, TwoHundreddayMovingAverage, ChangeFromTwoHundreddayMovingAverage, PercentChangeFromTwoHundreddayMovingAverage, ChangeFromFiftydayMovingAverage, PercentChangeFromFiftydayMovingAverage, Name, Notes, Open, PreviousClose, PricePaid, ChangeinPercent, PriceSales, PriceBook, ExDividendDate, PERatio, DividendPayDate, PERatioRealtime, PEGRatio, PriceEPSEstimateCurrentYear, PriceEPSEstimateNextYear, Symbol, SharesOwned, ShortRatio, LastTradeTime, TickerTrend, OneyrTargetPrice, Volume, HoldingsValue, HoldingsValueRealtime, YearRange, DaysValueChange, DaysValueChangeRealtime, StockExchange, DividendYield
* sortBy - (*string*: defaults to 'Name') which of the display value the result should be sorted by.
* desc - (*boolean*: defaults to false) whether the result shold be in descending order
* baseURL - (*string*: defaults to 'http://query.yahooapis.com/v1/public/yql?q=')
* query - (*string*: defaults to 'select symbol{display} from yahoo.finance.quotes where symbol in ({quotes}) | sort(field="{sortBy}", descending="{desc}")')

### Events

* onComplete - (*function*, optional) fired when the data returns; Passes the JSON response object from the request.

#### See Also:

[Request.JSONP](http://mootools.net/docs/more/Request/Request.JSONP)


