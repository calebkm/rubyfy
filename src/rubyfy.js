// This file created by running rubyfy.coffee through decaffeinate
//
// Rubyfy - 0.1.0
// 2019 Caleb Matthiesen
// https://github.com/calebkm/rubyfy
// ----------------------------------------------------
if (!this.Rubyfy) { this.Rubyfy = {}; }

Rubyfy.classes = 'Array Object String'.split(' ');
Rubyfy.Array   = 'any compact is_empty first last'.split(' ');
Rubyfy.String  = 'capitalize downcase is_blank'.split(' ');
Rubyfy.Object  = 'any is_empty keys vals'.split(' ');

Rubyfy.compact = function(arr) {
  if (Rubyfy.defined(arr, 'compact')) {
    return arr.filter(i => (i !== null) && (i !== undefined));
  }
};

Rubyfy.first = function(arr) {
  if (Rubyfy.defined(arr, 'first')) {
    return arr[0];
  }
};

Rubyfy.last = function(arr) {
  if (Rubyfy.defined(arr, 'last')) {
    return arr[arr.length - 1];
  }
};

Rubyfy.keys = function(obj) {
  if (Rubyfy.defined(obj, 'keys')) {
    return Object.keys(obj);
  }
};

Rubyfy.vals = function(obj) {
  if (Rubyfy.defined(obj, 'vals')) {
    return Object.values(obj);
  }
};

Rubyfy.any = function(arr_or_obj) {
  if (Rubyfy.defined(arr_or_obj, 'any')) {
    return !Rubyfy.is_empty(arr_or_obj);
  }
};

Rubyfy.is_empty = function(arr_or_obj) {
  if (Rubyfy.defined(arr_or_obj, 'is_empty')) {
    if (Rubyfy.is_array(arr_or_obj)) {
      return Rubyfy.compact(arr_or_obj).length === 0;
    } else if (Rubyfy.is_object(arr_or_obj)) {
      return Object.keys(arr_or_obj).length === 0;
    }
  }
};

Rubyfy.capitalize = function(str) {
  if (Rubyfy.defined(str, 'capitalize')) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
};

Rubyfy.downcase = function(str) {
  if (Rubyfy.defined(str, 'downcase')) {
    return str.toLowerCase();
  }
};

Rubyfy.is_blank = function(str) {
  if (Rubyfy.defined(str, 'is_blank')) {
    return str.trim() === '';
  }
};

Rubyfy.defined = function(o, func) {
  const class_of = Rubyfy.class_of(o);
  if (class_of && Rubyfy[class_of] && Rubyfy[class_of].includes(func)) {
    return true;
  } else {
    return console.warn(`Whoops, Rubyfy does not define a function \`${func}\` on the ${Rubyfy.capitalize(class_of)} class.`);
  }
};

Rubyfy.class_of = function(t) {
  if (Rubyfy.is_array(t)) {
    return 'Array';
  } else if (Rubyfy.is_string(t)) {
    return 'String';
  } else if (Rubyfy.is_object(t)) {
    return 'Object';
  } else {
    return typeof t;
  }
};

Rubyfy.is_array = a => Array.isArray(a);

Rubyfy.is_string = s => (typeof s === 'string') || 
(s.constructor === String) || 
(Object.prototype.toString.call(s) === '[object String]');

Rubyfy.is_object = o => (typeof o === 'object') && 
(o !== null) && 
!Rubyfy.is_array(o) && 
!Rubyfy.is_string(o);

if (!Rubyfy.no_r) {
  if (typeof this.R === 'undefined') {
    this.R = Rubyfy;
    this._R_IS_DEFINED_ = true;
  } else {
    console.warn("Unable to assign Rubyfy shorthand `R` because it's already defined. You can still use `Rubyfy` explicitly.");
  }
}

if (!Rubyfy.no_prototypes) {
  for (let klass of Array.from(Rubyfy.classes)) {
    ((klass => Array.from(Rubyfy[klass]).map((func) =>
      (function(func) {
        if (typeof eval(klass).prototype[func] === 'undefined') {
          return Object.defineProperty(eval(klass).prototype, func,
            {value() { return Rubyfy[func](this); }});
        } else {
          return console.warn(`Rubyfy attempted to define \`${klass}#${func}\` but it looks like ${klass}.prototype.${func} has already been defined. You can still use the Rubyfy version of \`${func}\` by calling it explicitly with \`${this._R_IS_DEFINED_ ? 'R' : 'Rubyfy'}.${func}()\``);
        }
      })(func))))(klass);
  }
}
