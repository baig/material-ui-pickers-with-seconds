'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classnames = _interopDefault(require('classnames'));
var withStyles = _interopDefault(require('@material-ui/core/styles/withStyles'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var Dialog = _interopDefault(require('@material-ui/core/Dialog'));
var DialogActions = _interopDefault(require('@material-ui/core/DialogActions'));
var DialogContent = _interopDefault(require('@material-ui/core/DialogContent'));
var Icon = _interopDefault(require('@material-ui/core/Icon'));
var InputAdornment = _interopDefault(require('@material-ui/core/InputAdornment'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var reactDom = require('react-dom');
var Toolbar = _interopDefault(require('@material-ui/core/Toolbar'));
var Fade = _interopDefault(require('@material-ui/core/Fade'));
var withTheme = _interopDefault(require('@material-ui/core/styles/withTheme'));
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Tabs = _interopDefault(require('@material-ui/core/Tabs'));
var Tab = _interopDefault(require('@material-ui/core/Tab'));

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var keycode = createCommonjsModule(function (module, exports) {
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) searchInput = hasKeyCode;
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput);

  // check codes
  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode;
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()];
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()];
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
};

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i;

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {}; // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i;

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias];
}
});

var keycode_1 = keycode.code;
var keycode_2 = keycode.codes;
var keycode_3 = keycode.aliases;
var keycode_4 = keycode.names;
var keycode_5 = keycode.title;

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf$2 = _core.Object.getPrototypeOf;

var getPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf$2, __esModule: true };
});

unwrapExports(getPrototypeOf);

var classCallCheck = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

unwrapExports(classCallCheck);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});

unwrapExports(defineProperty);

var createClass = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

unwrapExports(createClass);

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _redefine = _hide;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$2 = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO$2) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

unwrapExports(iterator);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty$4 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$4($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol$2 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$2, __esModule: true };
});

unwrapExports(symbol);

var _typeof_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

unwrapExports(_typeof_1);

var possibleConstructorReturn = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

unwrapExports(possibleConstructorReturn);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf$2 = _core.Object.setPrototypeOf;

var setPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf$2, __esModule: true };
});

unwrapExports(setPrototypeOf);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object$1 = _core.Object;
var create$2 = function create(P, D) {
  return $Object$1.create(P, D);
};

var create = createCommonjsModule(function (module) {
module.exports = { "default": create$2, __esModule: true };
});

unwrapExports(create);

var inherits = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



var _create2 = _interopRequireDefault(create);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

unwrapExports(inherits);

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$2 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$2, __esModule: true };
});

unwrapExports(keys);

var objectWithoutProperties = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
});

unwrapExports(objectWithoutProperties);

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$2 = _core.Object.assign;

var assign = createCommonjsModule(function (module) {
module.exports = { "default": assign$2, __esModule: true };
});

unwrapExports(assign);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is$1(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is$1(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty$1.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

var shallowEqual_1 = shallowEqual;

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var warning_1 = warning;

var supports = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = undefined;



var _defineProperty2 = _interopRequireDefault(defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defineProperty$$2(object, property, attr) {
  return (0, _defineProperty2.default)(object, property, attr);
}

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty$$2({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {
      //
    }

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();

exports.default = {};
});

unwrapExports(supports);
var supports_1 = supports.passiveOption;

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", {
  value: true
});



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _typeof3 = _interopRequireDefault(_typeof_1);



var _keys2 = _interopRequireDefault(keys);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _assign2 = _interopRequireDefault(assign);

exports.withOptions = withOptions;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);



var _warning2 = _interopRequireDefault(warning_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(supports.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_React$Component) {
  (0, _inherits3.default)(EventListener, _React$Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(_react2.default.Component);

EventListener.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.node,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : {};

exports.default = EventListener;
});

var EventListener = unwrapExports(lib);
var lib_1 = lib.withOptions;

var classCallCheck$2 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$2 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$5 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits$2 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties$2 = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn$2 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var dialogWidth = 310;
var styles = {
  dialogRoot: {
    minWidth: dialogWidth
  },
  dialog: {
    width: dialogWidth,

    '&:first-child': {
      padding: 0
    }
  },
  dialogActions: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start'
  },
  clearableDialogAction: {
    '&:first-child': {
      marginRight: 'auto'
    }
  },
  todayDialogAction: {
    '&:first-child': {
      marginRight: 'auto'
    }
  },
  dialogAction: {
    // empty but may be needed for override
  }
};

var ModalDialog = function ModalDialog(_ref) {
  var _classnames;

  var children = _ref.children,
      classes = _ref.classes,
      onKeyDown = _ref.onKeyDown,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      onSetToday = _ref.onSetToday,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      dialogContentClassName = _ref.dialogContentClassName,
      clearable = _ref.clearable,
      showTodayButton = _ref.showTodayButton,
      other = objectWithoutProperties$2(_ref, ['children', 'classes', 'onKeyDown', 'onAccept', 'onDismiss', 'onClear', 'onSetToday', 'okLabel', 'cancelLabel', 'clearLabel', 'todayLabel', 'dialogContentClassName', 'clearable', 'showTodayButton']);
  return React__default.createElement(
    Dialog,
    _extends({ onClose: onDismiss, classes: { paper: classes.dialogRoot } }, other),
    React__default.createElement(EventListener, { target: 'window', onKeyDown: onKeyDown }),
    React__default.createElement(
      DialogContent,
      { className: classnames(classes.dialog, dialogContentClassName) },
      children
    ),
    React__default.createElement(
      DialogActions,
      {
        classes: {
          root: clearable && classes.dialogActions,
          action: classnames(classes.dialogAction, (_classnames = {}, defineProperty$5(_classnames, classes.clearableDialogAction, clearable), defineProperty$5(_classnames, classes.todayDialogAction, !clearable && showTodayButton), _classnames))
        }
      },
      clearable && React__default.createElement(
        Button,
        {
          color: 'primary',
          onClick: onClear,
          'aria-label': clearLabel
        },
        clearLabel
      ),
      !clearable && showTodayButton && React__default.createElement(
        Button,
        {
          color: 'primary',
          onClick: onSetToday,
          'aria-label': todayLabel
        },
        todayLabel
      ),
      React__default.createElement(
        Button,
        {
          color: 'primary',
          onClick: onDismiss,
          'aria-label': cancelLabel
        },
        cancelLabel
      ),
      React__default.createElement(
        Button,
        {
          color: 'primary',
          onClick: onAccept,
          'aria-label': okLabel
        },
        okLabel
      )
    )
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dialogContentClassName: PropTypes.string,
  okLabel: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string.isRequired,
  clearLabel: PropTypes.string.isRequired,
  clearable: PropTypes.bool.isRequired,
  todayLabel: PropTypes.string.isRequired,
  showTodayButton: PropTypes.bool.isRequired,
  onSetToday: PropTypes.func.isRequired
};

ModalDialog.defaultProps = {
  dialogContentClassName: ''
};

var ModalDialog$1 = withStyles(styles, { name: 'MuiPickersModal' })(ModalDialog);

var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);

var DomainPropTypes = {
  date: date
};

var reactTextMask = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t(React__default);}(commonjsGlobal,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t), o.loaded=!0, o.exports}var r={};return t.m=e, t.c=r, t.p="", t(0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}), t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);}Object.defineProperty(t,"__esModule",{value:!0}), t.conformToMask=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1, n.configurable=!0, "value"in n&&(n.writable=!0), Object.defineProperty(e,n.key,n);}}return function(t,r,n){return r&&e(t.prototype,r), n&&e(t,n), t}}(),f=r(2);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(f).default}});var c=r(11),d=n(c),p=r(9),h=n(p),v=r(5),y=n(v),m=function(e){function t(){var e;i(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return u.onBlur=u.onBlur.bind(u), u.onChange=u.onChange.bind(u), u}return u(t,e), s(t,[{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0, y.default)(l({inputElement:this.inputElement},e)), this.textMaskInputElement.update(t);}},{key:"componentDidMount",value:function(){this.initTextMask();}},{key:"componentDidUpdate",value:function(){this.initTextMask();}},{key:"render",value:function e(){var t=this,r=this.props,e=r.render,n=o(r,["render"]);delete n.mask, delete n.guide, delete n.pipe, delete n.placeholderChar, delete n.keepCharPositions, delete n.value, delete n.onBlur, delete n.onChange, delete n.showMask;var i=function(e){return t.inputElement=e};return e(i,l({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},n))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(), "function"==typeof this.props.onChange&&this.props.onChange(e);}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e);}}]), t}(d.default.Component);t.default=m, m.propTypes={mask:h.default.oneOfType([h.default.array,h.default.func,h.default.bool,h.default.shape({mask:h.default.oneOfType([h.default.array,h.default.func]),pipe:h.default.func})]).isRequired,guide:h.default.bool,value:h.default.oneOfType([h.default.string,h.default.number]),pipe:h.default.func,placeholderChar:h.default.string,keepCharPositions:h.default.bool,showMask:h.default.bool}, m.defaultProps={render:function(e,t){return d.default.createElement("input",l({ref:e},t))}};},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}), t.placeholderChar="_";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.guide,u=void 0===n||n,l=r.previousConformedValue,s=void 0===l?a:l,f=r.placeholderChar,c=void 0===f?i.placeholderChar:f,d=r.placeholder,p=void 0===d?(0, o.convertMaskToPlaceholder)(t,c):d,h=r.currentCaretPosition,v=r.keepCharPositions,y=u===!1&&void 0!==s,m=e.length,g=s.length,b=p.length,C=t.length,O=m-g,k=O>0,P=h+(k?-O:0),x=P+Math.abs(O);if(v===!0&&!k){for(var T=a,_=P;_<x;_++)p[_]===c&&(T+=c);e=e.slice(0,P)+T+e.slice(P,m);}for(var w=e.split(a).map(function(e,t){return{char:e,isNew:t>=P&&t<x}}),M=m-1;M>=0;M--){var j=w[M].char;if(j!==c){var S=M>=P&&g===C;j===p[S?M-O:M]&&w.splice(M,1);}}var E=a,R=!1;e:for(var V=0;V<b;V++){var N=p[V];if(N===c){if(w.length>0)for(;w.length>0;){var B=w.shift(),I=B.char,A=B.isNew;if(I===c&&y!==!0){E+=c;continue e}if(t[V].test(I)){if(v===!0&&A!==!1&&s!==a&&u!==!1&&k){for(var q=w.length,D=null,F=0;F<q;F++){var L=w[F];if(L.char!==c&&L.isNew===!1)break;if(L.char===c){D=F;break}}null!==D?(E+=I, w.splice(D,1)):V--;}else E+=I;continue e}R=!0;}y===!1&&(E+=p.substr(V,b));break}E+=N;}if(y&&k===!1){for(var J=null,U=0;U<E.length;U++)p[U]===c&&(J=U);E=null!==J?E.substr(0,J+1):a;}return{conformedValue:E,meta:{someCharsRejected:R}}}Object.defineProperty(t,"__esModule",{value:!0}), t.default=n;var o=r(3),i=r(1),a="";},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(t)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(t)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?t:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var t=[],r=void 0;r=e.indexOf(s), r!==-1;)t.push(r), e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}), t.convertMaskToPlaceholder=n, t.isString=o, t.isNumber=i, t.processCaretTraps=a;var u=r(1),l=[],s="[]";},function(e,t){function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,c=e.placeholderChar,d=e.placeholder,p=e.indexesOfPipedChars,h=void 0===p?n:p,v=e.caretTrapIndexes,y=void 0===v?n:v;if(0===l||!f.length)return 0;var m=f.length,g=r.length,b=d.length,C=s.length,O=m-g,k=O>0,P=0===g,x=O>1&&!k&&!P;if(x)return l;var T=k&&(r===s||s===d),_=0,w=void 0,M=void 0;if(T)_=l-O;else{var j=s.toLowerCase(),S=f.toLowerCase(),E=S.substr(0,l).split(o),R=E.filter(function(e){return j.indexOf(e)!==-1});M=R[R.length-1];var V=a.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,N=d.substr(0,R.length).split(o).filter(function(e){return e!==c}).length,B=N!==V,I=void 0!==a[R.length-1]&&void 0!==d[R.length-2]&&a[R.length-1]!==c&&a[R.length-1]!==d[R.length-1]&&a[R.length-1]===d[R.length-2];!k&&(B||I)&&V>0&&d.indexOf(M)>-1&&void 0!==f[l]&&(w=!0, M=f[l]);for(var A=h.map(function(e){return j[e]}),q=A.filter(function(e){return e===M}).length,D=R.filter(function(e){return e===M}).length,F=d.substr(0,d.indexOf(c)).split(o).filter(function(e,t){return e===M&&f[t]!==e}).length,L=F+D+q+(w?1:0),J=0,U=0;U<C;U++){var W=j[U];if(_=U+1, W===M&&J++, J>=L)break}}if(k){for(var H=_,Y=_;Y<=b;Y++)if(d[Y]===c&&(H=Y), d[Y]===c||y.indexOf(Y)!==-1||Y===b)return H}else if(w){for(var z=_-1;z>=0;z--)if(s[z]===M||y.indexOf(z)!==-1||0===z)return z}else for(var G=_;G>=0;G--)if(d[G-1]===c||y.indexOf(G)!==-1||0===G)return G}Object.defineProperty(t,"__esModule",{value:!0}), t.default=r;var n=[],o="";},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,c=n.guide,m=n.pipe,b=n.placeholderChar,C=void 0===b?h.placeholderChar:b,O=n.keepCharPositions,k=void 0!==O&&O,P=n.showMask,x=void 0!==P&&P;if("undefined"==typeof r&&(r=o.value), r!==t.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===g&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe, s=s.mask);var T=void 0,_=void 0;if(s instanceof Array&&(T=(0, p.convertMaskToPlaceholder)(s,C)), s!==!1){var w=a(r),M=o.selectionEnd,j=t.previousConformedValue,S=t.previousPlaceholder,E=void 0;if(("undefined"==typeof s?"undefined":l(s))===v){if(_=s(w,{currentCaretPosition:M,previousConformedValue:j,placeholderChar:C}), _===!1)return;var R=(0, p.processCaretTraps)(_),V=R.maskWithoutCaretTraps,N=R.indexes;_=V, E=N, T=(0, p.convertMaskToPlaceholder)(_,C);}else _=s;var B={previousConformedValue:j,guide:c,placeholderChar:C,pipe:m,placeholder:T,currentCaretPosition:M,keepCharPositions:k},I=(0, d.default)(w,_,B),A=I.conformedValue,q=("undefined"==typeof m?"undefined":l(m))===v,D={};q&&(D=m(A,u({rawValue:w},B)), D===!1?D={value:j,rejected:!0}:(0, p.isString)(D)&&(D={value:D}));var F=q?D.value:A,L=(0, f.default)({previousConformedValue:j,previousPlaceholder:S,conformedValue:F,placeholder:T,rawValue:w,currentCaretPosition:M,placeholderChar:C,indexesOfPipedChars:D.indexesOfPipedChars,caretTrapIndexes:E}),J=F===T&&0===L,U=x?T:y,W=J?U:F;t.previousConformedValue=W, t.previousPlaceholder=T, o.value!==W&&(o.value=W, i(o,L));}}}}}function i(e,t){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(t,t,m)},0):e.setSelectionRange(t,t,m));}function a(e){if((0, p.isString)(e))return e;if((0, p.isNumber)(e))return String(e);if(void 0===e||null===e)return y;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var s=r(4),f=n(s),c=r(2),d=n(c),p=r(3),h=r(1),v="function",y="",m="none",g="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout;},function(e,t){function r(e){return function(){return e}}var n=function(){};n.thatReturns=r, n.thatReturnsFalse=r(!1), n.thatReturnsTrue=r(!0), n.thatReturnsNull=r(null), n.thatReturnsThis=function(){return this}, n.thatReturnsArgument=function(e){return e}, e.exports=n;},function(e,t,r){function n(e,t,r,n,i,a,u,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,i,a,u,l],c=0;s=new Error(t.replace(/%s/g,function(){return f[c++]})), s.name="Invariant Violation";}throw s.framesToPop=1, s}}e.exports=n;},function(e,t,r){var n=r(6),o=r(7),i=r(10);e.exports=function(){function e(e,t,r,n,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=n, r.PropTypes=r, r};},function(e,t,r){e.exports=r(8)();},function(e,t){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r;},function(t,r){t.exports=e;}])});
});

