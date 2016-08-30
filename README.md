# formatla
###string formatter

## how to install

### npm
```sh
npm install formatla --save
```

## how to use
### node
```js
var formatla = require('formatla');
```

##variables and values
```js
formatla(string, separator, range, startDirection);
```
```text
separator -> type string -> "any separator/character"
range (separator added to string at every n(range) characters) -> type number or string
startDirection (determines the direction of the start.) -> type string -> "left", "right"
```


## examples
```js
formatla("1000000000", ".", 3, "right"); //1.000.000.000
formatla("1000000000", ".", 3, "left"); //100.000.000.0
formatla("4543123423455678", "-", 4, "left"); //4543-1234-2345-5678
formatla("istanbulturkey", ":", 2, "right"); //is:ta:nb:ul:tu:rk:ey

```
