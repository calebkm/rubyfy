# Rubyfy - 0.1.0
# 2019 Caleb Matthiesen
# https://github.com/calebkm/rubyfy
# ----------------------------------------------------
@Rubyfy or= {}

# Setup --------------------------------------------
#
Rubyfy.classes = 'Array Object String'.split(' ')
Rubyfy.Array   = 'any compact is_empty first last'.split(' ')
Rubyfy.String  = 'capitalize downcase is_blank'.split(' ')
Rubyfy.Object  = 'any is_empty keys vals'.split(' ')

# Array --------------------------------------------
#
Rubyfy.compact = (arr) ->
  if Rubyfy.defined(arr, 'compact')
    arr.filter (i) -> i != null and i != undefined

Rubyfy.first = (arr) ->
  if Rubyfy.defined(arr, 'first')
    arr[0]

Rubyfy.last = (arr) ->
  if Rubyfy.defined(arr, 'last')
    arr[arr.length - 1]

# Object -------------------------------------------
#
Rubyfy.keys = (obj) ->
  if Rubyfy.defined(obj, 'keys')
    Object.keys(obj)

Rubyfy.vals = (obj) ->
  if Rubyfy.defined(obj, 'vals')
    Object.values(obj)

# Array or Object ----------------------------------
#
Rubyfy.any = (arr_or_obj) ->
  if Rubyfy.defined(arr_or_obj, 'any')
    !Rubyfy.is_empty(arr_or_obj)

Rubyfy.is_empty = (arr_or_obj) ->
  if Rubyfy.defined(arr_or_obj, 'is_empty')
    if Rubyfy.is_array(arr_or_obj)
      Rubyfy.compact(arr_or_obj).length == 0
    else if Rubyfy.is_object(arr_or_obj)
      Object.keys(arr_or_obj).length == 0

# String -------------------------------------------
#
Rubyfy.capitalize = (str) ->
  if Rubyfy.defined(str, 'capitalize')
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

Rubyfy.downcase = (str) ->
  if Rubyfy.defined(str, 'downcase')
    str.toLowerCase()

Rubyfy.is_blank = (str) ->
  if Rubyfy.defined(str, 'is_blank')
    str.trim() == ''

# Helpers ------------------------------------------
#
Rubyfy.defined = (o, func) ->
  class_of = Rubyfy.class_of(o)
  if class_of and Rubyfy[class_of] and Rubyfy[class_of].includes(func)
    true
  else
    console.warn("Whoops, Rubyfy does not define a function `#{func}` on the #{Rubyfy.capitalize(class_of)} class.")

Rubyfy.class_of = (t) ->
  if Rubyfy.is_array(t)
    'Array'
  else if Rubyfy.is_string(t)
    'String'
  else if Rubyfy.is_object(t)
    'Object'
  else
    typeof t

Rubyfy.is_array = (a) ->
  Array.isArray(a)

Rubyfy.is_string = (s) ->
   typeof s == 'string' or \
   s.constructor == String or \
   Object.prototype.toString.call(s) == '[object String]'

Rubyfy.is_object = (o) ->
  (typeof o == 'object') and \
  (o != null) and \
  !Rubyfy.is_array(o) and \
  !Rubyfy.is_string(o)

# Define `R` shorthand
#-----------------------------------------------------
unless Rubyfy.no_r
  if typeof @R == 'undefined'
    @R = Rubyfy
    @_R_IS_DEFINED_ = true
  else
    console.warn("Unable to assign Rubyfy shorthand `R` because it's already defined. You can still use `Rubyfy` explicitly.")

# Add Rubyfy to prototypes
# ----------------------------------------------------
unless Rubyfy.no_prototypes
  for klass in Rubyfy.classes
    do (klass) ->
      for func in Rubyfy[klass]
        do (func) ->
          if typeof eval(klass).prototype[func] == 'undefined'
            Object.defineProperty eval(klass).prototype, func,
              value: -> Rubyfy[func](@)
          else
            console.warn("Rubyfy attempted to define `#{klass}##{func}` but it looks like #{klass}.prototype.#{func} has already been defined. You can still use the Rubyfy version of `#{func}` by calling it explicitly with `#{if @_R_IS_DEFINED_ then 'R' else 'Rubyfy'}.#{func}()`")