var MaskedInput$1 = unwrapExports(reactTextMask);
var reactTextMask_1 = reactTextMask.reactTextMask;

var Input = function (_PureComponent) {
  inherits$2(Input, _PureComponent);

  function Input() {
    classCallCheck$2(this, Input);
    return possibleConstructorReturn$2(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  createClass$2(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inputRef = _props.inputRef,
          props = objectWithoutProperties$2(_props, ['inputRef']);

      return this.props.mask ? React__default.createElement(MaskedInput$1, _extends({}, props, { ref: inputRef })) : React__default.createElement('input', _extends({}, props, { ref: inputRef }));
    }
  }]);
  return Input;
}(React.PureComponent);

Input.propTypes = {
  mask: PropTypes.any,
  inputRef: PropTypes.func.isRequired
};
Input.defaultProps = {
  mask: undefined
};

var _React$createContext = React__default.createContext();
var Consumer = _React$createContext.Consumer;
var Provider = _React$createContext.Provider;

var MuiPickersContextConsumer = Consumer;

var MuiPickersUtilsProvider = function (_PureComponent) {
  inherits$2(MuiPickersUtilsProvider, _PureComponent);

  function MuiPickersUtilsProvider() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, MuiPickersUtilsProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = MuiPickersUtilsProvider.__proto__ || Object.getPrototypeOf(MuiPickersUtilsProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      utils: null
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(MuiPickersUtilsProvider, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        Provider,
        { value: this.state.utils },
        ' ',
        this.props.children,
        ' '
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(_ref2) {
      var Utils = _ref2.utils,
          locale = _ref2.locale,
          moment = _ref2.moment;

      return {
        utils: new Utils({ locale: locale, moment: moment })
      };
    }
  }]);
  return MuiPickersUtilsProvider;
}(React.PureComponent);

MuiPickersUtilsProvider.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  utils: PropTypes.func.isRequired,
  locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)]).isRequired,
  moment: PropTypes.func
};
MuiPickersUtilsProvider.defaultProps = {
  locale: undefined,
  moment: undefined
};

var WithUtils = function WithUtils() {
  return function (Component$$1) {
    var withUtils = function withUtils(_ref) {
      var pickerRef = _ref.pickerRef,
          props = objectWithoutProperties$2(_ref, ['pickerRef']);
      return React__default.createElement(
        MuiPickersContextConsumer,
        null,
        function (utils) {
          return React__default.createElement(Component$$1, _extends({ ref: pickerRef, utils: utils }, props));
        }
      );
    };

    withUtils.displayName = 'WithUtils(' + (Component$$1.displayName || Component$$1.name) + ')';

    withUtils.propTypes = {
      pickerRef: PropTypes.func
    };

    withUtils.defaultProps = {
      pickerRef: undefined
    };

    return withUtils;
  };
};

/* eslint-disable react/sort-comp */
var DateTextField = function (_PureComponent) {
  inherits$2(DateTextField, _PureComponent);

  function DateTextField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, DateTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = DateTextField.__proto__ || Object.getPrototypeOf(DateTextField)).call.apply(_ref, [this].concat(args))), _this), _this.getDisplayDate = function (props) {
      var utils = props.utils,
          value = props.value,
          format = props.format,
          invalidLabel = props.invalidLabel,
          emptyLabel = props.emptyLabel,
          labelFunc = props.labelFunc;


      var isEmpty = value === null;
      var date = utils.date(value);

      if (labelFunc) {
        return labelFunc(isEmpty ? null : date, invalidLabel);
      }

      if (isEmpty) {
        return emptyLabel;
      }

      return utils.isValid(date) ? utils.format(date, format) : invalidLabel;
    }, _this.getError = function (value) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props;
      var utils = props.utils,
          maxDate = props.maxDate,
          minDate = props.minDate,
          disablePast = props.disablePast,
          disableFuture = props.disableFuture,
          maxDateMessage = props.maxDateMessage,
          minDateMessage = props.minDateMessage,
          invalidDateMessage = props.invalidDateMessage;


      if (!utils.isValid(value)) {
        // if null - do not show error
        if (utils.isNull(value)) {
          return '';
        }

        return invalidDateMessage;
      }

      if (maxDate && utils.isAfter(value, maxDate) || disableFuture && utils.isAfter(value, utils.endOfDay(utils.date()))) {
        return maxDateMessage;
      }

      if (minDate && utils.isBefore(value, minDate) || disablePast && utils.isBefore(value, utils.startOfDay(utils.date()))) {
        return minDateMessage;
      }

      return '';
    }, _this.updateState = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      return {
        value: props.value,
        displayValue: _this.getDisplayDate(props),
        error: _this.getError(props.utils.date(props.value), props)
      };
    }, _this.state = _this.updateState(), _this.handleBlur = function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, _this.handleChange = function (e) {
      var _this$props = _this.props,
          clearable = _this$props.clearable,
          onClear = _this$props.onClear,
          utils = _this$props.utils,
          format = _this$props.format,
          onError = _this$props.onError;


      if (e.target.value === '') {
        if (_this.props.value === null) {
          _this.setState(_this.updateState());
        } else if (clearable && onClear) {
          onClear();
        }

        return;
      }

      var oldValue = utils.date(_this.state.value);
      var newValue = utils.parse(e.target.value, format);

      var error = _this.getError(newValue);

      _this.setState({
        displayValue: e.target.value,
        value: error ? newValue : oldValue,
        error: error
      }, function () {
        if (!error && utils.format(newValue, 'LLLL') !== utils.format(oldValue, 'LLLL')) {
          _this.props.onChange(newValue);
        }

        if (error && onError) {
          onError(newValue, error);
        }
      });
    }, _this.handleFocus = function (e) {
      e.stopPropagation();
      e.preventDefault();
      var keyboard = _this.props.keyboard;


      if (keyboard) {
        return;
      }

      _this.openPicker(e);
    }, _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' && !_this.props.disableOpenOnEnter) {
        _this.openPicker(e);
      }
    }, _this.openPicker = function (e) {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;


      if (!disabled) {
        onClick(e);
      }
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(DateTextField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.state.value || nextProps.format !== this.props.format || nextProps.maxDate !== this.props.maxDate || nextProps.minDate !== this.props.minDate || nextProps.emptyLabel !== this.props.emptyLabel || nextProps.utils !== this.props.utils) {
        this.setState(this.updateState(nextProps));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          utils = _props.utils,
          format = _props.format,
          classes = _props.classes,
          disabled = _props.disabled,
          onClick = _props.onClick,
          invalidLabel = _props.invalidLabel,
          invalidDateMessage = _props.invalidDateMessage,
          clearable = _props.clearable,
          onClear = _props.onClear,
          emptyLabel = _props.emptyLabel,
          labelFunc = _props.labelFunc,
          keyboard = _props.keyboard,
          value = _props.value,
          mask = _props.mask,
          InputProps = _props.InputProps,
          keyboardIcon = _props.keyboardIcon,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          maxDateMessage = _props.maxDateMessage,
          minDateMessage = _props.minDateMessage,
          TextFieldComponent = _props.TextFieldComponent,
          InputAdornmentProps = _props.InputAdornmentProps,
          adornmentPosition = _props.adornmentPosition,
          disableOpenOnEnter = _props.disableOpenOnEnter,
          other = objectWithoutProperties$2(_props, ['utils', 'format', 'classes', 'disabled', 'onClick', 'invalidLabel', 'invalidDateMessage', 'clearable', 'onClear', 'emptyLabel', 'labelFunc', 'keyboard', 'value', 'mask', 'InputProps', 'keyboardIcon', 'maxDate', 'minDate', 'disablePast', 'disableFuture', 'maxDateMessage', 'minDateMessage', 'TextFieldComponent', 'InputAdornmentProps', 'adornmentPosition', 'disableOpenOnEnter']);
      var _state = this.state,
          displayValue = _state.displayValue,
          error = _state.error;

      var localInputProps = {
        inputComponent: Input,
        inputProps: {
          mask: !keyboard ? null : mask,
          readOnly: !keyboard
        },
        className: classes.input
      };

      if (keyboard) {
        localInputProps[adornmentPosition + 'Adornment'] = React__default.createElement(
          InputAdornment,
          _extends({ position: adornmentPosition }, InputAdornmentProps, { disabled: disabled }),
          React__default.createElement(
            IconButton,
            { onClick: this.openPicker },
            ' ',
            React__default.createElement(
              Icon,
              null,
              ' ',
              keyboardIcon,
              ' '
            ),
            ' '
          )
        );
      }

      return React__default.createElement(TextFieldComponent, _extends({
        onClick: this.handleFocus,
        error: !!error,
        helperText: error,
        onKeyPress: this.handleKeyPress,
        onBlur: this.handleBlur,
        disabled: disabled,
        value: displayValue
      }, other, {
        onChange: this.handleChange,
        InputProps: _extends({}, localInputProps, InputProps)
      }));
    }
  }]);
  return DateTextField;
}(React.PureComponent);

