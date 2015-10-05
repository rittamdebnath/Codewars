function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

function pattern(n) {
  var output = "";
  if (isNaN(n) || n < 0) {
    return output;
  }
  if (n % 2 == 0) {
    for (var i = 1; i < n; i++) {
      if (i % 2 != 0) {
        var p = i;
        for (var j = 1; j <= p; j++) {
          output += i;
        }

      } else {
        output += '\n';
      }
    }

  } else {
    for (var k = 1; k <= n; k++) {
      if (k % 2 != 0) {
        var l = k;
        for (var m = 1; m <= l; m++) {
          output += k;
        }

      } else {
        output += '\n';
      }
    }
  }
  return output;
}

function oddPattern(n) {
  for (var output = [], o = 1; o <= n; o += 2) {
    output.push(Array(o + 1).join(o));
  }
  return output.join('\n');
}

function tea42(input) {
  var output = '';
  output += input;
  var arr = [];
  arr = output.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '2') {
      arr[i] = 't';
    }
  }
  return arr.join('');
}

function tea44(input) {
  return input.toString().replace(/2/g, 't');
}

// function array_diff(a,b){
//    return a.toString().replace(,'').split(',').join('').split('');
// }
function array_diff(a, b) {

  for (var k = [], i = 0; i < a.length; i++) {
    k.push(a[i] != b[0] ? a[i] : '');
  }
  return k.join('').split('');
}

function array_df(a, b) {
  return a.filter(function(x) {
    return b.indexOf(x) == -1
  });
}

function digital_root(n) {
  var s = 0,
    r = 0;
  if (Math.floor(n / 10) !== 0) {
    while (n > 0) {
      r = n % 10;
      s = s + r;
      n = Math.floor(n / 10);
    }
    if (s > 9) {
      return digital_root(s);
    } else {
      return s;
    }
  } else {
    return n;
  }
} //function(n){return (n-1)%9+1;}

