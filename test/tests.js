QUnit.test('Testing Rubyfy `Array#any`: ', function(assert) {
  var array = [1, 2, 3]
  var empty = []
  assert.ok(Rubyfy.any(array))
  assert.ok(array.any())
  assert.notOk(Rubyfy.any(empty))
  assert.notOk(empty.any())
})

QUnit.test('Testing Rubyfy `Array#compact`: ', function(assert) {
  var array = [1, null, 2, undefined, 3]
  assert.equal(Rubyfy.compact(array).length, 3)
  assert.equal(array.compact().length, 3)
})

QUnit.test('Testing Rubyfy `Array#is_empty`: ', function(assert) {
  var empty = []
  var array = [1, 2, 3]
  assert.ok(Rubyfy.is_empty(empty))
  assert.ok(empty.is_empty())
  assert.notOk(Rubyfy.is_empty(array))
  assert.notOk(array.is_empty())
})

QUnit.test('Testing Rubyfy `Array#first`: ', function(assert) {
  var array = [1, 2, 3]
  assert.equal(Rubyfy.first(array), 1)
  assert.equal(array.first(), 1)
})

QUnit.test('Testing Rubyfy `Array#last`: ', function(assert) {
  var array = [1, 2, 3]
  assert.equal(Rubyfy.last(array), 3)
  assert.equal(array.last(), 3)
})

QUnit.test('Testing Rubyfy `String#capitalize`: ', function(assert) {
  var mixed = 'HeLLo tHeRe!'
  var capped = 'Hello there!'
  assert.equal(Rubyfy.capitalize(mixed), capped)
  assert.equal(mixed.capitalize(), capped)
})

QUnit.test('Testing Rubyfy `String#downcase`: ', function(assert) {
  var mixed = 'HeLLo tHeRe!'
  var downed = 'hello there!'
  assert.equal(Rubyfy.downcase(mixed), downed)
  assert.equal(mixed.downcase(), downed)
})

QUnit.test('Testing Rubyfy `String#is_blank`: ', function(assert) {
  var blank = ''
  var string = 'There once was a man from Nantucket.'
  assert.ok(Rubyfy.is_blank(blank))
  assert.ok(blank.is_blank())
  assert.notOk(Rubyfy.is_blank(string))
  assert.notOk(string.is_blank())
})

QUnit.test('Testing Rubyfy `Object#any`: ', function(assert) {
  var obj = {one: 1, two: 2, three: 3}
  var empty = {}
  assert.ok(Rubyfy.any(obj))
  assert.ok(obj.any())
  assert.notOk(Rubyfy.any(empty))
  assert.notOk(empty.any())
})

QUnit.test('Testing Rubyfy `Object#is_empty`: ', function(assert) {
  var empty = {}
  var obj = {one: 1, two: 2, three: 3}
  assert.ok(Rubyfy.is_empty(empty))
  assert.ok(empty.is_empty())
  assert.notOk(Rubyfy.is_empty(obj))
  assert.notOk(obj.is_empty())
})

QUnit.test('Testing Rubyfy `Object#keys`: ', function(assert) {
  var obj = {one: 1, two: 2, three: 3}
  assert.equal(Rubyfy.keys(obj).length, 3)
  assert.equal(obj.keys().length, 3)
  assert.equal(Rubyfy.keys(obj).first(), 'one')
  assert.equal(obj.keys().first(), 'one')
  assert.equal(Rubyfy.keys(obj).last(), 'three')
  assert.equal(obj.keys().last(), 'three')
})

QUnit.test('Testing Rubyfy `Object#vals`: ', function(assert) {
  var obj = {one: 1, two: 2, three: 3}
  assert.equal(Rubyfy.vals(obj).length, 3)
  assert.equal(obj.vals().length, 3)
  assert.equal(Rubyfy.vals(obj).first(), 1)
  assert.equal(obj.vals().first(), 1)
  assert.equal(Rubyfy.vals(obj).last(), 3)
  assert.equal(obj.vals().last(), 3)
})