DateTextField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  clearable: PropTypes.bool,
  utils: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  InputProps: PropTypes.shape(),
  /** Input mask, used in keyboard mode read more <a href="https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme">here</a> */
  mask: PropTypes.any,
  /** Error message, shown if date is less then minimal date */
  minDateMessage: PropTypes.string,
  /** Error message, shown if date is more then maximal date */
  maxDateMessage: PropTypes.string,
  /** Error message, shown if date is invalid */
  invalidLabel: PropTypes.string,
  /** Message displaying in text field, if null passed */
  emptyLabel: PropTypes.string,
  /** Dynamic label generation function (date, invalidLabel) => string */
  labelFunc: PropTypes.func,
  /** On/off manual keyboard input mode */
  keyboard: PropTypes.bool,
  /** Icon displayed for open picker button in keyboard mode */
  keyboardIcon: PropTypes.node,
  /** enables/disable automatic opening of the picker when the user clicks enter */
  disableOpenOnEnter: PropTypes.bool,
  /** Message, appearing when date cannot be parsed */
  invalidDateMessage: PropTypes.string,
  /** Component that should replace the default Material-UI TextField */
  TextFieldComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** Props to pass to keyboard input adornment */
  InputAdornmentProps: PropTypes.object,
  /** Specifies position of keyboard button adornment */
  adornmentPosition: PropTypes.oneOf(['start', 'end']),
  /** Callback firing when date that applied in the keyboard is invalid  */
  onError: PropTypes.func
};
DateTextField.defaultProps = {
  disabled: false,
  invalidLabel: 'Unknown',
  emptyLabel: '',
  value: new Date(),
  labelFunc: undefined,
  format: undefined,
  InputProps: undefined,
  keyboard: false,
  mask: undefined,
  keyboardIcon: 'event',
  disableOpenOnEnter: false,
  invalidDateMessage: 'Invalid Date Format',
  clearable: false,
  onClear: undefined,
  disablePast: false,
  disableFuture: false,
  onError: undefined,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  TextFieldComponent: TextField,
  InputAdornmentProps: {},
  adornmentPosition: 'end'
};
var styles$1 = {
  input: {
    alignItems: 'flex-end'
  }
};

var DateTextField$1 = withStyles(styles$1)(WithUtils()(DateTextField));

var ModalWrapper = function (_PureComponent) {
  inherits$2(ModalWrapper, _PureComponent);

  function ModalWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, ModalWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleKeyDown = function (event) {
      switch (keycode(event)) {
        case 'enter':
          _this.handleAccept();
          break;
        default:
          // if keycode is not handled, stop execution
          return;
      }

      // if event was handled prevent other side effects
      event.preventDefault();
    }, _this.handleSetTodayDate = function () {
      if (_this.props.onSetToday) {
        _this.props.onSetToday();
      }
    }, _this.open = function () {
      _this.setState({ open: true });
      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    }, _this.close = function () {
      _this.setState({ open: false });
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    }, _this.handleAccept = function () {
      _this.close();
      if (_this.props.onAccept) {
        _this.props.onAccept();
      }
    }, _this.handleDismiss = function () {
      _this.close();
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
    }, _this.handleClear = function () {
      _this.close();
      if (_this.props.onClear) {
        _this.props.onClear();
      }
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(ModalWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          children = _props.children,
          dialogContentClassName = _props.dialogContentClassName,
          onAccept = _props.onAccept,
          onDismiss = _props.onDismiss,
          invalidLabel = _props.invalidLabel,
          labelFunc = _props.labelFunc,
          okLabel = _props.okLabel,
          cancelLabel = _props.cancelLabel,
          clearLabel = _props.clearLabel,
          clearable = _props.clearable,
          todayLabel = _props.todayLabel,
          showTodayButton = _props.showTodayButton,
          onOpen = _props.onOpen,
          onClose = _props.onClose,
          onSetToday = _props.onSetToday,
          other = objectWithoutProperties$2(_props, ['value', 'format', 'children', 'dialogContentClassName', 'onAccept', 'onDismiss', 'invalidLabel', 'labelFunc', 'okLabel', 'cancelLabel', 'clearLabel', 'clearable', 'todayLabel', 'showTodayButton', 'onOpen', 'onClose', 'onSetToday']);


      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(DateTextField$1, _extends({
          value: value,
          format: format,
          onClick: this.open
          // onFocus={this.togglePicker} <- Currently not properly works with .blur() on TextField
          , invalidLabel: invalidLabel,
          labelFunc: labelFunc,
          clearable: clearable
        }, other)),
        React__default.createElement(
          ModalDialog$1,
          {
            open: this.state.open,
            onKeyDown: this.handleKeyDown,
            onClear: this.handleClear,
            onAccept: this.handleAccept,
            onDismiss: this.handleDismiss,
            onSetToday: this.handleSetTodayDate,
            dialogContentClassName: dialogContentClassName,
            clearLabel: clearLabel,
            todayLabel: todayLabel,
            okLabel: okLabel,
            cancelLabel: cancelLabel,
            clearable: clearable,
            showTodayButton: showTodayButton
          },
          children
        )
      );
    }
  }]);
  return ModalWrapper;
}(React.PureComponent);

ModalWrapper.propTypes = {
  /** Picker value */
  value: DomainPropTypes.date,
  /** Format string */
  invalidLabel: PropTypes.string,
  /** Function for dynamic rendering label (date, invalidLabel) => string */
  labelFunc: PropTypes.func,
  /** "OK" label message */
  okLabel: PropTypes.string,
  /** "Cancel" label message */
  cancelLabel: PropTypes.string,
  /** "Clear" label message */
  clearLabel: PropTypes.string,
  /** If true clear button will be displayed */
  clearable: PropTypes.bool,
  /** "Today" label message */
  todayLabel: PropTypes.string,
  /** If true today button will be displayed
   * <b>Note*</b> that clear button has higher priority
   */
  showTodayButton: PropTypes.bool,
  /** On open callback */
  onOpen: PropTypes.func,
  /** On close callback */
  onClose: PropTypes.func,
  /** Format string */
  format: PropTypes.string,
  onAccept: PropTypes.func,
  onDismiss: PropTypes.func,
  onClear: PropTypes.func,
  onSetToday: PropTypes.func,
  children: PropTypes.node.isRequired,
  dialogContentClassName: PropTypes.string
};
ModalWrapper.defaultProps = {
  dialogContentClassName: '',
  invalidLabel: undefined,
  value: new Date(),
  labelFunc: undefined,
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  todayLabel: 'Today',
  clearable: false,
  showTodayButton: false,
  format: undefined,
  onAccept: undefined,
  onDismiss: undefined,
  onClear: undefined,
  onOpen: undefined,
  onClose: undefined,
  onSetToday: undefined
};

var CalendarHeader = function CalendarHeader(props) {
  var classes = props.classes,
      theme = props.theme,
      currentMonth = props.currentMonth,
      onMonthChange = props.onMonthChange,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon,
      disablePrevMonth = props.disablePrevMonth,
      disableNextMonth = props.disableNextMonth,
      utils = props.utils;


  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth));
  };
  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth));
  };

  return React__default.createElement(
    'div',
    null,
    React__default.createElement(
      'div',
      { className: classes.switchHeader },
      React__default.createElement(
        IconButton,
        { disabled: disablePrevMonth, onClick: selectPreviousMonth },
        React__default.createElement(
          Icon,
          null,
          rtl ? rightArrowIcon : leftArrowIcon
        )
      ),
      React__default.createElement(
        Typography,
        { variant: 'body1' },
        utils.getCalendarHeaderText(currentMonth)
      ),
      React__default.createElement(
        IconButton,
        { disabled: disableNextMonth, onClick: selectNextMonth },
        React__default.createElement(
          Icon,
          null,
          rtl ? leftArrowIcon : rightArrowIcon
        )
      )
    ),
    React__default.createElement(
      'div',
      { className: classes.daysHeader },
      utils.getWeekdays().map(function (day, index) {
        return React__default.createElement(
          Typography
          // eslint-disable-next-line react/no-array-index-key
          ,
          { key: index,
            variant: 'caption',
            className: classes.dayLabel
          },
          day
        );
      })
    )
  );
};

CalendarHeader.propTypes = {
  currentMonth: PropTypes.object.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  disablePrevMonth: PropTypes.bool,
  disableNextMonth: PropTypes.bool,
  utils: PropTypes.object.isRequired
};

CalendarHeader.defaultProps = {
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  disablePrevMonth: false,
  disableNextMonth: false
};

var styles$3 = function styles(theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.unit
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 16
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
};

var CalendarHeader$1 = withStyles(styles$3, { withTheme: true, name: 'MuiPickersCalendarHeader' })(WithUtils()(CalendarHeader));

var DayWrapper = function (_PureComponent) {
  inherits$2(DayWrapper, _PureComponent);

  function DayWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, DayWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = DayWrapper.__proto__ || Object.getPrototypeOf(DayWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onSelect(_this.props.value);
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(DayWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          value = _props.value,
          dayInCurrentMonth = _props.dayInCurrentMonth,
          disabled = _props.disabled,
          onSelect = _props.onSelect,
          other = objectWithoutProperties$2(_props, ['children', 'value', 'dayInCurrentMonth', 'disabled', 'onSelect']);

      return React__default.createElement(
        'div',
        _extends({
          onClick: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          onKeyPress: dayInCurrentMonth && !disabled ? this.handleClick : undefined,
          role: 'presentation'
        }, other),
        children
      );
    }
  }]);
  return DayWrapper;
}(React.PureComponent);

DayWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  dayInCurrentMonth: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};
DayWrapper.defaultProps = {
  dayInCurrentMonth: true,
  disabled: false
};

