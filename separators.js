function reverse(string) {
  var o = '';
  for (var i = string.length - 1; i >= 0; i--)
    o += string[i];
  return o;
}

function separators(string, separator, range, startDirection){

  if (typeof string === 'number'){
    string = string.toString();
  }

  if (string.length > 0) {
    
    if (startDirection === 'right'){
      string = reverse(string);
    }

    string = string.match(new RegExp('.{1,'+range+'}', 'g')).join(separator);

    if (startDirection === 'right'){
      string = reverse(string);
    }

    return string;

  } else {

    return false;

  }
}

module.exports = function (string, separator, range, startDirection) {
  'use strict';
  return separators(string, separator, range, startDirection);
};