function mineLocation(field) {
  for (var i = 0, flag = 0; i < field.length; i++) {
    for (var j = 0; j < field[i].length; j++) {
      if (field[i][j] == 1) {
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      return [i, j];
    }
  }
}

Object.prototype.add = function(n) {
  return this + n;
};
Object.prototype.subtract = function(n) {
  return this - n;
};
Object.prototype.divide = function(n) {
  return parseInt(this / n);
};
Object.prototype.multiply = function(n) {
  return this * n;
};
Object.prototype.square = function(n) {
  return Math.sqrt(this, 2);
};

function validate(n) {
  var k = n.toString().split('');
  if (k.length % 2 === 0) {
    for (var i = 0; i < k.length; i = i + 2) {
      if ((k[i] *= 2) > 9) {
        k[i] -= 9;
      }
    }
    for (var i = 0, s = 0; i < k.length; i++) {
      s += k[i];
    }
    if (s % 10 === 0) {
      console.log('Valid Card');
    } else {
      console.log('Invalid');
    }
  } else {
    for (var j = 1; j < k.length; j = j + 2) {
      if ((k[i] *= 2) > 9) {
        k[i] -= 9;
      }
    }
    for (var i = 0, s = 0; i < k.length; i++) {
      s += k[i];
    }
    if (s % 10 === 0) {
      console.log('Valid Card');
    } else {
      console.log('Invalid');
    }
  }
}

function createPhoneNumber(numbers) {
  var format = '(xxx) xxx-xxxx';
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}

function a9n(word) {
  var wordArray;
  if (word.indexOf('-') != -1) {
    wordArray = word.split('-');
    console.log(wordArray);
    return wordArray.map(function(word) {
      if (word.length >= 4) {
        return word[0] + word.substr(1, word.length - 2).length + word.substr(word.length - 1);
      }
    }).join('-');
  }
}

var uniqueInOrder = function(iterable) {
  var temp = [];
  if (iterable.length > 0) {
    prev = temp[0] = iterable[0];
    for (var i = 1, j = 0; i < iterable.length; i++) {
      if (prev !== iterable[i]) {
        prev = iterable[i];
        temp.push(iterable[i]);
      }
    }
  }
  return temp;
}

//rotate unsolved
function rotate(k, n) {
  while (n < 0) {
    k.push(k.shift());
    n++;
  }
  while (n > 0) {
    k.unshift(k.pop());
    n--;
  }
  return k;
}

function comp(array1, array2) {
  if (array1 !== null && array2 !== null) {
    for (var i = 0; i < array2.length; i++) {
      if (array1.indexOf(Math.sqrt(array2[i])) === -1) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function pigIt(str) {
  var temp = str.split(' ');
  return temp.map(function(word) {
    return word.substr(1) + word.charAt(0) + 'ay';
  }).join(' ');
}

function rgb(red, green, blue) {
  red = (red >= 0 && red <= 255 ? red : (red = red < 0 ? 0 : (red = red > 255 ? 255 : red)));
  green = (green >= 0 && green <= 255 ? green : (green = green < 0 ? 0 : (green = green > 255 ? 255 : green)));
  blue = (blue >= 0 && blue <= 255 ? blue : (blue = blue < 0 ? 0 : (blue = blue > 255 ? 255 : blue)));
  var rgb = blue | (green << 8) | (red << 16);
  return (0x1000000 + rgb).toString(16).slice(1).toUpperCase();
}

function rot13(s) {
  return s.replace(/[a-zA-Z]/g, function(c) {
    return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
  });
}
/*
Below two function ie bintodec(n) and calculate(n1,n2) are the solution
to the same problem .
*/
function bintodec(num) {
  for (var i = num.length - 1, sum = 0, j = 0; i >= 0; i--, j++) {
    if (num.charAt(i) !== '0') {
      sum += Math.pow(2, j);
    }
  }
  return sum;
}

function calculate(num1, num2) {
  return bintodec(num1) + bintodec(num2);
}

/*End of solution*/
//memoized fibonnacci
var fibonacci = function(n) {
  var sum = [0, 1],
    a = 0,
    b = 1;
  while (n - 1 > 0) {
    sum.push(a + b);
    a = b;
    b = sum[sum.length - 1];
    n--;
  }
  return sum.pop();
}

fact = (function() {
  var cache = {},
    fn = function(n) {
      if (n === 0) {
        return 1;
      } else if (cache[n]) {
        return cache[n];
      }
      return cache[n] = n * fn(n - 1);
    };
  return fn;
})();


function zeros(n) {
  var k = fact(n);
  var s = 0;
  for (i = k.toString().length - 1; k >= 0; i--) {
    if (k.toString().charAt(i) === '0') {
      ++s;
    } else {
      break;
    }
  }
  return s;
}
//Still not found the solution only for some case
var findMissing = function(list) {
  var diff = (list[1] - list[0]),
    missing = [],
    prev;
  if (list.length > 3) {
    diff = list[2] - list[1];
  }
  for (var i = 0; i < list.length; i++) {
    prev = list[i + 1] - list[i];
    if (prev !== diff) {
      missing.push(list[i] + diff);
    }
  }

  return missing[0];
}

var play = {
  every: function(n) {
    return n.every(function(e, i, a) {
      return e >= 10;
    });
  },
  filtered: function(n) {
    return n.filter(function(n) {
      return n >= 10;
    });
  },
  seduced: function(n) {
    return n.reduce(function(m, n) {
      return m + n;
    });
  }
}


function validParentheses(s) {
  var co = 0,
    cc = 0;
  if (s[0] !== ')') {
    for (var i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        ++co;
      } else {
        ++cc;
      }

    }
    if (co === cc) {
      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }
}


function guesswhat() {
  document.write("9|5|13|3|11|7|15|1<br>3|7|11|14|2|6|10|15<br>4|13|6|12|14|7|15|5<br>11|9|8|13|10|15|12|14");
  for (var i = 0, c = []; i < 4; i++) {
    c.push(prompt('press 1 if the number exist otherwise 0'));
  }
  return bintodec(c.reverse().join(''));
}


function addWord(array, string) {
  array.push(string);
  return array;
}

function searchSubstr(fullText, searchText, allowOverlap) {
  var k, j = 0;
  if (allowOverlap == null) {
    allowOverlap = true;
  }
  if (searchText === '' || fullText === '') {
    return 0;
  }
  if (allowOverlap === false) {
    k = searchText.length;
  } else if (allowOverlap === true) {
    k = searchText.length - 1;
  }
  while (fullText.indexOf(searchText) !== -1) {
    if (fullText.indexOf(searchText) !== -1) {
      fullText = fullText.substr(fullText.indexOf(searchText) + k);
      j++;
    }
  }
  return j;
}

function validISBN10(isbn) {
  if (isbn.length == 10 && isbn.substr(0, 8).indexOf('X') == -1) {
    var s = 0,
      c = [];
    for (var i = 0; i < isbn.length; i++) {
      if (isbn[i] === 'X') {
        c.push(10 * (i + 1));
      } else {
        c.push(isbn[i] * (i + 1));
      }
    }

    while (c.length > 0) {
      s += c.pop();
    }
    if (s % 11 == 0) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

function pascalsTriangle(n) {
  var result = [],
    k = [];
  result[0] = [1];
  result[1] = [1, 1];
  if (n >= 0 && n < 3) {
    if (n == 0) {
      return [];
    } else if (n == 1) {
      return [1];
    } else {
      return [1, 1, 1];
    }
  }
  for (var row = 2; row < n; row++) {
    result[row] = [1];
    for (var col = 1; col <= row - 1; col++) {
      result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
      result[row].push(1);
    }
  }

  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j <= i; j++) {
      k.push(result[i][j]);
    }
  }
  return k;
}

function arr2bin(n) {
  var s = 0;
  for (var i = 0; i < n.length; i++) {
    s += n[i];
  }
  return s.toString(2);
}


Array.prototype.transpose = function() {
  var a = this,
    w = a.length ? a.length : 0,
    h = a[0] instanceof Array ? a[0].length : 0;
  if (h === 0 || w === 0) {
    return [];
  }
  var i, j, t = [];
  for (i = 0; i < h; i++) {
    t[i] = [];
    for (j = 0; j < w; j++) {
      t[i][j] = a[j][i];
    }
  }
  return t;
};

function BinaryPyramid(m, n) {
  var s = [];
  for (var i = m; i <= n; i++) {
    s.push(parseInt(i.toString(2), 10))
  }
  return s.reduce(function(p, c, i, a) {
    return p + c;
  }).toString(2);
}

function BinaryPiramid(m, n) {
  for (var res = 0, i = m; i <= n; i++) res += +i.toString(2);
  return res.toString(2);
}

function initials(n) {
  for (var i = 0, s = [], l = n.split(' '); i < l.length - 1; i++) {
    s += l[i].charAt(0).toUpperCase() + '.';
  }
  return s + n.charAt(n.lastIndexOf(' ') + 1).toUpperCase() + n.substr(n.lastIndexOf(' ') + 2, n.length - 1);
}

function spinWords(n) {
  return n.split(' ').map(function(e) {
    return e.length >= 5 ? e.split('').reverse().join('') : e;
  }).join(' ');
}

function dropCap(n) {
  return n.split(' ').map(function(e) {
    return e.length > 2 ? e.charAt(0).toUpperCase() + e.substr(1, e.length - 1) : e;
  }).join(' ');
}

function translate(s) {

  var l = s.split(' ').map(function(e) {
    for (var i = 0, s; i < e.length; i++) {
      if (e[i] == 'a' || e[i] == 'e' || e[i] == 'i' || e[i] == 'o' || e[i] == 'u') {
        s = i;
        break;
      }
    }
    return e.substr(e.indexOf(e[s]), e.length) + e.substr(0, e.indexOf(e[s])) + 'ay';
  }).join(' ');

  return dropCap(l);

};

function binSearch(arr, toSearch) {
  var min = 0,
    max = arr.length - 1,
    mid = 0;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (arr[mid] === toSearch) {
      return 1;
    } else if (toSearch < arr[mid]) {
      max = mid - 1;

    } else if (toSearch > arr[mid]) {
      min = mid + 1;
    }
  }
  return -1;
}
//Incomplete parseInt solution
function parseInte(string) {
  var k = ['one', 'tw', 'th', 'fo', 'fi', 'si', 'se', 'ei', 'ni', 'te'];
  var l = string.split(' ');
  return l.map(function(e) {
    for (var i = 0; i < k.length; i++) {
      if (e.lastIndexOf('ty') != -1) {
        break;
      } else if (e.indexOf(k[i]) != -1) {
        return i + 1;
      }
    }
    if (e.indexOf('hu') != -1) {
      return 100;
    } else if (e.lastIndexOf('ty') != -1) {
      return 10;
    } else {
      return ' ';
    }
  });
}

var Counter = function() {
  this.val = 0;
}

Counter.prototype.incr = function() {
  return ++this.val;
}
Counter.prototype.valueOf = function() {
  return this.val;
}


var permArr = [],
  usedChars = [];

function permute(input) {

  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};
var count = 0;
var palindromeChainLength = function(n) {
  try {
    var temp = n,
      s = 0,
      t, r;
    while (temp > 0) {
      r = temp % 10;
      s = s * 10 + r;
      temp = Math.floor(temp / 10);
    }
    if (s === n) {
      return count;
    } else {
      count++;
      return palindromeChainLength(s + n);
    }
  } finally {
    count = 0;
  }
};


function solveQuadratic(a, b, c) {
  var x = [],
    d = 0;
  if (b != 0 || c != 0) {
    d = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
  }
  if (a != 0) {
    x.push((-b + d) / 2 * a);
    x.push((-b - d) / 2 * a);
  }
  return 'x=' + x[0] + " " + 'x=' + x[1];
}


function toUnderscore(s) {
  return s.toString().replace(/([a-z\d])([A-Z])/g, '$1 $2').split(' ').map(function(e) {
    return e.toLowerCase();
  }).join('_');
}

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, '');
}

function nameSuffle(str) {
  return str.replace(/([\w ]+) ([\w ]+)/g, '$2 $1');
}

function addLength(str) {
  return str.split(' ').map(function(e) {
    return e += ' ' + e.length;
  });
}

function stringSuffix(s) {
  if (s.length === 1)
    return 1;

  for (var i = 1, total = s.length; i < s.length; i++) {
    var j = 0;
    for (; j < s.length - i; j++) {
      if (s[j] != s[j + i]) {
        break;
      }
    }
    total += j;
  }
  return total;
}

function stripIt(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}

function EvenOdd(arr) {
  for (var i = 0, s = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      s += arr[i];
    } else {
      s *= arr[i];
    }
  }
  return s;
}