var Day = function (_PureComponent) {
  inherits$2(Day, _PureComponent);

  function Day() {
    classCallCheck$2(this, Day);
    return possibleConstructorReturn$2(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  createClass$2(Day, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          disabled = _props.disabled,
          hidden = _props.hidden,
          current = _props.current,
          selected = _props.selected,
          other = objectWithoutProperties$2(_props, ['children', 'classes', 'disabled', 'hidden', 'current', 'selected']);


      var className = classnames(classes.day, (_classnames = {}, defineProperty$5(_classnames, classes.hidden, hidden), defineProperty$5(_classnames, classes.current, current), defineProperty$5(_classnames, classes.selected, selected), defineProperty$5(_classnames, classes.disabled, disabled), _classnames));

      return React__default.createElement(
        IconButton,
        _extends({
          className: className,
          tabIndex: hidden || disabled ? -1 : 0
        }, other),
        React__default.createElement(
          'span',
          null,
          ' ',
          children,
          ' '
        )
      );
    }
  }]);
  return Day;
}(React.PureComponent);

Day.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  current: PropTypes.bool,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  selected: PropTypes.bool
};
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};


var styles$4 = function styles(theme) {
  return {
    day: {
      width: 36,
      height: 36,
      fontSize: theme.typography.caption.fontSize,
      margin: '0 2px',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      color: theme.palette.primary.main,
      fontWeight: 600
    },
    selected: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '&:hover': {
        backgroundColor: theme.palette.primary.main
      }
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
};

var Day$1 = withStyles(styles$4, { name: 'MuiPickersDay' })(Day);

/* eslint-disable import/prefer-default-export */
var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;

  var now = utils.date();

  if ((disableFuture || disablePast) && !shouldDisableDate(now)) {
    return now;
  }

  var diffFromMaxDate = Math.abs(utils.getDiff(date, maxDate));
  var diffFromMinDate = Math.abs(utils.getDiff(date, minDate));

  return diffFromMaxDate < diffFromMinDate ? utils.date(maxDate) : utils.date(minDate);
};

/* eslint-disable no-unused-expressions */
var Calendar = function (_Component) {
  inherits$2(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMonth: _this.props.utils.getStartOfMonth(_this.props.date)
    }, _this.onDateSelect = function (day) {
      var _this$props = _this.props,
          date = _this$props.date,
          utils = _this$props.utils;


      var withHours = utils.setHours(day, utils.getHours(date));
      var withMinutes = utils.setMinutes(withHours, utils.getMinutes(date));

      _this.props.onChange(withMinutes);
    }, _this.handleChangeMonth = function (newMonth) {
      _this.setState({ currentMonth: newMonth });
    }, _this.validateMinMaxDate = function (day) {
      var _this$props2 = _this.props,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate,
          utils = _this$props2.utils;


      return minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate));
    }, _this.shouldDisablePrevMonth = function () {
      var _this$props3 = _this.props,
          utils = _this$props3.utils,
          disablePast = _this$props3.disablePast,
          minDate = _this$props3.minDate;

      var now = utils.date();
      return !utils.isBefore(utils.getStartOfMonth(disablePast && utils.isAfter(now, minDate) ? now : utils.date(minDate)), _this.state.currentMonth);
    }, _this.shouldDisableNextMonth = function () {
      var _this$props4 = _this.props,
          utils = _this$props4.utils,
          disableFuture = _this$props4.disableFuture,
          maxDate = _this$props4.maxDate;

      var now = utils.date();
      return !utils.isAfter(utils.getStartOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : utils.date(maxDate)), _this.state.currentMonth);
    }, _this.shouldDisableDate = function (day) {
      var _this$props5 = _this.props,
          disablePast = _this$props5.disablePast,
          disableFuture = _this$props5.disableFuture,
          shouldDisableDate = _this$props5.shouldDisableDate,
          utils = _this$props5.utils;


      return disableFuture && utils.isAfterDay(day, utils.date()) || disablePast && utils.isBeforeDay(day, utils.date()) || _this.validateMinMaxDate(day) || shouldDisableDate(day);
    }, _this.moveToDay = function (day) {
      if (day && !_this.shouldDisableDate(day)) {
        _this.props.onChange(day);
      }
    }, _this.handleKeyDown = function (event) {
      var _this$props6 = _this.props,
          theme = _this$props6.theme,
          date = _this$props6.date,
          utils = _this$props6.utils;


      switch (keycode(event)) {
        case 'up':
          _this.moveToDay(utils.addDays(date, -7));
          break;
        case 'down':
          _this.moveToDay(utils.addDays(date, 7));
          break;
        case 'left':
          theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, -1)) : _this.moveToDay(utils.addDays(date, 1));
          break;
        case 'right':
          theme.direction === 'ltr' ? _this.moveToDay(utils.addDays(date, 1)) : _this.moveToDay(utils.addDays(date, -1));
          break;
        default:
          // if keycode is not handled, stop execution
          return;
      }

      // if event was handled prevent other side effects (e.g. page scroll)
      event.preventDefault();
    }, _this.renderWeeks = function () {
      var utils = _this.props.utils;
      var currentMonth = _this.state.currentMonth;

      var weeks = utils.getWeekArray(currentMonth);

      return weeks.map(function (week) {
        return React__default.createElement(
          'div',
          {
            key: 'week-' + week[0].toString(),
            className: _this.props.classes.week
          },
          _this.renderDays(week)
        );
      });
    }, _this.renderDays = function (week) {
      var _this$props7 = _this.props,
          date = _this$props7.date,
          renderDay = _this$props7.renderDay,
          utils = _this$props7.utils;


      var selectedDate = utils.startOfDay(date);
      var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
      var now = utils.date();

      return week.map(function (day) {
        var disabled = _this.shouldDisableDate(day);
        var dayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;

        var dayComponent = React__default.createElement(
          Day$1,
          {
            current: utils.isSameDay(day, now),
            hidden: !dayInCurrentMonth,
            disabled: disabled,
            selected: utils.isSameDay(selectedDate, day)
          },
          utils.getDayText(day)
        );

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, dayInCurrentMonth, dayComponent);
        }

        return React__default.createElement(
          DayWrapper,
          {
            key: day.toString(),
            value: day,
            dayInCurrentMonth: dayInCurrentMonth,
            disabled: disabled,
            onSelect: _this.onDateSelect
          },
          dayComponent
        );
      });
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(Calendar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          date = _props.date,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          utils = _props.utils,
          disableFuture = _props.disableFuture,
          disablePast = _props.disablePast;


      if (this.shouldDisableDate(date)) {
        this.onDateSelect(findClosestEnabledDate({
          date: date,
          utils: utils,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          shouldDisableDate: this.shouldDisableDate
        }));
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        currentMonth: this.props.utils.getStartOfMonth(nextProps.date)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var currentMonth = this.state.currentMonth;
      var _props2 = this.props,
          classes = _props2.classes,
          utils = _props2.utils;


      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(EventListener, { target: 'window', onKeyDown: this.handleKeyDown }),
        React__default.createElement(CalendarHeader$1, {
          currentMonth: currentMonth,
          onMonthChange: this.handleChangeMonth,
          leftArrowIcon: this.props.leftArrowIcon,
          rightArrowIcon: this.props.rightArrowIcon,
          disablePrevMonth: this.shouldDisablePrevMonth(),
          disableNextMonth: this.shouldDisableNextMonth(),
          utils: utils
        }),
        React__default.createElement(
          'div',
          { className: classes.calendar },
          this.renderWeeks()
        )
      );
    }
  }]);
  return Calendar;
}(React.Component);

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  theme: PropTypes.object.isRequired,
  shouldDisableDate: PropTypes.func,
  utils: PropTypes.object.isRequired
};
Calendar.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disablePast: false,
  disableFuture: false,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  shouldDisableDate: function shouldDisableDate() {
    return false;
  }
};
var styles$2 = function styles(theme) {
  return {
    calendar: {
      height: 36 * 6,
      marginTop: theme.spacing.unit * 1.5
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

var Calendar$1 = withStyles(styles$2, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(WithUtils()(Calendar));

var Year = function (_PureComponent) {
  inherits$2(Year, _PureComponent);

  function Year() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, Year);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = Year.__proto__ || Object.getPrototypeOf(Year)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onSelect(_this.props.value);
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(Year, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          classes = _props.classes,
          selected = _props.selected,
          disabled = _props.disabled,
          value = _props.value,
          children = _props.children,
          other = objectWithoutProperties$2(_props, ['classes', 'selected', 'disabled', 'value', 'children']);


      return React__default.createElement(
        Typography,
        _extends({
          role: 'button',
          component: 'div',
          className: classnames(classes.root, (_classnames = {}, defineProperty$5(_classnames, classes.selected, selected), defineProperty$5(_classnames, classes.disabled, disabled), _classnames)),
          tabIndex: disabled ? -1 : 0,
          onClick: this.handleClick,
          onKeyPress: this.handleClick,
          color: selected ? 'primary' : 'default',
          variant: selected ? 'headline' : 'subheading'
        }, other),
        children
      );
    }
  }]);
  return Year;
}(React.PureComponent);

Year.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  value: PropTypes.any.isRequired
};
Year.defaultProps = {
  selected: false,
  disabled: false
};
var styles$6 = function styles(theme) {
  return {
    root: {
      height: theme.spacing.unit * 5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    selected: {
      margin: '10px 0',
      fontWeight: theme.typography.fontWeightMedium
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
};

var Year$1 = withStyles(styles$6, { name: 'MuiPickersYear' })(Year);

var YearSelection = function (_PureComponent) {
  inherits$2(YearSelection, _PureComponent);

  function YearSelection() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, YearSelection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = YearSelection.__proto__ || Object.getPrototypeOf(YearSelection)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.scrollToCurrentYear();
    }, _this.onYearSelect = function (year) {
      var _this$props = _this.props,
          date = _this$props.date,
          onChange = _this$props.onChange,
          utils = _this$props.utils;


      var newDate = utils.setYear(date, year);
      onChange(newDate);
    }, _this.getSelectedYearRef = function (ref) {
      _this.selectedYearRef = ref;
    }, _this.scrollToCurrentYear = function () {
      var animateYearScrolling = _this.props.animateYearScrolling;

      var currentYearElement = reactDom.findDOMNode(_this.selectedYearRef);

      if (currentYearElement) {
        currentYearElement.scrollIntoView({
          behavior: animateYearScrolling ? 'smooth' : 'auto'
        });
      }
    }, _this.selectedYearRef = undefined, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(YearSelection, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          date = _props.date,
          classes = _props.classes,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          utils = _props.utils;

      var currentYear = utils.getYear(date);

      return React__default.createElement(
        'div',
        { className: classes.container },
        utils.getYearRange(minDate, maxDate).map(function (year) {
          var yearNumber = utils.getYear(year);
          var selected = yearNumber === currentYear;

          return React__default.createElement(
            Year$1,
            {
              selected: selected,
              disabled: disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()),
              value: yearNumber,
              key: utils.getYearText(year),
              onSelect: _this2.onYearSelect,
              ref: selected ? _this2.getSelectedYearRef : undefined
            },
            utils.getYearText(year)
          );
        })
      );
    }
  }]);
  return YearSelection;
}(React.PureComponent);

YearSelection.propTypes = {
  date: PropTypes.shape({}).isRequired,
  minDate: DomainPropTypes.date.isRequired,
  maxDate: DomainPropTypes.date.isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool.isRequired,
  disableFuture: PropTypes.bool.isRequired,
  animateYearScrolling: PropTypes.bool,
  utils: PropTypes.object.isRequired
};
YearSelection.defaultProps = {
  animateYearScrolling: false
};
var styles$5 = {
  container: {
    maxHeight: 300,
    overflowY: 'auto',
    justifyContent: 'center'
  }
};

var YearSelection$1 = withStyles(styles$5, { name: 'MuiPickersYearSelection' })(WithUtils()(YearSelection));

var PickerToolbar = function PickerToolbar(props) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      other = objectWithoutProperties$2(props, ['children', 'className', 'classes']);


  return React__default.createElement(
    Toolbar,
    _extends({ className: classnames(classes.toolbar, className) }, other),
    children
  );
};

PickerToolbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

