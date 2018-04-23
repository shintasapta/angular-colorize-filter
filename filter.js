(function () {
  angular.module('app')

    .filter('DigitColorize', function ($sce) {
      return function (input, digit) {

        var newArray = Array.from(input.toString());
        var result = [];
        var countLength = newArray.length;
        var front = countLength - digit;

        for (i = 0; i < front; i++) {
          var temp = '<span>' + newArray[i] + '</span>';
          result.push($sce.trustAsHtml(temp));
        }

        for (i = digit; i > 0; i--) {
          var lastDigit = countLength - i;
          var temp = '<span class="colorize">' + newArray[lastDigit] + '</span>';
          result.push($sce.trustAsHtml(temp));
        }

        var currency = "";
        for (i = 0; i < countLength; i++) {
          var temp = result[i];
          currency = currency + temp;
          if (countLength % 3 === 0) {
            if (((i + 1) % 3 == 0) && (i !== countLength - 1)) {
              currency = currency + ","
            }
          } else if (countLength % 3 === 1) {
            if ((i % 3 == 0) && (i !== countLength - 1)) {
              currency = currency + ","
            }
          } else if (countLength % 3 === 2) {
            if (((i + 2) % 3 == 0) && (i !== countLength - 1)) {
              currency = currency + ","
            }
          }
        }
        return currency;
      }
    })

})();