sap.ui.define(["sap/ui/core/format/NumberFormat"], function (NumberFormat) {
    return {
        makeNameUpperCase: function (inp) {
            if (inp) {
                return inp.toUpperCase();
            }
        },
        convertCurrencyFormatter: function (num, currency) {
            debugger;
                // var oLocale = new sap.ui.core.Locale("en-US");
            var oFormatOption = {
                // showMeasure: true,
                currencyCode: false,
                // currencyContext: 'standard'
            };
            var oCurrencyFormat = NumberFormat.getCurrencyInstance(oFormatOption);

            var result = oCurrencyFormat.format(num, currency);
            return result;
        },
    };
});