PickerToolbar.defaultProps = {
  className: ''
};

var styles$7 = function styles(theme) {
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 100,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    }
  };
};

var PickerToolbar$1 = withStyles(styles$7, { name: 'MuiPickersToolbar' })(PickerToolbar);

var ToolbarButton = function ToolbarButton(props) {
  var classes = props.classes,
      selected = props.selected,
      label = props.label,
      className = props.className,
      other = objectWithoutProperties$2(props, ['classes', 'selected', 'label', 'className']);


  return React__default.createElement(
    Typography,
    _extends({
      className: classnames(classes.toolbarBtn, className, defineProperty$5({}, classes.toolbarBtnSelected, selected))
    }, other),
    label
  );
};

ToolbarButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

ToolbarButton.defaultProps = {
  className: ''
};

var styles$8 = function styles(theme) {
  return {
    toolbarBtn: {
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 0.54)'
    },
    toolbarBtnSelected: {
      color: theme.palette.common.white
    }
  };
};

var ToolbarButton$1 = withStyles(styles$8, { name: 'MuiPickersToolbarButton' })(ToolbarButton);

var DatePicker = function (_PureComponent) {
  inherits$2(DatePicker, _PureComponent);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showYearSelection: _this.props.openToYearSelection
    }, _this.handleYearSelect = function (date) {
      _this.props.onChange(date, false);
      _this.openCalendar();
    }, _this.openYearSelection = function () {
      _this.setState({ showYearSelection: true });
    }, _this.openCalendar = function () {
      _this.setState({ showYearSelection: false });
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(DatePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          onChange = _props.onChange,
          animateYearScrolling = _props.animateYearScrolling,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          shouldDisableDate = _props.shouldDisableDate;
      var showYearSelection = this.state.showYearSelection;


      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(
          PickerToolbar$1,
          null,
          React__default.createElement(ToolbarButton$1, {
            variant: 'subheading',
            onClick: this.openYearSelection,
            selected: showYearSelection,
            label: utils.getYearText(this.date)
          }),
          React__default.createElement(ToolbarButton$1, {
            variant: 'display1',
            onClick: this.openCalendar,
            selected: !showYearSelection,
            label: utils.getDatePickerHeaderText(this.date)
          })
        ),
        this.props.children,
        showYearSelection ? React__default.createElement(YearSelection$1, {
          date: this.date,
          onChange: this.handleYearSelect,
          minDate: this.minDate,
          maxDate: this.maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          animateYearScrolling: animateYearScrolling,
          utils: utils
        }) : React__default.createElement(Calendar$1, {
          date: this.date,
          onChange: onChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: this.minDate,
          maxDate: this.maxDate,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          utils: utils,
          shouldDisableDate: shouldDisableDate
        })
      );
    }
  }, {
    key: 'date',
    get: function get$$1() {
      return this.props.utils.startOfDay(this.props.date);
    }
  }, {
    key: 'minDate',
    get: function get$$1() {
      return this.props.utils.date(this.props.minDate);
    }
  }, {
    key: 'maxDate',
    get: function get$$1() {
      return this.props.utils.date(this.props.maxDate);
    }
  }]);
  return DatePicker;
}(React.PureComponent);

DatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  onChange: PropTypes.func.isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  openToYearSelection: PropTypes.bool,
  children: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.object.isRequired,
  shouldDisableDate: PropTypes.func
};
DatePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disablePast: false,
  disableFuture: false,
  animateYearScrolling: undefined,
  openToYearSelection: false,
  children: null,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  shouldDisableDate: undefined
};
var DatePicker$1 = WithUtils()(DatePicker);

/* eslint-disable react/sort-comp */
/* eslint-disable react/require-default-props */

var PickerBase = function (_PureComponent) {
  inherits$2(PickerBase, _PureComponent);

  function PickerBase() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, PickerBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = PickerBase.__proto__ || Object.getPrototypeOf(PickerBase)).call.apply(_ref, [this].concat(args))), _this), _this.getValidDateOrCurrent = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;
      var utils = props.utils,
          value = props.value;

      var date = utils.date(value);

      return utils.isValid(date) && value !== null ? date : utils.date();
    }, _this.state = {
      date: _this.getValidDateOrCurrent()
    }, _this.getFormat = function () {
      if (_this.props.format || _this.props.labelFunc) {
        return _this.props.format;
      }

      return _this.props.ampm ? _this.default12hFormat : _this.default24hFormat;
    }, _this.getRef = function (node) {
      _this.wrapper = node;
    }, _this.handleClear = function () {
      _this.props.onChange(null);
    }, _this.handleAccept = function () {
      _this.props.onChange(_this.state.date);
    }, _this.handleDismiss = function () {
      _this.setState({ date: _this.getValidDateOrCurrent(_this.props) });
    }, _this.handleChange = function (date) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({ date: date }, function () {
        if (isFinish && _this.props.autoOk) {
          _this.handleAccept();
          _this.wrapper.close();
        }
      });
    }, _this.handleTextFieldChange = function (date) {
      if (date === null) {
        _this.handleClear();
      } else {
        _this.setState({ date: date }, _this.handleAccept);
      }
    }, _this.handleSetTodayDate = function () {
      _this.handleChange(_this.props.utils.date());
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(PickerBase, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.utils.isEqual(this.state.date, nextProps.value)) {
        this.setState({ date: this.getValidDateOrCurrent(nextProps) });
      }
    }
  }]);
  return PickerBase;
}(React.PureComponent);

PickerBase.propTypes = {
  value: DomainPropTypes.date,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  format: PropTypes.string,
  labelFunc: PropTypes.func,
  ampm: PropTypes.bool,
  utils: PropTypes.object.isRequired
};

var DatePickerWrapper = function (_PickerBase) {
  inherits$2(DatePickerWrapper, _PickerBase);

  function DatePickerWrapper() {
    classCallCheck$2(this, DatePickerWrapper);
    return possibleConstructorReturn$2(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).apply(this, arguments));
  }

  createClass$2(DatePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          onChange = _props.onChange,
          animateYearScrolling = _props.animateYearScrolling,
          openToYearSelection = _props.openToYearSelection,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          utils = _props.utils,
          shouldDisableDate = _props.shouldDisableDate,
          minDateMessage = _props.minDateMessage,
          maxDateMessage = _props.maxDateMessage,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          other = objectWithoutProperties$2(_props, ['value', 'format', 'autoOk', 'onChange', 'animateYearScrolling', 'openToYearSelection', 'leftArrowIcon', 'rightArrowIcon', 'renderDay', 'labelFunc', 'utils', 'shouldDisableDate', 'minDateMessage', 'maxDateMessage', 'minDate', 'maxDate', 'disablePast', 'disableFuture']);


      return React__default.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: format,
          onClear: this.handleClear,
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          onSetToday: this.handleSetTodayDate,
          labelFunc: labelFunc,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDateMessage: minDateMessage,
          maxDateMessage: maxDateMessage
        }, other),
        React__default.createElement(DatePicker$1, {
          date: date,
          onChange: this.handleChange,
          animateYearScrolling: animateYearScrolling,
          openToYearSelection: openToYearSelection,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay,
          utils: utils,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture,
          shouldDisableDate: shouldDisableDate
        })
      );
    }
  }]);
  return DatePickerWrapper;
}(PickerBase);

DatePickerWrapper.propTypes = {
  utils: PropTypes.object.isRequired,
  /** Datepicker value */
  value: DomainPropTypes.date,
  /** Min selectable date */
  minDate: DomainPropTypes.date,
  /** Max selectable date */
  maxDate: DomainPropTypes.date,
  /** Date format string for input */
  format: PropTypes.string,
  /** Callback firing when date accepted */
  onChange: PropTypes.func.isRequired,
  /** Auto accept date on selection */
  autoOk: PropTypes.bool,
  /** Disable past dates */
  disablePast: PropTypes.bool,
  /** Disable future dates */
  disableFuture: PropTypes.bool,
  /** To animate scrolling to current year (with scrollIntoView) */
  animateYearScrolling: PropTypes.bool,
  /** Open datepicker from year selection */
  openToYearSelection: PropTypes.bool,
  /** Allow to specify dynamic label for text field labelFunc(date, invalidLabel) */
  labelFunc: PropTypes.func,
  /** Left arrow icon */
  leftArrowIcon: PropTypes.node,
  /** Right arrow icon */
  rightArrowIcon: PropTypes.node,
  /** Custom renderer for day renderDay(date, selectedDate, dayInCurrentMonth) */
  renderDay: PropTypes.func,
  /** Disable specific date */
  shouldDisableDate: PropTypes.func
};
DatePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'MMMM Do',
  autoOk: false,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disableFuture: false,
  disablePast: false,
  animateYearScrolling: false,
  openToYearSelection: false,
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  renderDay: undefined,
  labelFunc: undefined,
  shouldDisableDate: undefined
};
var DatePickerWrapper$1 = WithUtils()(DatePickerWrapper);

var ClockPointer = function (_Component) {
  inherits$2(ClockPointer, _Component);

  function ClockPointer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = ClockPointer.__proto__ || Object.getPrototypeOf(ClockPointer)).call.apply(_ref, [this].concat(args))), _this), _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          max = _this$props.max;


      var angle = 360 / max * value;

      return {
        height: isInner ? '26%' : '40%',
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(ClockPointer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          hasSelected = _props.hasSelected;


      return React__default.createElement(
        'div',
        {
          className: classes.pointer,
          style: this.getAngleStyle()
        },
        React__default.createElement('div', { className: classnames(classes.thumb, defineProperty$5({}, classes.noPoint, hasSelected)) })
      );
    }
  }]);
  return ClockPointer;
}(React.Component);

ClockPointer.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  isInner: PropTypes.bool.isRequired,
  max: PropTypes.number.isRequired
};
var styles$11 = function styles(theme) {
  return {
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.common.white,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: '14px solid ' + theme.palette.primary.main,
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  };
};

var ClockPointer$1 = withStyles(styles$11, { name: 'MuiPickersClockPointer' })(ClockPointer);

var HOURS = 'hours';

var MINUTES = 'minutes';

var SECONDS = 'seconds';

var clockType = Object.freeze({
	HOURS: HOURS,
	MINUTES: MINUTES,
	SECONDS: SECONDS
});

var center = {
  x: 260 / 2,
  y: 260 / 2
};

var basePoint = {
  x: center.x,
  y: 0
};

var cx = basePoint.x - center.x;
var cy = basePoint.y - center.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - center.x;
  var y = offsetY - center.y;

  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;

  var value = Math.floor(deg / step) || 0;
  // eslint-disable-next-line no-restricted-properties
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);

  return { value: value, distance: distance };
};

var getHours = function getHours(offsetX, offsetY, ampm) {
  // eslint-disable-next-line
  var _getAngleValue = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue.value,
      distance = _getAngleValue.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};

var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

  var _getAngleValue2 = getAngleValue(step, offsetX, offsetY),
      value = _getAngleValue2.value;

  return value;
};

var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  if (ampm) {
    var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';
    if (currentMeridiem !== meridiem) {
      var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;

      return utils.setHours(time, hours);
    }
  }

  return time;
};

