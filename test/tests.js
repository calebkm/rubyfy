QUnit.test('Testing Rubyfy `Array#any`: ', function(assert) {
  var array = [1, 2, 3]
  var empty = []
  assert.ok(Rubyfy.any(array))
  assert.notOk(Rubyfy.any(empty))
})

QUnit.test('Testing Rubyfy `Array#compact`: ', function(assert) {
  var input = [1, null, 2, undefined, 3]
  var length = 3
  assert.equal(Rubyfy.compact(input).length, length)
})

QUnit.test('Testing Rubyfy `Array#is_empty`: ', function(assert) {
  var array = [1, 2, 3]
  var empty = []
  assert.notOk(Rubyfy.is_empty(array))
  assert.ok(Rubyfy.is_empty(empty))
})

QUnit.test('Testing Rubyfy `Array#first`: ', function(assert) {
  var array = [1, 2, 3]
  var first = 1
  assert.equal(Rubyfy.first(array), first)
})

QUnit.test('Testing Rubyfy `Array#last`: ', function(assert) {
  var array = [1, 2, 3]
  var last = 3
  assert.equal(Rubyfy.last(array), last)
})

QUnit.test('Testing Rubyfy `String#capitalize`: ', function(assert) {
  var input = 'HeLLo tHeRe!'
  var output = 'Hello there!'
  assert.equal(Rubyfy.capitalize(input), output)
})

QUnit.test('Testing Rubyfy `String#downcase`: ', function(assert) {
  var input = 'HeLLo tHeRe!'
  var output = 'hello there!'
  assert.equal(Rubyfy.downcase(input), output)
})

QUnit.test('Testing Rubyfy `String#is_blank`: ', function(assert) {
  var blank = ''
  var string = 'There once was a man from Nantucket.'
  assert.ok(Rubyfy.is_blank(blank))
  assert.notOk(Rubyfy.is_blank(string))
})

QUnit.test('Testing Rubyfy `Object#any`: ', function(assert) {
  var obj = {one: 1, two: 2, three: 3}
  var empty = {}
  assert.ok(Rubyfy.any(obj))
  assert.notOk(Rubyfy.any(empty))
})

QUnit.test('Testing Rubyfy `Object#is_empty`: ', function(assert) {
  var empty = {}
  var obj = {one: 1, two: 2, three: 3}
  assert.ok(Rubyfy.is_empty(empty))
  assert.notOk(Rubyfy.is_empty(obj))
})

QUnit.test('Testing Rubyfy `Object#keys`: ', function(assert) {
  var obj = {one: 1, two: 2, three: 3}
  assert.equal(Rubyfy.keys(obj).length, 3)
  assert.equal(Rubyfy.keys(obj).first(), 'one')
  assert.equal(Rubyfy.keys(obj).last(), 'three')
})

QUnit.test('Testing Rubyfy `Object#vals`: ', function(assert) {
    var obj = {one: 1, two: 2, three: 3}
  assert.equal(Rubyfy.vals(obj).length, 3)
  assert.equal(Rubyfy.vals(obj).first(), 1)
  assert.equal(Rubyfy.vals(obj).last(), 3)
})