function reverse(s) {
  return s.indexOf('!') !== -1 ? reverse(s.split(' ').map(function(e) {
    if (e.indexOf('!') !== -1) {
      if (e.charAt(0) == '!') {
        return e.substr(1, e.length - 1).split('').reverse().join('');
      } else if (e.indexOf('!') > 0 && e.indexOf('!') < e.length - 1) {
        return e.substr(0, e.indexOf('!')) + e.substr(e.indexOf('!') + 1, e.length - 1).split('').reverse().join('');
      } else if (e.indexOf('!') === e.length - 1) {
        return e.substr(0, e.length - 1).split('').reverse().join('');
      }
    } else {
      return e;
    }
  }).join(' ').trim()) : s;
}

function sumStrings(a, b) {

  var str = (a + ' ' + b).split(' ').map(function(e) {
    if (e.length === 0) {
      return 0;
    } else {
      return parseInt(e, 10);
    }
  });
  for (var i = 0, s = 0; i < 2; i++) {
    s += str[i];
  }
  return s;
}

function sevenAte9(str) {
  return str.indexOf(797) !== -1 ? sevenAte9(str.replace(/797/g, '77')) : str;
}

var p = [];

function totals(arr) {
  if (arr.length !== 1) {
    p = [];
    for (var i = 0, j = 1; i < arr.length - 1; i++, j++) {
      p.push(arr[i] + arr[j]);
    }
    if (p.length > 1) {
      totals(p);
    }
  }
  return p[0];
}

function percentageSumArray(arr) {
  var len = 0;
  if (arr == null || arr.length == 0) {
    return false;
  }
  for (var i = 0, s = 0; i < arr.length; i++) {
    s += arr[i];
    if (arr[i] !== 0)
      len++;
  }
  if (s * (len / 100) < 0 || s * (len / 100) == 0 || s * (len / 100) < 0) {
    return false;
  }
  return parseFloat((s * (len / 100)).toFixed(2));
}


function remember(str) {
  for (var i = 0, k = []; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        if (k.indexOf(str[i]) == -1)
          k.push(str[j]);
      }
    }
  }
  return k;
}


function Queue(){
  var queue  = [];
  var offset = 0;
  this.getLength = function(){
    return (queue - offset);
  }
  this.isEmpty = function(){
    return (queuelength == 0);
  }
  this.enqueue = function(){
    queue.push(item);
  }
  this.dequeue=function() {
    if (queue === 0) return undefined;
    var item = queue[offset];
    if (++ offset * 2 >= queue.length)
      queue  = queue.slice(offset);
      offset = 0;

    return ;
  }

  this.peek = function(){
    return (queue.length > 0 ? queue[offset] : undefined);

  }
}