var Clock = function (_Component) {
  inherits$2(Clock, _Component);

  function Clock() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = Clock.__proto__ || Object.getPrototypeOf(Clock)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchMove = function (e) {
      _this.isMoving = true;
      _this.setTime(e);
    }, _this.handleMouseUp = function (e) {
      if (_this.isMoving) {
        _this.isMoving = false;
      }
      _this.setTime(e.nativeEvent, true);
    }, _this.handleTouchEnd = function (e) {
      if (_this.isMoving) {
        _this.setTime(e.nativeEvent, true);
        _this.isMoving = false;
      }
    }, _this.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation();
      // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari
      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        _this.setTime(e.nativeEvent, false);
      }
    }, _this.hasSelected = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value;


      if (type === HOURS) {
        return true;
      }

      return value % 5 === 0;
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(Clock, [{
    key: 'setTime',
    value: function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;


      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();

        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === SECONDS || this.props.type === MINUTES ? getMinutes(offsetX, offsetY) : getHours(offsetX, offsetY, this.props.ampm);

      this.props.onChange(value, isFinish);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          value = _props.value,
          children = _props.children,
          type = _props.type,
          ampm = _props.ampm;


      var max = type === HOURS ? 12 : 60;
      var isPointerInner = !ampm && type === HOURS && (value < 1 || value > 12);

      return React__default.createElement(
        'div',
        { className: classes.container },
        React__default.createElement(
          'div',
          {
            className: classes.clock
          },
          React__default.createElement('div', {
            role: 'menu',
            tabIndex: -1,
            className: classes.squareMask,
            onTouchMove: this.handleTouchMove,
            onTouchEnd: this.handleTouchEnd,
            onMouseUp: this.handleMouseUp,
            onMouseMove: this.handleMove
          }),
          React__default.createElement('div', { className: classes.pin }),
          React__default.createElement(ClockPointer$1, {
            max: max,
            value: value,
            isInner: isPointerInner,
            hasSelected: this.hasSelected()
          }),
          children
        )
      );
    }
  }]);
  return Clock;
}(React.Component);

Clock.propTypes = {
  type: PropTypes.oneOf(Object.keys(clockType).map(function (key) {
    return clockType[key];
  })).isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  ampm: PropTypes.bool
};
Clock.defaultProps = {
  ampm: false
};
var styles$10 = function styles(theme) {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: [[theme.spacing.unit * 4, 0, theme.spacing.unit]]
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none',
      zIndex: 1
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none',
      touchActions: 'none',
      userSelect: 'none',
      '&:active': {
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  };
};

var Clock$1 = withStyles(styles$10, { name: 'MuiPickersClock' })(Clock);

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};

var ClockNumber = function (_Component) {
  inherits$2(ClockNumber, _Component);

  function ClockNumber() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, ClockNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = ClockNumber.__proto__ || Object.getPrototypeOf(ClockNumber)).call.apply(_ref, [this].concat(args))), _this), _this.getTransformStyle = function (index) {
      var position = positions[index];

      return {
        transform: 'translate(' + position[0] + 'px, ' + position[1] + 'px'
      };
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(ClockNumber, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selected = _props.selected,
          label = _props.label,
          index = _props.index,
          classes = _props.classes,
          isInner = _props.isInner;


      var className = classnames(classes.clockNumber, defineProperty$5({}, classes.selected, selected));

      return React__default.createElement(
        Typography,
        {
          variant: isInner ? 'body1' : 'subheading',
          component: 'span',
          className: className,
          style: this.getTransformStyle(index, isInner)
        },
        label
      );
    }
  }]);
  return ClockNumber;
}(React.Component);

ClockNumber.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  isInner: PropTypes.bool
};
ClockNumber.defaultProps = {
  isInner: false
};
var styles$12 = function styles(theme) {
  var size = theme.spacing.unit * 4;
  return {
    clockNumber: {
      width: size,
      height: size,
      userSelect: 'none',
      position: 'absolute',
      left: 'calc(50% - ' + size / 2 + 'px)',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    selected: {
      color: theme.palette.common.white
    }
  };
};

var ClockNumber$1 = withStyles(styles$12, { name: 'MuiPickersClockNumber' })(ClockNumber);

var HourView = function (_PureComponent) {
  inherits$2(HourView, _PureComponent);

  function HourView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, HourView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = HourView.__proto__ || Object.getPrototypeOf(HourView)).call.apply(_ref, [this].concat(args))), _this), _this.getHourNumbers = function () {
      var _this$props = _this.props,
          ampm = _this$props.ampm,
          utils = _this$props.utils,
          date = _this$props.date;

      var currentHours = utils.getHours(date);

      var hourNumbers = [];
      var startHour = ampm ? 1 : 0;
      var endHour = ampm ? 12 : 23;

      var isSelected = function isSelected(hour) {
        if (ampm) {
          if (hour === 12) {
            return currentHours === 12 || currentHours === 0;
          }

          return currentHours === hour || currentHours - 12 === hour;
        }

        return currentHours === hour;
      };

      for (var hour = startHour; hour <= endHour; hour += 1) {
        var label = hour.toString();

        if (hour === 0) {
          label = '00';
        }

        var props = {
          index: hour,
          label: utils.formatNumber(label),
          selected: isSelected(hour),
          isInner: !ampm && (hour === 0 || hour > 12)
        };

        hourNumbers.push(React__default.createElement(ClockNumber$1, _extends({ key: hour }, props)));
      }

      return hourNumbers;
    }, _this.handleChange = function (hours, isFinish) {
      var _this$props2 = _this.props,
          date = _this$props2.date,
          utils = _this$props2.utils;

      var updatedTime = utils.setHours(date, hours);

      _this.props.onChange(updatedTime, isFinish);
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(HourView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          ampm = _props.ampm,
          utils = _props.utils;

      var value = utils.getHours(date);

      return React__default.createElement(
        Clock$1,
        {
          type: HOURS,
          value: value,
          ampm: ampm,
          onChange: this.handleChange
        },
        this.getHourNumbers()
      );
    }
  }]);
  return HourView;
}(React.PureComponent);

HourView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.object.isRequired,
  ampm: PropTypes.bool
};
HourView.defaultProps = {
  ampm: true
};
var HourView$1 = WithUtils()(HourView);

var MinutesView = function (_Component) {
  inherits$2(MinutesView, _Component);

  function MinutesView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, MinutesView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = MinutesView.__proto__ || Object.getPrototypeOf(MinutesView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (minutes, isFinish) {
      var _this$props = _this.props,
          date = _this$props.date,
          utils = _this$props.utils;

      var updatedDate = utils.setMinutes(date, minutes);
      _this.props.onChange(updatedDate, isFinish);
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(MinutesView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          utils = _props.utils;


      var f = utils.formatNumber;
      var value = utils.getMinutes(date);

      return React__default.createElement(
        Clock$1,
        {
          type: MINUTES,
          onChange: this.handleChange,
          value: value
        },
        React__default.createElement(ClockNumber$1, { label: f('00'), selected: value === 0, index: 12 }),
        React__default.createElement(ClockNumber$1, { label: f('05'), selected: value === 5, index: 1 }),
        React__default.createElement(ClockNumber$1, { label: f('10'), selected: value === 10, index: 2 }),
        React__default.createElement(ClockNumber$1, { label: f('15'), selected: value === 15, index: 3 }),
        React__default.createElement(ClockNumber$1, { label: f('20'), selected: value === 20, index: 4 }),
        React__default.createElement(ClockNumber$1, { label: f('25'), selected: value === 25, index: 5 }),
        React__default.createElement(ClockNumber$1, { label: f('30'), selected: value === 30, index: 6 }),
        React__default.createElement(ClockNumber$1, { label: f('35'), selected: value === 35, index: 7 }),
        React__default.createElement(ClockNumber$1, { label: f('40'), selected: value === 40, index: 8 }),
        React__default.createElement(ClockNumber$1, { label: f('45'), selected: value === 45, index: 9 }),
        React__default.createElement(ClockNumber$1, { label: f('50'), selected: value === 50, index: 10 }),
        React__default.createElement(ClockNumber$1, { label: f('55'), selected: value === 55, index: 11 })
      );
    }
  }]);
  return MinutesView;
}(React.Component);

MinutesView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.object.isRequired
};
MinutesView.defaultProps = {};
var MinutesView$1 = WithUtils()(MinutesView);

var SecondsView = function (_Component) {
  inherits$2(SecondsView, _Component);

  function SecondsView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, SecondsView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = SecondsView.__proto__ || Object.getPrototypeOf(SecondsView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (seconds, isFinish) {
      var _this$props = _this.props,
          date = _this$props.date,
          utils = _this$props.utils;

      var updatedDate = utils.setSeconds(date, seconds);
      _this.props.onChange(updatedDate, isFinish);
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(SecondsView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          date = _props.date,
          utils = _props.utils;


      var f = utils.formatNumber;
      var value = utils.getSeconds(date);

      return React__default.createElement(
        Clock$1,
        {
          type: SECONDS,
          onChange: this.handleChange,
          value: value
        },
        React__default.createElement(ClockNumber$1, { label: f('00'), selected: value === 0, index: 12 }),
        React__default.createElement(ClockNumber$1, { label: f('05'), selected: value === 5, index: 1 }),
        React__default.createElement(ClockNumber$1, { label: f('10'), selected: value === 10, index: 2 }),
        React__default.createElement(ClockNumber$1, { label: f('15'), selected: value === 15, index: 3 }),
        React__default.createElement(ClockNumber$1, { label: f('20'), selected: value === 20, index: 4 }),
        React__default.createElement(ClockNumber$1, { label: f('25'), selected: value === 25, index: 5 }),
        React__default.createElement(ClockNumber$1, { label: f('30'), selected: value === 30, index: 6 }),
        React__default.createElement(ClockNumber$1, { label: f('35'), selected: value === 35, index: 7 }),
        React__default.createElement(ClockNumber$1, { label: f('40'), selected: value === 40, index: 8 }),
        React__default.createElement(ClockNumber$1, { label: f('45'), selected: value === 45, index: 9 }),
        React__default.createElement(ClockNumber$1, { label: f('50'), selected: value === 50, index: 10 }),
        React__default.createElement(ClockNumber$1, { label: f('55'), selected: value === 55, index: 11 })
      );
    }
  }]);
  return SecondsView;
}(React.Component);

SecondsView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  utils: PropTypes.object.isRequired
};
SecondsView.defaultProps = {};
var SecondsView$1 = WithUtils()(SecondsView);

