# Rubyfy
Bringing some of the [Ruby](https://www.ruby-lang.org/en) methods you miss to JavaScript.

## Why?
If you're like me and love Ruby, you might miss some of the default class methods that Ruby provides that JavaScript doesn't. Take for example [Array#last](https://apidock.com/ruby/Array/last). In Ruby:
```ruby
# Ruby
['one', 'dos', 'trois'].last
#=> "trois"
```
Nice, easy, simple, clear, obvious. In JavaScript we instead have to:
```javascript
// Javascript
arr = ['one', 'dos', 'trois']
arr[arr.lenth - 1]
//=> "trois"
```
Rubyfy adds a `last` method to the Array prototype chain allowing you to:
```javascript
// JavaScript
['one', 'dos', 'trois'].last()
//=> "trois"
```

## Methods
- [`Array#any`](#arrayany)
- [`Array#compact`](#arraycompact)
- [`Array#is_empty`](#arrayis_empty)
- [`Array#first`](#arrayfirst)
- [`Array#last`](#arraylast)

- [`Object#any`](#objectany)
- [`Object#is_empty`](#objectis_empty)
- [`Object#keys`](#objectkeys)
- [`Object#vals`](#objectvals)

- [`String#capitalize`](#stringcapitalize)
- [`String#downcase`](#stringdowncase)
- [`String#is_blank`](#stringis_blank)

### `Array#any`
Similar to Ruby [`Array#any?`](https://apidock.com/ruby/Enumerable/any%3F)
```javascript
[1, 2, 3].any() //=> true
[].any()        //=> false
```

### `Array#compact`
Similar to Ruby [`Array#compact`](https://apidock.com/ruby/Array/compact), removes `null` and `undefined` from an array:
```javascript
['a', null, 'b', undefined, 'c'].compact()
//=> ["a", "b", "c"]
```

### `Array#is_empty`
Similar to Ruby [`Array#empty?`](https://apidock.com/ruby/Array/empty%3F), returns either `true` or `false`:
```javascript
[].is_empty()        //=> true
[1, 3, 3].is_empty() //=> false
```

### `Array#first`
Similar to Ruby [`Array#first`](https://apidock.com/ruby/Array/first), returns the first item in an array:
```javascript
[1, 2, 3].first()
//=> 1
```
NOTE: Unlike Ruby, `first` does _NOT_ take any arguments, so you can't do `[1, 2, 3].first(2)` for example.

### `Array#last`
Similar to Ruby [`Array#last`](https://apidock.com/ruby/Array/last), returns the last item in an array:
```javascript
[1, 2, 3].last()
//=> 3
```
NOTE: Unlike Ruby, `last` does _NOT_ take any arguments, so you can't do `[1, 2, 3].last(2)` for example.


### `Object#any`
Similar to Ruby [`Hash#any?`](https://apidock.com/ruby/Enumerable/any%3F), returns either `true` or `false`:
```javascript
obj = {one: 1, two: 2}
obj.any()
//=> true

obj = {}
obj.any()
//=> false
```

### `Object#is_empty`
Similar to Ruby [`Hash#empty?`](https://apidock.com/ruby/Enumerable/empty%3F), returns either `true` or `false`:
```javascript
obj = {}
obj.is_empty()
//=> true

obj = {one: 1, two: 2}
obj.is_empty()
//=> false
```

### `Object#keys`
Similar to Ruby [`Hash#keys`](https://apidock.com/ruby/Hash/keys), returns the keys of the object as an array:
```javascript
obj = {a: 100, b: 200, c: 300, d: 400 }
obj.keys()
//=> ["a", "b", "c", "d"]
```

### `Object#vals`
Similar to Ruby [`Hash#values`](https://apidock.com/ruby/Hash/values), returns the values of the object as an array:
```javascript
obj = {a: 100, b: 200, c: 300, d: 400}
obj.vals()
//=> [100, 200, 300, 400]
```

### `String#capitalize`
Similar to Ruby [`String#capitalize`](https://apidock.com/ruby/String/capitalize), returns a string with the first letter capitalized and all others lowercased:
```javascript
'hello there'.capitalize() //=> "Hello there"
'HELLO THERE'.capitalize() //=> "Hello there"
'123ABC'.capitalize()      //=> "123abc"
```

### `String#downcase`
Similar to Ruby [`String#downcase`](https://apidock.com/ruby/String/downcase), returns a string with all chars lowercase:
```javascript
'hEllO'.downcase()
//=> "hello"
```

### `String#is_blank`
Similar to Ruby [`String#blank?`](https://apidock.com/rails/Object/blank%3F), returns either `true` or `false`:
```javascript
''.is_blank()          //=> true
'not blank'.is_blank() //=> false
```

## The `R` Shorthand
Rubyfy also comes with an `R` shorthand that can be used instead of calling `Rubyfy`:
```javascript
R.downcase('HELLO')      //=> 'hello'
R.vals({a: 100, b: 200}) //=> [100, 200]
```
**NOTE**: If you already have a global var named `R` defined in your application, no worries, Rubyfy will check before overriding yours.

If you prefer to turn the `R` shorthand option off all together you can:
```javascript
Rubyfy.no_r = true
```
**NOTE**: Please set this option _BEFORE_ including the Rubyfy library.

## Configuration
Some folks don't like the idea of opening up built-in classes and adding new functions. If you don't like the sound of that either, that's great! You can still use Rubyfy, too. Just make sure to set:
```javascript
Rubyfy.no_prototypes = true
```
**NOTE**: Please set this option _BEFORE_ including the Rubyfy library.

You can still access all the Rubyfy goodness directly by calling the above methods on `Rubyfy` - or `R` - explicitly:
```javascript
Rubyfy.any([1,2,3])           //=> true
Rubyfy.keys({a: 100, b: 200}) //=> ["a", "b"]
```

## More coming ... soon?
You may be saying to yourself "wow, there are a whole bunch of methods in Ruby that I wish I had in JavaScript that aren't even _IN_ this gem" and you wouldn't be wrong. Although the code here is tested and working, this gem is still very much a _WORK IN PROGRESS_ as far as adding methods go. So far I've included some of the things I really miss while coding on my own JavaScript projects, but clearly the list provided in `Rubyfy` is not nearly exhaustive. Help make Rubyfy more complete by submitting a pull request with _your_ favorite missing methods! (And how much do you miss `method_missing` amiright?!)

## License
MIT - Free and open for all. Plz contribue! 
