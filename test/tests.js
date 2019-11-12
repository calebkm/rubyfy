QUnit.test('Testing Rubyfy `Array#any`: ', function(assert) {
  assert.ok(Rubyfy.any([1, 2, 3]))
  assert.notOk(Rubyfy.any([]))
})

QUnit.test('Testing Rubyfy `Array#compact`: ', function(assert) {
  var arr = [1, null, 2, undefined, 3]
  assert.equal(arr.length, 5)
  assert.equal(Rubyfy.compact(arr).length, 3)
})

QUnit.test('Testing Rubyfy `Array#is_empty`: ', function(assert) {
  assert.notOk(Rubyfy.is_empty([1, 2, 3]))
  assert.ok(Rubyfy.is_empty([]))
})

QUnit.test('Testing Rubyfy `Array#first`: ', function(assert) {
  assert.equal(Rubyfy.first([1, 2, 3]), 1)
})

QUnit.test('Testing Rubyfy `Array#last`: ', function(assert) {
  assert.equal(Rubyfy.last([1, 2, 3]), 3)
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