var TimePicker = function (_Component) {
  inherits$2(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isHourViewShown: true,
      isMinuteViewShown: false,
      meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(_this.props.date, false, false, false);
        });
      };
    }, _this.handleHourChange = function (time, isFinish) {
      _this.handleChange(time, isFinish, true, false);
    }, _this.handleMinutesChange = function (time, isFinish) {
      _this.handleChange(time, isFinish, false, true);
    }, _this.handleSecondsChange = function (time, isFinish) {
      _this.handleChange(time, isFinish, false, false);
    }, _this.openSecondsView = function () {
      _this.setState({ isHourViewShown: false, isMinuteViewShown: false });
    }, _this.openMinutesView = function () {
      _this.setState({ isHourViewShown: false, isMinuteViewShown: true });
    }, _this.openHourView = function () {
      _this.setState({ isHourViewShown: true, isMinuteViewShown: false });
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(TimePicker, [{
    key: 'handleChange',
    value: function handleChange(time, isFinish, openMinutes, openSeconds) {
      var withMeridiem = convertToMeridiem(time, this.state.meridiemMode, this.props.ampm, this.props.utils);

      if (isFinish) {
        if (!openMinutes && !openSeconds) {
          this.props.onChange(withMeridiem, isFinish);
          return;
        }

        if (openMinutes) {
          this.openMinutesView();
        }

        if (openSeconds) {
          this.openSecondsView();
        }
      }

      this.props.onChange(withMeridiem, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          date = _props.date,
          utils = _props.utils,
          ampm = _props.ampm,
          fadeTimeout = _props.fadeTimeout,
          seconds = _props.seconds;
      var _state = this.state,
          isHourViewShown = _state.isHourViewShown,
          isMinuteViewShown = _state.isMinuteViewShown,
          meridiemMode = _state.meridiemMode;


      var rtl = theme.direction === 'rtl';
      var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;

      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(
          PickerToolbar$1,
          {
            className: classnames(classes.toolbar, defineProperty$5({}, classes.toolbarLeftPadding, ampm))
          },
          React__default.createElement(
            'div',
            { className: hourMinuteClassName },
            React__default.createElement(ToolbarButton$1, {
              variant: 'display3',
              onClick: this.openHourView,
              selected: isHourViewShown,
              label: utils.getHourText(date, ampm)
            }),
            React__default.createElement(ToolbarButton$1, {
              variant: 'display3',
              label: ':',
              selected: false,
              className: classes.separator
            }),
            React__default.createElement(ToolbarButton$1, {
              variant: 'display3',
              onClick: this.openMinutesView,
              selected: isMinuteViewShown,
              label: utils.getMinuteText(date)
            }),
            seconds && React__default.createElement(
              React.Fragment,
              null,
              React__default.createElement(ToolbarButton$1, {
                variant: 'display3',
                label: ':',
                selected: false,
                className: classes.separator
              }),
              React__default.createElement(ToolbarButton$1, {
                variant: 'display3',
                onClick: this.openSecondsView,
                selected: !isHourViewShown && !isMinuteViewShown,
                label: utils.getSecondText(date)
              })
            )
          ),
          ampm && React__default.createElement(
            'div',
            { className: seconds ? classes.ampmSelectionWithSeconds : classes.ampmSelection },
            React__default.createElement(ToolbarButton$1, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'am',
              variant: 'subheading',
              label: utils.getMeridiemText('am'),
              onClick: this.setMeridiemMode('am')
            }),
            React__default.createElement(ToolbarButton$1, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'pm',
              variant: 'subheading',
              label: utils.getMeridiemText('pm'),
              onClick: this.setMeridiemMode('pm')
            })
          )
        ),
        this.props.children,
        React__default.createElement(
          'div',
          { className: classes.viewContainer },
          React__default.createElement(
            Fade,
            {
              timeout: fadeTimeout,
              'in': isHourViewShown,
              mountOnEnter: true,
              unmountOnExit: true
            },
            React__default.createElement(
              'div',
              { className: classes.viewRoot },
              React__default.createElement(HourView$1, {
                date: date,
                meridiemMode: meridiemMode,
                onChange: this.handleHourChange,
                utils: utils,
                ampm: ampm
              })
            )
          ),
          React__default.createElement(
            Fade,
            {
              timeout: fadeTimeout,
              'in': isMinuteViewShown,
              mountOnEnter: true,
              unmountOnExit: true
            },
            React__default.createElement(
              'div',
              { className: classes.viewRoot },
              React__default.createElement(MinutesView$1, {
                date: date,
                onChange: this.handleMinutesChange,
                utils: utils
              })
            )
          ),
          React__default.createElement(
            Fade,
            {
              timeout: fadeTimeout,
              'in': !isHourViewShown && !isMinuteViewShown,
              mountOnEnter: true,
              unmountOnExit: true
            },
            React__default.createElement(
              'div',
              { className: classes.viewRoot },
              React__default.createElement(SecondsView$1, {
                date: date,
                onChange: this.handleSecondsChange,
                utils: utils
              })
            )
          )
        )
      );
    }
  }]);
  return TimePicker;
}(React.Component);

TimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.node,
  utils: PropTypes.object.isRequired,
  ampm: PropTypes.bool,
  fadeTimeout: PropTypes.number.isRequired,
  seconds: PropTypes.bool
};
TimePicker.defaultProps = {
  children: null,
  ampm: true,
  seconds: false
};
var styles$9 = function styles() {
  return {
    viewContainer: {
      position: 'relative',
      minHeight: 300,
      minWidth: 260
    },
    viewRoot: {
      position: 'absolute',
      left: 0,
      right: 0
    },
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    toolbarLeftPadding: {
      paddingLeft: 50
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 20,
      marginRight: -20
    },
    ampmSelectionWithSeconds: {
      marginLeft: 15,
      marginRight: 10
    },
    ampmLabel: {
      fontSize: 18
    },
    hourMinuteLabel: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    hourMinuteLabelReverse: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'row-reverse'
    }
  };
};

var TimePicker$1 = withStyles(styles$9, { withTheme: true, name: 'MuiPickersTimePicker' })(WithUtils()(TimePicker));

var TimePickerWrapper = function (_PickerBase) {
  inherits$2(TimePickerWrapper, _PickerBase);

  function TimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, TimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = TimePickerWrapper.__proto__ || Object.getPrototypeOf(TimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'hh:mm A', _this.default24hFormat = 'HH:mm', _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(TimePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          onChange = _props.onChange,
          utils = _props.utils,
          ampm = _props.ampm,
          fadeTimeout = _props.fadeTimeout,
          seconds = _props.seconds,
          other = objectWithoutProperties$2(_props, ['value', 'format', 'autoOk', 'onChange', 'utils', 'ampm', 'fadeTimeout', 'seconds']);


      return React__default.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: this.getFormat(),
          onClear: this.handleClear,
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          onSetToday: this.handleSetTodayDate
        }, other),
        React__default.createElement(TimePicker$1, {
          date: date,
          onChange: this.handleChange,
          utils: utils,
          ampm: ampm,
          fadeTimeout: fadeTimeout,
          seconds: seconds
        })
      );
    }
  }]);
  return TimePickerWrapper;
}(PickerBase);

TimePickerWrapper.propTypes = {
  utils: PropTypes.object.isRequired,
  /** DateTimepicker value */
  value: DomainPropTypes.date,
  /** Date format string for input */
  format: PropTypes.string,
  /** Callback firing when date accepted */
  onChange: PropTypes.func.isRequired,
  /** Auto accept date on minute selection */
  autoOk: PropTypes.bool,
  /** 12h/24h view for hour selection clock */
  ampm: PropTypes.bool,
  /** Switching hour/minutes animation timeout in milliseconds (set 0 to disable) */
  fadeTimeout: PropTypes.number,
  /** Show the seconds view */
  seconds: PropTypes.bool
};
TimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  ampm: true,
  fadeTimeout: 400,
  seconds: false
};
var TimePickerWrapper$1 = WithUtils()(TimePickerWrapper);

var DateTimePickerView = function DateTimePickerView(props) {
  var view = props.view,
      selected = props.selected,
      children = props.children,
      classes = props.classes,
      timeout = props.timeout;


  if (timeout) {
    return React__default.createElement(
      Fade,
      {
        'in': view === selected,
        timeout: timeout,
        mountOnEnter: true,
        unmountOnExit: true
      },
      React__default.createElement(
        'div',
        { className: classes.view },
        children
      )
    );
  }

  if (view !== selected) {
    return null;
  }

  return React__default.createElement(
    'div',
    { className: classes.view },
    children
  );
};

DateTimePickerView.propTypes = {
  timeout: PropTypes.number,
  view: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

DateTimePickerView.defaultProps = {
  timeout: undefined
};

var styles$15 = {
  view: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0
  }
};

var View = withStyles(styles$15, { name: 'MuiPickerDTPickerView ' })(DateTimePickerView);

var YEAR = 'year';

var DATE = 'date';

var HOUR = 'hour';

var MINUTES$1 = 'minutes';

var SECONDS$1 = 'seconds';

var viewType = Object.freeze({
	YEAR: YEAR,
	DATE: DATE,
	HOUR: HOUR,
	MINUTES: MINUTES$1,
	SECONDS: SECONDS$1
});

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === DATE || openView === YEAR) {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return DATE;
  }

  return HOUR;
};

var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var view = props.view,
      onChange = props.onChange,
      classes = props.classes,
      theme = props.theme,
      dateRangeIcon = props.dateRangeIcon,
      timeIcon = props.timeIcon;


  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';
  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return React__default.createElement(
    Paper,
    null,
    React__default.createElement(
      Tabs,
      {
        fullWidth: true,
        value: viewToTabIndex(view),
        onChange: handleChange,
        className: classes.tabs,
        indicatorColor: indicatorColor
      },
      React__default.createElement(Tab, { value: 'date', icon: React__default.createElement(
          Icon,
          null,
          dateRangeIcon
        ) }),
      React__default.createElement(Tab, { value: 'time', icon: React__default.createElement(
          Icon,
          null,
          timeIcon
        ) })
    )
  );
};

DateTimePickerTabs.propTypes = {
  view: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dateRangeIcon: PropTypes.node.isRequired,
  timeIcon: PropTypes.node.isRequired
};

var styles$16 = function styles(theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default
    }
  };
};

var DateTimePickerTabs$1 = withTheme()(withStyles(styles$16, { name: 'MuiPickerDTTabs' })(DateTimePickerTabs));

var DateTimePickerHeader = function DateTimePickerHeader(props) {
  var _classnames, _classnames2;

  var date = props.date,
      classes = props.classes,
      openView = props.openView,
      meridiemMode = props.meridiemMode,
      onOpenViewChange = props.onOpenViewChange,
      setMeridiemMode = props.setMeridiemMode,
      theme = props.theme,
      utils = props.utils,
      ampm = props.ampm,
      seconds = props.seconds;


  var changeOpenView = function changeOpenView(view) {
    return function () {
      return onOpenViewChange(view);
    };
  };

  var rtl = theme.direction === 'rtl';
  var hourMinuteClassName = rtl ? classes.hourMinuteLabelReverse : classes.hourMinuteLabel;

  return React__default.createElement(
    PickerToolbar$1,
    { className: classes.toolbar },
    React__default.createElement(
      'div',
      { className: classes.dateHeader },
      React__default.createElement(ToolbarButton$1, {
        variant: 'subheading',
        onClick: changeOpenView(YEAR),
        selected: openView === YEAR,
        label: utils.getYearText(date)
      }),
      React__default.createElement(ToolbarButton$1, {
        variant: 'display1',
        onClick: changeOpenView(DATE),
        selected: openView === DATE,
        label: utils.getDateTimePickerHeaderText(date)
      })
    ),
    React__default.createElement(
      'div',
      {
        className: classnames(classes.timeHeader, (_classnames = {}, defineProperty$5(_classnames, classes.timeHeaderWithSeconds, seconds), defineProperty$5(_classnames, classes.timeHeaderWithoutAmPm, !ampm), _classnames))
      },
      React__default.createElement(
        'div',
        { className: hourMinuteClassName },
        React__default.createElement(ToolbarButton$1, {
          variant: seconds ? 'display1' : 'display2',
          onClick: changeOpenView(HOUR),
          selected: openView === HOUR,
          label: utils.getHourText(date, ampm)
        }),
        React__default.createElement(ToolbarButton$1, {
          variant: seconds ? 'display1' : 'display2',
          label: ':',
          selected: false,
          className: classes.separator
        }),
        React__default.createElement(ToolbarButton$1, {
          variant: seconds ? 'display1' : 'display2',
          onClick: changeOpenView(MINUTES$1),
          selected: openView === MINUTES$1,
          label: utils.getMinuteText(date)
        }),
        seconds && React__default.createElement(
          React.Fragment,
          null,
          React__default.createElement(ToolbarButton$1, {
            variant: 'display1',
            label: ':',
            selected: false,
            className: classes.separator
          }),
          React__default.createElement(ToolbarButton$1, {
            variant: 'display1',
            onClick: changeOpenView(SECONDS$1),
            selected: openView === SECONDS$1,
            label: utils.getSecondText(date)
          })
        )
      ),
      ampm && React__default.createElement(
        'div',
        {
          className: classnames((_classnames2 = {}, defineProperty$5(_classnames2, classes.ampmSelectionWithSeconds, seconds), defineProperty$5(_classnames2, classes.ampmSelection, !seconds), _classnames2))
        },
        React__default.createElement(ToolbarButton$1, {
          className: classnames(classes.ampmLabel, defineProperty$5({}, classes.ampmLabelWithSeconds, seconds)),
          selected: meridiemMode === 'am',
          type: 'subheading',
          label: utils.getMeridiemText('am'),
          onClick: setMeridiemMode('am')
        }),
        seconds && React__default.createElement(ToolbarButton$1, {
          className: classnames(classes.ampmLabel, defineProperty$5({}, classes.ampmLabelWithSeconds, seconds)),
          label: ' / '
        }),
        React__default.createElement(ToolbarButton$1, {
          className: classnames(classes.ampmLabel, defineProperty$5({}, classes.ampmLabelWithSeconds, seconds)),
          selected: meridiemMode === 'pm',
          type: 'subheading',
          label: utils.getMeridiemText('pm'),
          onClick: setMeridiemMode('pm')
        })
      )
    )
  );
};

DateTimePickerHeader.propTypes = {
  date: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  meridiemMode: PropTypes.string.isRequired,
  openView: PropTypes.string.isRequired,
  onOpenViewChange: PropTypes.func.isRequired,
  setMeridiemMode: PropTypes.func.isRequired,
  utils: PropTypes.object.isRequired,
  ampm: PropTypes.bool,
  seconds: PropTypes.bool
};

DateTimePickerHeader.defaultProps = {
  ampm: true,
  seconds: false
};

var styles$17 = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'space-around'
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 10,
      marginRight: -10
    },
    ampmSelectionWithSeconds: {
      marginLeft: 3,
      alignSelf: 'flex-start'
    },
    ampmLabel: {
      fontSize: 18
    },
    ampmLabelWithSeconds: {
      display: 'inline'
    },
    hourMinuteLabel: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    hourMinuteLabelReverse: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flexDirection: 'row-reverse'
    },
    dateHeader: {
      height: 65
    },
    timeHeader: {
      height: 65,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    timeHeaderWithSeconds: {
      flexDirection: 'column-reverse'
    },
    timeHeaderWithoutAmPm: {
      justifyContent: 'flex-start'
    }
  };
};

var DatetimePickerHeader = withStyles(styles$17, { withTheme: true })(WithUtils()(DateTimePickerHeader));

var DateTimePicker = function (_Component) {
  inherits$2(DateTimePicker, _Component);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openView: _this.props.openTo,
      meridiemMode: _this.props.utils.getHours(_this.props.date) >= 12 ? 'pm' : 'am'
    }, _this.onChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var nextView = arguments[2];

      _this.handleChange(time);

      if (isFinish && _this.props.autoSubmit) {
        _this.handleViewChange(nextView);
      }
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(_this.props.date, false);
        });
      };
    }, _this.handleViewChange = function (view) {
      _this.setState({ openView: view });
    }, _this.handleChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode, _this.props.ampm, _this.props.utils);
      _this.props.onChange(withMeridiem, isFinish);
    }, _this.handleYearChange = function (date, isFinish) {
      _this.onChange(date, isFinish, DATE);
    }, _this.handleDayChange = function (date, isFinish) {
      _this.onChange(date, isFinish, HOUR);
    }, _this.handleHourChange = function (time, isFinish) {
      _this.onChange(time, isFinish, MINUTES$1);
    }, _this.handleMinuteChange = function (time, isFinish) {
      _this.onChange(time, isFinish, SECONDS$1);
    }, _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(DateTimePicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          openView = _state.openView,
          meridiemMode = _state.meridiemMode;
      var _props = this.props,
          date = _props.date,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          ampm = _props.ampm,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling,
          fadeTimeout = _props.fadeTimeout,
          classes = _props.classes,
          seconds = _props.seconds;


      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(DatetimePickerHeader, {
          date: date,
          openView: openView,
          meridiemMode: meridiemMode,
          setMeridiemMode: this.setMeridiemMode,
          onOpenViewChange: this.handleViewChange,
          utils: utils,
          ampm: ampm,
          seconds: seconds
        }),
        showTabs && React__default.createElement(DateTimePickerTabs$1, {
          view: openView,
          onChange: this.handleViewChange,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon
        }),
        React__default.createElement(
          'div',
          { className: classes.viewContainer },
          React__default.createElement(
            View,
            { view: YEAR, selected: openView },
            React__default.createElement(YearSelection$1, {
              date: date,
              minDate: minDate,
              maxDate: maxDate,
              onChange: this.handleYearChange,
              disablePast: disablePast,
              disableFuture: disableFuture,
              utils: utils,
              animateYearScrolling: animateYearScrolling
            })
          ),
          React__default.createElement(
            View,
            { view: DATE, selected: openView },
            React__default.createElement(Calendar$1, {
              date: date,
              minDate: minDate,
              maxDate: maxDate,
              onChange: this.handleDayChange,
              disablePast: disablePast,
              disableFuture: disableFuture,
              leftArrowIcon: leftArrowIcon,
              rightArrowIcon: rightArrowIcon,
              renderDay: renderDay,
              utils: utils,
              shouldDisableDate: shouldDisableDate
            })
          ),
          React__default.createElement(
            View,
            {
              timeout: fadeTimeout,
              view: HOUR,
              selected: openView
            },
            React__default.createElement(HourView$1, {
              date: date,
              meridiemMode: meridiemMode,
              onChange: this.handleHourChange,
              utils: utils,
              ampm: ampm
            })
          ),
          React__default.createElement(
            View,
            {
              timeout: fadeTimeout,
              view: MINUTES$1,
              selected: openView
            },
            React__default.createElement(MinutesView$1, {
              date: date,
              onChange: this.handleMinuteChange,
              utils: utils
            })
          ),
          React__default.createElement(
            View,
            {
              timeout: fadeTimeout,
              view: SECONDS$1,
              selected: openView
            },
            React__default.createElement(SecondsView$1, {
              date: date,
              onChange: this.handleChange,
              utils: utils
            })
          )
        )
      );
    }
  }]);
  return DateTimePicker;
}(React.Component);

DateTimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  autoSubmit: PropTypes.bool,
  openTo: PropTypes.oneOf(Object.keys(viewType).map(function (key) {
    return viewType[key];
  })).isRequired,
  disablePast: PropTypes.bool,
  disableFuture: PropTypes.bool,
  minDate: DomainPropTypes.date.isRequired,
  maxDate: DomainPropTypes.date.isRequired,
  showTabs: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  utils: PropTypes.object.isRequired,
  ampm: PropTypes.bool,
  shouldDisableDate: PropTypes.func,
  animateYearScrolling: PropTypes.bool,
  fadeTimeout: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  seconds: PropTypes.bool
};
DateTimePicker.defaultProps = {
  autoSubmit: true,
  disablePast: false,
  disableFuture: false,
  showTabs: true,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  ampm: true,
  shouldDisableDate: undefined,
  animateYearScrolling: false,
  seconds: false
};
var styles$14 = {
  viewContainer: {
    minHeight: 300,
    position: 'relative'
  }
};

var DateTimePicker$1 = withStyles(styles$14)(WithUtils()(DateTimePicker));

var DateTimePickerWrapper = function (_PickerBase) {
  inherits$2(DateTimePickerWrapper, _PickerBase);

  function DateTimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$2(this, DateTimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$2(this, (_ref = DateTimePickerWrapper.__proto__ || Object.getPrototypeOf(DateTimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'MMMM Do hh:mm a', _this.default24hFormat = 'MMMM Do HH:mm', _temp), possibleConstructorReturn$2(_this, _ret);
  }

  createClass$2(DateTimePickerWrapper, [{
    key: 'render',
    value: function render() {
      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          openTo = _props.openTo,
          classes = _props.classes,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          autoSubmit = _props.autoSubmit,
          disablePast = _props.disablePast,
          disableFuture = _props.disableFuture,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          utils = _props.utils,
          ampm = _props.ampm,
          shouldDisableDate = _props.shouldDisableDate,
          animateYearScrolling = _props.animateYearScrolling,
          fadeTimeout = _props.fadeTimeout,
          seconds = _props.seconds,
          other = objectWithoutProperties$2(_props, ['value', 'format', 'autoOk', 'openTo', 'classes', 'minDate', 'maxDate', 'showTabs', 'autoSubmit', 'disablePast', 'disableFuture', 'leftArrowIcon', 'rightArrowIcon', 'dateRangeIcon', 'timeIcon', 'renderDay', 'utils', 'ampm', 'shouldDisableDate', 'animateYearScrolling', 'fadeTimeout', 'seconds']);


      return React__default.createElement(
        ModalWrapper,
        _extends({
          ref: this.getRef,
          value: value,
          format: this.getFormat(),
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          onClear: this.handleClear,
          onSetToday: this.handleSetTodayDate,
          dialogContentClassName: classes.dialogContent,
          minDate: minDate,
          maxDate: maxDate,
          disablePast: disablePast,
          disableFuture: disableFuture
        }, other),
        React__default.createElement(DateTimePicker$1, {
          date: date,
          ampm: ampm,
          openTo: openTo,
          autoSubmit: autoSubmit,
          onChange: this.handleChange,
          disablePast: disablePast,
          disableFuture: disableFuture,
          minDate: minDate,
          maxDate: maxDate,
          showTabs: showTabs,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon,
          renderDay: renderDay,
          fadeTimeout: fadeTimeout,
          shouldDisableDate: shouldDisableDate,
          animateYearScrolling: animateYearScrolling,
          seconds: seconds
        })
      );
    }
  }]);
  return DateTimePickerWrapper;
}(PickerBase);

DateTimePickerWrapper.propTypes = {
  utils: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  /** DateTimepicker value */
  value: DomainPropTypes.date,
  /** Date format string for input */
  format: PropTypes.string,
  /** Callback firing when date accepted */
  onChange: PropTypes.func.isRequired,
  /** Auto accept date on minute selection */
  autoOk: PropTypes.bool,
  /** Move to the next part of date on select (year -> date -> hour -> minute) */
  autoSubmit: PropTypes.bool,
  /** Disable future dates */
  disableFuture: PropTypes.bool,
  /** Disable past dates */
  disablePast: PropTypes.bool,
  /** Min selectable date */
  minDate: DomainPropTypes.date,
  /** Max selectable date */
  maxDate: DomainPropTypes.date,
  /** Show date/time tabs */
  showTabs: PropTypes.bool,
  /** Left arrow icon */
  leftArrowIcon: PropTypes.node,
  /** Right arrow icon */
  rightArrowIcon: PropTypes.node,
  /** Date tab icon */
  dateRangeIcon: PropTypes.node,
  /** Time tab icon */
  timeIcon: PropTypes.node,
  /** Custom renderer for day renderDay(date, selectedDate, dayInCurrentMonth) */
  renderDay: PropTypes.func,
  /** 12h/24h view for hour selection clock */
  ampm: PropTypes.bool,
  /** Disable specific date */
  shouldDisableDate: PropTypes.func,
  /** Enable animated scrolling to current year */
  animateYearScrolling: PropTypes.bool,
  /** Open directly to particular view */
  openTo: PropTypes.oneOf(['year', 'date', 'hour', 'minutes']),
  /** Switching hour/minutes animation timeout in milliseconds (set 0 to disable) */
  fadeTimeout: PropTypes.number,
  /** Show the seconds view */
  seconds: PropTypes.bool
};
DateTimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  autoSubmit: true,
  openTo: 'date',
  disableFuture: false,
  disablePast: false,
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  showTabs: true,
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right',
  dateRangeIcon: 'date_range',
  timeIcon: 'access_time',
  renderDay: undefined,
  ampm: true,
  shouldDisableDate: undefined,
  animateYearScrolling: false,
  fadeTimeout: 400,
  seconds: false
};
var styles$13 = {
  dialogContent: {
    width: 310
  }
};

var DateTimePickerWrapper$1 = withStyles(styles$13, { name: 'MuiPickerDTPickerModal' })(WithUtils()(DateTimePickerWrapper));

exports.DatePicker = DatePickerWrapper$1;
exports.TimePicker = TimePickerWrapper$1;
exports.DateTimePicker = DateTimePickerWrapper$1;
exports.MuiPickersUtilsProvider = MuiPickersUtilsProvider;
//# sourceMappingURL=material-ui-pickers.cjs.js.map
