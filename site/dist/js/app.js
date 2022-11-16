(() => {
    var __webpack_modules__ = {
        282: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var process = __webpack_require__(155);
            var console = __webpack_require__(108);
            function _typeof(obj) {
                if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
                    return typeof obj;
                }; else _typeof = function _typeof(obj) {
                    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var _require = __webpack_require__(136), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
            var AssertionError = __webpack_require__(961);
            var _require2 = __webpack_require__(539), inspect = _require2.inspect;
            var _require$types = __webpack_require__(539).types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
            var objectAssign = Object.assign ? Object.assign : __webpack_require__(91).assign;
            var objectIs = Object.is ? Object.is : __webpack_require__(609);
            new Map;
            var isDeepEqual;
            var isDeepStrictEqual;
            function lazyLoadComparison() {
                var comparison = __webpack_require__(158);
                isDeepEqual = comparison.isDeepEqual;
                isDeepStrictEqual = comparison.isDeepStrictEqual;
            }
            var warned = false;
            var assert = module.exports = ok;
            var NO_EXCEPTION_SENTINEL = {};
            function innerFail(obj) {
                if (obj.message instanceof Error) throw obj.message;
                throw new AssertionError(obj);
            }
            function fail(actual, expected, message, operator, stackStartFn) {
                var argsLen = arguments.length;
                var internalMessage;
                if (0 === argsLen) internalMessage = "Failed"; else if (1 === argsLen) {
                    message = actual;
                    actual = void 0;
                } else {
                    if (false === warned) {
                        warned = true;
                        var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
                        warn("assert.fail() with more than one argument is deprecated. " + "Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
                    }
                    if (2 === argsLen) operator = "!=";
                }
                if (message instanceof Error) throw message;
                var errArgs = {
                    actual,
                    expected,
                    operator: void 0 === operator ? "fail" : operator,
                    stackStartFn: stackStartFn || fail
                };
                if (void 0 !== message) errArgs.message = message;
                var err = new AssertionError(errArgs);
                if (internalMessage) {
                    err.message = internalMessage;
                    err.generatedMessage = true;
                }
                throw err;
            }
            assert.fail = fail;
            assert.AssertionError = AssertionError;
            function innerOk(fn, argLen, value, message) {
                if (!value) {
                    var generatedMessage = false;
                    if (0 === argLen) {
                        generatedMessage = true;
                        message = "No value argument passed to `assert.ok()`";
                    } else if (message instanceof Error) throw message;
                    var err = new AssertionError({
                        actual: value,
                        expected: true,
                        message,
                        operator: "==",
                        stackStartFn: fn
                    });
                    err.generatedMessage = generatedMessage;
                    throw err;
                }
            }
            function ok() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                innerOk.apply(void 0, [ ok, args.length ].concat(args));
            }
            assert.ok = ok;
            assert.equal = function equal(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (actual != expected) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "==",
                    stackStartFn: equal
                });
            };
            assert.notEqual = function notEqual(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (actual == expected) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "!=",
                    stackStartFn: notEqual
                });
            };
            assert.deepEqual = function deepEqual(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (void 0 === isDeepEqual) lazyLoadComparison();
                if (!isDeepEqual(actual, expected)) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "deepEqual",
                    stackStartFn: deepEqual
                });
            };
            assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (void 0 === isDeepEqual) lazyLoadComparison();
                if (isDeepEqual(actual, expected)) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "notDeepEqual",
                    stackStartFn: notDeepEqual
                });
            };
            assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (void 0 === isDeepEqual) lazyLoadComparison();
                if (!isDeepStrictEqual(actual, expected)) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "deepStrictEqual",
                    stackStartFn: deepStrictEqual
                });
            };
            assert.notDeepStrictEqual = notDeepStrictEqual;
            function notDeepStrictEqual(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (void 0 === isDeepEqual) lazyLoadComparison();
                if (isDeepStrictEqual(actual, expected)) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "notDeepStrictEqual",
                    stackStartFn: notDeepStrictEqual
                });
            }
            assert.strictEqual = function strictEqual(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (!objectIs(actual, expected)) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "strictEqual",
                    stackStartFn: strictEqual
                });
            };
            assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
                if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
                if (objectIs(actual, expected)) innerFail({
                    actual,
                    expected,
                    message,
                    operator: "notStrictEqual",
                    stackStartFn: notStrictEqual
                });
            };
            var Comparison = function Comparison(obj, keys, actual) {
                var _this = this;
                _classCallCheck(this, Comparison);
                keys.forEach((function(key) {
                    if (key in obj) if (void 0 !== actual && "string" === typeof actual[key] && isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key]; else _this[key] = obj[key];
                }));
            };
            function compareExceptionKey(actual, expected, key, message, keys, fn) {
                if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
                    if (!message) {
                        var a = new Comparison(actual, keys);
                        var b = new Comparison(expected, keys, actual);
                        var err = new AssertionError({
                            actual: a,
                            expected: b,
                            operator: "deepStrictEqual",
                            stackStartFn: fn
                        });
                        err.actual = actual;
                        err.expected = expected;
                        err.operator = fn.name;
                        throw err;
                    }
                    innerFail({
                        actual,
                        expected,
                        message,
                        operator: fn.name,
                        stackStartFn: fn
                    });
                }
            }
            function expectedException(actual, expected, msg, fn) {
                if ("function" !== typeof expected) {
                    if (isRegExp(expected)) return expected.test(actual);
                    if (2 === arguments.length) throw new ERR_INVALID_ARG_TYPE("expected", [ "Function", "RegExp" ], expected);
                    if ("object" !== _typeof(actual) || null === actual) {
                        var err = new AssertionError({
                            actual,
                            expected,
                            message: msg,
                            operator: "deepStrictEqual",
                            stackStartFn: fn
                        });
                        err.operator = fn.name;
                        throw err;
                    }
                    var keys = Object.keys(expected);
                    if (expected instanceof Error) keys.push("name", "message"); else if (0 === keys.length) throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
                    if (void 0 === isDeepEqual) lazyLoadComparison();
                    keys.forEach((function(key) {
                        if ("string" === typeof actual[key] && isRegExp(expected[key]) && expected[key].test(actual[key])) return;
                        compareExceptionKey(actual, expected, key, msg, keys, fn);
                    }));
                    return true;
                }
                if (void 0 !== expected.prototype && actual instanceof expected) return true;
                if (Error.isPrototypeOf(expected)) return false;
                return true === expected.call({}, actual);
            }
            function getActual(fn) {
                if ("function" !== typeof fn) throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
                try {
                    fn();
                } catch (e) {
                    return e;
                }
                return NO_EXCEPTION_SENTINEL;
            }
            function checkIsPromise(obj) {
                return isPromise(obj) || null !== obj && "object" === _typeof(obj) && "function" === typeof obj.then && "function" === typeof obj.catch;
            }
            function waitForActual(promiseFn) {
                return Promise.resolve().then((function() {
                    var resultPromise;
                    if ("function" === typeof promiseFn) {
                        resultPromise = promiseFn();
                        if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
                    } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn; else throw new ERR_INVALID_ARG_TYPE("promiseFn", [ "Function", "Promise" ], promiseFn);
                    return Promise.resolve().then((function() {
                        return resultPromise;
                    })).then((function() {
                        return NO_EXCEPTION_SENTINEL;
                    })).catch((function(e) {
                        return e;
                    }));
                }));
            }
            function expectsError(stackStartFn, actual, error, message) {
                if ("string" === typeof error) {
                    if (4 === arguments.length) throw new ERR_INVALID_ARG_TYPE("error", [ "Object", "Error", "Function", "RegExp" ], error);
                    if ("object" === _typeof(actual) && null !== actual) {
                        if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
                    } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
                    message = error;
                    error = void 0;
                } else if (null != error && "object" !== _typeof(error) && "function" !== typeof error) throw new ERR_INVALID_ARG_TYPE("error", [ "Object", "Error", "Function", "RegExp" ], error);
                if (actual === NO_EXCEPTION_SENTINEL) {
                    var details = "";
                    if (error && error.name) details += " (".concat(error.name, ")");
                    details += message ? ": ".concat(message) : ".";
                    var fnType = "rejects" === stackStartFn.name ? "rejection" : "exception";
                    innerFail({
                        actual: void 0,
                        expected: error,
                        operator: stackStartFn.name,
                        message: "Missing expected ".concat(fnType).concat(details),
                        stackStartFn
                    });
                }
                if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
            }
            function expectsNoError(stackStartFn, actual, error, message) {
                if (actual === NO_EXCEPTION_SENTINEL) return;
                if ("string" === typeof error) {
                    message = error;
                    error = void 0;
                }
                if (!error || expectedException(actual, error)) {
                    var details = message ? ": ".concat(message) : ".";
                    var fnType = "doesNotReject" === stackStartFn.name ? "rejection" : "exception";
                    innerFail({
                        actual,
                        expected: error,
                        operator: stackStartFn.name,
                        message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
                        stackStartFn
                    });
                }
                throw actual;
            }
            assert.throws = function throws(promiseFn) {
                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
                expectsError.apply(void 0, [ throws, getActual(promiseFn) ].concat(args));
            };
            assert.rejects = function rejects(promiseFn) {
                for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
                return waitForActual(promiseFn).then((function(result) {
                    return expectsError.apply(void 0, [ rejects, result ].concat(args));
                }));
            };
            assert.doesNotThrow = function doesNotThrow(fn) {
                for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
                expectsNoError.apply(void 0, [ doesNotThrow, getActual(fn) ].concat(args));
            };
            assert.doesNotReject = function doesNotReject(fn) {
                for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) args[_key5 - 1] = arguments[_key5];
                return waitForActual(fn).then((function(result) {
                    return expectsNoError.apply(void 0, [ doesNotReject, result ].concat(args));
                }));
            };
            assert.ifError = function ifError(err) {
                if (null !== err && void 0 !== err) {
                    var message = "ifError got unwanted exception: ";
                    if ("object" === _typeof(err) && "string" === typeof err.message) if (0 === err.message.length && err.constructor) message += err.constructor.name; else message += err.message; else message += inspect(err);
                    var newErr = new AssertionError({
                        actual: err,
                        expected: null,
                        operator: "ifError",
                        message,
                        stackStartFn: ifError
                    });
                    var origStack = err.stack;
                    if ("string" === typeof origStack) {
                        var tmp2 = origStack.split("\n");
                        tmp2.shift();
                        var tmp1 = newErr.stack.split("\n");
                        for (var i = 0; i < tmp2.length; i++) {
                            var pos = tmp1.indexOf(tmp2[i]);
                            if (-1 !== pos) {
                                tmp1 = tmp1.slice(0, pos);
                                break;
                            }
                        }
                        newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
                    }
                    throw newErr;
                }
            };
            function strict() {
                for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) args[_key6] = arguments[_key6];
                innerOk.apply(void 0, [ strict, args.length ].concat(args));
            }
            assert.strict = objectAssign(strict, assert, {
                equal: assert.strictEqual,
                deepEqual: assert.deepStrictEqual,
                notEqual: assert.notStrictEqual,
                notDeepEqual: assert.notDeepStrictEqual
            });
            assert.strict.strict = assert.strict;
        },
        961: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var process = __webpack_require__(155);
            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    var ownKeys = Object.keys(source);
                    if ("function" === typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                    })));
                    ownKeys.forEach((function(key) {
                        _defineProperty(target, key, source[key]);
                    }));
                }
                return target;
            }
            function _defineProperty(obj, key, value) {
                if (key in obj) Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }); else obj[key] = value;
                return obj;
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            function _possibleConstructorReturn(self, call) {
                if (call && ("object" === _typeof(call) || "function" === typeof call)) return call;
                return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            }
            function _inherits(subClass, superClass) {
                if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _wrapNativeSuper(Class) {
                var _cache = "function" === typeof Map ? new Map : void 0;
                _wrapNativeSuper = function _wrapNativeSuper(Class) {
                    if (null === Class || !_isNativeFunction(Class)) return Class;
                    if ("function" !== typeof Class) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof _cache) {
                        if (_cache.has(Class)) return _cache.get(Class);
                        _cache.set(Class, Wrapper);
                    }
                    function Wrapper() {
                        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
                    }
                    Wrapper.prototype = Object.create(Class.prototype, {
                        constructor: {
                            value: Wrapper,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                    return _setPrototypeOf(Wrapper, Class);
                };
                return _wrapNativeSuper(Class);
            }
            function isNativeReflectConstruct() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return true;
                } catch (e) {
                    return false;
                }
            }
            function _construct(Parent, args, Class) {
                if (isNativeReflectConstruct()) _construct = Reflect.construct; else _construct = function _construct(Parent, args, Class) {
                    var a = [ null ];
                    a.push.apply(a, args);
                    var Constructor = Function.bind.apply(Parent, a);
                    var instance = new Constructor;
                    if (Class) _setPrototypeOf(instance, Class.prototype);
                    return instance;
                };
                return _construct.apply(null, arguments);
            }
            function _isNativeFunction(fn) {
                return -1 !== Function.toString.call(fn).indexOf("[native code]");
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            function _typeof(obj) {
                if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
                    return typeof obj;
                }; else _typeof = function _typeof(obj) {
                    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            var _require = __webpack_require__(539), inspect = _require.inspect;
            var _require2 = __webpack_require__(136), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE;
            function endsWith(str, search, this_len) {
                if (void 0 === this_len || this_len > str.length) this_len = str.length;
                return str.substring(this_len - search.length, this_len) === search;
            }
            function repeat(str, count) {
                count = Math.floor(count);
                if (0 == str.length || 0 == count) return "";
                var maxCount = str.length * count;
                count = Math.floor(Math.log(count) / Math.log(2));
                while (count) {
                    str += str;
                    count--;
                }
                str += str.substring(0, maxCount - str.length);
                return str;
            }
            var blue = "";
            var green = "";
            var red = "";
            var white = "";
            var kReadableOperator = {
                deepStrictEqual: "Expected values to be strictly deep-equal:",
                strictEqual: "Expected values to be strictly equal:",
                strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                deepEqual: "Expected values to be loosely deep-equal:",
                equal: "Expected values to be loosely equal:",
                notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                notEqual: 'Expected "actual" to be loosely unequal to:',
                notIdentical: "Values identical but not reference-equal:"
            };
            var kMaxShortLength = 10;
            function copyError(source) {
                var keys = Object.keys(source);
                var target = Object.create(Object.getPrototypeOf(source));
                keys.forEach((function(key) {
                    target[key] = source[key];
                }));
                Object.defineProperty(target, "message", {
                    value: source.message
                });
                return target;
            }
            function inspectValue(val) {
                return inspect(val, {
                    compact: false,
                    customInspect: false,
                    depth: 1e3,
                    maxArrayLength: 1 / 0,
                    showHidden: false,
                    breakLength: 1 / 0,
                    showProxy: false,
                    sorted: true,
                    getters: true
                });
            }
            function createErrDiff(actual, expected, operator) {
                var other = "";
                var res = "";
                var lastPos = 0;
                var end = "";
                var skipped = false;
                var actualInspected = inspectValue(actual);
                var actualLines = actualInspected.split("\n");
                var expectedLines = inspectValue(expected).split("\n");
                var i = 0;
                var indicator = "";
                if ("strictEqual" === operator && "object" === _typeof(actual) && "object" === _typeof(expected) && null !== actual && null !== expected) operator = "strictEqualObject";
                if (1 === actualLines.length && 1 === expectedLines.length && actualLines[0] !== expectedLines[0]) {
                    var inputLength = actualLines[0].length + expectedLines[0].length;
                    if (inputLength <= kMaxShortLength) {
                        if (("object" !== _typeof(actual) || null === actual) && ("object" !== _typeof(expected) || null === expected) && (0 !== actual || 0 !== expected)) return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
                    } else if ("strictEqualObject" !== operator) {
                        var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
                        if (inputLength < maxLength) {
                            while (actualLines[0][i] === expectedLines[0][i]) i++;
                            if (i > 2) {
                                indicator = "\n  ".concat(repeat(" ", i), "^");
                                i = 0;
                            }
                        }
                    }
                }
                var a = actualLines[actualLines.length - 1];
                var b = expectedLines[expectedLines.length - 1];
                while (a === b) {
                    if (i++ < 2) end = "\n  ".concat(a).concat(end); else other = a;
                    actualLines.pop();
                    expectedLines.pop();
                    if (0 === actualLines.length || 0 === expectedLines.length) break;
                    a = actualLines[actualLines.length - 1];
                    b = expectedLines[expectedLines.length - 1];
                }
                var maxLines = Math.max(actualLines.length, expectedLines.length);
                if (0 === maxLines) {
                    var _actualLines = actualInspected.split("\n");
                    if (_actualLines.length > 30) {
                        _actualLines[26] = "".concat(blue, "...").concat(white);
                        while (_actualLines.length > 27) _actualLines.pop();
                    }
                    return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
                }
                if (i > 3) {
                    end = "\n".concat(blue, "...").concat(white).concat(end);
                    skipped = true;
                }
                if ("" !== other) {
                    end = "\n  ".concat(other).concat(end);
                    other = "";
                }
                var printedLines = 0;
                var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
                var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
                for (i = 0; i < maxLines; i++) {
                    var cur = i - lastPos;
                    if (actualLines.length < i + 1) {
                        if (cur > 1 && i > 2) {
                            if (cur > 4) {
                                res += "\n".concat(blue, "...").concat(white);
                                skipped = true;
                            } else if (cur > 3) {
                                res += "\n  ".concat(expectedLines[i - 2]);
                                printedLines++;
                            }
                            res += "\n  ".concat(expectedLines[i - 1]);
                            printedLines++;
                        }
                        lastPos = i;
                        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
                        printedLines++;
                    } else if (expectedLines.length < i + 1) {
                        if (cur > 1 && i > 2) {
                            if (cur > 4) {
                                res += "\n".concat(blue, "...").concat(white);
                                skipped = true;
                            } else if (cur > 3) {
                                res += "\n  ".concat(actualLines[i - 2]);
                                printedLines++;
                            }
                            res += "\n  ".concat(actualLines[i - 1]);
                            printedLines++;
                        }
                        lastPos = i;
                        res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
                        printedLines++;
                    } else {
                        var expectedLine = expectedLines[i];
                        var actualLine = actualLines[i];
                        var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine);
                        if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
                            divergingLines = false;
                            actualLine += ",";
                        }
                        if (divergingLines) {
                            if (cur > 1 && i > 2) {
                                if (cur > 4) {
                                    res += "\n".concat(blue, "...").concat(white);
                                    skipped = true;
                                } else if (cur > 3) {
                                    res += "\n  ".concat(actualLines[i - 2]);
                                    printedLines++;
                                }
                                res += "\n  ".concat(actualLines[i - 1]);
                                printedLines++;
                            }
                            lastPos = i;
                            res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                            printedLines += 2;
                        } else {
                            res += other;
                            other = "";
                            if (1 === cur || 0 === i) {
                                res += "\n  ".concat(actualLine);
                                printedLines++;
                            }
                        }
                    }
                    if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
                }
                return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
            }
            var AssertionError = function(_Error) {
                _inherits(AssertionError, _Error);
                function AssertionError(options) {
                    var _this;
                    _classCallCheck(this, AssertionError);
                    if ("object" !== _typeof(options) || null === options) throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
                    var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
                    var actual = options.actual, expected = options.expected;
                    var limit = Error.stackTraceLimit;
                    Error.stackTraceLimit = 0;
                    if (null != message) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message))); else {
                        if (process.stderr && process.stderr.isTTY) if (process.stderr && process.stderr.getColorDepth && 1 !== process.stderr.getColorDepth()) {
                            blue = "[34m";
                            green = "[32m";
                            white = "[39m";
                            red = "[31m";
                        } else {
                            blue = "";
                            green = "";
                            white = "";
                            red = "";
                        }
                        if ("object" === _typeof(actual) && null !== actual && "object" === _typeof(expected) && null !== expected && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
                            actual = copyError(actual);
                            expected = copyError(expected);
                        }
                        if ("deepStrictEqual" === operator || "strictEqual" === operator) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator))); else if ("notDeepStrictEqual" === operator || "notStrictEqual" === operator) {
                            var base = kReadableOperator[operator];
                            var res = inspectValue(actual).split("\n");
                            if ("notStrictEqual" === operator && "object" === _typeof(actual) && null !== actual) base = kReadableOperator.notStrictEqualObject;
                            if (res.length > 30) {
                                res[26] = "".concat(blue, "...").concat(white);
                                while (res.length > 27) res.pop();
                            }
                            if (1 === res.length) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0]))); else _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n")));
                        } else {
                            var _res = inspectValue(actual);
                            var other = "";
                            var knownOperators = kReadableOperator[operator];
                            if ("notDeepEqual" === operator || "notEqual" === operator) {
                                _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                                if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                            } else {
                                other = "".concat(inspectValue(expected));
                                if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                                if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                                if ("deepEqual" === operator || "equal" === operator) _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n"); else other = " ".concat(operator, " ").concat(other);
                            }
                            _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
                        }
                    }
                    Error.stackTraceLimit = limit;
                    _this.generatedMessage = !message;
                    Object.defineProperty(_assertThisInitialized(_this), "name", {
                        value: "AssertionError [ERR_ASSERTION]",
                        enumerable: false,
                        writable: true,
                        configurable: true
                    });
                    _this.code = "ERR_ASSERTION";
                    _this.actual = actual;
                    _this.expected = expected;
                    _this.operator = operator;
                    if (Error.captureStackTrace) Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
                    _this.stack;
                    _this.name = "AssertionError";
                    return _possibleConstructorReturn(_this);
                }
                _createClass(AssertionError, [ {
                    key: "toString",
                    value: function toString() {
                        return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
                    }
                }, {
                    key: inspect.custom,
                    value: function value(recurseTimes, ctx) {
                        return inspect(this, _objectSpread({}, ctx, {
                            customInspect: false,
                            depth: 0
                        }));
                    }
                } ]);
                return AssertionError;
            }(_wrapNativeSuper(Error));
            module.exports = AssertionError;
        },
        136: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            function _typeof(obj) {
                if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
                    return typeof obj;
                }; else _typeof = function _typeof(obj) {
                    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            function _possibleConstructorReturn(self, call) {
                if (call && ("object" === _typeof(call) || "function" === typeof call)) return call;
                return _assertThisInitialized(self);
            }
            function _assertThisInitialized(self) {
                if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return self;
            }
            function _getPrototypeOf(o) {
                _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                    return o.__proto__ || Object.getPrototypeOf(o);
                };
                return _getPrototypeOf(o);
            }
            function _inherits(subClass, superClass) {
                if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
                subClass.prototype = Object.create(superClass && superClass.prototype, {
                    constructor: {
                        value: subClass,
                        writable: true,
                        configurable: true
                    }
                });
                if (superClass) _setPrototypeOf(subClass, superClass);
            }
            function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                    o.__proto__ = p;
                    return o;
                };
                return _setPrototypeOf(o, p);
            }
            var codes = {};
            var assert;
            var util;
            function createErrorType(code, message, Base) {
                if (!Base) Base = Error;
                function getMessage(arg1, arg2, arg3) {
                    if ("string" === typeof message) return message; else return message(arg1, arg2, arg3);
                }
                var NodeError = function(_Base) {
                    _inherits(NodeError, _Base);
                    function NodeError(arg1, arg2, arg3) {
                        var _this;
                        _classCallCheck(this, NodeError);
                        _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
                        _this.code = code;
                        return _this;
                    }
                    return NodeError;
                }(Base);
                codes[code] = NodeError;
            }
            function oneOf(expected, thing) {
                if (Array.isArray(expected)) {
                    var len = expected.length;
                    expected = expected.map((function(i) {
                        return String(i);
                    }));
                    if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1]; else if (2 === len) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]); else return "of ".concat(thing, " ").concat(expected[0]);
                } else return "of ".concat(thing, " ").concat(String(expected));
            }
            function startsWith(str, search, pos) {
                return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
            }
            function endsWith(str, search, this_len) {
                if (void 0 === this_len || this_len > str.length) this_len = str.length;
                return str.substring(this_len - search.length, this_len) === search;
            }
            function includes(str, search, start) {
                if ("number" !== typeof start) start = 0;
                if (start + search.length > str.length) return false; else return -1 !== str.indexOf(search, start);
            }
            createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
            createErrorType("ERR_INVALID_ARG_TYPE", (function(name, expected, actual) {
                if (void 0 === assert) assert = __webpack_require__(282);
                assert("string" === typeof name, "'name' must be a string");
                var determiner;
                if ("string" === typeof expected && startsWith(expected, "not ")) {
                    determiner = "must not be";
                    expected = expected.replace(/^not /, "");
                } else determiner = "must be";
                var msg;
                if (endsWith(name, " argument")) msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type")); else {
                    var type = includes(name, ".") ? "property" : "argument";
                    msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
                }
                msg += ". Received type ".concat(_typeof(actual));
                return msg;
            }), TypeError);
            createErrorType("ERR_INVALID_ARG_VALUE", (function(name, value) {
                var reason = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                if (void 0 === util) util = __webpack_require__(539);
                var inspected = util.inspect(value);
                if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
                return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
            }), TypeError, RangeError);
            createErrorType("ERR_INVALID_RETURN_VALUE", (function(input, name, value) {
                var type;
                if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name); else type = "type ".concat(_typeof(value));
                return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
            }), TypeError);
            createErrorType("ERR_MISSING_ARGS", (function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (void 0 === assert) assert = __webpack_require__(282);
                assert(args.length > 0, "At least one arg needs to be specified");
                var msg = "The ";
                var len = args.length;
                args = args.map((function(a) {
                    return '"'.concat(a, '"');
                }));
                switch (len) {
                  case 1:
                    msg += "".concat(args[0], " argument");
                    break;

                  case 2:
                    msg += "".concat(args[0], " and ").concat(args[1], " arguments");
                    break;

                  default:
                    msg += args.slice(0, len - 1).join(", ");
                    msg += ", and ".concat(args[len - 1], " arguments");
                    break;
                }
                return "".concat(msg, " must be specified");
            }), TypeError);
            module.exports.codes = codes;
        },
        158: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            function _slicedToArray(arr, i) {
                return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
            }
            function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
            function _iterableToArrayLimit(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && null != _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            function _arrayWithHoles(arr) {
                if (Array.isArray(arr)) return arr;
            }
            function _typeof(obj) {
                if ("function" === typeof Symbol && "symbol" === typeof Symbol.iterator) _typeof = function _typeof(obj) {
                    return typeof obj;
                }; else _typeof = function _typeof(obj) {
                    return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
                return _typeof(obj);
            }
            var regexFlagsSupported = void 0 !== /a/g.flags;
            var arrayFromSet = function arrayFromSet(set) {
                var array = [];
                set.forEach((function(value) {
                    return array.push(value);
                }));
                return array;
            };
            var arrayFromMap = function arrayFromMap(map) {
                var array = [];
                map.forEach((function(value, key) {
                    return array.push([ key, value ]);
                }));
                return array;
            };
            var objectIs = Object.is ? Object.is : __webpack_require__(609);
            var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                return [];
            };
            var numberIsNaN = Number.isNaN ? Number.isNaN : __webpack_require__(360);
            function uncurryThis(f) {
                return f.call.bind(f);
            }
            var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
            var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
            var objectToString = uncurryThis(Object.prototype.toString);
            var _require$types = __webpack_require__(539).types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
            function isNonIndex(key) {
                if (0 === key.length || key.length > 10) return true;
                for (var i = 0; i < key.length; i++) {
                    var code = key.charCodeAt(i);
                    if (code < 48 || code > 57) return true;
                }
                return 10 === key.length && key >= Math.pow(2, 32);
            }
            function getOwnNonIndexProperties(value) {
                return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
            }
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */            function compare(a, b) {
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
                    x = a[i];
                    y = b[i];
                    break;
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            }
            var ONLY_ENUMERABLE = void 0;
            var kStrict = true;
            var kLoose = false;
            var kNoIterator = 0;
            var kIsArray = 1;
            var kIsSet = 2;
            var kIsMap = 3;
            function areSimilarRegExps(a, b) {
                return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
            }
            function areSimilarFloatArrays(a, b) {
                if (a.byteLength !== b.byteLength) return false;
                for (var offset = 0; offset < a.byteLength; offset++) if (a[offset] !== b[offset]) return false;
                return true;
            }
            function areSimilarTypedArrays(a, b) {
                if (a.byteLength !== b.byteLength) return false;
                return 0 === compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength));
            }
            function areEqualArrayBuffers(buf1, buf2) {
                return buf1.byteLength === buf2.byteLength && 0 === compare(new Uint8Array(buf1), new Uint8Array(buf2));
            }
            function isEqualBoxedPrimitive(val1, val2) {
                if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
                if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
                if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
                if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
                return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
            }
            function innerDeepEqual(val1, val2, strict, memos) {
                if (val1 === val2) {
                    if (0 !== val1) return true;
                    return strict ? objectIs(val1, val2) : true;
                }
                if (strict) {
                    if ("object" !== _typeof(val1)) return "number" === typeof val1 && numberIsNaN(val1) && numberIsNaN(val2);
                    if ("object" !== _typeof(val2) || null === val1 || null === val2) return false;
                    if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
                } else {
                    if (null === val1 || "object" !== _typeof(val1)) {
                        if (null === val2 || "object" !== _typeof(val2)) return val1 == val2;
                        return false;
                    }
                    if (null === val2 || "object" !== _typeof(val2)) return false;
                }
                var val1Tag = objectToString(val1);
                var val2Tag = objectToString(val2);
                if (val1Tag !== val2Tag) return false;
                if (Array.isArray(val1)) {
                    if (val1.length !== val2.length) return false;
                    var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
                    var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
                    if (keys1.length !== keys2.length) return false;
                    return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
                }
                if ("[object Object]" === val1Tag) if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
                if (isDate(val1)) {
                    if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
                } else if (isRegExp(val1)) {
                    if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
                } else if (isNativeError(val1) || val1 instanceof Error) {
                    if (val1.message !== val2.message || val1.name !== val2.name) return false;
                } else if (isArrayBufferView(val1)) {
                    if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
                        if (!areSimilarFloatArrays(val1, val2)) return false;
                    } else if (!areSimilarTypedArrays(val1, val2)) return false;
                    var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
                    var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
                    if (_keys.length !== _keys2.length) return false;
                    return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
                } else if (isSet(val1)) {
                    if (!isSet(val2) || val1.size !== val2.size) return false;
                    return keyCheck(val1, val2, strict, memos, kIsSet);
                } else if (isMap(val1)) {
                    if (!isMap(val2) || val1.size !== val2.size) return false;
                    return keyCheck(val1, val2, strict, memos, kIsMap);
                } else if (isAnyArrayBuffer(val1)) {
                    if (!areEqualArrayBuffers(val1, val2)) return false;
                } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
                return keyCheck(val1, val2, strict, memos, kNoIterator);
            }
            function getEnumerables(val, keys) {
                return keys.filter((function(k) {
                    return propertyIsEnumerable(val, k);
                }));
            }
            function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
                if (5 === arguments.length) {
                    aKeys = Object.keys(val1);
                    var bKeys = Object.keys(val2);
                    if (aKeys.length !== bKeys.length) return false;
                }
                var i = 0;
                for (;i < aKeys.length; i++) if (!hasOwnProperty(val2, aKeys[i])) return false;
                if (strict && 5 === arguments.length) {
                    var symbolKeysA = objectGetOwnPropertySymbols(val1);
                    if (0 !== symbolKeysA.length) {
                        var count = 0;
                        for (i = 0; i < symbolKeysA.length; i++) {
                            var key = symbolKeysA[i];
                            if (propertyIsEnumerable(val1, key)) {
                                if (!propertyIsEnumerable(val2, key)) return false;
                                aKeys.push(key);
                                count++;
                            } else if (propertyIsEnumerable(val2, key)) return false;
                        }
                        var symbolKeysB = objectGetOwnPropertySymbols(val2);
                        if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
                    } else {
                        var _symbolKeysB = objectGetOwnPropertySymbols(val2);
                        if (0 !== _symbolKeysB.length && 0 !== getEnumerables(val2, _symbolKeysB).length) return false;
                    }
                }
                if (0 === aKeys.length && (iterationType === kNoIterator || iterationType === kIsArray && 0 === val1.length || 0 === val1.size)) return true;
                if (void 0 === memos) memos = {
                    val1: new Map,
                    val2: new Map,
                    position: 0
                }; else {
                    var val2MemoA = memos.val1.get(val1);
                    if (void 0 !== val2MemoA) {
                        var val2MemoB = memos.val2.get(val2);
                        if (void 0 !== val2MemoB) return val2MemoA === val2MemoB;
                    }
                    memos.position++;
                }
                memos.val1.set(val1, memos.position);
                memos.val2.set(val2, memos.position);
                var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
                memos.val1.delete(val1);
                memos.val2.delete(val2);
                return areEq;
            }
            function setHasEqualElement(set, val1, strict, memo) {
                var setValues = arrayFromSet(set);
                for (var i = 0; i < setValues.length; i++) {
                    var val2 = setValues[i];
                    if (innerDeepEqual(val1, val2, strict, memo)) {
                        set.delete(val2);
                        return true;
                    }
                }
                return false;
            }
            function findLooseMatchingPrimitives(prim) {
                switch (_typeof(prim)) {
                  case "undefined":
                    return null;

                  case "object":
                    return;

                  case "symbol":
                    return false;

                  case "string":
                    prim = +prim;

                  case "number":
                    if (numberIsNaN(prim)) return false;
                }
                return true;
            }
            function setMightHaveLoosePrim(a, b, prim) {
                var altValue = findLooseMatchingPrimitives(prim);
                if (null != altValue) return altValue;
                return b.has(altValue) && !a.has(altValue);
            }
            function mapMightHaveLoosePrim(a, b, prim, item, memo) {
                var altValue = findLooseMatchingPrimitives(prim);
                if (null != altValue) return altValue;
                var curB = b.get(altValue);
                if (void 0 === curB && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
                return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
            }
            function setEquiv(a, b, strict, memo) {
                var set = null;
                var aValues = arrayFromSet(a);
                for (var i = 0; i < aValues.length; i++) {
                    var val = aValues[i];
                    if ("object" === _typeof(val) && null !== val) {
                        if (null === set) set = new Set;
                        set.add(val);
                    } else if (!b.has(val)) {
                        if (strict) return false;
                        if (!setMightHaveLoosePrim(a, b, val)) return false;
                        if (null === set) set = new Set;
                        set.add(val);
                    }
                }
                if (null !== set) {
                    var bValues = arrayFromSet(b);
                    for (var _i = 0; _i < bValues.length; _i++) {
                        var _val = bValues[_i];
                        if ("object" === _typeof(_val) && null !== _val) {
                            if (!setHasEqualElement(set, _val, strict, memo)) return false;
                        } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
                    }
                    return 0 === set.size;
                }
                return true;
            }
            function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
                var setValues = arrayFromSet(set);
                for (var i = 0; i < setValues.length; i++) {
                    var key2 = setValues[i];
                    if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
                        set.delete(key2);
                        return true;
                    }
                }
                return false;
            }
            function mapEquiv(a, b, strict, memo) {
                var set = null;
                var aEntries = arrayFromMap(a);
                for (var i = 0; i < aEntries.length; i++) {
                    var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
                    if ("object" === _typeof(key) && null !== key) {
                        if (null === set) set = new Set;
                        set.add(key);
                    } else {
                        var item2 = b.get(key);
                        if (void 0 === item2 && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                            if (strict) return false;
                            if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                            if (null === set) set = new Set;
                            set.add(key);
                        }
                    }
                }
                if (null !== set) {
                    var bEntries = arrayFromMap(b);
                    for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
                        var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), item = (key = _bEntries$_i[0], 
                        _bEntries$_i[1]);
                        if ("object" === _typeof(key) && null !== key) {
                            if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
                        } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) return false;
                    }
                    return 0 === set.size;
                }
                return true;
            }
            function objEquiv(a, b, strict, keys, memos, iterationType) {
                var i = 0;
                if (iterationType === kIsSet) {
                    if (!setEquiv(a, b, strict, memos)) return false;
                } else if (iterationType === kIsMap) {
                    if (!mapEquiv(a, b, strict, memos)) return false;
                } else if (iterationType === kIsArray) for (;i < a.length; i++) if (hasOwnProperty(a, i)) {
                    if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
                } else if (hasOwnProperty(b, i)) return false; else {
                    var keysA = Object.keys(a);
                    for (;i < keysA.length; i++) {
                        var key = keysA[i];
                        if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
                    }
                    if (keysA.length !== Object.keys(b).length) return false;
                    return true;
                }
                for (i = 0; i < keys.length; i++) {
                    var _key = keys[i];
                    if (!innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
                }
                return true;
            }
            function isDeepEqual(val1, val2) {
                return innerDeepEqual(val1, val2, kLoose);
            }
            function isDeepStrictEqual(val1, val2) {
                return innerDeepEqual(val1, val2, kStrict);
            }
            module.exports = {
                isDeepEqual,
                isDeepStrictEqual
            };
        },
        924: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__(210);
            var callBind = __webpack_require__(559);
            var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
            module.exports = function callBoundIntrinsic(name, allowMissing) {
                var intrinsic = GetIntrinsic(name, !!allowMissing);
                if ("function" === typeof intrinsic && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
                return intrinsic;
            };
        },
        559: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var bind = __webpack_require__(612);
            var GetIntrinsic = __webpack_require__(210);
            var $apply = GetIntrinsic("%Function.prototype.apply%");
            var $call = GetIntrinsic("%Function.prototype.call%");
            var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
            var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
            var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
            var $max = GetIntrinsic("%Math.max%");
            if ($defineProperty) try {
                $defineProperty({}, "a", {
                    value: 1
                });
            } catch (e) {
                $defineProperty = null;
            }
            module.exports = function callBind(originalFunction) {
                var func = $reflectApply(bind, $call, arguments);
                if ($gOPD && $defineProperty) {
                    var desc = $gOPD(func, "length");
                    if (desc.configurable) $defineProperty(func, "length", {
                        value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
                    });
                }
                return func;
            };
            var applyBind = function applyBind() {
                return $reflectApply(bind, $apply, arguments);
            };
            if ($defineProperty) $defineProperty(module.exports, "apply", {
                value: applyBind
            }); else module.exports.apply = applyBind;
        },
        108: (module, __unused_webpack_exports, __webpack_require__) => {
            var util = __webpack_require__(539);
            var assert = __webpack_require__(282);
            function now() {
                return (new Date).getTime();
            }
            var slice = Array.prototype.slice;
            var console;
            var times = {};
            if ("undefined" !== typeof __webpack_require__.g && __webpack_require__.g.console) console = __webpack_require__.g.console; else if ("undefined" !== typeof window && window.console) console = window.console; else console = {};
            var functions = [ [ log, "log" ], [ info, "info" ], [ warn, "warn" ], [ error, "error" ], [ time, "time" ], [ timeEnd, "timeEnd" ], [ trace, "trace" ], [ dir, "dir" ], [ consoleAssert, "assert" ] ];
            for (var i = 0; i < functions.length; i++) {
                var tuple = functions[i];
                var f = tuple[0];
                var name = tuple[1];
                if (!console[name]) console[name] = f;
            }
            module.exports = console;
            function log() {}
            function info() {
                console.log.apply(console, arguments);
            }
            function warn() {
                console.log.apply(console, arguments);
            }
            function error() {
                console.warn.apply(console, arguments);
            }
            function time(label) {
                times[label] = now();
            }
            function timeEnd(label) {
                var time = times[label];
                if (!time) throw new Error("No such label: " + label);
                delete times[label];
                var duration = now() - time;
                console.log(label + ": " + duration + "ms");
            }
            function trace() {
                var err = new Error;
                err.name = "Trace";
                err.message = util.format.apply(null, arguments);
                console.error(err.stack);
            }
            function dir(object) {
                console.log(util.inspect(object) + "\n");
            }
            function consoleAssert(expression) {
                if (!expression) {
                    var arr = slice.call(arguments, 1);
                    assert.ok(false, util.format.apply(null, arr));
                }
            }
        },
        289: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var keys = __webpack_require__(215);
            var hasSymbols = "function" === typeof Symbol && "symbol" === typeof Symbol("foo");
            var toStr = Object.prototype.toString;
            var concat = Array.prototype.concat;
            var origDefineProperty = Object.defineProperty;
            var isFunction = function(fn) {
                return "function" === typeof fn && "[object Function]" === toStr.call(fn);
            };
            var hasPropertyDescriptors = __webpack_require__(44)();
            var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
            var defineProperty = function(object, name, value, predicate) {
                if (name in object && (!isFunction(predicate) || !predicate())) return;
                if (supportsDescriptors) origDefineProperty(object, name, {
                    configurable: true,
                    enumerable: false,
                    value,
                    writable: true
                }); else object[name] = value;
            };
            var defineProperties = function(object, map) {
                var predicates = arguments.length > 2 ? arguments[2] : {};
                var props = keys(map);
                if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
                for (var i = 0; i < props.length; i += 1) defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
            };
            defineProperties.supportsDescriptors = !!supportsDescriptors;
            module.exports = defineProperties;
        },
        91: module => {
            "use strict";
            function assign(target, firstSource) {
                if (void 0 === target || null === target) throw new TypeError("Cannot convert first argument to object");
                var to = Object(target);
                for (var i = 1; i < arguments.length; i++) {
                    var nextSource = arguments[i];
                    if (void 0 === nextSource || null === nextSource) continue;
                    var keysArray = Object.keys(Object(nextSource));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) to[nextKey] = nextSource[nextKey];
                    }
                }
                return to;
            }
            function polyfill() {
                if (!Object.assign) Object.defineProperty(Object, "assign", {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: assign
                });
            }
            module.exports = {
                assign,
                polyfill
            };
        },
        29: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var isCallable = __webpack_require__(320);
            var toStr = Object.prototype.toString;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var forEachArray = function forEachArray(array, iterator, receiver) {
                for (var i = 0, len = array.length; i < len; i++) if (hasOwnProperty.call(array, i)) if (null == receiver) iterator(array[i], i, array); else iterator.call(receiver, array[i], i, array);
            };
            var forEachString = function forEachString(string, iterator, receiver) {
                for (var i = 0, len = string.length; i < len; i++) if (null == receiver) iterator(string.charAt(i), i, string); else iterator.call(receiver, string.charAt(i), i, string);
            };
            var forEachObject = function forEachObject(object, iterator, receiver) {
                for (var k in object) if (hasOwnProperty.call(object, k)) if (null == receiver) iterator(object[k], k, object); else iterator.call(receiver, object[k], k, object);
            };
            var forEach = function forEach(list, iterator, thisArg) {
                if (!isCallable(iterator)) throw new TypeError("iterator must be a function");
                var receiver;
                if (arguments.length >= 3) receiver = thisArg;
                if ("[object Array]" === toStr.call(list)) forEachArray(list, iterator, receiver); else if ("string" === typeof list) forEachString(list, iterator, receiver); else forEachObject(list, iterator, receiver);
            };
            module.exports = forEach;
        },
        648: module => {
            "use strict";
            var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
            var slice = Array.prototype.slice;
            var toStr = Object.prototype.toString;
            var funcType = "[object Function]";
            module.exports = function bind(that) {
                var target = this;
                if ("function" !== typeof target || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
                var args = slice.call(arguments, 1);
                var bound;
                var binder = function() {
                    if (this instanceof bound) {
                        var result = target.apply(this, args.concat(slice.call(arguments)));
                        if (Object(result) === result) return result;
                        return this;
                    } else return target.apply(that, args.concat(slice.call(arguments)));
                };
                var boundLength = Math.max(0, target.length - args.length);
                var boundArgs = [];
                for (var i = 0; i < boundLength; i++) boundArgs.push("$" + i);
                bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
                if (target.prototype) {
                    var Empty = function Empty() {};
                    Empty.prototype = target.prototype;
                    bound.prototype = new Empty;
                    Empty.prototype = null;
                }
                return bound;
            };
        },
        612: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var implementation = __webpack_require__(648);
            module.exports = Function.prototype.bind || implementation;
        },
        210: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var undefined;
            var $SyntaxError = SyntaxError;
            var $Function = Function;
            var $TypeError = TypeError;
            var getEvalledConstructor = function(expressionSyntax) {
                try {
                    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
                } catch (e) {}
            };
            var $gOPD = Object.getOwnPropertyDescriptor;
            if ($gOPD) try {
                $gOPD({}, "");
            } catch (e) {
                $gOPD = null;
            }
            var throwTypeError = function() {
                throw new $TypeError;
            };
            var ThrowTypeError = $gOPD ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (calleeThrows) {
                    try {
                        return $gOPD(arguments, "callee").get;
                    } catch (gOPDthrows) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var hasSymbols = __webpack_require__(405)();
            var getProto = Object.getPrototypeOf || function(x) {
                return x.__proto__;
            };
            var needsEval = {};
            var TypedArray = "undefined" === typeof Uint8Array ? undefined : getProto(Uint8Array);
            var INTRINSICS = {
                "%AggregateError%": "undefined" === typeof AggregateError ? undefined : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? undefined : ArrayBuffer,
                "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
                "%AsyncFromSyncIteratorPrototype%": undefined,
                "%AsyncFunction%": needsEval,
                "%AsyncGenerator%": needsEval,
                "%AsyncGeneratorFunction%": needsEval,
                "%AsyncIteratorPrototype%": needsEval,
                "%Atomics%": "undefined" === typeof Atomics ? undefined : Atomics,
                "%BigInt%": "undefined" === typeof BigInt ? undefined : BigInt,
                "%Boolean%": Boolean,
                "%DataView%": "undefined" === typeof DataView ? undefined : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": "undefined" === typeof Float32Array ? undefined : Float32Array,
                "%Float64Array%": "undefined" === typeof Float64Array ? undefined : Float64Array,
                "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? undefined : FinalizationRegistry,
                "%Function%": $Function,
                "%GeneratorFunction%": needsEval,
                "%Int8Array%": "undefined" === typeof Int8Array ? undefined : Int8Array,
                "%Int16Array%": "undefined" === typeof Int16Array ? undefined : Int16Array,
                "%Int32Array%": "undefined" === typeof Int32Array ? undefined : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
                "%JSON%": "object" === typeof JSON ? JSON : undefined,
                "%Map%": "undefined" === typeof Map ? undefined : Map,
                "%MapIteratorPrototype%": "undefined" === typeof Map || !hasSymbols ? undefined : getProto((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" === typeof Promise ? undefined : Promise,
                "%Proxy%": "undefined" === typeof Proxy ? undefined : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": "undefined" === typeof Reflect ? undefined : Reflect,
                "%RegExp%": RegExp,
                "%Set%": "undefined" === typeof Set ? undefined : Set,
                "%SetIteratorPrototype%": "undefined" === typeof Set || !hasSymbols ? undefined : getProto((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? undefined : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined,
                "%Symbol%": hasSymbols ? Symbol : undefined,
                "%SyntaxError%": $SyntaxError,
                "%ThrowTypeError%": ThrowTypeError,
                "%TypedArray%": TypedArray,
                "%TypeError%": $TypeError,
                "%Uint8Array%": "undefined" === typeof Uint8Array ? undefined : Uint8Array,
                "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? undefined : Uint8ClampedArray,
                "%Uint16Array%": "undefined" === typeof Uint16Array ? undefined : Uint16Array,
                "%Uint32Array%": "undefined" === typeof Uint32Array ? undefined : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": "undefined" === typeof WeakMap ? undefined : WeakMap,
                "%WeakRef%": "undefined" === typeof WeakRef ? undefined : WeakRef,
                "%WeakSet%": "undefined" === typeof WeakSet ? undefined : WeakSet
            };
            var doEval = function doEval(name) {
                var value;
                if ("%AsyncFunction%" === name) value = getEvalledConstructor("async function () {}"); else if ("%GeneratorFunction%" === name) value = getEvalledConstructor("function* () {}"); else if ("%AsyncGeneratorFunction%" === name) value = getEvalledConstructor("async function* () {}"); else if ("%AsyncGenerator%" === name) {
                    var fn = doEval("%AsyncGeneratorFunction%");
                    if (fn) value = fn.prototype;
                } else if ("%AsyncIteratorPrototype%" === name) {
                    var gen = doEval("%AsyncGenerator%");
                    if (gen) value = getProto(gen.prototype);
                }
                INTRINSICS[name] = value;
                return value;
            };
            var LEGACY_ALIASES = {
                "%ArrayBufferPrototype%": [ "ArrayBuffer", "prototype" ],
                "%ArrayPrototype%": [ "Array", "prototype" ],
                "%ArrayProto_entries%": [ "Array", "prototype", "entries" ],
                "%ArrayProto_forEach%": [ "Array", "prototype", "forEach" ],
                "%ArrayProto_keys%": [ "Array", "prototype", "keys" ],
                "%ArrayProto_values%": [ "Array", "prototype", "values" ],
                "%AsyncFunctionPrototype%": [ "AsyncFunction", "prototype" ],
                "%AsyncGenerator%": [ "AsyncGeneratorFunction", "prototype" ],
                "%AsyncGeneratorPrototype%": [ "AsyncGeneratorFunction", "prototype", "prototype" ],
                "%BooleanPrototype%": [ "Boolean", "prototype" ],
                "%DataViewPrototype%": [ "DataView", "prototype" ],
                "%DatePrototype%": [ "Date", "prototype" ],
                "%ErrorPrototype%": [ "Error", "prototype" ],
                "%EvalErrorPrototype%": [ "EvalError", "prototype" ],
                "%Float32ArrayPrototype%": [ "Float32Array", "prototype" ],
                "%Float64ArrayPrototype%": [ "Float64Array", "prototype" ],
                "%FunctionPrototype%": [ "Function", "prototype" ],
                "%Generator%": [ "GeneratorFunction", "prototype" ],
                "%GeneratorPrototype%": [ "GeneratorFunction", "prototype", "prototype" ],
                "%Int8ArrayPrototype%": [ "Int8Array", "prototype" ],
                "%Int16ArrayPrototype%": [ "Int16Array", "prototype" ],
                "%Int32ArrayPrototype%": [ "Int32Array", "prototype" ],
                "%JSONParse%": [ "JSON", "parse" ],
                "%JSONStringify%": [ "JSON", "stringify" ],
                "%MapPrototype%": [ "Map", "prototype" ],
                "%NumberPrototype%": [ "Number", "prototype" ],
                "%ObjectPrototype%": [ "Object", "prototype" ],
                "%ObjProto_toString%": [ "Object", "prototype", "toString" ],
                "%ObjProto_valueOf%": [ "Object", "prototype", "valueOf" ],
                "%PromisePrototype%": [ "Promise", "prototype" ],
                "%PromiseProto_then%": [ "Promise", "prototype", "then" ],
                "%Promise_all%": [ "Promise", "all" ],
                "%Promise_reject%": [ "Promise", "reject" ],
                "%Promise_resolve%": [ "Promise", "resolve" ],
                "%RangeErrorPrototype%": [ "RangeError", "prototype" ],
                "%ReferenceErrorPrototype%": [ "ReferenceError", "prototype" ],
                "%RegExpPrototype%": [ "RegExp", "prototype" ],
                "%SetPrototype%": [ "Set", "prototype" ],
                "%SharedArrayBufferPrototype%": [ "SharedArrayBuffer", "prototype" ],
                "%StringPrototype%": [ "String", "prototype" ],
                "%SymbolPrototype%": [ "Symbol", "prototype" ],
                "%SyntaxErrorPrototype%": [ "SyntaxError", "prototype" ],
                "%TypedArrayPrototype%": [ "TypedArray", "prototype" ],
                "%TypeErrorPrototype%": [ "TypeError", "prototype" ],
                "%Uint8ArrayPrototype%": [ "Uint8Array", "prototype" ],
                "%Uint8ClampedArrayPrototype%": [ "Uint8ClampedArray", "prototype" ],
                "%Uint16ArrayPrototype%": [ "Uint16Array", "prototype" ],
                "%Uint32ArrayPrototype%": [ "Uint32Array", "prototype" ],
                "%URIErrorPrototype%": [ "URIError", "prototype" ],
                "%WeakMapPrototype%": [ "WeakMap", "prototype" ],
                "%WeakSetPrototype%": [ "WeakSet", "prototype" ]
            };
            var bind = __webpack_require__(612);
            var hasOwn = __webpack_require__(642);
            var $concat = bind.call(Function.call, Array.prototype.concat);
            var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
            var $replace = bind.call(Function.call, String.prototype.replace);
            var $strSlice = bind.call(Function.call, String.prototype.slice);
            var $exec = bind.call(Function.call, RegExp.prototype.exec);
            var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var reEscapeChar = /\\(\\)?/g;
            var stringToPath = function stringToPath(string) {
                var first = $strSlice(string, 0, 1);
                var last = $strSlice(string, -1);
                if ("%" === first && "%" !== last) throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`"); else if ("%" === last && "%" !== first) throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
                var result = [];
                $replace(string, rePropName, (function(match, number, quote, subString) {
                    result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
                }));
                return result;
            };
            var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
                var intrinsicName = name;
                var alias;
                if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
                    alias = LEGACY_ALIASES[intrinsicName];
                    intrinsicName = "%" + alias[0] + "%";
                }
                if (hasOwn(INTRINSICS, intrinsicName)) {
                    var value = INTRINSICS[intrinsicName];
                    if (value === needsEval) value = doEval(intrinsicName);
                    if ("undefined" === typeof value && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
                    return {
                        alias,
                        name: intrinsicName,
                        value
                    };
                }
                throw new $SyntaxError("intrinsic " + name + " does not exist!");
            };
            module.exports = function GetIntrinsic(name, allowMissing) {
                if ("string" !== typeof name || 0 === name.length) throw new $TypeError("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" !== typeof allowMissing) throw new $TypeError('"allowMissing" argument must be a boolean');
                if (null === $exec(/^%?[^%]*%?$/, name)) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var parts = stringToPath(name);
                var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
                var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
                var intrinsicRealName = intrinsic.name;
                var value = intrinsic.value;
                var skipFurtherCaching = false;
                var alias = intrinsic.alias;
                if (alias) {
                    intrinsicBaseName = alias[0];
                    $spliceApply(parts, $concat([ 0, 1 ], alias));
                }
                for (var i = 1, isOwn = true; i < parts.length; i += 1) {
                    var part = parts[i];
                    var first = $strSlice(part, 0, 1);
                    var last = $strSlice(part, -1);
                    if (('"' === first || "'" === first || "`" === first || '"' === last || "'" === last || "`" === last) && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
                    if ("constructor" === part || !isOwn) skipFurtherCaching = true;
                    intrinsicBaseName += "." + part;
                    intrinsicRealName = "%" + intrinsicBaseName + "%";
                    if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName]; else if (null != value) {
                        if (!(part in value)) {
                            if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                            return;
                        }
                        if ($gOPD && i + 1 >= parts.length) {
                            var desc = $gOPD(value, part);
                            isOwn = !!desc;
                            if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get; else value = value[part];
                        } else {
                            isOwn = hasOwn(value, part);
                            value = value[part];
                        }
                        if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
                    }
                }
                return value;
            };
        },
        296: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__(210);
            var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
            if ($gOPD) try {
                $gOPD([], "length");
            } catch (e) {
                $gOPD = null;
            }
            module.exports = $gOPD;
        },
        44: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var GetIntrinsic = __webpack_require__(210);
            var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
            var hasPropertyDescriptors = function hasPropertyDescriptors() {
                if ($defineProperty) try {
                    $defineProperty({}, "a", {
                        value: 1
                    });
                    return true;
                } catch (e) {
                    return false;
                }
                return false;
            };
            hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
                if (!hasPropertyDescriptors()) return null;
                try {
                    return 1 !== $defineProperty([], "length", {
                        value: 1
                    }).length;
                } catch (e) {
                    return true;
                }
            };
            module.exports = hasPropertyDescriptors;
        },
        405: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var origSymbol = "undefined" !== typeof Symbol && Symbol;
            var hasSymbolSham = __webpack_require__(419);
            module.exports = function hasNativeSymbols() {
                if ("function" !== typeof origSymbol) return false;
                if ("function" !== typeof Symbol) return false;
                if ("symbol" !== typeof origSymbol("foo")) return false;
                if ("symbol" !== typeof Symbol("bar")) return false;
                return hasSymbolSham();
            };
        },
        419: module => {
            "use strict";
            module.exports = function hasSymbols() {
                if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return false;
                if ("symbol" === typeof Symbol.iterator) return true;
                var obj = {};
                var sym = Symbol("test");
                var symObj = Object(sym);
                if ("string" === typeof sym) return false;
                if ("[object Symbol]" !== Object.prototype.toString.call(sym)) return false;
                if ("[object Symbol]" !== Object.prototype.toString.call(symObj)) return false;
                var symVal = 42;
                obj[sym] = symVal;
                for (sym in obj) return false;
                if ("function" === typeof Object.keys && 0 !== Object.keys(obj).length) return false;
                if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(obj).length) return false;
                var syms = Object.getOwnPropertySymbols(obj);
                if (1 !== syms.length || syms[0] !== sym) return false;
                if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
                if ("function" === typeof Object.getOwnPropertyDescriptor) {
                    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
                    if (descriptor.value !== symVal || true !== descriptor.enumerable) return false;
                }
                return true;
            };
        },
        410: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var hasSymbols = __webpack_require__(419);
            module.exports = function hasToStringTagShams() {
                return hasSymbols() && !!Symbol.toStringTag;
            };
        },
        642: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var bind = __webpack_require__(612);
            module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
        },
        717: module => {
            if ("function" === typeof Object.create) module.exports = function inherits(ctor, superCtor) {
                if (superCtor) {
                    ctor.super_ = superCtor;
                    ctor.prototype = Object.create(superCtor.prototype, {
                        constructor: {
                            value: ctor,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                }
            }; else module.exports = function inherits(ctor, superCtor) {
                if (superCtor) {
                    ctor.super_ = superCtor;
                    var TempCtor = function() {};
                    TempCtor.prototype = superCtor.prototype;
                    ctor.prototype = new TempCtor;
                    ctor.prototype.constructor = ctor;
                }
            };
        },
        584: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var hasToStringTag = __webpack_require__(410)();
            var callBound = __webpack_require__(924);
            var $toString = callBound("Object.prototype.toString");
            var isStandardArguments = function isArguments(value) {
                if (hasToStringTag && value && "object" === typeof value && Symbol.toStringTag in value) return false;
                return "[object Arguments]" === $toString(value);
            };
            var isLegacyArguments = function isArguments(value) {
                if (isStandardArguments(value)) return true;
                return null !== value && "object" === typeof value && "number" === typeof value.length && value.length >= 0 && "[object Array]" !== $toString(value) && "[object Function]" === $toString(value.callee);
            };
            var supportsStandardArguments = function() {
                return isStandardArguments(arguments);
            }();
            isStandardArguments.isLegacyArguments = isLegacyArguments;
            module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
        },
        320: module => {
            "use strict";
            var fnToStr = Function.prototype.toString;
            var reflectApply = "object" === typeof Reflect && null !== Reflect && Reflect.apply;
            var badArrayLike;
            var isCallableMarker;
            if ("function" === typeof reflectApply && "function" === typeof Object.defineProperty) try {
                badArrayLike = Object.defineProperty({}, "length", {
                    get: function() {
                        throw isCallableMarker;
                    }
                });
                isCallableMarker = {};
                reflectApply((function() {
                    throw 42;
                }), null, badArrayLike);
            } catch (_) {
                if (_ !== isCallableMarker) reflectApply = null;
            } else reflectApply = null;
            var constructorRegex = /^\s*class\b/;
            var isES6ClassFn = function isES6ClassFunction(value) {
                try {
                    var fnStr = fnToStr.call(value);
                    return constructorRegex.test(fnStr);
                } catch (e) {
                    return false;
                }
            };
            var tryFunctionObject = function tryFunctionToStr(value) {
                try {
                    if (isES6ClassFn(value)) return false;
                    fnToStr.call(value);
                    return true;
                } catch (e) {
                    return false;
                }
            };
            var toStr = Object.prototype.toString;
            var objectClass = "[object Object]";
            var fnClass = "[object Function]";
            var genClass = "[object GeneratorFunction]";
            var ddaClass = "[object HTMLAllCollection]";
            var ddaClass2 = "[object HTML document.all class]";
            var ddaClass3 = "[object HTMLCollection]";
            var hasToStringTag = "function" === typeof Symbol && !!Symbol.toStringTag;
            var isIE68 = !(0 in [ ,  ]);
            var isDDA = function isDocumentDotAll() {
                return false;
            };
            if ("object" === typeof document) {
                var all = document.all;
                if (toStr.call(all) === toStr.call(document.all)) isDDA = function isDocumentDotAll(value) {
                    if ((isIE68 || !value) && ("undefined" === typeof value || "object" === typeof value)) try {
                        var str = toStr.call(value);
                        return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && null == value("");
                    } catch (e) {}
                    return false;
                };
            }
            module.exports = reflectApply ? function isCallable(value) {
                if (isDDA(value)) return true;
                if (!value) return false;
                if ("function" !== typeof value && "object" !== typeof value) return false;
                try {
                    reflectApply(value, null, badArrayLike);
                } catch (e) {
                    if (e !== isCallableMarker) return false;
                }
                return !isES6ClassFn(value) && tryFunctionObject(value);
            } : function isCallable(value) {
                if (isDDA(value)) return true;
                if (!value) return false;
                if ("function" !== typeof value && "object" !== typeof value) return false;
                if (hasToStringTag) return tryFunctionObject(value);
                if (isES6ClassFn(value)) return false;
                var strClass = toStr.call(value);
                if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) return false;
                return tryFunctionObject(value);
            };
        },
        662: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var toStr = Object.prototype.toString;
            var fnToStr = Function.prototype.toString;
            var isFnRegex = /^\s*(?:function)?\*/;
            var hasToStringTag = __webpack_require__(410)();
            var getProto = Object.getPrototypeOf;
            var getGeneratorFunc = function() {
                if (!hasToStringTag) return false;
                try {
                    return Function("return function*() {}")();
                } catch (e) {}
            };
            var GeneratorFunction;
            module.exports = function isGeneratorFunction(fn) {
                if ("function" !== typeof fn) return false;
                if (isFnRegex.test(fnToStr.call(fn))) return true;
                if (!hasToStringTag) {
                    var str = toStr.call(fn);
                    return "[object GeneratorFunction]" === str;
                }
                if (!getProto) return false;
                if ("undefined" === typeof GeneratorFunction) {
                    var generatorFunc = getGeneratorFunc();
                    GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
                }
                return getProto(fn) === GeneratorFunction;
            };
        },
        611: module => {
            "use strict";
            module.exports = function isNaN(value) {
                return value !== value;
            };
        },
        360: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var callBind = __webpack_require__(559);
            var define = __webpack_require__(289);
            var implementation = __webpack_require__(611);
            var getPolyfill = __webpack_require__(415);
            var shim = __webpack_require__(194);
            var polyfill = callBind(getPolyfill(), Number);
            define(polyfill, {
                getPolyfill,
                implementation,
                shim
            });
            module.exports = polyfill;
        },
        415: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var implementation = __webpack_require__(611);
            module.exports = function getPolyfill() {
                if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) return Number.isNaN;
                return implementation;
            };
        },
        194: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var define = __webpack_require__(289);
            var getPolyfill = __webpack_require__(415);
            module.exports = function shimNumberIsNaN() {
                var polyfill = getPolyfill();
                define(Number, {
                    isNaN: polyfill
                }, {
                    isNaN: function testIsNaN() {
                        return Number.isNaN !== polyfill;
                    }
                });
                return polyfill;
            };
        },
        692: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var forEach = __webpack_require__(29);
            var availableTypedArrays = __webpack_require__(83);
            var callBound = __webpack_require__(924);
            var $toString = callBound("Object.prototype.toString");
            var hasToStringTag = __webpack_require__(410)();
            var gOPD = __webpack_require__(296);
            var g = "undefined" === typeof globalThis ? __webpack_require__.g : globalThis;
            var typedArrays = availableTypedArrays();
            var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
                for (var i = 0; i < array.length; i += 1) if (array[i] === value) return i;
                return -1;
            };
            var $slice = callBound("String.prototype.slice");
            var toStrTags = {};
            var getPrototypeOf = Object.getPrototypeOf;
            if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, (function(typedArray) {
                var arr = new g[typedArray];
                if (Symbol.toStringTag in arr) {
                    var proto = getPrototypeOf(arr);
                    var descriptor = gOPD(proto, Symbol.toStringTag);
                    if (!descriptor) {
                        var superProto = getPrototypeOf(proto);
                        descriptor = gOPD(superProto, Symbol.toStringTag);
                    }
                    toStrTags[typedArray] = descriptor.get;
                }
            }));
            var tryTypedArrays = function tryAllTypedArrays(value) {
                var anyTrue = false;
                forEach(toStrTags, (function(getter, typedArray) {
                    if (!anyTrue) try {
                        anyTrue = getter.call(value) === typedArray;
                    } catch (e) {}
                }));
                return anyTrue;
            };
            module.exports = function isTypedArray(value) {
                if (!value || "object" !== typeof value) return false;
                if (!hasToStringTag || !(Symbol.toStringTag in value)) {
                    var tag = $slice($toString(value), 8, -1);
                    return $indexOf(typedArrays, tag) > -1;
                }
                if (!gOPD) return false;
                return tryTypedArrays(value);
            };
        },
        244: module => {
            "use strict";
            var numberIsNaN = function(value) {
                return value !== value;
            };
            module.exports = function is(a, b) {
                if (0 === a && 0 === b) return 1 / a === 1 / b;
                if (a === b) return true;
                if (numberIsNaN(a) && numberIsNaN(b)) return true;
                return false;
            };
        },
        609: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var define = __webpack_require__(289);
            var callBind = __webpack_require__(559);
            var implementation = __webpack_require__(244);
            var getPolyfill = __webpack_require__(624);
            var shim = __webpack_require__(281);
            var polyfill = callBind(getPolyfill(), Object);
            define(polyfill, {
                getPolyfill,
                implementation,
                shim
            });
            module.exports = polyfill;
        },
        624: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var implementation = __webpack_require__(244);
            module.exports = function getPolyfill() {
                return "function" === typeof Object.is ? Object.is : implementation;
            };
        },
        281: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var getPolyfill = __webpack_require__(624);
            var define = __webpack_require__(289);
            module.exports = function shimObjectIs() {
                var polyfill = getPolyfill();
                define(Object, {
                    is: polyfill
                }, {
                    is: function testObjectIs() {
                        return Object.is !== polyfill;
                    }
                });
                return polyfill;
            };
        },
        987: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var keysShim;
            if (!Object.keys) {
                var has = Object.prototype.hasOwnProperty;
                var toStr = Object.prototype.toString;
                var isArgs = __webpack_require__(414);
                var isEnumerable = Object.prototype.propertyIsEnumerable;
                var hasDontEnumBug = !isEnumerable.call({
                    toString: null
                }, "toString");
                var hasProtoEnumBug = isEnumerable.call((function() {}), "prototype");
                var dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ];
                var equalsConstructorPrototype = function(o) {
                    var ctor = o.constructor;
                    return ctor && ctor.prototype === o;
                };
                var excludedKeys = {
                    $applicationCache: true,
                    $console: true,
                    $external: true,
                    $frame: true,
                    $frameElement: true,
                    $frames: true,
                    $innerHeight: true,
                    $innerWidth: true,
                    $onmozfullscreenchange: true,
                    $onmozfullscreenerror: true,
                    $outerHeight: true,
                    $outerWidth: true,
                    $pageXOffset: true,
                    $pageYOffset: true,
                    $parent: true,
                    $scrollLeft: true,
                    $scrollTop: true,
                    $scrollX: true,
                    $scrollY: true,
                    $self: true,
                    $webkitIndexedDB: true,
                    $webkitStorageInfo: true,
                    $window: true
                };
                var hasAutomationEqualityBug = function() {
                    if ("undefined" === typeof window) return false;
                    for (var k in window) try {
                        if (!excludedKeys["$" + k] && has.call(window, k) && null !== window[k] && "object" === typeof window[k]) try {
                            equalsConstructorPrototype(window[k]);
                        } catch (e) {
                            return true;
                        }
                    } catch (e) {
                        return true;
                    }
                    return false;
                }();
                var equalsConstructorPrototypeIfNotBuggy = function(o) {
                    if ("undefined" === typeof window || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
                    try {
                        return equalsConstructorPrototype(o);
                    } catch (e) {
                        return false;
                    }
                };
                keysShim = function keys(object) {
                    var isObject = null !== object && "object" === typeof object;
                    var isFunction = "[object Function]" === toStr.call(object);
                    var isArguments = isArgs(object);
                    var isString = isObject && "[object String]" === toStr.call(object);
                    var theKeys = [];
                    if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
                    var skipProto = hasProtoEnumBug && isFunction;
                    if (isString && object.length > 0 && !has.call(object, 0)) for (var i = 0; i < object.length; ++i) theKeys.push(String(i));
                    if (isArguments && object.length > 0) for (var j = 0; j < object.length; ++j) theKeys.push(String(j)); else for (var name in object) if (!(skipProto && "prototype" === name) && has.call(object, name)) theKeys.push(String(name));
                    if (hasDontEnumBug) {
                        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                        for (var k = 0; k < dontEnums.length; ++k) if (!(skipConstructor && "constructor" === dontEnums[k]) && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
                    }
                    return theKeys;
                };
            }
            module.exports = keysShim;
        },
        215: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var slice = Array.prototype.slice;
            var isArgs = __webpack_require__(414);
            var origKeys = Object.keys;
            var keysShim = origKeys ? function keys(o) {
                return origKeys(o);
            } : __webpack_require__(987);
            var originalKeys = Object.keys;
            keysShim.shim = function shimObjectKeys() {
                if (Object.keys) {
                    var keysWorksWithArguments = function() {
                        var args = Object.keys(arguments);
                        return args && args.length === arguments.length;
                    }(1, 2);
                    if (!keysWorksWithArguments) Object.keys = function keys(object) {
                        if (isArgs(object)) return originalKeys(slice.call(object));
                        return originalKeys(object);
                    };
                } else Object.keys = keysShim;
                return Object.keys || keysShim;
            };
            module.exports = keysShim;
        },
        414: module => {
            "use strict";
            var toStr = Object.prototype.toString;
            module.exports = function isArguments(value) {
                var str = toStr.call(value);
                var isArgs = "[object Arguments]" === str;
                if (!isArgs) isArgs = "[object Array]" !== str && null !== value && "object" === typeof value && "number" === typeof value.length && value.length >= 0 && "[object Function]" === toStr.call(value.callee);
                return isArgs;
            };
        },
        155: module => {
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if ("function" === typeof setTimeout) cachedSetTimeout = setTimeout; else cachedSetTimeout = defaultSetTimout;
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if ("function" === typeof clearTimeout) cachedClearTimeout = clearTimeout; else cachedClearTimeout = defaultClearTimeout;
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) return;
                draining = false;
                if (currentQueue.length) queue = currentQueue.concat(queue); else queueIndex = -1;
                if (queue.length) drainQueue();
            }
            function drainQueue() {
                if (draining) return;
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) if (currentQueue) currentQueue[queueIndex].run();
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function(fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
                queue.push(new Item(fun, args));
                if (1 === queue.length && !draining) runTimeout(drainQueue);
            };
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function(name) {
                return [];
            };
            process.binding = function(name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function() {
                return "/";
            };
            process.chdir = function(dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function() {
                return 0;
            };
        },
        2: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        },
        384: module => {
            module.exports = function isBuffer(arg) {
                return arg && "object" === typeof arg && "function" === typeof arg.copy && "function" === typeof arg.fill && "function" === typeof arg.readUInt8;
            };
        },
        955: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            var isArgumentsObject = __webpack_require__(584);
            var isGeneratorFunction = __webpack_require__(662);
            var whichTypedArray = __webpack_require__(430);
            var isTypedArray = __webpack_require__(692);
            function uncurryThis(f) {
                return f.call.bind(f);
            }
            var BigIntSupported = "undefined" !== typeof BigInt;
            var SymbolSupported = "undefined" !== typeof Symbol;
            var ObjectToString = uncurryThis(Object.prototype.toString);
            var numberValue = uncurryThis(Number.prototype.valueOf);
            var stringValue = uncurryThis(String.prototype.valueOf);
            var booleanValue = uncurryThis(Boolean.prototype.valueOf);
            if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
            if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
            function checkBoxedPrimitive(value, prototypeValueOf) {
                if ("object" !== typeof value) return false;
                try {
                    prototypeValueOf(value);
                    return true;
                } catch (e) {
                    return false;
                }
            }
            exports.isArgumentsObject = isArgumentsObject;
            exports.isGeneratorFunction = isGeneratorFunction;
            exports.isTypedArray = isTypedArray;
            function isPromise(input) {
                return "undefined" !== typeof Promise && input instanceof Promise || null !== input && "object" === typeof input && "function" === typeof input.then && "function" === typeof input.catch;
            }
            exports.isPromise = isPromise;
            function isArrayBufferView(value) {
                if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView) return ArrayBuffer.isView(value);
                return isTypedArray(value) || isDataView(value);
            }
            exports.isArrayBufferView = isArrayBufferView;
            function isUint8Array(value) {
                return "Uint8Array" === whichTypedArray(value);
            }
            exports.isUint8Array = isUint8Array;
            function isUint8ClampedArray(value) {
                return "Uint8ClampedArray" === whichTypedArray(value);
            }
            exports.isUint8ClampedArray = isUint8ClampedArray;
            function isUint16Array(value) {
                return "Uint16Array" === whichTypedArray(value);
            }
            exports.isUint16Array = isUint16Array;
            function isUint32Array(value) {
                return "Uint32Array" === whichTypedArray(value);
            }
            exports.isUint32Array = isUint32Array;
            function isInt8Array(value) {
                return "Int8Array" === whichTypedArray(value);
            }
            exports.isInt8Array = isInt8Array;
            function isInt16Array(value) {
                return "Int16Array" === whichTypedArray(value);
            }
            exports.isInt16Array = isInt16Array;
            function isInt32Array(value) {
                return "Int32Array" === whichTypedArray(value);
            }
            exports.isInt32Array = isInt32Array;
            function isFloat32Array(value) {
                return "Float32Array" === whichTypedArray(value);
            }
            exports.isFloat32Array = isFloat32Array;
            function isFloat64Array(value) {
                return "Float64Array" === whichTypedArray(value);
            }
            exports.isFloat64Array = isFloat64Array;
            function isBigInt64Array(value) {
                return "BigInt64Array" === whichTypedArray(value);
            }
            exports.isBigInt64Array = isBigInt64Array;
            function isBigUint64Array(value) {
                return "BigUint64Array" === whichTypedArray(value);
            }
            exports.isBigUint64Array = isBigUint64Array;
            function isMapToString(value) {
                return "[object Map]" === ObjectToString(value);
            }
            isMapToString.working = "undefined" !== typeof Map && isMapToString(new Map);
            function isMap(value) {
                if ("undefined" === typeof Map) return false;
                return isMapToString.working ? isMapToString(value) : value instanceof Map;
            }
            exports.isMap = isMap;
            function isSetToString(value) {
                return "[object Set]" === ObjectToString(value);
            }
            isSetToString.working = "undefined" !== typeof Set && isSetToString(new Set);
            function isSet(value) {
                if ("undefined" === typeof Set) return false;
                return isSetToString.working ? isSetToString(value) : value instanceof Set;
            }
            exports.isSet = isSet;
            function isWeakMapToString(value) {
                return "[object WeakMap]" === ObjectToString(value);
            }
            isWeakMapToString.working = "undefined" !== typeof WeakMap && isWeakMapToString(new WeakMap);
            function isWeakMap(value) {
                if ("undefined" === typeof WeakMap) return false;
                return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
            }
            exports.isWeakMap = isWeakMap;
            function isWeakSetToString(value) {
                return "[object WeakSet]" === ObjectToString(value);
            }
            isWeakSetToString.working = "undefined" !== typeof WeakSet && isWeakSetToString(new WeakSet);
            function isWeakSet(value) {
                return isWeakSetToString(value);
            }
            exports.isWeakSet = isWeakSet;
            function isArrayBufferToString(value) {
                return "[object ArrayBuffer]" === ObjectToString(value);
            }
            isArrayBufferToString.working = "undefined" !== typeof ArrayBuffer && isArrayBufferToString(new ArrayBuffer);
            function isArrayBuffer(value) {
                if ("undefined" === typeof ArrayBuffer) return false;
                return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
            }
            exports.isArrayBuffer = isArrayBuffer;
            function isDataViewToString(value) {
                return "[object DataView]" === ObjectToString(value);
            }
            isDataViewToString.working = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof DataView && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
            function isDataView(value) {
                if ("undefined" === typeof DataView) return false;
                return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
            }
            exports.isDataView = isDataView;
            var SharedArrayBufferCopy = "undefined" !== typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
            function isSharedArrayBufferToString(value) {
                return "[object SharedArrayBuffer]" === ObjectToString(value);
            }
            function isSharedArrayBuffer(value) {
                if ("undefined" === typeof SharedArrayBufferCopy) return false;
                if ("undefined" === typeof isSharedArrayBufferToString.working) isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy);
                return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
            }
            exports.isSharedArrayBuffer = isSharedArrayBuffer;
            function isAsyncFunction(value) {
                return "[object AsyncFunction]" === ObjectToString(value);
            }
            exports.isAsyncFunction = isAsyncFunction;
            function isMapIterator(value) {
                return "[object Map Iterator]" === ObjectToString(value);
            }
            exports.isMapIterator = isMapIterator;
            function isSetIterator(value) {
                return "[object Set Iterator]" === ObjectToString(value);
            }
            exports.isSetIterator = isSetIterator;
            function isGeneratorObject(value) {
                return "[object Generator]" === ObjectToString(value);
            }
            exports.isGeneratorObject = isGeneratorObject;
            function isWebAssemblyCompiledModule(value) {
                return "[object WebAssembly.Module]" === ObjectToString(value);
            }
            exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
            function isNumberObject(value) {
                return checkBoxedPrimitive(value, numberValue);
            }
            exports.isNumberObject = isNumberObject;
            function isStringObject(value) {
                return checkBoxedPrimitive(value, stringValue);
            }
            exports.isStringObject = isStringObject;
            function isBooleanObject(value) {
                return checkBoxedPrimitive(value, booleanValue);
            }
            exports.isBooleanObject = isBooleanObject;
            function isBigIntObject(value) {
                return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
            }
            exports.isBigIntObject = isBigIntObject;
            function isSymbolObject(value) {
                return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
            }
            exports.isSymbolObject = isSymbolObject;
            function isBoxedPrimitive(value) {
                return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
            }
            exports.isBoxedPrimitive = isBoxedPrimitive;
            function isAnyArrayBuffer(value) {
                return "undefined" !== typeof Uint8Array && (isArrayBuffer(value) || isSharedArrayBuffer(value));
            }
            exports.isAnyArrayBuffer = isAnyArrayBuffer;
            [ "isProxy", "isExternal", "isModuleNamespaceObject" ].forEach((function(method) {
                Object.defineProperty(exports, method, {
                    enumerable: false,
                    value: function() {
                        throw new Error(method + " is not supported in userland");
                    }
                });
            }));
        },
        539: (__unused_webpack_module, exports, __webpack_require__) => {
            var process = __webpack_require__(155);
            var console = __webpack_require__(108);
            var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
                var keys = Object.keys(obj);
                var descriptors = {};
                for (var i = 0; i < keys.length; i++) descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
                return descriptors;
            };
            var formatRegExp = /%[sdj%]/g;
            exports.format = function(f) {
                if (!isString(f)) {
                    var objects = [];
                    for (var i = 0; i < arguments.length; i++) objects.push(inspect(arguments[i]));
                    return objects.join(" ");
                }
                i = 1;
                var args = arguments;
                var len = args.length;
                var str = String(f).replace(formatRegExp, (function(x) {
                    if ("%%" === x) return "%";
                    if (i >= len) return x;
                    switch (x) {
                      case "%s":
                        return String(args[i++]);

                      case "%d":
                        return Number(args[i++]);

                      case "%j":
                        try {
                            return JSON.stringify(args[i++]);
                        } catch (_) {
                            return "[Circular]";
                        }

                      default:
                        return x;
                    }
                }));
                for (var x = args[i]; i < len; x = args[++i]) if (isNull(x) || !isObject(x)) str += " " + x; else str += " " + inspect(x);
                return str;
            };
            exports.deprecate = function(fn, msg) {
                if ("undefined" !== typeof process && true === process.noDeprecation) return fn;
                if ("undefined" === typeof process) return function() {
                    return exports.deprecate(fn, msg).apply(this, arguments);
                };
                var warned = false;
                function deprecated() {
                    if (!warned) {
                        if (process.throwDeprecation) throw new Error(msg); else if (process.traceDeprecation) console.trace(msg); else console.error(msg);
                        warned = true;
                    }
                    return fn.apply(this, arguments);
                }
                return deprecated;
            };
            var debugs = {};
            var debugEnvRegex = /^$/;
            if (process.env.NODE_DEBUG) {
                var debugEnv = process.env.NODE_DEBUG;
                debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
                debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
            }
            exports.debuglog = function(set) {
                set = set.toUpperCase();
                if (!debugs[set]) if (debugEnvRegex.test(set)) {
                    var pid = process.pid;
                    debugs[set] = function() {
                        var msg = exports.format.apply(exports, arguments);
                        console.error("%s %d: %s", set, pid, msg);
                    };
                } else debugs[set] = function() {};
                return debugs[set];
            };
            function inspect(obj, opts) {
                var ctx = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) ctx.depth = arguments[2];
                if (arguments.length >= 4) ctx.colors = arguments[3];
                if (isBoolean(opts)) ctx.showHidden = opts; else if (opts) exports._extend(ctx, opts);
                if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                if (isUndefined(ctx.depth)) ctx.depth = 2;
                if (isUndefined(ctx.colors)) ctx.colors = false;
                if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                if (ctx.colors) ctx.stylize = stylizeWithColor;
                return formatValue(ctx, obj, ctx.depth);
            }
            exports.inspect = inspect;
            inspect.colors = {
                bold: [ 1, 22 ],
                italic: [ 3, 23 ],
                underline: [ 4, 24 ],
                inverse: [ 7, 27 ],
                white: [ 37, 39 ],
                grey: [ 90, 39 ],
                black: [ 30, 39 ],
                blue: [ 34, 39 ],
                cyan: [ 36, 39 ],
                green: [ 32, 39 ],
                magenta: [ 35, 39 ],
                red: [ 31, 39 ],
                yellow: [ 33, 39 ]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            function stylizeWithColor(str, styleType) {
                var style = inspect.styles[styleType];
                if (style) return "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m"; else return str;
            }
            function stylizeNoColor(str, styleType) {
                return str;
            }
            function arrayToHash(array) {
                var hash = {};
                array.forEach((function(val, idx) {
                    hash[val] = true;
                }));
                return hash;
            }
            function formatValue(ctx, value, recurseTimes) {
                if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
                    var ret = value.inspect(recurseTimes, ctx);
                    if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
                    return ret;
                }
                var primitive = formatPrimitive(ctx, value);
                if (primitive) return primitive;
                var keys = Object.keys(value);
                var visibleKeys = arrayToHash(keys);
                if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
                if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
                if (0 === keys.length) {
                    if (isFunction(value)) {
                        var name = value.name ? ": " + value.name : "";
                        return ctx.stylize("[Function" + name + "]", "special");
                    }
                    if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                    if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
                    if (isError(value)) return formatError(value);
                }
                var base = "", array = false, braces = [ "{", "}" ];
                if (isArray(value)) {
                    array = true;
                    braces = [ "[", "]" ];
                }
                if (isFunction(value)) {
                    var n = value.name ? ": " + value.name : "";
                    base = " [Function" + n + "]";
                }
                if (isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
                if (isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
                if (isError(value)) base = " " + formatError(value);
                if (0 === keys.length && (!array || 0 == value.length)) return braces[0] + base + braces[1];
                if (recurseTimes < 0) if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp"); else return ctx.stylize("[Object]", "special");
                ctx.seen.push(value);
                var output;
                if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys); else output = keys.map((function(key) {
                    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                }));
                ctx.seen.pop();
                return reduceToSingleString(output, base, braces);
            }
            function formatPrimitive(ctx, value) {
                if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
                if (isString(value)) {
                    var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return ctx.stylize(simple, "string");
                }
                if (isNumber(value)) return ctx.stylize("" + value, "number");
                if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
                if (isNull(value)) return ctx.stylize("null", "null");
            }
            function formatError(value) {
                return "[" + Error.prototype.toString.call(value) + "]";
            }
            function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                var output = [];
                for (var i = 0, l = value.length; i < l; ++i) if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true)); else output.push("");
                keys.forEach((function(key) {
                    if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
                }));
                return output;
            }
            function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                var name, str, desc;
                desc = Object.getOwnPropertyDescriptor(value, key) || {
                    value: value[key]
                };
                if (desc.get) if (desc.set) str = ctx.stylize("[Getter/Setter]", "special"); else str = ctx.stylize("[Getter]", "special"); else if (desc.set) str = ctx.stylize("[Setter]", "special");
                if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
                if (!str) if (ctx.seen.indexOf(desc.value) < 0) {
                    if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null); else str = formatValue(ctx, desc.value, recurseTimes - 1);
                    if (str.indexOf("\n") > -1) if (array) str = str.split("\n").map((function(line) {
                        return "  " + line;
                    })).join("\n").slice(2); else str = "\n" + str.split("\n").map((function(line) {
                        return "   " + line;
                    })).join("\n");
                } else str = ctx.stylize("[Circular]", "special");
                if (isUndefined(name)) {
                    if (array && key.match(/^\d+$/)) return str;
                    name = JSON.stringify("" + key);
                    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        name = name.slice(1, -1);
                        name = ctx.stylize(name, "name");
                    } else {
                        name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        name = ctx.stylize(name, "string");
                    }
                }
                return name + ": " + str;
            }
            function reduceToSingleString(output, base, braces) {
                var numLinesEst = 0;
                var length = output.reduce((function(prev, cur) {
                    numLinesEst++;
                    if (cur.indexOf("\n") >= 0) numLinesEst++;
                    return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }), 0);
                if (length > 60) return braces[0] + ("" === base ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
                return braces[0] + base + " " + output.join(", ") + " " + braces[1];
            }
            exports.types = __webpack_require__(955);
            function isArray(ar) {
                return Array.isArray(ar);
            }
            exports.isArray = isArray;
            function isBoolean(arg) {
                return "boolean" === typeof arg;
            }
            exports.isBoolean = isBoolean;
            function isNull(arg) {
                return null === arg;
            }
            exports.isNull = isNull;
            function isNullOrUndefined(arg) {
                return null == arg;
            }
            exports.isNullOrUndefined = isNullOrUndefined;
            function isNumber(arg) {
                return "number" === typeof arg;
            }
            exports.isNumber = isNumber;
            function isString(arg) {
                return "string" === typeof arg;
            }
            exports.isString = isString;
            function isSymbol(arg) {
                return "symbol" === typeof arg;
            }
            exports.isSymbol = isSymbol;
            function isUndefined(arg) {
                return void 0 === arg;
            }
            exports.isUndefined = isUndefined;
            function isRegExp(re) {
                return isObject(re) && "[object RegExp]" === objectToString(re);
            }
            exports.isRegExp = isRegExp;
            exports.types.isRegExp = isRegExp;
            function isObject(arg) {
                return "object" === typeof arg && null !== arg;
            }
            exports.isObject = isObject;
            function isDate(d) {
                return isObject(d) && "[object Date]" === objectToString(d);
            }
            exports.isDate = isDate;
            exports.types.isDate = isDate;
            function isError(e) {
                return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error);
            }
            exports.isError = isError;
            exports.types.isNativeError = isError;
            function isFunction(arg) {
                return "function" === typeof arg;
            }
            exports.isFunction = isFunction;
            function isPrimitive(arg) {
                return null === arg || "boolean" === typeof arg || "number" === typeof arg || "string" === typeof arg || "symbol" === typeof arg || "undefined" === typeof arg;
            }
            exports.isPrimitive = isPrimitive;
            exports.isBuffer = __webpack_require__(384);
            function objectToString(o) {
                return Object.prototype.toString.call(o);
            }
            function pad(n) {
                return n < 10 ? "0" + n.toString(10) : n.toString(10);
            }
            var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            function timestamp() {
                var d = new Date;
                var time = [ pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds()) ].join(":");
                return [ d.getDate(), months[d.getMonth()], time ].join(" ");
            }
            exports.log = function() {
                console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
            };
            exports.inherits = __webpack_require__(717);
            exports._extend = function(origin, add) {
                if (!add || !isObject(add)) return origin;
                var keys = Object.keys(add);
                var i = keys.length;
                while (i--) origin[keys[i]] = add[keys[i]];
                return origin;
            };
            function hasOwnProperty(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            }
            var kCustomPromisifiedSymbol = "undefined" !== typeof Symbol ? Symbol("util.promisify.custom") : void 0;
            exports.promisify = function promisify(original) {
                if ("function" !== typeof original) throw new TypeError('The "original" argument must be of type Function');
                if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
                    var fn = original[kCustomPromisifiedSymbol];
                    if ("function" !== typeof fn) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                        value: fn,
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                    return fn;
                }
                function fn() {
                    var promiseResolve, promiseReject;
                    var promise = new Promise((function(resolve, reject) {
                        promiseResolve = resolve;
                        promiseReject = reject;
                    }));
                    var args = [];
                    for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
                    args.push((function(err, value) {
                        if (err) promiseReject(err); else promiseResolve(value);
                    }));
                    try {
                        original.apply(this, args);
                    } catch (err) {
                        promiseReject(err);
                    }
                    return promise;
                }
                Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
                if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                    value: fn,
                    enumerable: false,
                    writable: false,
                    configurable: true
                });
                return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
            };
            exports.promisify.custom = kCustomPromisifiedSymbol;
            function callbackifyOnRejected(reason, cb) {
                if (!reason) {
                    var newReason = new Error("Promise was rejected with a falsy value");
                    newReason.reason = reason;
                    reason = newReason;
                }
                return cb(reason);
            }
            function callbackify(original) {
                if ("function" !== typeof original) throw new TypeError('The "original" argument must be of type Function');
                function callbackified() {
                    var args = [];
                    for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
                    var maybeCb = args.pop();
                    if ("function" !== typeof maybeCb) throw new TypeError("The last argument must be of type Function");
                    var self = this;
                    var cb = function() {
                        return maybeCb.apply(self, arguments);
                    };
                    original.apply(this, args).then((function(ret) {
                        process.nextTick(cb.bind(null, null, ret));
                    }), (function(rej) {
                        process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
                    }));
                }
                Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
                Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
                return callbackified;
            }
            exports.callbackify = callbackify;
        },
        430: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var forEach = __webpack_require__(29);
            var availableTypedArrays = __webpack_require__(83);
            var callBound = __webpack_require__(924);
            var gOPD = __webpack_require__(296);
            var $toString = callBound("Object.prototype.toString");
            var hasToStringTag = __webpack_require__(410)();
            var g = "undefined" === typeof globalThis ? __webpack_require__.g : globalThis;
            var typedArrays = availableTypedArrays();
            var $slice = callBound("String.prototype.slice");
            var toStrTags = {};
            var getPrototypeOf = Object.getPrototypeOf;
            if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, (function(typedArray) {
                if ("function" === typeof g[typedArray]) {
                    var arr = new g[typedArray];
                    if (Symbol.toStringTag in arr) {
                        var proto = getPrototypeOf(arr);
                        var descriptor = gOPD(proto, Symbol.toStringTag);
                        if (!descriptor) {
                            var superProto = getPrototypeOf(proto);
                            descriptor = gOPD(superProto, Symbol.toStringTag);
                        }
                        toStrTags[typedArray] = descriptor.get;
                    }
                }
            }));
            var tryTypedArrays = function tryAllTypedArrays(value) {
                var foundName = false;
                forEach(toStrTags, (function(getter, typedArray) {
                    if (!foundName) try {
                        var name = getter.call(value);
                        if (name === typedArray) foundName = name;
                    } catch (e) {}
                }));
                return foundName;
            };
            var isTypedArray = __webpack_require__(692);
            module.exports = function whichTypedArray(value) {
                if (!isTypedArray(value)) return false;
                if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
                return tryTypedArrays(value);
            };
        },
        83: (module, __unused_webpack_exports, __webpack_require__) => {
            "use strict";
            var possibleNames = [ "BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray" ];
            var g = "undefined" === typeof globalThis ? __webpack_require__.g : globalThis;
            module.exports = function availableTypedArrays() {
                var out = [];
                for (var i = 0; i < possibleNames.length; i++) if ("function" === typeof g[possibleNames[i]]) out[out.length] = possibleNames[i];
                return out;
            };
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" === typeof window) return window;
            }
        }();
    })();
    (() => {
        "use strict";
        var console = __webpack_require__(108);
        function isWebp() {
            function testWebP(callback) {
                var webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                var className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? "#".concat(hash) : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        var _slideUp = function _slideUp(target) {
            var duration = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            var showmore = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = "".concat(target.offsetHeight, "px");
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? "".concat(showmore, "px") : "0px";
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((function() {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        var _slideDown = function _slideDown(target) {
            var duration = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            var showmore = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                var height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? "".concat(showmore, "px") : "0px";
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((function() {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        var _slideToggle = function _slideToggle(target) {
            var duration = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        var bodyLockStatus = true;
        var bodyLockToggle = function bodyLockToggle() {
            var delay = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        var bodyUnlock = function bodyUnlock() {
            var delay = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
            var body = document.querySelector("body");
            if (bodyLockStatus) {
                var lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((function() {
                    for (var index = 0; index < lock_padding.length; index++) {
                        var el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        var bodyLock = function bodyLock() {
            var delay = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500;
            var body = document.querySelector("body");
            if (bodyLockStatus) {
                var lock_padding = document.querySelectorAll("[data-lp]");
                for (var index = 0; index < lock_padding.length; index++) {
                    var el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            var spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                var initSpollers = function initSpollers(spollersArray) {
                    var matchMedia = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
                    spollersArray.forEach((function(spollersBlock) {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                };
                var initSpollerBody = function initSpollerBody(spollersBlock) {
                    var hideSpollerBody = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : true;
                    var spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((function(item) {
                            return item.closest("[data-spollers]") === spollersBlock;
                        }));
                        spollerTitles.forEach((function(spollerTitle) {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                };
                var setSpollerAction = function setSpollerAction(e) {
                    var el = e.target;
                    if (el.closest("[data-spoller]")) {
                        var spollerTitle = el.closest("[data-spoller]");
                        var spollersBlock = spollerTitle.closest("[data-spollers]");
                        var oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        var spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                };
                var hideSpollersBody = function hideSpollersBody(spollersBlock) {
                    var spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    var spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                };
                var spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                var mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((function(mdQueriesItem) {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                var spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    var el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((function(spollerClose) {
                        var spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            var spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function tabs() {
            var tabs = document.querySelectorAll("[data-tabs]");
            var tabsActiveHash = [];
            if (tabs.length > 0) {
                var hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach((function(tabsBlock, index) {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                var mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((function(mdQueriesItem) {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((function(tabsMediaItem) {
                    tabsMediaItem = tabsMediaItem.item;
                    var tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    var tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    var tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    var tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((function(item) {
                        return item.closest("[data-tabs]") === tabsMediaItem;
                    }));
                    tabsContentItems = Array.from(tabsContentItems).filter((function(item) {
                        return item.closest("[data-tabs]") === tabsMediaItem;
                    }));
                    tabsContentItems.forEach((function(tabsContentItem, index) {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                var tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                var tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                var tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                var tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    var tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((function(item) {
                        return item.closest("[data-tabs]") === tabsBlock;
                    }));
                    tabsTitles = Array.from(tabsTitles).filter((function(item) {
                        return item.closest("[data-tabs]") === tabsBlock;
                    }));
                    tabsContent.forEach((function(tabsContentItem, index) {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                var tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                var tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                var tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                var tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    var isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((function(item) {
                        return item.closest("[data-tabs]") === tabsBlock;
                    }));
                    tabsTitles = Array.from(tabsTitles).filter((function(item) {
                        return item.closest("[data-tabs]") === tabsBlock;
                    }));
                    tabsContent.forEach((function(tabsContentItem, index) {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash("tab-".concat(tabsBlockIndex, "-").concat(index));
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                var el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    var tabTitle = el.closest("[data-tabs-title]");
                    var tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        var tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((function(item) {
                            return item.closest("[data-tabs]") === tabsBlock;
                        })) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((function() {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            var media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                var breakpointsArray = [];
                media.forEach((function(item) {
                    var params = item.dataset[dataSetValue];
                    var breakpoint = {};
                    var paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                var mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                var mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((function(breakpoint) {
                        var paramsArray = breakpoint.split(",");
                        var mediaBreakpoint = paramsArray[1];
                        var mediaType = paramsArray[2];
                        var matchMedia = window.matchMedia(paramsArray[0]);
                        var itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        var flsModules = {};
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter((function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                }))), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
                    _defineProperty(target, key, source[key]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                }));
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            if (key in obj) Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
            }); else obj[key] = value;
            return obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        var Popup = function() {
            function Popup(options) {
                _classCallCheck(this, Popup);
                var config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function beforeOpen() {},
                        afterOpen: function afterOpen() {},
                        beforeClose: function beforeClose() {},
                        afterClose: function afterClose() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = _objectSpread(_objectSpread(_objectSpread({}, config), options), {}, {
                    classes: _objectSpread(_objectSpread({}, config.classes), null === options || void 0 === options ? void 0 : options.classes),
                    hashSettings: _objectSpread(_objectSpread({}, config.hashSettings), null === options || void 0 === options ? void 0 : options.hashSettings),
                    on: _objectSpread(_objectSpread({}, config.on), null === options || void 0 === options ? void 0 : options.on)
                });
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            _createClass(Popup, [ {
                key: "initPopups",
                value: function initPopups() {
                    this.popupLogging("Проснулся");
                    this.eventsPopup();
                }
            }, {
                key: "eventsPopup",
                value: function eventsPopup() {
                    document.addEventListener("click", function(e) {
                        var buttonOpen = e.target.closest("[".concat(this.options.attributeOpenButton, "]"));
                        if (buttonOpen) {
                            e.preventDefault();
                            this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                            this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                            if ("error" !== this._dataValue) {
                                if (!this.isOpen) this.lastFocusEl = buttonOpen;
                                this.targetOpen.selector = "".concat(this._dataValue);
                                this._selectorOpen = true;
                                this.open();
                                return;
                            } else this.popupLogging("Ой ой, не заполнен атрибут у ".concat(buttonOpen.classList));
                            return;
                        }
                        var buttonClose = e.target.closest("[".concat(this.options.attributeCloseButton, "]"));
                        if (buttonClose || !e.target.closest(".".concat(this.options.classes.popupContent)) && this.isOpen) {
                            e.preventDefault();
                            this.close();
                            return;
                        }
                    }.bind(this));
                    document.addEventListener("keydown", function(e) {
                        if (this.options.closeEsc && 27 == e.which && "Escape" === e.code && this.isOpen) {
                            e.preventDefault();
                            this.close();
                            return;
                        }
                        if (this.options.focusCatch && 9 == e.which && this.isOpen) {
                            this._focusCatch(e);
                            return;
                        }
                    }.bind(this));
                    if (this.options.hashSettings.goHash) {
                        window.addEventListener("hashchange", function() {
                            if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                        }.bind(this));
                        window.addEventListener("load", function() {
                            if (window.location.hash) this._openToHash();
                        }.bind(this));
                    }
                }
            }, {
                key: "open",
                value: function open(selectorValue) {
                    var _this = this;
                    if (bodyLockStatus) {
                        this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                        if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) {
                            this.targetOpen.selector = selectorValue;
                            this._selectorOpen = true;
                        }
                        if (this.isOpen) {
                            this._reopen = true;
                            this.close();
                        }
                        if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                        if (!this._reopen) this.previousActiveElement = document.activeElement;
                        this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                        if (this.targetOpen.element) {
                            if (this.youTubeCode) {
                                var codeVideo = this.youTubeCode;
                                var urlVideo = "https://www.youtube.com/embed/".concat(codeVideo, "?rel=0&showinfo=0&autoplay=1");
                                var iframe = document.createElement("iframe");
                                iframe.setAttribute("allowfullscreen", "");
                                var autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                                iframe.setAttribute("allow", "".concat(autoplay, "; encrypted-media"));
                                iframe.setAttribute("src", urlVideo);
                                if (!this.targetOpen.element.querySelector("[".concat(this.options.youtubePlaceAttribute, "]"))) this.targetOpen.element.querySelector(".popup__text").setAttribute("".concat(this.options.youtubePlaceAttribute), "");
                                this.targetOpen.element.querySelector("[".concat(this.options.youtubePlaceAttribute, "]")).appendChild(iframe);
                            }
                            if (this.options.hashSettings.location) {
                                this._getHash();
                                this._setHash();
                            }
                            this.options.on.beforeOpen(this);
                            document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                                detail: {
                                    popup: this
                                }
                            }));
                            this.targetOpen.element.classList.add(this.options.classes.popupActive);
                            document.documentElement.classList.add(this.options.classes.bodyActive);
                            if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                            this.targetOpen.element.setAttribute("aria-hidden", "false");
                            this.previousOpen.selector = this.targetOpen.selector;
                            this.previousOpen.element = this.targetOpen.element;
                            this._selectorOpen = false;
                            this.isOpen = true;
                            setTimeout((function() {
                                _this._focusTrap();
                            }), 50);
                            this.options.on.afterOpen(this);
                            document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                                detail: {
                                    popup: this
                                }
                            }));
                            this.popupLogging("Открыл попап");
                        } else this.popupLogging("Ой ой, такого попапа нет.Проверьте корректность ввода. ");
                    }
                }
            }, {
                key: "close",
                value: function close(selectorValue) {
                    var _this2 = this;
                    if (selectorValue && "string" === typeof selectorValue && "" !== selectorValue.trim()) this.previousOpen.selector = selectorValue;
                    if (!this.isOpen || !bodyLockStatus) return;
                    this.options.on.beforeClose(this);
                    document.dispatchEvent(new CustomEvent("beforePopupClose", {
                        detail: {
                            popup: this
                        }
                    }));
                    if (this.youTubeCode) if (this.targetOpen.element.querySelector("[".concat(this.options.youtubePlaceAttribute, "]"))) this.targetOpen.element.querySelector("[".concat(this.options.youtubePlaceAttribute, "]")).innerHTML = "";
                    this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                    this.previousOpen.element.setAttribute("aria-hidden", "true");
                    if (!this._reopen) {
                        document.documentElement.classList.remove(this.options.classes.bodyActive);
                        !this.bodyLock ? bodyUnlock() : null;
                        this.isOpen = false;
                    }
                    this._removeHash();
                    if (this._selectorOpen) {
                        this.lastClosed.selector = this.previousOpen.selector;
                        this.lastClosed.element = this.previousOpen.element;
                    }
                    this.options.on.afterClose(this);
                    document.dispatchEvent(new CustomEvent("afterPopupClose", {
                        detail: {
                            popup: this
                        }
                    }));
                    setTimeout((function() {
                        _this2._focusTrap();
                    }), 50);
                    this.popupLogging("Закрыл попап");
                }
            }, {
                key: "_getHash",
                value: function _getHash() {
                    if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
                }
            }, {
                key: "_openToHash",
                value: function _openToHash() {
                    var classInHash = document.querySelector(".".concat(window.location.hash.replace("#", ""))) ? ".".concat(window.location.hash.replace("#", "")) : document.querySelector("".concat(window.location.hash)) ? "".concat(window.location.hash) : null;
                    var buttons = document.querySelector("[".concat(this.options.attributeOpenButton, ' = "').concat(classInHash, '"]')) ? document.querySelector("[".concat(this.options.attributeOpenButton, ' = "').concat(classInHash, '"]')) : document.querySelector("[".concat(this.options.attributeOpenButton, ' = "').concat(classInHash.replace(".", "#"), '"]'));
                    if (buttons && classInHash) this.open(classInHash);
                }
            }, {
                key: "_setHash",
                value: function _setHash() {
                    history.pushState("", "", this.hash);
                }
            }, {
                key: "_removeHash",
                value: function _removeHash() {
                    history.pushState("", "", window.location.href.split("#")[0]);
                }
            }, {
                key: "_focusCatch",
                value: function _focusCatch(e) {
                    var focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                    var focusArray = Array.prototype.slice.call(focusable);
                    var focusedIndex = focusArray.indexOf(document.activeElement);
                    if (e.shiftKey && 0 === focusedIndex) {
                        focusArray[focusArray.length - 1].focus();
                        e.preventDefault();
                    }
                    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                        focusArray[0].focus();
                        e.preventDefault();
                    }
                }
            }, {
                key: "_focusTrap",
                value: function _focusTrap() {
                    var focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                    if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
                }
            }, {
                key: "popupLogging",
                value: function popupLogging(message) {
                    this.options.logging ? FLS("[Попапос]: ".concat(message)) : null;
                }
            } ]);
            return Popup;
        }();
        flsModules.popup = new Popup({});
        function select_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function select_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function select_createClass(Constructor, protoProps, staticProps) {
            if (protoProps) select_defineProperties(Constructor.prototype, protoProps);
            if (staticProps) select_defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        var SelectConstructor = function() {
            function SelectConstructor(props) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                select_classCallCheck(this, SelectConstructor);
                var defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    var selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging("Проснулся, построил селектов: (".concat(selectItems.length, ")"));
                    } else this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
                }
            }
            select_createClass(SelectConstructor, [ {
                key: "getSelectClass",
                value: function getSelectClass(className) {
                    return ".".concat(className);
                }
            }, {
                key: "getSelectElement",
                value: function getSelectElement(selectItem, className) {
                    return {
                        originalSelect: selectItem.querySelector("select"),
                        selectElement: selectItem.querySelector(this.getSelectClass(className))
                    };
                }
            }, {
                key: "selectsInit",
                value: function selectsInit(selectItems) {
                    var _this2 = this;
                    selectItems.forEach((function(originalSelect, index) {
                        _this2.selectInit(originalSelect, index + 1);
                    }));
                    document.addEventListener("click", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                    document.addEventListener("keydown", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                    document.addEventListener("focusin", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                    document.addEventListener("focusout", function(e) {
                        this.selectsActions(e);
                    }.bind(this));
                }
            }, {
                key: "selectInit",
                value: function selectInit(originalSelect, index) {
                    var _this = this;
                    var selectItem = document.createElement("div");
                    selectItem.classList.add(this.selectClasses.classSelect);
                    originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                    selectItem.appendChild(originalSelect);
                    originalSelect.hidden = true;
                    index ? originalSelect.dataset.id = index : null;
                    if (this.getSelectPlaceholder(originalSelect)) {
                        originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                        if (this.getSelectPlaceholder(originalSelect).label.show) {
                            var selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                            selectItemTitle.insertAdjacentHTML("afterbegin", '<span class="'.concat(this.selectClasses.classSelectLabel, '">').concat(this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value, "</span>"));
                        }
                    }
                    selectItem.insertAdjacentHTML("beforeend", '<div class="'.concat(this.selectClasses.classSelectBody, '"><div hidden class="').concat(this.selectClasses.classSelectOptions, '"></div></div>'));
                    this.selectBuild(originalSelect);
                    originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                    originalSelect.addEventListener("change", (function(e) {
                        _this.selectChange(e);
                    }));
                }
            }, {
                key: "selectBuild",
                value: function selectBuild(originalSelect) {
                    var selectItem = originalSelect.parentElement;
                    selectItem.dataset.id = originalSelect.dataset.id;
                    originalSelect.dataset.classModif ? selectItem.classList.add("select_".concat(originalSelect.dataset.classModif)) : null;
                    originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                    originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setOptions(selectItem, originalSelect);
                    originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                    originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                    this.selectDisabled(selectItem, originalSelect);
                }
            }, {
                key: "selectsActions",
                value: function selectsActions(e) {
                    var targetElement = e.target;
                    var targetType = e.type;
                    if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                        var selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(".".concat(this.selectClasses.classSelect, '[data-id="').concat(targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId, '"]'));
                        var originalSelect = this.getSelectElement(selectItem).originalSelect;
                        if ("click" === targetType) {
                            if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                                var targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                                var optionItem = document.querySelector(".".concat(this.selectClasses.classSelect, '[data-id="').concat(targetTag.dataset.selectId, '"] .select__option[data-value="').concat(targetTag.dataset.value, '"]'));
                                this.optionAction(selectItem, originalSelect, optionItem);
                            } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                                var _optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                                this.optionAction(selectItem, originalSelect, _optionItem);
                            }
                        } else if ("focusin" === targetType || "focusout" === targetType) {
                            if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) "focusin" === targetType ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                        } else if ("keydown" === targetType && "Escape" === e.code) this.selectsСlose();
                    } else this.selectsСlose();
                }
            }, {
                key: "selectsСlose",
                value: function selectsСlose(selectOneGroup) {
                    var _this3 = this;
                    var selectsGroup = selectOneGroup ? selectOneGroup : document;
                    var selectActiveItems = selectsGroup.querySelectorAll("".concat(this.getSelectClass(this.selectClasses.classSelect)).concat(this.getSelectClass(this.selectClasses.classSelectOpen)));
                    if (selectActiveItems.length) selectActiveItems.forEach((function(selectActiveItem) {
                        _this3.selectСlose(selectActiveItem);
                    }));
                }
            }, {
                key: "selectСlose",
                value: function selectСlose(selectItem) {
                    var originalSelect = this.getSelectElement(selectItem).originalSelect;
                    var selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.remove(this.selectClasses.classSelectOpen);
                        _slideUp(selectOptions, originalSelect.dataset.speed);
                    }
                }
            }, {
                key: "selectAction",
                value: function selectAction(selectItem) {
                    var originalSelect = this.getSelectElement(selectItem).originalSelect;
                    var selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    if (originalSelect.closest("[data-one-select]")) {
                        var selectOneGroup = originalSelect.closest("[data-one-select]");
                        this.selectsСlose(selectOneGroup);
                    }
                    if (!selectOptions.classList.contains("_slide")) {
                        selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                        _slideToggle(selectOptions, originalSelect.dataset.speed);
                    }
                }
            }, {
                key: "setSelectTitleValue",
                value: function setSelectTitleValue(selectItem, originalSelect) {
                    var selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                    var selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                    if (selectItemTitle) selectItemTitle.remove();
                    selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
                }
            }, {
                key: "getSelectTitleValue",
                value: function getSelectTitleValue(selectItem, originalSelect) {
                    var _this4 = this;
                    var selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                    if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                        selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((function(option) {
                            return '<span role="button" data-select-id="'.concat(selectItem.dataset.id, '" data-value="').concat(option.value, '" class="_select-tag">').concat(_this4.getSelectElementContent(option), "</span>");
                        })).join("");
                        if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                            document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                            if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                        }
                    }
                    selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                    var pseudoAttribute = "";
                    var pseudoAttributeClass = "";
                    if (originalSelect.hasAttribute("data-pseudo-label")) {
                        pseudoAttribute = originalSelect.dataset.pseudoLabel ? ' data-pseudo-label="'.concat(originalSelect.dataset.pseudoLabel, '"') : ' data-pseudo-label="Заполните атрибут"';
                        pseudoAttributeClass = " ".concat(this.selectClasses.classSelectPseudoLabel);
                    }
                    this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                    if (originalSelect.hasAttribute("data-search")) return '<div class="'.concat(this.selectClasses.classSelectTitle, '"><span').concat(pseudoAttribute, ' class="').concat(this.selectClasses.classSelectValue, '"><input autocomplete="off" type="text" placeholder="').concat(selectTitleValue, '" data-placeholder="').concat(selectTitleValue, '" class="').concat(this.selectClasses.classSelectInput, '"></span></div>'); else {
                        var customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset["class"] ? " ".concat(this.getSelectedOptionsData(originalSelect).elements[0].dataset["class"]) : "";
                        return '<button type="button" class="'.concat(this.selectClasses.classSelectTitle, '"><span').concat(pseudoAttribute, ' class="').concat(this.selectClasses.classSelectValue).concat(pseudoAttributeClass, '"><span class="').concat(this.selectClasses.classSelectContent).concat(customClass, '">').concat(selectTitleValue, "</span></span></button>");
                    }
                }
            }, {
                key: "getSelectElementContent",
                value: function getSelectElementContent(selectOption) {
                    var selectOptionData = selectOption.dataset.asset ? "".concat(selectOption.dataset.asset) : "";
                    var selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? '<img src="'.concat(selectOptionData, '" alt="">') : selectOptionData;
                    var selectOptionContentHTML = "";
                    selectOptionContentHTML += selectOptionData ? '<span class="'.concat(this.selectClasses.classSelectRow, '">') : "";
                    selectOptionContentHTML += selectOptionData ? '<span class="'.concat(this.selectClasses.classSelectData, '">') : "";
                    selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                    selectOptionContentHTML += selectOptionData ? "</span>" : "";
                    selectOptionContentHTML += selectOptionData ? '<span class="'.concat(this.selectClasses.classSelectText, '">') : "";
                    selectOptionContentHTML += selectOption.textContent;
                    selectOptionContentHTML += selectOptionData ? "</span>" : "";
                    selectOptionContentHTML += selectOptionData ? "</span>" : "";
                    return selectOptionContentHTML;
                }
            }, {
                key: "getSelectPlaceholder",
                value: function getSelectPlaceholder(originalSelect) {
                    var selectPlaceholder = Array.from(originalSelect.options).find((function(option) {
                        return !option.value;
                    }));
                    if (selectPlaceholder) return {
                        value: selectPlaceholder.textContent,
                        show: selectPlaceholder.hasAttribute("data-show"),
                        label: {
                            show: selectPlaceholder.hasAttribute("data-label"),
                            text: selectPlaceholder.dataset.label
                        }
                    };
                }
            }, {
                key: "getSelectedOptionsData",
                value: function getSelectedOptionsData(originalSelect, type) {
                    var _this5 = this;
                    var selectedOptions = [];
                    if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((function(option) {
                        return option.value;
                    })).filter((function(option) {
                        return option.selected;
                    })); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                    return {
                        elements: selectedOptions.map((function(option) {
                            return option;
                        })),
                        values: selectedOptions.filter((function(option) {
                            return option.value;
                        })).map((function(option) {
                            return option.value;
                        })),
                        html: selectedOptions.map((function(option) {
                            return _this5.getSelectElementContent(option);
                        }))
                    };
                }
            }, {
                key: "getOptions",
                value: function getOptions(originalSelect) {
                    var _this6 = this;
                    var selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? "data-simplebar" : "";
                    var selectOptionsScrollHeight = originalSelect.dataset.scroll ? 'style="max-height:'.concat(originalSelect.dataset.scroll, 'px"') : "";
                    var selectOptions = Array.from(originalSelect.options);
                    if (selectOptions.length > 0) {
                        var selectOptionsHTML = "";
                        if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((function(option) {
                            return option.value;
                        }));
                        selectOptionsHTML += selectOptionsScroll ? "<div ".concat(selectOptionsScroll, " ").concat(selectOptionsScrollHeight, ' class="').concat(this.selectClasses.classSelectOptionsScroll, '">') : "";
                        selectOptions.forEach((function(selectOption) {
                            selectOptionsHTML += _this6.getOption(selectOption, originalSelect);
                        }));
                        selectOptionsHTML += selectOptionsScroll ? "</div>" : "";
                        return selectOptionsHTML;
                    }
                }
            }, {
                key: "getOption",
                value: function getOption(selectOption, originalSelect) {
                    var selectOptionSelected = selectOption.selected && originalSelect.multiple ? " ".concat(this.selectClasses.classSelectOptionSelected) : "";
                    var selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? "hidden" : "";
                    var selectOptionClass = selectOption.dataset["class"] ? " ".concat(selectOption.dataset["class"]) : "";
                    var selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                    var selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
                    var selectOptionHTML = "";
                    selectOptionHTML += selectOptionLink ? "<a ".concat(selectOptionLinkTarget, " ").concat(selectOptionHide, ' href="').concat(selectOptionLink, '" data-value="').concat(selectOption.value, '" class="').concat(this.selectClasses.classSelectOption).concat(selectOptionClass).concat(selectOptionSelected, '">') : "<button ".concat(selectOptionHide, ' class="').concat(this.selectClasses.classSelectOption).concat(selectOptionClass).concat(selectOptionSelected, '" data-value="').concat(selectOption.value, '" type="button">');
                    selectOptionHTML += this.getSelectElementContent(selectOption);
                    selectOptionHTML += selectOptionLink ? "</a>" : "</button>";
                    return selectOptionHTML;
                }
            }, {
                key: "setOptions",
                value: function setOptions(selectItem, originalSelect) {
                    var selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    selectItemOptions.innerHTML = this.getOptions(originalSelect);
                }
            }, {
                key: "optionAction",
                value: function optionAction(selectItem, originalSelect, optionItem) {
                    if (originalSelect.multiple) {
                        optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                        var originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                        originalSelectSelectedItems.forEach((function(originalSelectSelectedItem) {
                            originalSelectSelectedItem.removeAttribute("selected");
                        }));
                        var selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                        selectSelectedItems.forEach((function(selectSelectedItems) {
                            originalSelect.querySelector('option[value="'.concat(selectSelectedItems.dataset.value, '"]')).setAttribute("selected", "selected");
                        }));
                    } else {
                        if (!originalSelect.hasAttribute("data-show-selected")) {
                            if (selectItem.querySelector("".concat(this.getSelectClass(this.selectClasses.classSelectOption), "[hidden]"))) selectItem.querySelector("".concat(this.getSelectClass(this.selectClasses.classSelectOption), "[hidden]")).hidden = false;
                            optionItem.hidden = true;
                        }
                        originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                        this.selectAction(selectItem);
                    }
                    this.setSelectTitleValue(selectItem, originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }, {
                key: "selectChange",
                value: function selectChange(e) {
                    var originalSelect = e.target;
                    this.selectBuild(originalSelect);
                    this.setSelectChange(originalSelect);
                }
            }, {
                key: "setSelectChange",
                value: function setSelectChange(originalSelect) {
                    if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                    if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                        var tempButton = document.createElement("button");
                        tempButton.type = "submit";
                        originalSelect.closest("form").append(tempButton);
                        tempButton.click();
                        tempButton.remove();
                    }
                    var selectItem = originalSelect.parentElement;
                    this.selectCallback(selectItem, originalSelect);
                }
            }, {
                key: "selectDisabled",
                value: function selectDisabled(selectItem, originalSelect) {
                    if (originalSelect.disabled) {
                        selectItem.classList.add(this.selectClasses.classSelectDisabled);
                        this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                    } else {
                        selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                        this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                    }
                }
            }, {
                key: "searchActions",
                value: function searchActions(selectItem) {
                    this.getSelectElement(selectItem).originalSelect;
                    var selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                    var selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                    var selectOptionsItems = selectOptions.querySelectorAll(".".concat(this.selectClasses.classSelectOption));
                    var _this = this;
                    selectInput.addEventListener("input", (function() {
                        selectOptionsItems.forEach((function(selectOptionsItem) {
                            if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                        }));
                        true === selectOptions.hidden ? _this.selectAction(selectItem) : null;
                    }));
                }
            }, {
                key: "selectCallback",
                value: function selectCallback(selectItem, originalSelect) {
                    document.dispatchEvent(new CustomEvent("selectCallback", {
                        detail: {
                            select: originalSelect
                        }
                    }));
                }
            }, {
                key: "setLogging",
                value: function setLogging(message) {
                    this.config.logging ? FLS("[select]: ".concat(message)) : null;
                }
            } ]);
            return SelectConstructor;
        }();
        flsModules.select = new SelectConstructor({});
        function ssr_window_esm_isObject(obj) {
            return null !== obj && "object" === typeof obj && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if ("undefined" === typeof target[key]) target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = "undefined" !== typeof document ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if ("undefined" === typeof setTimeout) {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if ("undefined" === typeof setTimeout) return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = "undefined" !== typeof window ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, "__proto__", {
                get() {
                    return proto;
                },
                set(value) {
                    proto.__proto__ = value;
                }
            });
        }
        class Dom7 extends Array {
            constructor(items) {
                if ("number" === typeof items) super(items); else {
                    super(...items || []);
                    makeReactive(this);
                }
            }
        }
        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach((el => {
                if (Array.isArray(el)) res.push(...arrayFlat(el)); else res.push(el);
            }));
            return res;
        }
        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }
        function arrayUnique(arr) {
            const uniqueArray = [];
            for (let i = 0; i < arr.length; i += 1) if (-1 === uniqueArray.indexOf(arr[i])) uniqueArray.push(arr[i]);
            return uniqueArray;
        }
        function qsa(selector, context) {
            if ("string" !== typeof selector) return [ selector ];
            const a = [];
            const res = context.querySelectorAll(selector);
            for (let i = 0; i < res.length; i += 1) a.push(res[i]);
            return a;
        }
        function dom7_esm_$(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            let arr = [];
            if (!context && selector instanceof Dom7) return selector;
            if (!selector) return new Dom7(arr);
            if ("string" === typeof selector) {
                const html = selector.trim();
                if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
                    let toCreate = "div";
                    if (0 === html.indexOf("<li")) toCreate = "ul";
                    if (0 === html.indexOf("<tr")) toCreate = "tbody";
                    if (0 === html.indexOf("<td") || 0 === html.indexOf("<th")) toCreate = "tr";
                    if (0 === html.indexOf("<tbody")) toCreate = "table";
                    if (0 === html.indexOf("<option")) toCreate = "select";
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (let i = 0; i < tempParent.childNodes.length; i += 1) arr.push(tempParent.childNodes[i]);
                } else arr = qsa(selector.trim(), context || document);
            } else if (selector.nodeType || selector === window || selector === document) arr.push(selector); else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }
            return new Dom7(arrayUnique(arr));
        }
        dom7_esm_$.fn = Dom7.prototype;
        function addClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.add(...classNames);
            }));
            return this;
        }
        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                el.classList.remove(...classNames);
            }));
            return this;
        }
        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            this.forEach((el => {
                classNames.forEach((className => {
                    el.classList.toggle(className);
                }));
            }));
        }
        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map((c => c.split(" "))));
            return arrayFilter(this, (el => classNames.filter((className => el.classList.contains(className))).length > 0)).length > 0;
        }
        function attr(attrs, value) {
            if (1 === arguments.length && "string" === typeof attrs) {
                if (this[0]) return this[0].getAttribute(attrs);
                return;
            }
            for (let i = 0; i < this.length; i += 1) if (2 === arguments.length) this[i].setAttribute(attrs, value); else for (const attrName in attrs) {
                this[i][attrName] = attrs[attrName];
                this[i].setAttribute(attrName, attrs[attrName]);
            }
            return this;
        }
        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) this[i].removeAttribute(attr);
            return this;
        }
        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transform = transform;
            return this;
        }
        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) this[i].style.transitionDuration = "string" !== typeof duration ? `${duration}ms` : duration;
            return this;
        }
        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = dom7_esm_$(target).parents();
                    for (let k = 0; k < parents.length; k += 1) if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                }
            }
            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) eventData.unshift(e);
                listener.apply(this, eventData);
            }
            const events = eventType.split(" ");
            let j;
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];
                if (!targetSelector) for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7Listeners) el.dom7Listeners = {};
                    if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                    el.dom7Listeners[event].push({
                        listener,
                        proxyListener: handleEvent
                    });
                    el.addEventListener(event, handleEvent, capture);
                } else for (j = 0; j < events.length; j += 1) {
                    const event = events[j];
                    if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                    if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                    el.dom7LiveListeners[event].push({
                        listener,
                        proxyListener: handleLiveEvent
                    });
                    el.addEventListener(event, handleLiveEvent, capture);
                }
            }
            return this;
        }
        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;
            if ("function" === typeof args[1]) {
                [eventType, listener, capture] = args;
                targetSelector = void 0;
            }
            if (!capture) capture = false;
            const events = eventType.split(" ");
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;
                    if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event]; else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
                    if (handlers && handlers.length) for (let k = handlers.length - 1; k >= 0; k -= 1) {
                        const handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
            return this;
        }
        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(" ");
            const eventData = args[1];
            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];
                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter(((data, dataIndex) => dataIndex > 0));
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }
            return this;
        }
        function transitionEnd(callback) {
            const dom = this;
            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off("transitionend", fireCallBack);
            }
            if (callback) dom.on("transitionend", fireCallBack);
            return this;
        }
        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        }
        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        }
        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = ssr_window_esm_getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }
            return null;
        }
        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }
        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;
            if (1 === arguments.length) if ("string" === typeof props) {
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
            } else {
                for (i = 0; i < this.length; i += 1) for (const prop in props) this[i].style[prop] = props[prop];
                return this;
            }
            if (2 === arguments.length && "string" === typeof props) {
                for (i = 0; i < this.length; i += 1) this[i].style[props] = value;
                return this;
            }
            return this;
        }
        function each(callback) {
            if (!callback) return this;
            this.forEach(((el, index) => {
                callback.apply(el, [ el, index ]);
            }));
            return this;
        }
        function filter(callback) {
            const result = arrayFilter(this, callback);
            return dom7_esm_$(result);
        }
        function html(html) {
            if ("undefined" === typeof html) return this[0] ? this[0].innerHTML : null;
            for (let i = 0; i < this.length; i += 1) this[i].innerHTML = html;
            return this;
        }
        function dom7_esm_text(text) {
            if ("undefined" === typeof text) return this[0] ? this[0].textContent.trim() : null;
            for (let i = 0; i < this.length; i += 1) this[i].textContent = text;
            return this;
        }
        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || "undefined" === typeof selector) return false;
            if ("string" === typeof selector) {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = dom7_esm_$(selector);
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            if (selector === document) return el === document;
            if (selector === window) return el === window;
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [ selector ] : selector;
                for (i = 0; i < compareWith.length; i += 1) if (compareWith[i] === el) return true;
                return false;
            }
            return false;
        }
        function index() {
            let child = this[0];
            let i;
            if (child) {
                i = 0;
                while (null !== (child = child.previousSibling)) if (1 === child.nodeType) i += 1;
                return i;
            }
            return;
        }
        function eq(index) {
            if ("undefined" === typeof index) return this;
            const length = this.length;
            if (index > length - 1) return dom7_esm_$([]);
            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return dom7_esm_$([]);
                return dom7_esm_$([ this[returnIndex] ]);
            }
            return dom7_esm_$([ this[index] ]);
        }
        function append(...els) {
            let newChild;
            const document = ssr_window_esm_getDocument();
            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];
                for (let i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) this[i].appendChild(tempDiv.firstChild);
                } else if (newChild instanceof Dom7) for (let j = 0; j < newChild.length; j += 1) this[i].appendChild(newChild[j]); else this[i].appendChild(newChild);
            }
            return this;
        }
        function prepend(newChild) {
            const document = ssr_window_esm_getDocument();
            let i;
            let j;
            for (i = 0; i < this.length; i += 1) if ("string" === typeof newChild) {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
            } else if (newChild instanceof Dom7) for (j = 0; j < newChild.length; j += 1) this[i].insertBefore(newChild[j], this[i].childNodes[0]); else this[i].insertBefore(newChild, this[i].childNodes[0]);
            return this;
        }
        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) return dom7_esm_$([ this[0].nextElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (this[0].nextElementSibling) return dom7_esm_$([ this[0].nextElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (dom7_esm_$(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return dom7_esm_$(nextEls);
        }
        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];
                if (selector) {
                    if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) return dom7_esm_$([ el.previousElementSibling ]);
                    return dom7_esm_$([]);
                }
                if (el.previousElementSibling) return dom7_esm_$([ el.previousElementSibling ]);
                return dom7_esm_$([]);
            }
            return dom7_esm_$([]);
        }
        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return dom7_esm_$([]);
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return dom7_esm_$(prevEls);
        }
        function dom7_esm_parent(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) if (null !== this[i].parentNode) if (selector) {
                if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
            } else parents.push(this[i].parentNode);
            return dom7_esm_$(parents);
        }
        function parents(selector) {
            const parents = [];
            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode;
                while (parent) {
                    if (selector) {
                        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
                    } else parents.push(parent);
                    parent = parent.parentNode;
                }
            }
            return dom7_esm_$(parents);
        }
        function closest(selector) {
            let closest = this;
            if ("undefined" === typeof selector) return dom7_esm_$([]);
            if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
            return closest;
        }
        function find(selector) {
            const foundElements = [];
            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);
                for (let j = 0; j < found.length; j += 1) foundElements.push(found[j]);
            }
            return dom7_esm_$(foundElements);
        }
        function children(selector) {
            const children = [];
            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;
                for (let j = 0; j < childNodes.length; j += 1) if (!selector || dom7_esm_$(childNodes[j]).is(selector)) children.push(childNodes[j]);
            }
            return dom7_esm_$(children);
        }
        function remove() {
            for (let i = 0; i < this.length; i += 1) if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            return this;
        }
        const noTrigger = "resize scroll".split(" ");
        function shortcut(name) {
            function eventHandler(...args) {
                if ("undefined" === typeof args[0]) {
                    for (let i = 0; i < this.length; i += 1) if (noTrigger.indexOf(name) < 0) if (name in this[i]) this[i][name](); else dom7_esm_$(this[i]).trigger(name);
                    return this;
                }
                return this.on(name, ...args);
            }
            return eventHandler;
        }
        shortcut("click");
        shortcut("blur");
        shortcut("focus");
        shortcut("focusin");
        shortcut("focusout");
        shortcut("keyup");
        shortcut("keydown");
        shortcut("keypress");
        shortcut("submit");
        shortcut("change");
        shortcut("mousedown");
        shortcut("mousemove");
        shortcut("mouseup");
        shortcut("mouseenter");
        shortcut("mouseleave");
        shortcut("mouseout");
        shortcut("mouseover");
        shortcut("touchstart");
        shortcut("touchend");
        shortcut("touchmove");
        shortcut("resize");
        shortcut("scroll");
        const Methods = {
            addClass,
            removeClass,
            hasClass,
            toggleClass,
            attr,
            removeAttr,
            transform,
            transition,
            on,
            off,
            trigger,
            transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles,
            offset,
            css,
            each,
            html,
            text: dom7_esm_text,
            is,
            index,
            eq,
            append,
            prepend,
            next,
            nextAll,
            prev,
            prevAll,
            parent: dom7_esm_parent,
            parents,
            closest,
            find,
            children,
            filter,
            remove
        };
        Object.keys(Methods).forEach((methodName => {
            Object.defineProperty(dom7_esm_$.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        }));
        const dom = dom7_esm_$;
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix("none" === curTransform ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if ("x" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (16 === matrix.length) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if ("y" === axis) if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (16 === matrix.length) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return "object" === typeof o && null !== o && o.constructor && "Object" === Object.prototype.toString.call(o).slice(8, -1);
        }
        function isNode(node) {
            if ("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement) return node instanceof HTMLElement;
            return node && (1 === node.nodeType || 11 === node.nodeType);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (void 0 !== nextSource && null !== nextSource && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (void 0 !== desc && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => "next" === dir && current >= target || "prev" === dir && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (null === startTime) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;
                    try {
                        const opts = Object.defineProperty({}, "passive", {
                            get() {
                                supportsPassive = true;
                            }
                        });
                        window.addEventListener("testPassiveListener", null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return "ongesturestart" in window;
                }()
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = "Win32" === platform;
            let macos = "MacIntel" === platform;
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && "undefined" !== typeof window.ResizeObserver) {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (1 === mutations.length) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: "undefined" === typeof options.attributes ? true : options.attributes,
                    childList: "undefined" === typeof options.childList ? true : options.childList,
                    characterData: "undefined" === typeof options.characterData ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if ("function" !== typeof handler) return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if ("undefined" === typeof handler) self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if ("string" === typeof args[0] || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;
            if ("undefined" !== typeof swiper.params.width && null !== swiper.params.width) width = swiper.params.width; else width = $el[0].clientWidth;
            if ("undefined" !== typeof swiper.params.height && null !== swiper.params.height) height = swiper.params.height; else height = $el[0].clientHeight;
            if (0 === width && swiper.isHorizontal() || 0 === height && swiper.isVertical()) return;
            width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
            height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {$wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if ("function" === typeof offsetBefore) offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if ("function" === typeof offsetAfter) offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if ("undefined" === typeof swiperSize) return;
            if ("string" === typeof spaceBetween && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            if (rtl) slides.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }); else slides.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            });
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = "auto" === params.slidesPerView && params.breakpoints && Object.keys(params.breakpoints).filter((key => "undefined" !== typeof params.breakpoints[key].slidesPerView)).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if ("none" === slide.css("display")) continue;
                if ("auto" === params.slidesPerView) {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) slide[0].style.transform = "none";
                    if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && "border-box" === boxSizing) slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide[0].style.transform = currentTransform;
                    if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (0 === prevSlideSize && 0 !== i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (0 === i) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && ("slide" === params.effect || "coverflow" === params.effect)) $wrapperEl.css({
                width: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (params.setWrapperSize) $wrapperEl.css({
                [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
            });
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (0 === snapGrid.length) snapGrid = [ 0 ];
            if (0 !== params.spaceBetween) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).css({
                    [key]: `${spaceBetween}px`
                });
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && ("slide" === params.effect || "fade" === params.effect)) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if ("number" === typeof speed) swiper.setTransition(speed); else if (true === speed) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides.eq(index)[0];
            };
            if ("auto" !== swiper.params.slidesPerView && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || dom([])).each((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if ("undefined" !== typeof activeSlides[i]) {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || 0 === newHeight) swiper.$wrapperEl.css("height", `${newHeight}px`);
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (0 === slides.length) return;
            if ("undefined" === typeof slides[0].swiperSlideOffset) swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        function updateProgress(translate) {
            const swiper = this;
            if ("undefined" === typeof translate) {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (0 === translatesDiff) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, $wrapperEl, activeIndex, realIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;
            if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides.eq(activeIndex);
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
            if (params.loop && 0 === nextSlide.length) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
            if (params.loop && 0 === prevSlide.length) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
                if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass); else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            if ("undefined" === typeof activeIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
                } else if (translate >= slidesGrid[i]) activeIndex = i;
                if (params.normalizeSlideIndex) if (activeIndex < 0 || "undefined" === typeof activeIndex) activeIndex = 0;
            }
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(dom(slide).attr("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && void 0 !== swiper.clickedIndex && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, $wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (0 === speed) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (0 === speed) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if ("reset" === dir) {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if ("next" === dir) swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd_transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const core_transition = {
            setTransition,
            transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if ("number" !== typeof index && "string" !== typeof index) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(100 * translate);
                const normalizedGrid = Math.floor(100 * slidesGrid[i]);
                const normalizedGridNext = Math.floor(100 * slidesGrid[i + 1]);
                if ("undefined" !== typeof slidesGrid[i + 1]) {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if ("slide" !== params.effect) swiper.setTranslate(translate);
                if ("reset" !== direction) {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (0 === speed) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._swiperImmediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (0 === speed) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if ("string" === typeof index) {
                const indexAsNumber = parseInt(index, 10);
                const isValidNumber = isFinite(indexAsNumber);
                if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) newIndex += swiper.loopedSlides;
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {animating, enabled, params} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, animating, snapGrid, slidesGrid, rtlTranslate, enabled} = swiper;
            if (!enabled) return swiper;
            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if ("undefined" === typeof prevSnap && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if ("undefined" !== typeof prevSnapIndex) prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if ("undefined" !== typeof prevSnap) {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if ("auto" === params.slidesPerView && 1 === params.slidesPerGroup && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, $wrapperEl} = swiper;
            const slidesPerView = "auto" === params.slidesPerView ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, $wrapperEl} = swiper;
            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);
            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }
                    slides = $selector.children(`.${params.slideClass}`);
                }
            }
            if ("auto" === params.slidesPerView && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
            const prependSlides = [];
            const appendSlides = [];
            slides.each(((el, index) => {
                const slide = dom(el);
                slide.attr("data-swiper-slide-index", index);
            }));
            for (let i = 0; i < swiper.loopedSlides; i += 1) {
                const index = i - Math.floor(i / slides.length) * slides.length;
                appendSlides.push(slides.eq(index)[0]);
                prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
            }
            for (let i = 0; i < appendSlides.length; i += 1) $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            for (let i = prependSlides.length - 1; i >= 0; i -= 1) $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        function loopFix() {
            const swiper = this;
            swiper.emit("beforeLoopFix");
            const {activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl} = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = slides.length - 3 * loopedSlides + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            } else if (activeIndex >= slides.length - loopedSlides) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && 0 !== diff) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {$wrapperEl, params, slides} = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr("data-swiper-slide-index");
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = "container" === swiper.params.touchEventsTarget ? swiper.el : swiper.wrapperEl;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            swiper["container" === swiper.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "";
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);
            if ("wrapper" === params.touchEventsTarget) if (!$targetEl.closest(swiper.wrapperEl).length) return;
            data.isTouchEvent = "touchstart" === e.type;
            if (!data.isTouchEvent && "which" in e && 3 === e.which) return;
            if (!data.isTouchEvent && "button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && "" !== params.noSwipingClass;
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = dom(eventPath[0]);
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!$targetEl.closest(params.swipeHandler)[0]) return;
            touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if ("prevent" === edgeSwipeDetection) event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            if ("touchstart" !== e.type) {
                let preventDefault = true;
                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;
                    if ("SELECT" === $targetEl[0].nodeName) data.isTouched = false;
                }
                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
            }
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            if (data.isTouchEvent && "touchmove" !== e.type) return;
            const targetTouch = "touchmove" === e.type && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = "touchmove" === e.type ? targetTouch.pageX : e.pageX;
            const pageY = "touchmove" === e.type ? targetTouch.pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (data.isTouchEvent && document.activeElement) if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if ("undefined" === typeof data.isScrolling) {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = 180 * Math.atan2(Math.abs(diffY), Math.abs(diffX)) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if ("undefined" === typeof data.startMoving) if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            if (!data.isMoved) {
                if (params.loop && !params.cssMode) swiper.loopFix();
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
                data.allowMomentumBounce = false;
                if (params.grabCursor && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && "next" === swiper.swipeDirection && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && "prev" === swiper.swipeDirection && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (true === swiper.allowSlideNext || true === swiper.allowSlidePrev)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || 0 === touches.diff || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if ("undefined" !== typeof slidesGrid[i + increment]) {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if ("next" === swiper.swipeDirection) if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if ("prev" === swiper.swipeDirection) if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (null !== rewindLastIndex && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if ("next" === swiper.swipeDirection) swiper.slideTo(null !== rewindFirstIndex ? rewindFirstIndex : stopIndex + increment);
                    if ("prev" === swiper.swipeDirection) swiper.slideTo(null !== rewindLastIndex ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && 0 === el.offsetWidth) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            if (("auto" === params.slidesPerView || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (0 === swiper.translate) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (0 === translatesDiff) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, touchEvents, el, wrapperEl, device, support} = swiper;
            const capture = !!params.nested;
            const domMethod = "on" === method ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = "touchstart" === touchEvents.start && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
                if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
            }
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params, support} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            if (support.touch && !dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {activeIndex, initialized, loopedSlides = 0, params, $el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && 0 === Object.keys(breakpoints).length) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && "column" === breakpointParams.grid.fill || !breakpointParams.grid.fill && "column" === params.grid.fill) $el.addClass(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || "container" === base && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = "window" === base ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if ("string" === typeof point && 0 === point.indexOf("@")) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if ("window" === base) {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if ("object" === typeof item) Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if ("string" === typeof item) resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, $el, device, support} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "pointer-events": !support.touch
            }, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && "column" === params.grid.fill
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([ ...classNames ].join(" "));
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {$el, classNames} = swiper;
            $el.removeClass(classNames.join(" "));
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;
            function onReady() {
                if (callback) callback();
            }
            const isPicture = dom(imageEl).parent("picture")[0];
            if (!isPicture && (!imageEl.complete || !checkForComplete)) if (src) {
                image = new window.Image;
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) image.sizes = sizes;
                if (srcset) image.srcset = srcset;
                if (src) image.src = src;
            } else onReady(); else onReady();
        }
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find("img");
            function onReady() {
                if ("undefined" === typeof swiper || null === swiper || !swiper || swiper.destroyed) return;
                if (void 0 !== swiper.imagesLoaded) swiper.imagesLoaded += 1;
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit("imagesReady");
                }
            }
            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
            }
        }
        const core_images = {
            loadImage,
            preloadImages
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + 2 * slidesOffsetBefore;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = 1 === swiper.snapGrid.length;
            if (true === params.allowSlideNext) swiper.allowSlideNext = !swiper.isLocked;
            if (true === params.allowSlidePrev) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            preloadImages: true,
            updateOnImagesReady: true,
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: true,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if ("object" !== typeof moduleParams || null === moduleParams) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && true === params[moduleParamName]) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (true === params[moduleParamName]) params[moduleParamName] = {
                    enabled: true
                };
                if ("object" === typeof params[moduleParamName] && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition: core_transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes,
            images: core_images
        };
        const extendedDefaults = {};
        class Swiper {
            constructor(...args) {
                let el;
                let params;
                if (1 === args.length && args[0].constructor && "Object" === Object.prototype.toString.call(args[0]).slice(8, -1)) params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                swiper.$ = dom;
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return "horizontal" === swiper.params.direction;
                    },
                    isVertical() {
                        return "vertical" === swiper.params.direction;
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: function touchEvents() {
                        const touch = [ "touchstart", "touchmove", "touchend", "touchcancel" ];
                        const desktop = [ "pointerdown", "pointermove", "pointerup" ];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, "undefined" === typeof speed ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => 0 === className.indexOf("swiper") || 0 === className.indexOf(swiper.params.containerModifierClass)));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => 0 === className.indexOf("swiper-slide") || 0 === className.indexOf(swiper.params.slideClass))).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if ("current" === view) for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? -1 * swiper.translate : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if (("auto" === swiper.params.slidesPerView || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = "horizontal" === currentDirection ? "vertical" : "horizontal";
                if (newDirection === currentDirection || "horizontal" !== newDirection && "vertical" !== newDirection) return swiper;
                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each((slideEl => {
                    if ("vertical" === newDirection) slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && "rtl" === direction || !swiper.rtl && "ltr" === direction) return;
                swiper.rtl = "rtl" === direction;
                swiper.rtlTranslate = "horizontal" === swiper.params.direction && swiper.rtl;
                if (swiper.rtl) {
                    swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true;
                const $el = dom(el || swiper.params.el);
                el = $el[0];
                if (!el) return false;
                el.swiper = swiper;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector()));
                        res.children = options => $el.children(options);
                        return res;
                    }
                    if (!$el.children) return dom($el).children(getWrapperSelector());
                    return $el.children(getWrapperSelector());
                };
                let $wrapperEl = getWrapper();
                if (0 === $wrapperEl.length && swiper.params.createElements) {
                    const document = ssr_window_esm_getDocument();
                    const wrapper = document.createElement("div");
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each((slideEl => {
                        $wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    rtl: "rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction"),
                    rtlTranslate: "horizontal" === swiper.params.direction && ("rtl" === el.dir.toLowerCase() || "rtl" === $el.css("direction")),
                    wrongRTL: "-webkit-box" === $wrapperEl.css("display")
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (false === mounted) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                if (swiper.params.loop) swiper.loopCreate();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.preloadImages) swiper.preloadImages();
                if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, $el, $wrapperEl, slides} = swiper;
                if ("undefined" === typeof swiper.params || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr("style");
                    $wrapperEl.removeAttr("style");
                    if (slides && slides.length) slides.removeClass([ params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (false !== deleteInstance) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if ("function" === typeof mod && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, Observer ]);
        const core = Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = ssr_window_esm_getDocument();
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && true === params.auto) {
                    let element = swiper.$el.children(`.${checkProps[key]}`)[0];
                    if (!element) {
                        element = document.createElement("div");
                        element.className = checkProps[key];
                        swiper.$el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };
            function getEl(el) {
                let $el;
                if (el) {
                    $el = dom(el);
                    if (swiper.params.uniqueNavElements && "string" === typeof el && $el.length > 1 && 1 === swiper.$el.find(el).length) $el = swiper.$el.find(el);
                }
                return $el;
            }
            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;
                if ($el && $el.length > 0) {
                    $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
                    if ($el[0] && "BUTTON" === $el[0].tagName) $el[0].disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
                }
            }
            function update() {
                if (swiper.params.loop) return;
                const {$nextEl, $prevEl} = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);
                if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
                if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });
                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }
            function destroy() {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off("click", onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off("click", onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }
            on("init", (() => {
                if (false === swiper.params.navigation.enabled) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$nextEl, $prevEl} = swiper.navigation;
                if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
                if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
            }));
            on("click", ((_s, e) => {
                const {$nextEl, $prevEl} = swiper.navigation;
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass); else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    if (true === isHidden) emit("navigationShow"); else emit("navigationHide");
                    if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
                init();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes = "") {
            return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination({swiper, extendParams, on, emit}) {
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || 0 === swiper.pagination.$el.length;
            }
            function setSideBullets($bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - 2 * swiper.loopedSlides) current -= slidesLength - 2 * swiper.loopedSlides;
                    if (current > total - 1) current -= total;
                    if (current < 0 && "bullets" !== swiper.params.paginationType) current = total + current;
                } else if ("undefined" !== typeof swiper.snapIndex) current = swiper.snapIndex; else current = swiper.activeIndex || 0;
                if ("bullets" === params.type && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                        if (params.dynamicMainBullets > 1 && void 0 !== swiper.previousIndex) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass([ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)).join(" "));
                    if ($el.length > 1) bullets.each((bullet => {
                        const $bullet = dom(bullet);
                        const bulletIndex = $bullet.index();
                        if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                            if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                        }
                    })); else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (let i = firstIndex; i <= lastIndex; i += 1) bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            if (swiper.params.loop) if (bulletIndex >= bullets.length) {
                                for (let i = params.dynamicMainBullets; i >= 0; i -= 1) bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            } else {
                                setSideBullets($firstDisplayedBullet, "prev");
                                setSideBullets($lastDisplayedBullet, "next");
                            }
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
                    }
                }
                if ("fraction" === params.type) {
                    $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }
                if ("progressbar" === params.type) {
                    let progressbarDirection;
                    if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if ("horizontal" === progressbarDirection) scaleX = scale; else scaleY = scale;
                    $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }
                if ("custom" === params.type && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit("paginationRender", $el[0]);
                } else emit("paginationUpdate", $el[0]);
                if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = "";
                if ("bullets" === params.type) {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - 2 * swiper.loopedSlides) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
                }
                if ("fraction" === params.type) {
                    if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("progressbar" === params.type) {
                    if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    $el.html(paginationHTML);
                }
                if ("custom" !== params.type) emit("paginationRender", swiper.pagination.$el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if (0 === $el.length) return;
                if (swiper.params.uniqueNavElements && "string" === typeof params.el && $el.length > 1) {
                    $el = swiper.$el.find(params.el);
                    if ($el.length > 1) $el = $el.filter((el => {
                        if (dom(el).parents(".swiper")[0] !== swiper.el) return false;
                        return true;
                    }));
                }
                if ("bullets" === params.type && params.clickable) $el.addClass(params.clickableClass);
                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if ("bullets" === params.type && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                }
                if ("progressbar" === params.type && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
                if (params.clickable) $el.on("click", classes_to_selector_classesToSelector(params.bulletClass), (function onClick(e) {
                    e.preventDefault();
                    let index = dom(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) index += swiper.loopedSlides;
                    swiper.slideTo(index);
                }));
                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });
                if (!swiper.enabled) $el.addClass(params.lockClass);
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
                if (params.clickable) $el.off("click", classes_to_selector_classesToSelector(params.bulletClass));
            }
            on("init", (() => {
                if (false === swiper.params.pagination.enabled) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (swiper.params.loop) update(); else if ("undefined" === typeof swiper.snapIndex) update();
            }));
            on("snapIndexChange", (() => {
                if (!swiper.params.loop) update();
            }));
            on("slidesLengthChange", (() => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("snapGridLengthChange", (() => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                const {$el} = swiper.pagination;
                if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                const {$el} = swiper.pagination;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
                    if (true === isHidden) emit("paginationShow"); else emit("paginationHide");
                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            }));
            const enable = () => {
                swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".conditions__slider")) new core(".conditions__slider", {
                modules: [ Pagination ],
                observer: true,
                observeParents: true,
                speed: 800,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 35
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        watchOverflow: false
                    },
                    1250: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                        watchOverflow: true
                    }
                }
            });
            if (document.querySelector(".reviews__slider")) new core(".reviews__slider", {
                modules: [ Pagination ],
                observer: true,
                observeParents: true,
                speed: 800,
                grabCursor: true,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 2
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    1700: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                        centeredSlides: true
                    },
                    2e3: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                        centeredSlides: true
                    }
                }
            });
            if (document.querySelector(".video-list__slider")) new core(".video-list__slider", {
                modules: [ Pagination, Navigation ],
                observer: true,
                observeParents: true,
                speed: 800,
                grabCursor: true,
                simulateTouch: false,
                slidesPerView: 1,
                initialSlide: 1,
                centeredSlides: true,
                effect: "coverflow",
                coverflowEffect: {
                    speed: 4e3,
                    modifier: 1,
                    slideShadows: true
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    320: {
                        spaceBetween: 30,
                        effect: "slide"
                    },
                    767: {
                        spaceBetween: -300
                    },
                    830: {
                        spaceBetween: -400
                    },
                    991: {
                        spaceBetween: -500
                    },
                    1150: {
                        spaceBetween: -600
                    },
                    1500: {
                        spaceBetween: -800
                    },
                    1750: {
                        spaceBetween: -1100
                    },
                    1810: {
                        spaceBetween: -1200
                    },
                    1930: {
                        spaceBetween: -1250
                    },
                    1990: {
                        spaceBetween: -1300
                    },
                    2045: {
                        spaceBetween: -1350
                    },
                    2105: {
                        spaceBetween: -1400
                    },
                    2190: {
                        spaceBetween: -1450
                    },
                    2250: {
                        spaceBetween: -1500
                    },
                    2370: {
                        spaceBetween: -1600
                    },
                    2500: {
                        spaceBetween: -1700
                    },
                    2700: {
                        spaceBetween: -1900
                    }
                }
            });
            if (document.getElementById("cabinetHomeSliderBnb")) new core("#cabinetHomeSliderBnb", {
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                speed: 800,
                grabCursor: true,
                watchOverflow: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    440: {
                        slidesPerView: 1.75,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1150: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            });
            if (document.getElementById("cabinetHomeSliderBusd")) new core("#cabinetHomeSliderBusd", {
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                speed: 800,
                grabCursor: true,
                watchOverflow: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    440: {
                        slidesPerView: 1.75,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1150: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            });
            if (document.getElementById("cabinetReinvestSliderBnb")) new core("#cabinetReinvestSliderBnb", {
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                speed: 800,
                grabCursor: true,
                watchOverflow: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    440: {
                        slidesPerView: 1.75,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1150: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            });
            if (document.getElementById("cabinetReinvestSliderBusd")) new core("#cabinetReinvestSliderBusd", {
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                speed: 800,
                grabCursor: true,
                watchOverflow: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    440: {
                        slidesPerView: 1.75,
                        spaceBetween: 20,
                        centeredSlides: true
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1150: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1500: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            });
            if (document.getElementById("cabinetAsideSwiper") && window.matchMedia("(max-width: 991px)").matches) new core("#cabinetAsideSwiper", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                speed: 800,
                grabCursor: true,
                watchOverflow: true,
                autoHeight: true,
                spaceBetween: 40,
                loop: true,
                navigation: {
                    prevEl: ".cabinet-aside__prew-btn ",
                    nextEl: ".cabinet-aside__next-btn"
                },
                breakpoints: {
                    991: {
                        slidesPerView: 1
                    }
                }
            });
        }
        window.addEventListener("load", (function() {
            initSliders();
        }));
        var smooth_scroll_polyfills_min = __webpack_require__(2);
        var gotoBlock = function gotoBlock(targetBlock) {
            var noHeader = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : false;
            var speed = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 500;
            var offsetTop = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            var targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                var headerItem = "";
                var headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    var headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = "transition-duration: 0s;";
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((function() {
                            headerElement.style.cssText = "";
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                var options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof smooth_scroll_polyfills_min) (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options); else {
                    var targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS("[gotoBlock]: Юхуу...едем к ".concat(targetBlock));
            } else FLS("[gotoBlock]: Ой ой..Такого блока нет на странице: ".concat(targetBlock));
        };
        var addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    var targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        var gotoLink = targetElement.closest("[data-goto]");
                        var gotoLinkSelector = gotoLink.dataset["goto"] ? gotoLink.dataset["goto"] : "";
                        var noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        var gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        var offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (flsModules.fullpage) {
                            var fullpageSectionId = +document.querySelector("".concat(gotoLinkSelector)).closest("[data-fp-section]").dataset.fpId;
                            fullpageSectionId ? flsModules.fullpage.switchingSection(fullpageSectionId) : null;
                            document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                        } else gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    var entry = e.detail.entry;
                    var _targetElement = entry.target;
                    if ("navigator" === _targetElement.dataset.watch) {
                        document.querySelector("[data-goto]._navigator-active");
                        var navigatorCurrentItem;
                        if (_targetElement.id && document.querySelector('[data-goto="#'.concat(_targetElement.id, '"]'))) navigatorCurrentItem = document.querySelector('[data-goto="#'.concat(_targetElement.id, '"]')); else if (_targetElement.classList.length) for (var index = 0; index < _targetElement.classList.length; index++) {
                            var element = _targetElement.classList[index];
                            if (document.querySelector('[data-goto=".'.concat(element, '"]'))) {
                                navigatorCurrentItem = document.querySelector('[data-goto=".'.concat(element, '"]'));
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                var goToHash;
                if (document.querySelector("#".concat(getHash()))) goToHash = "#".concat(getHash()); else if (document.querySelector(".".concat(getHash()))) goToHash = ".".concat(getHash());
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((function() {
            if (addWindowScrollEvent) {
                var windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" === typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if ("Object" === n && o.constructor) n = o.constructor.name;
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
            if ("undefined" !== typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
            if (null == len || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function dynamic_adapt_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function dynamic_adapt_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function dynamic_adapt_createClass(Constructor, protoProps, staticProps) {
            if (protoProps) dynamic_adapt_defineProperties(Constructor.prototype, protoProps);
            if (staticProps) dynamic_adapt_defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        var DynamicAdapt = function() {
            function DynamicAdapt(type) {
                dynamic_adapt_classCallCheck(this, DynamicAdapt);
                this.type = type;
            }
            dynamic_adapt_createClass(DynamicAdapt, [ {
                key: "init",
                value: function init() {
                    var _this = this;
                    this.оbjects = [];
                    this.daClassname = "_dynamic_adapt_";
                    this.nodes = _toConsumableArray(document.querySelectorAll("[data-da]"));
                    this.nodes.forEach((function(node) {
                        var data = node.dataset.da.trim();
                        var dataArray = data.split(",");
                        var оbject = {};
                        оbject.element = node;
                        оbject.parent = node.parentNode;
                        оbject.destination = document.querySelector("".concat(dataArray[0].trim()));
                        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                        оbject.index = _this.indexInParent(оbject.parent, оbject.element);
                        _this.оbjects.push(оbject);
                    }));
                    this.arraySort(this.оbjects);
                    this.mediaQueries = this.оbjects.map((function(_ref) {
                        var breakpoint = _ref.breakpoint;
                        return "(".concat(_this.type, "-width: ").concat(breakpoint, "px),").concat(breakpoint);
                    })).filter((function(item, index, self) {
                        return self.indexOf(item) === index;
                    }));
                    this.mediaQueries.forEach((function(media) {
                        var mediaSplit = media.split(",");
                        var matchMedia = window.matchMedia(mediaSplit[0]);
                        var mediaBreakpoint = mediaSplit[1];
                        var оbjectsFilter = _this.оbjects.filter((function(_ref2) {
                            var breakpoint = _ref2.breakpoint;
                            return breakpoint === mediaBreakpoint;
                        }));
                        matchMedia.addEventListener("change", (function() {
                            _this.mediaHandler(matchMedia, оbjectsFilter);
                        }));
                        _this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                }
            }, {
                key: "mediaHandler",
                value: function mediaHandler(matchMedia, оbjects) {
                    var _this2 = this;
                    if (matchMedia.matches) оbjects.forEach((function(оbject) {
                        _this2.moveTo(оbject.place, оbject.element, оbject.destination);
                    })); else оbjects.forEach((function(_ref3) {
                        var parent = _ref3.parent, element = _ref3.element, index = _ref3.index;
                        if (element.classList.contains(_this2.daClassname)) _this2.moveBack(parent, element, index);
                    }));
                }
            }, {
                key: "moveTo",
                value: function moveTo(place, element, destination) {
                    element.classList.add(this.daClassname);
                    if ("last" === place || place >= destination.children.length) {
                        destination.append(element);
                        return;
                    }
                    if ("first" === place) {
                        destination.prepend(element);
                        return;
                    }
                    destination.children[place].before(element);
                }
            }, {
                key: "moveBack",
                value: function moveBack(parent, element, index) {
                    element.classList.remove(this.daClassname);
                    if (void 0 !== parent.children[index]) parent.children[index].before(element); else parent.append(element);
                }
            }, {
                key: "indexInParent",
                value: function indexInParent(parent, element) {
                    return _toConsumableArray(parent.children).indexOf(element);
                }
            }, {
                key: "arraySort",
                value: function arraySort(arr) {
                    if ("min" === this.type) arr.sort((function(a, b) {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if ("first" === a.place || "last" === b.place) return -1;
                            if ("last" === a.place || "first" === b.place) return 1;
                            return 0;
                        }
                        return a.breakpoint - b.breakpoint;
                    })); else {
                        arr.sort((function(a, b) {
                            if (a.breakpoint === b.breakpoint) {
                                if (a.place === b.place) return 0;
                                if ("first" === a.place || "last" === b.place) return 1;
                                if ("last" === a.place || "first" === b.place) return -1;
                                return 0;
                            }
                            return b.breakpoint - a.breakpoint;
                        }));
                        return;
                    }
                }
            } ]);
            return DynamicAdapt;
        }();
        var da = new DynamicAdapt("max");
        da.init();
        var translations = {
            eng: {
                headerHome: "Home",
                headerAbout: "About",
                headerNft: "NFT",
                headerCondition: "Investment Conditions",
                headerHowWork: "How it works",
                headerReferral: "Referral program",
                headerScheme: "Interest scheme",
                headerRegional: "Regional",
                headerFaq: "FAQ",
                headerSmartContract: "Smart-contract",
                headerReviews: "Reviews",
                headerNewChickens: "New chickens",
                headerBtn: "Connect Wallet",
                otherHeaderHome: "Home",
                otherHeaderAbout: "About",
                otherHeaderNft: "NFT",
                otherHeaderCondition: "Investment Conditions",
                otherHeaderHowWork: "How it works",
                otherHeaderReferral: "Referral program",
                otherHeaderScheme: "Interest scheme",
                otherHeaderRegional: "Regional",
                otherHeaderFaq: "FAQ",
                otherHeaderSmartContract: "Smart-contract",
                otherHeaderReviews: "Reviews",
                otherHeaderNewChickens: "New chickens",
                otherHeaderBtn: "Connect Wallet",
                aboutTitle: "Reliable Investments with",
                aboutSubTitle: "Earn up to <span>+220%</span> of your NFT cost",
                aboutItem1: "Blockchain decentralized platform",
                aboutItem2: "Totally secure income based on BNB smart-contract",
                aboutItem3: "Smart-contract verified and audited by independent company",
                aboutBtnDiscrord: "Join Discord",
                aboutBtnTwitter: "Follow Twitter",
                aboutBtnConnect: "Connect Wallet",
                benefitsTitle: "BNB Chain boasts over <span>3+ Million Weekly Unique Active Users</span>",
                benefitsItem1: "First most profitable project on NFT ",
                benefitsItem2: "Unlimited earnings with ever-growing rates ",
                nftTitle: "Profitable NFT chicks",
                nftProfit1: "profit",
                nftProfit2: "profit",
                nftProfit3: "profit",
                nftProfit4: "profit",
                nftProfit5: "profit",
                nftProfit6: "profit",
                nftProfit7: "profit",
                nftProfit8: "profit",
                nftProfit9: "profit",
                nftProfit10: "profit",
                nftBuy1: "Buy",
                nftBuy2: "Buy",
                nftBuy3: "Buy",
                nftBuy4: "Buy",
                nftBuy5: "Buy",
                nftBuy6: "Buy",
                nftBuy7: "Buy",
                nftBuy8: "Buy",
                nftBuy9: "Buy",
                nftBuy10: "Buy",
                conditionTitle: "Investment Conditions",
                conditionItem1: 'Working on <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">BNB</span> network <span data-help="You can buy our NFTs by connecting your wallet. All transactions on the site are carried out only through Binance Smart Chain."class="_icon-question "></span>',
                conditionItem2: '\tMinimal deposit <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">0.04 BNB</span>',
                conditionItem3: 'Total income <span class="conditions__prompt-bolt-text">up to 220%</span> <span data-help="The final profit of the NFT depends on the Hen you bought. As you can see in our NFT block, the profit range from 170% to 220%. The last one is the most profitable."class="_icon-question"></span>',
                conditionItem4: '\tEarnings <span class="conditions__prompt-bolt-text">every moment,</span> withdraw any time',
                conditionSlideTitle1: "BASIC INTEREST RATE",
                conditionSlideSubTitle1: "+1% every 24 hours (+0.0416% hourly)",
                conditionSlideSubText1: "BNB smart-contract calculate profit up to every NFT since the date it was bought. Every hour you will get +0.0416%, every day +1%.",
                conditionSlideTitle2: "PERSONAL HOLD-BONUS",
                conditionSlideSubTitle2: "+0.1% for every 24 hours without withdraw",
                conditionSlideSubText2: "Smart-contract calculates hold-bonus from your deposit, or last withdraw date. If you did not request payment, it will charge you an additional bonus. After 24 hours +0.1%, after 48 hours +0.2%, after 72 hours +0.3% and so on.",
                conditionSlideTitle3: "CONTRACT TOTAL AMOUNT BONUS",
                conditionSlideSubTitle3: "+0.15% for every 400 BNB on smart-contract",
                conditionSlideSubText3: "Smart-contract check its current balance and charge an additional +0.15% up to your earnings for every 400 BNB on balance.",
                howWorkTitle: "How it Works?",
                howWorkItemTitle1: "Replenish your BNB wallet",
                howWorkItemText1: "and connect it to our website",
                howWorkItemBtn1: "Connect",
                howWorkItemTitle2: "Buy one",
                howWorkItemText2: "of the profitable chickens",
                howWorkItemTitle3: "Receive hourly income",
                howWorkItemText3: "and instantly withdraw to your wallet",
                referralTitle: "Referral Program",
                referralSubTitle: "3 levels of affiliate rewards",
                referralPersent1: "7% - 1st Level ",
                referralPersent2: "2% - 2nd Level",
                referralPersent3: "1% - 3rd Level ",
                referralPersentPrompt: "* Referral rewards come instantly on your balance and can be withdrawn any time along with earnings.",
                referralBigText: "Every 2 BNB earned as a referral bonus increases",
                referralItem1: "1 level for 1% ( max bonus 15% )",
                referralItem2: "2 level by 0.05% ( max bonus 4% )",
                referralBtn: "Join",
                auditTitle: "Honest and Transparent",
                auditSubTitle: "Smart-contract Independent auditions and reviews",
                auditItemTitle1: "Independent company",
                auditWebsite: "(Website:",
                auditBtn1: "Audit Report (PDF)",
                auditItemTitle2: "Audition status",
                auditSuccesfull: "Successfully passed",
                auditBtn2: "Audit Report (PDF)",
                codeTitle: "Smart-contract code:",
                codeItemText: "BNB platform smart-contract is published on BNB Network.Nobody can change its rules or algorithms, even its developers. This provides our participants unconditional confidence in safety of their funds. Anyone can check smart-contract code and be sure that BNB platform is honest",
                reviewsTitle: "Reviews and Mentionings",
                replenishmentTitle: "Replenishment of Our Farm",
                replenishmentSeeMore: "See more",
                footerBlockTitle1: "Links",
                footerBlockTitle2: "Contacts",
                footerBlockTitle3: "Social",
                footerAbout: "About",
                footerNft: "NFT",
                footerCondition: "Investment Conditions",
                footerHowWork: "How it works",
                footerReferral: "Referral program",
                footerScheme: "Interest scheme",
                footerRegional: "Regional",
                footerFaq: "FAQ",
                footerSmartContract: "Smart-contract",
                footerReviews: "Reviews",
                footerNewChickens: "New chickens",
                otherFooterBlockTitle1: "Links",
                otherFooterBlockTitle2: "Contacts",
                otherFooterBlockTitle3: "Social",
                otherFooterAbout: "About",
                otherFooterNft: "NFT",
                otherFooterCondition: "Investment Conditions",
                otherFooterHowWork: "How it works",
                otherFooterReferral: "Referral program",
                otherFooterScheme: "Interest scheme",
                otherFooterRegional: "Regional",
                otherFooterFaq: "FAQ",
                otherFooterSmartContract: "Smart-contract",
                otherFooterReviews: "Reviews",
                otherFooterNewChickens: "New chickens",
                schemeTitle: "Interest scheme",
                schemeCardTitle1: '<span>BNB turnover</span> <span data-help="The daily profit rate depends on the amount of funds on the balance of the smart contract. Thus, the greater the turnover of the smart contract, the faster the daily percentage of accruals grows." class="_icon-info"></span>',
                schemeCardTitle2: '<span>If you do not withdraw profit</span> <span data-help="If you don`t withdraw profit, the percentage of accruals will grow by 0.1% per day. Withdrawal makes it reset to zero. " class="_icon-info"></span>',
                schemeCardName2: "Days",
                schemePrompt: "Your funds are credited to the wallet instantly and no one can stop them, freeze them or anything else, so you can be calm for their safety",
                schemeDailyProfit: "Your daily profit",
                schemePercentText1: "The accrual of profit increases every 400 BNB received on the balance of the smart contract. The growth increment depends on the actual percentage of accrual (see the plan below):",
                schemePercentVal1: "From 1% to 2% profit by 0.15%",
                schemePercentVal2: "From 2% to 3% by 0.07%",
                schemePercentVal3: "From 3% to 4% by 0.035%",
                schemePercentVal4: "From 4% to 5% by 0.02%",
                schemePercentVal5: "From 5% to 20% by 0.01%",
                schemePercentText2: "Moreover, your accrual of profit increases by 0.1% each day that you do not withdraw profit from your account.",
                "interest-calc__profit-input": "Investment amount",
                schemeDailySum: "Daily profit",
                schemeInvestText: "It is a fully decentralized project written on a smart contract in the BSC network",
                schemeBtn: "Smart contract",
                regionalTitle: "Regional representatives",
                regionalSubTitle: "Regional representatives are well-known followers of Chikly NFT from different countries and regions. So, you can meet the famours holders of Chickly NFT among your favorite influencers in your country and language group. In addition, you can use their referral link when purchasing Chickly NFT or contact them with questions.",
                regionalChoose: "Choose country",
                select__option: "ALL",
                regionalName: "Name",
                regionalCountry: "Country",
                regionalCity: "City",
                regionalLanguage: "Language",
                regionalPhone: "Phone number",
                regionalSocial: "Social links",
                regionalReferral: "Referral link",
                faqBlockTitle1: "ABOUT CHICKLY",
                faqItemTitle1: "What is NFT?",
                faqItemText1: "NFT stands for Non-Fungible Token, a one-of-a-kind digital asset that is not interchangeable with another similar item. This means that each has its own set of metadata proving its uniqueness and ownership, which is encrypted on the blockchain. It is a unique digital item that users can buy, own and trade.",
                faqItemTitle2: "What is Chickly",
                faqItemText2: "Chicky is your small dream farm in your pocket or at your desktop. Place where you can get stable earning. Basically Chickly is a game. An idle game, where you buy our chicks to earn more over time.",
                faqItemTitle3: "What is the use of Chickly?",
                faqItemText3: "When you buy our NFTs, you will earn profit hourly. The final profit depends on the purchased NFT. The percentage of profit depends on several conditions: how long ago you withdraw the profit and how much money went through the smart contract.",
                faqItemTitle4: "Where can I buy Chickly NFTs?",
                faqItemText4: "You can buy Chikly NFTs only on the official website. Repurchase and resale are not foreseen and therefore impossible.",
                faqItemTitle5: "When can i get it?",
                faqItemText5: "We will announce the start of sales on social networks. You can also subscribe to our browser notifications. We will not spam unnecessary information or share your information with third parties.",
                faqItemTitle6: "Why chickens?",
                faqItemText6: "They are beneficial. And the yolk of the egg is golden in color like BNB, it`s obvious!",
                faqBLockTitle2: "FINANCIAL QUESTIONS",
                faqItemTitle7: "How can I make money with you?",
                faqItemText7: "By having purchased a Chikly NFT you will receive profit hourly. Remember to feed the chickens every day to get as much profit as possible!",
                faqItemTitle8: "What currencies do you work with?",
                faqItemText8: "You can only buy Chiclky NFTs with BNB by connecting to your Binance Smart Chain wallet.",
                faqItemTitle9: "What is the minimum purchase amount?",
                faqItemText9: "The price of Chikly NFTs starts from 0.04 BNB.",
                faqItemTitle10: "When can I withdraw profit?",
                faqItemText10: "You can withdraw profits at any time, but keep in mind that this will burn out the bonus percentage of daily profits.",
                faqItemTitle11: "How can I increase my profit?",
                faqItemText11: "The final profit depends on the type of the token bought. The daily profit increases by 0.1% every day, provided that you feed the hens and keep the profit on the balance sheet. Morevoer, the daily profit increases by 0.1% for every 400 BNB  the smart contract address received.",
                faqItemTitle12: "How to feed chickens and what will it give me?",
                faqItemText12: 'The "Feed the Chickens" button is located in the Users` Private Office above the list of all of their NFTs. Feeding the chickends must be done daily in order to receive increased profits.'
            },
            esp: {
                headerHome: "Hogar",
                headerAbout: "Sobre",
                headerNft: "NFT",
                headerCondition: "Condiciones de Inversión",
                headerHowWork: "¿Cómo funciona?",
                headerReferral: "Programa de Recomendación",
                headerScheme: "Esquema de interés",
                headerRegional: "Regionales",
                headerFaq: "FAQ",
                headerSmartContract: "Contrato inteligente",
                headerReviews: "Reseñas",
                headerNewChickens: "Pollos Nuevos",
                headerBtn: "Conectar Billetera",
                otherHeaderHome: "Hogar",
                otherHeaderAbout: "Sobre",
                otherHeaderNft: "NFT",
                otherHeaderCondition: "Condiciones de Inversión",
                otherHeaderHowWork: "¿Cómo funciona?",
                otherHeaderReferral: "Programa de Recomendación",
                otherHeaderScheme: "Esquema de interés",
                otherHeaderRegional: "Regionales",
                otherHeaderFaq: "FAQ",
                otherHeaderSmartContract: "Contrato inteligente",
                otherHeaderReviews: "Reseñas",
                otherHeaderNewChickens: "Pollos Nuevos",
                otherHeaderBtn: "Conectar Billetera",
                aboutTitle: "Inversiones Confiables en",
                aboutSubTitle: "Gane hasta un <span>+220%</span> del costo de su NFT",
                aboutItem1: "Plataforma de blockchain descentralizada",
                aboutItem2: "Ganancia totalmente segura basada en un contrato inteligente de BNB",
                aboutItem3: "Contrato inteligente verificado y auditado por una compañía independiente",
                aboutBtnDiscrord: "Únase a Discord",
                aboutBtnTwitter: "Síganos en Twitter",
                aboutBtnConnect: "Conectar Billetera",
                benefitsTitle: "BNB Chain ostenta más de <span>3 millones de Usuarios Activos Únicos Semanales</span>",
                benefitsItem1: "El proyecto NFT más rentable ",
                benefitsItem2: "Ganancias ilimitadas con tasas en aumento constante ",
                nftTitle: "Gallinas NFT rentables",
                nftProfit1: "ganancia",
                nftProfit2: "ganancia",
                nftProfit3: "ganancia",
                nftProfit4: "ganancia",
                nftProfit5: "ganancia",
                nftProfit6: "ganancia",
                nftProfit7: "ganancia",
                nftProfit8: "ganancia",
                nftProfit9: "ganancia",
                nftProfit10: "ganancia",
                nftBuy1: "Adquisición",
                nftBuy2: "Adquisición",
                nftBuy3: "Adquisición",
                nftBuy4: "Adquisición",
                nftBuy5: "Adquisición",
                nftBuy6: "Adquisición",
                nftBuy7: "Adquisición",
                nftBuy8: "Adquisición",
                nftBuy9: "Adquisición",
                nftBuy10: "Adquisición",
                conditionTitle: "Condiciones de Inversión",
                conditionItem1: 'Trabajar para la red <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">BNB</span> <span data-help="Puede adquirir nuestros NFTs conectando su billetera. Todas las transacciones del sitio se llevan a cabo solamente por medio de la cadena inteligente Binance."class="_icon-question "></span>',
                conditionItem2: '\tDepósito mínimo <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">0.04 BNB</span>',
                conditionItem3: 'Ingresos totales <span class="conditions__prompt-bolt-text">hasta 220%</span> <span data-help="El beneficio final del NFT depende de la Gallina que adquirió. Como puede ver en nuestro bloque NFT, el beneficio varía entre 170% y 220%. El último es el más rentable."class="_icon-question"></span>',
                conditionItem4: '\tGanancias <span class="conditions__prompt-bolt-text">todo el tiempo,</span> retiros en cualquier momento',
                conditionSlideTitle1: "TASA DE INTERÉS BÁSICA",
                conditionSlideSubTitle1: "+1% cada 24 horas (+0.0416% por hora)",
                conditionSlideSubText1: "El contrato inteligente de BNB calcula el beneficio de cada NFT desde la fecha de adquisición. Por hora recibirá +0.0416%, por día +1%.",
                conditionSlideTitle2: "BONIFICACIÓN POR PERMANENCIA DE FONDOS",
                conditionSlideSubTitle2: "+0.1% por cada 24 horas sin extracción",
                conditionSlideSubText2: "El contrato inteligente calcula el beneficio por permanencia de su depósito, o la fecha de su última extracción. Si no solicitó un pago, recibirá una bonificación adicional. Después de 24 horas +0.1%, después de 48 horas +0.2%, después de 72 horas +0.3% y así sucesivamente.",
                conditionSlideTitle3: "BONIFICACIÓN POR CONTRATO DE MONTO TOTAL",
                conditionSlideSubTitle3: "+0.15% por cada 400 BNB en contrato inteligente",
                conditionSlideSubText3: "El contrato inteligente controla its su balance corriente y suma un +0.15% más a sus ganancias por cada 400 BNB del balance.Bonificación corriente: 0.0%",
                howWorkTitle: "¿Cómo funciona?",
                howWorkItemTitle1: "Recargue su billetera",
                howWorkItemText1: "y conéctela a nuestro sitio web",
                howWorkItemBtn1: "Conéstese",
                howWorkItemTitle2: "Adquiera una",
                howWorkItemText2: "de nuestras gallinas redituables",
                howWorkItemTitle3: "Obtenga ingresos cada hora",
                howWorkItemText3: "y transfiera instantáneamente a su billetera",
                referralTitle: "Programa de Recomendación",
                referralSubTitle: "3 niveles de recompensas por recomendación",
                referralPersent1: "7% - 1° Nivel  ",
                referralPersent2: " 2% - 2° Nivel",
                referralPersent3: " 1% - 3° Nivel ",
                referralPersentPrompt: "* Las recompensas por recomendación se acreditan instantáneamente y pueden retirarse en cualquier momento con las ganancias.",
                referralBigText: "Cada 2 BNB acreditados como recompensa la bonificación se incrementa",
                referralItem1: "1 nivel por 1% ( máx. bonif. 15% )",
                referralItem2: " 2 nivel por 0.05% ( máx. bonif. 4% )",
                referralBtn: "Regístrese",
                auditTitle: "para Honestas y Transparentes",
                auditSubTitle: "Auditorías y reseñas independientes de contratos inteligentes",
                auditItemTitle1: "Compañía Independiente",
                auditWebsite: "(Sitio web:",
                auditBtn1: "Reporte de Auditoría (PDF)",
                auditItemTitle2: "Estado de Auditoría",
                auditSuccesfull: "Auditoría aprobada",
                auditBtn2: "Reporte de Auditoría (PDF)",
                codeTitle: "Código de contrato inteligente:",
                codeItemText: "El contrato inteligente de la plataforma BNB está disponible en BNB Network.Nadie puede cambiar sus reglas o algoritmos, ni siquiera los desarrolladores. Así, nuestros participantes confían incondicionalmente en la seguridad de sus fondos. Cualquiera puede revisar el reglamento del contrato inteligente y cerciorarse de que la plataforma BNB es honesta.",
                reviewsTitle: "Reseñas y Menciones",
                replenishmentTitle: "Recarga de Nuestra Granja",
                replenishmentSeeMore: "Ver más",
                footerBlockTitle1: "Vínculos",
                footerBlockTitle2: "Contactos",
                footerBlockTitle3: "Sociales",
                footerAbout: "Sobre",
                footerNft: "NFT",
                footerCondition: "Condiciones de Inversión",
                footerHowWork: "¿Cómo funciona?",
                footerReferral: "Programa de Recomendación",
                footerScheme: "Esquema de interés",
                footerRegional: "Regionales",
                footerFaq: "FAQ",
                footerSmartContract: "Contrato inteligente",
                footerReviews: "Reseñas",
                footerNewChickens: "Pollos Nuevos",
                otherFooterBlockTitle1: "Vínculos",
                otherFooterBlockTitle2: "Contactos",
                otherFooterBlockTitle3: "Sociales",
                otherFooterAbout: "Sobre",
                otherFooterNft: "NFT",
                otherFooterCondition: "Condiciones de Inversión",
                otherFooterHowWork: "¿Cómo funciona?",
                otherFooterReferral: "Programa de Recomendación",
                otherFooterScheme: "Esquema de interés",
                otherFooterRegional: "Regionales",
                otherFooterFaq: "FAQ",
                otherFooterSmartContract: "Contrato inteligente",
                otherFooterReviews: "Reseñas",
                otherFooterNewChickens: "Pollos Nuevos",
                schemeTitle: "Esquema de interés",
                schemeCardTitle1: '<span>Volumen de BNB</span> <span data-help="La tasa de interés diaria depende del monto de los fondos en el balance del contrato inteligente. Así, a mayor facturación del contrato inteligente, mayor porcentaje de incremento diario." class="_icon-info"></span>',
                schemeCardTitle2: '<span>Si no se retiran ganancias</span> <span data-help="Si no retira las ganancias, el porcentaje de acumulación crecerá un 0,1 % por día. El retiro lo pone a cero." class="_icon-info"></span>',
                schemeCardName2: "Días",
                schemePrompt: "Your funds are credited to the wallet instantly and no one can stop them, freeze them or anything else, so you can be calm for their safety",
                schemeDailyProfit: "Su ganancia diaria",
                schemePercentText1: "La acumulación de ganancias aumenta cada 400 BNB recibidos en el saldo del contrato inteligente. El incremento de crecimiento depende del porcentaje real de acumulación (consulte el plan a continuación):",
                schemePercentVal1: "Del 1% al 2% beneficio por 0,15%",
                schemePercentVal2: "Del 2% al 3% en un 0,07%",
                schemePercentVal3: "Del 3% al 4% en un 0,035%",
                schemePercentVal4: "Del 4% al 5% en un 0,02%",
                schemePercentVal5: "Del 5% al 20% en un 0,01%",
                schemePercentText2: "Además, su acumulación de ganancias aumenta en un 0,1% cada día que no retira ganancias de su cuenta.",
                "interest-calc__profit-input": "Monto de inversión",
                schemeDailySum: "Ganancia diaria",
                schemeInvestText: "Es un proyecto completamente descentralizado asentado en un contrato inteligentet en la red BSC",
                schemeBtn: "Contrato inteligente",
                regionalTitle: "Representantes regionales",
                regionalSubTitle: "Los representantes regionales son seguidores reconocidos de Chickly NFT de diferentes países y regiones. Usted puede encontrar a famosos tenedores de Chickly NFT entre sus influencers favoritos de su país y su idioma. Además, puede usar sus vínculos de recomendación al comprar Chickly NFT o contactarlos si tiene dudas.",
                regionalChoose: "Elija el país",
                select__option: "TODOS",
                regionalName: "Nombre",
                regionalCountry: "País",
                regionalCity: "Ciudad",
                regionalLanguage: "Idioma",
                regionalPhone: "Número telefónico",
                regionalSocial: "Vínculos sociales",
                regionalReferral: "Vínculo de recomendación",
                faqBlockTitle1: "SOBRE CHICKLY",
                faqItemTitle1: "¿Qué es NFT?",
                faqItemText1: "NFT es la sigla de Token No Fungible, un activo digital único no intercambiable con otro artículo similar. Esto significa que cada uno tiene un conjunto de metadatos que prueban su unicidad y pertenencia, encriptados en el blockchain. Es un artículo digital exclusivo que los usuarios pueden arquirir, poseer y comercializar.",
                faqItemTitle2: "Qué is Chickly?",
                faqItemText2: "Chickly es una pequeña granja de fantasía en su bolsillo o escritorio. Un sitio que puede proporcionarle ingresos constantes. Básicamente, Chickly es un juego. Un pasatiempo, en el que compra nuestras gallinas para generar ganancias con el transcurso del tiempo.",
                faqItemTitle3: "¿Cómo funciona Chickly?",
                faqItemText3: "Cuando compra nuestros NFTs, tendrá ganancias cada hora. El beneficio final depende del NFT adquirido. El porcentaje del beneficio depende de varias condiciones: el tiempo transcurrido desde su última extracción y del monto extraído del contrato inteligente.",
                faqItemTitle4: "¿Dónde se adquieren NFTs de Chickly?",
                faqItemText4: "Los NFTs de Chickly se adquieren solo en el sitio web oficial. La recompra y la reventa no están previstas y por lo tanto son imposibles.",
                faqItemTitle5: "¿Cuándo se adquiere?",
                faqItemText5: "Anunciaremos el inicio de las ventas en redes sociales. También puede suscribirse a nuestras notificaciones de navegador. No habrá publicaciones innecesarias ni divulgaremos su información a terceros.",
                faqItemTitle6: "¿Por qué gallinas?",
                faqItemText6: "Son beneficiosas. Y la yema del huevo es dorada, como BNB, ¡obvio!",
                faqBLockTitle2: "PREGUNTAS FINANCIERAS",
                faqItemTitle7: "¿Cómo ganar dinero con ustedes?",
                faqItemText7: "Al comprar un NFT de Chickly NFT se reciben ganancias a cada hora. ¡Recuerde alimentar a las gallinas a diario para ganar lo más posible!",
                faqItemTitle8: "¿Con qué monedas trabajan?",
                faqItemText8: "Solo se pueden comprar NFTs de Chickly con BNB en conexión con su billetera de cadena inteligente Binance.",
                faqItemTitle9: "¿Cuál es la compra mínima?",
                faqItemText9: "El precio base de los NFTs de Chickly es 0,04 BNB.",
                faqItemTitle10: "¿Cuándo se puede retirar ganancias?",
                faqItemText10: "Se puede retirar ganancias en cualquier momento, pero recuerde que así perderá el porcentaje de bonificación de ganancias diarias.",
                faqItemTitle11: "¿Cómo se puede aumentar la ganancia?",
                faqItemText11: "La ganancia final depende del tipo de token adquirido. La ganancia diaria aumenta un 0.1% cada día, si alimenta a las gallinas y mantiene el balance positivo. Además, la ganancia diaria aumenta un 0.1% por cada 400 BNB que reciba la dirección del contrato inteligente.",
                faqItemTitle12: "¿Cómo se alimentan las gallinas y qué entregan?",
                faqItemText12: 'El botón "Alimentar a las Gallinas" está en la Oficina Privada del Usuario sobre la lista de todos sus NFTs. Se debe alimentar a las gallinas diariamente para aumentar las ganancias.'
            },
            vnm: {
                headerHome: "Nhà",
                headerAbout: "Về",
                headerNft: "NFT",
                headerCondition: "Điều kiện đầu tư",
                headerHowWork: "Cách thức hoạt động",
                headerReferral: "Chương trình giới thiệu",
                headerScheme: "Cơ cấu lãi suất",
                headerRegional: "Khu vực",
                headerFaq: "FAQ",
                headerSmartContract: "Hợp đồng thông minh",
                headerReviews: "Nhận xét",
                headerNewChickens: "Gà mới",
                headerBtn: "Kêt nối Ví",
                otherHeaderHome: "Nhà",
                otherHeaderAbout: "Về",
                otherHeaderNft: "NFT",
                otherHeaderCondition: "Điều kiện đầu tư",
                otherHeaderHowWork: "Cách thức hoạt động",
                otherHeaderReferral: "Chương trình giới thiệu",
                otherHeaderScheme: "Cơ cấu lãi suất",
                otherHeaderRegional: "Khu vực",
                otherHeaderFaq: "FAQ",
                otherHeaderSmartContract: "Hợp đồng thông minh",
                otherHeaderReviews: "Nhận xét",
                otherHeaderNewChickens: "Gà mới",
                otherHeaderBtn: "Kêt nối Ví",
                aboutTitle: "Khoản đầu tư tin cậy với",
                aboutSubTitle: "Lợi nhuận lên tới <span>+220%</span> so với giá mua NFT của bạn",
                aboutItem1: "Nền tảng blockchain phi tập",
                aboutItem2: "Thu nhập được đảm bảo an toàn tuyệt đối dựa vào hợp đồng thông minh BNB",
                aboutItem3: "Hợp đồng thông minh được xác nhận và kiểm tra bởi một công ty độc lập",
                aboutBtnDiscrord: "Tham gia Discord",
                aboutBtnTwitter: "Theo dõi Twitter",
                aboutBtnConnect: "Kêt nối Ví",
                benefitsTitle: "BNB Chain có hơn <span>3 triệu người dùng duy nhất hoạt động hàng tuần</span>",
                benefitsItem1: "Dự án đầu tiên về NFT mang lại nhiều lợi nhất",
                benefitsItem2: "Thu nhập không giới hạn với tỷ lệ ngày càng tăng",
                nftTitle: "NFT gà con có lợi nhuận",
                nftProfit1: "Lợi nhuận",
                nftProfit2: "Lợi nhuận",
                nftProfit3: "Lợi nhuận",
                nftProfit4: "Lợi nhuận",
                nftProfit5: "Lợi nhuận",
                nftProfit6: "Lợi nhuận",
                nftProfit7: "Lợi nhuận",
                nftProfit8: "Lợi nhuận",
                nftProfit9: "Lợi nhuận",
                nftProfit10: "Lợi nhuận",
                nftBuy1: "Mua",
                nftBuy2: "Mua",
                nftBuy3: "Mua",
                nftBuy4: "Mua",
                nftBuy5: "Mua",
                nftBuy6: "Mua",
                nftBuy7: "Mua",
                nftBuy8: "Mua",
                nftBuy9: "Mua",
                nftBuy10: "Mua",
                conditionTitle: "Điều kiện đầu tư",
                conditionItem1: 'Hoạt động trên mạng lưới <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">BNB</span> <span data-help="Bạn có thể mua NFT của chúng tôi bằng cách kết nối ví của bạn. Tất cả các giao dịch trên trang web được thực hiện thông qua Binance Smart Chain."class="_icon-question "></span>',
                conditionItem2: '\tNạp tối thiểu <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">0.04 BNB</span>',
                conditionItem3: '<span> Tổng thu nhập<span class="conditions__prompt-bolt-text">lên tới 220%</span> <span data-help="Lợi nhuận cuối cùng của NFT phụ thuộc vào Gà Mái mà bạn mua. Lợi nhuận từ 170% đến 220%, bạn có thể thấy trong khối NFT của chúng tôi.  NFT cuối cùng có lợi nhuận nhiều nhất."class="_icon-question"></span> </span>',
                conditionItem4: '\tMang liên tục, <span class="conditions__prompt-bolt-text">lại thu nhập ,</span> rút tiền bất cứ lúc nào ',
                conditionSlideTitle1: "TỶ LỆ LÃI SUẤT CƠ BẢN",
                conditionSlideSubTitle1: "+1% mỗi 24 giờ (+0.0416% mỗi giờ)",
                conditionSlideSubText1: "Hợp đồng thông minh BNB tính toán lợi nhuận cho mọi NFT từ thời điểm mà bạn mua. Bạn sẽ nhận +0.0416% mỗi giờ, +1% mỗi ngày.",
                conditionSlideTitle2: "THƯỞNG GIỮ LỢI NHUẬN CÁ NHÂN",
                conditionSlideSubTitle2: "+0.1% cho mỗi 24 giờ không rút",
                conditionSlideSubText2: "Hợp đồng thông minh tính toán thưởng cho việc giữ lợi nhuận từ số tiền nạp hoặc ngày rút cuối cùng. Nếu bạn không yêu cầu thanh toán, nó sẽ cộng cho bạn một khoản thưởng. Sau 24 giờ +0.1%, sau 48 giờ +0.2%, sau 72 giờ +0.3% và tiếp tục như vậy.",
                conditionSlideTitle3: "THƯỞNG TỔNG TIỀN TRÊN HỢP ĐỒNG THÔNG MINH",
                conditionSlideSubTitle3: "+0.15% cho mỗi 400 BNB trên hợp đồng thông minh",
                conditionSlideSubText3: "Hợp đồng thông minh kiểm tra số dư hiện tại và cộng thêm +0.15% vào thu nhập của bạn cho mỗi 400 BNB trên số dư. Thưởng hiện tại: 0.0%",
                howWorkTitle: "Cách thức hoạt động?",
                howWorkItemTitle1: "Thêm BNB vào ví của bạn",
                howWorkItemText1: "và kết nối nó vào trang web của chúng tôi",
                howWorkItemBtn1: "Kết nối",
                howWorkItemTitle2: "Mua một",
                howWorkItemText2: "trong những gà mang lại lợi nhuận",
                howWorkItemTitle3: "Nhận thu nhập mỗi giờ",
                howWorkItemText3: "và rút ngay lập tức về ví của bạn",
                referralTitle: "Chương trình giới thiệu",
                referralSubTitle: "3 cấp độ thưởng của tiếp thị liên kết",
                referralPersent1: "7% - Cấp độ 1 ",
                referralPersent2: "2% - Cấp độ 2",
                referralPersent3: "1% - Cấp độ 3",
                referralPersentPrompt: "* Phần thưởng giới thiệu sẽ thêm vào số dư của bạn ngay lập tức và có thể rút bất cứ lúc nào cùng với thu nhập của bạn.",
                referralBigText: "Mỗi 2 BNB tăng lên từ chương trình giới thiệu",
                referralItem1: "Cấp độ 1 là 1% ( thưởng tối đa 15% )",
                referralItem2: "Cấp độ 2 là 0.05% ( thưởng tối đa 4% )",
                referralBtn: "Tham gia",
                auditTitle: "Trung thực và minh bạch",
                auditSubTitle: "Hợp đồng thông minh được kiểm tra và đánh giá độc lập",
                auditItemTitle1: "Công ty độc lập",
                auditWebsite: "(Trang web:",
                auditBtn1: "Báo cáo kiểm tra (PDF)",
                auditItemTitle2: "Trạng thái kiểm tra",
                auditSuccesfull: "Đã vượt qua bài kiểm tra thành công",
                auditBtn2: "Báo cáo kiểm tra (PDF)",
                codeTitle: "Mã hợp đồng thông minh:",
                codeItemText: "Hợp đồng thông minh trên nền tảng BNB được công khai trên mạng lưới BNB.Không ai có thể thay đổi luật và thuật toán, kể cả nhà phát triển. Điều này sẽ làm cho người tham gia tin tưởng vì khoản đầu tư của họ luôn được giữ an toàn. Bất kỳ ai cũng có thể kiểm tra mã của hợp đồng thông minh và đảm bảo tính trung thực của nền tảng BNB.",
                reviewsTitle: "Đánh giá và theo dõi",
                replenishmentTitle: "Bổ sung trong nông trại của chúng tôi",
                replenishmentSeeMore: "Xem thêm",
                footerBlockTitle1: "Liên kết",
                footerBlockTitle2: "Liên hệ",
                footerBlockTitle3: "Mạng xã hội",
                footerAbout: "Về",
                footerNft: "NFT",
                footerCondition: "Điều kiện đầu tư",
                footerHowWork: "Cách thức hoạt động",
                footerReferral: "Chương trình giới thiệu",
                footerScheme: "Cơ cấu lãi suất",
                footerRegional: "Khu vực",
                footerFaq: "FAQ",
                footerSmartContract: "Hợp đồng thông minh",
                footerReviews: "Nhận xét",
                footerNewChickens: "Gà mới",
                otherFooterBlockTitle1: "Liên kết",
                otherFooterBlockTitle2: "Liên hệ",
                otherFooterBlockTitle3: "Mạng xã hội",
                otherFooterAbout: "Về",
                otherFooterNft: "NFT",
                otherFooterCondition: "Điều kiện đầu tư",
                otherFooterHowWork: "Cách thức hoạt động",
                otherFooterReferral: "Chương trình giới thiệu",
                otherFooterScheme: "Cơ cấu lãi suất",
                otherFooterRegional: "Khu vực",
                otherFooterFaq: "FAQ",
                otherFooterSmartContract: "Hợp đồng thông minh",
                otherFooterReviews: "Nhận xét",
                otherFooterNewChickens: "Gà mới",
                schemeTitle: "Cơ cấu lãi suất",
                schemeCardTitle1: '<span>Doanh số BNB</span> <span data-help="Tỷ lệ lợi nhuận hàng ngày phụ thuộc vào số tiền trên hợp đồng thông minh. Do đó, doanh số trên hợp đồng thông minh càng lớn, phần trăm tích lũy hàng ngày tăng càng nhanh." class="_icon-info"></span>',
                schemeCardTitle2: '<span>Nếu bạn không rút lợi nhuận</span> <span data-help="Nếu bạn không rút lợi nhuận, phần trăm tích lũy sẽ tăng 0,1% mỗi ngày. Rút tiền làm cho nó được đặt lại về 0." class="_icon-info"></span>',
                schemeCardName2: "Ngày",
                schemePrompt: "Tiền của bạn sẽ được cộng vào ví ngay lập tức và không ai có thể dừng lại, đóng băng hoặc làm bất cứ điều gì khác. Do vậy, bạn có thể yên tâm về sự an toàn của chúng.",
                schemeDailyProfit: "Lợi nhuận hàng ngày của bạn",
                schemePercentText1: "Lợi nhuận tích lũy tăng lên sau mỗi 400 BNB nhận được trên số dư của hợp đồng thông minh. Mức tăng trưởng phụ thuộc vào tỷ lệ tích lũy thực tế (xem kế hoạch bên dưới):",
                schemePercentVal1: "Từ 1% đến 2% lợi nhuận bằng 0,15%",
                schemePercentVal2: "Từ 2% đến 3% x 0,07%",
                schemePercentVal3: "Từ 3% đến 4% x 0,035%",
                schemePercentVal4: "Từ 4% đến 5% x 0,02%",
                schemePercentVal5: "Từ 5% đến 20% x 0,01%",
                schemePercentText2: "Hơn nữa, lợi nhuận tích lũy của bạn tăng 0,1% mỗi ngày mà bạn không rút lợi nhuận từ tài khoản của mình.",
                "interest-calc__profit-input": "Số tiền đầu tư",
                schemeDailySum: "Lợi nhuận hàng ngày",
                schemeInvestText: "Nó là một dự án hoàn toàn phi tập trung được viết trên hợp đồng thông minh của mạng lưới BSC",
                schemeBtn: "Hợp đồng thông minh",
                regionalTitle: "Đại diện khu vực",
                regionalSubTitle: "Đại diện khu vực của Chickly có rất nhiều người theo dõi đến từ nhiều quốc gia và vùng lãnh thổ khác nhau. Do đó, bạn có thể gặp những người nổi tiếng đang nắm giữ NFT của Chickly tại các quốc gia hoặc các nhóm sử dụng ngôn ngữ của bạn. Bạn cũng có thể dùng liên kết giới thiệu của họ khi mua NFT hoặc liên hệ họ nếu có bất kỳ câu hỏi nào.",
                regionalChoose: "Chọn quốc gia",
                select__option: "TẤT CẢ CÁC",
                regionalName: "Tên",
                regionalCountry: "Quốc gia",
                regionalCity: "Thành phố",
                regionalLanguage: "Ngôn ngữ",
                regionalPhone: "Số điện thoại",
                regionalSocial: "Liên kết mạng xã hội",
                regionalReferral: "Liên kết giới thiệu",
                faqBlockTitle1: "GIỚI THIỆU CHICKLY",
                faqItemTitle1: "NFT là gì?",
                faqItemText1: "NFT là từ viết tắt của Non-Fungible Token, là một loại tài sản số. Nó không thể thay thế bằng một vật phẩm khác tương tự. Điều này có nghĩa là mỗi NFT có một bộ dữ liệu riêng để chứng minh cho tính độc nhất và quyền sơ hữu nó trên blockchain. Người dùng có thể mua, sỡ hữu và giao dịch loại vật phẩm có tính duy nhất này.",
                faqItemTitle2: "Chickly là gì",
                faqItemText2: "Chickly là một nông trại mơ ước nhỏ ở trong túi hoặc máy tính của bạn. Bạn có thể kiếm thu nhập ổn định với nông trại này. Nói một cách đơn giản thì Chickly là một trò chơi. Bạn có thể chơi lúc rảnh rỗi và mua những con gà con của chúng tôi để có thêm thu nhập theo thời gian.",
                faqItemTitle3: "Ứng dụng của Chickly là gì?",
                faqItemText3: "Khi bạn mua NFT của chúng tôi, bạn sẽ có lợi nhuận mỗi giờ. Lợi nhuận sau cùng phụ thuộc vào NFT mà bạn mua. Phần trăm lợi nhuận phụ thuộc vào những điều kiện như: lần rút tiền gần nhất  là khi nào và số tiền thông qua hợp đồng thông minh là bao nhiêu.",
                faqItemTitle4: "Bạn có thể mua NFT của Chickly ở đâu?",
                faqItemText4: "Bạn có thể mua NFT của Chickly ở một nơi duy nhất là trang web chính thức của chúng tôi. Việc mua bán lại NFT thì chưa biết, do vậy không thể nói chính xác.",
                faqItemTitle5: "Khi nào tôi có thể mua nó?",
                faqItemText5: "Chúng tôi sẽ thông báo khi bắt đầu bán trên các trang mạng xã hội. Bạn cũng có thể đăng ký nhận thông báo của chúng tôi trên trình duyệt. Chúng tôi sẽ không thông báo những thông tin không cần thiết hoặc chia sẻ những thông tin của bên thứ ba cho bạn.",
                faqItemTitle6: "Tại sao lại là gà?",
                faqItemText6: "Chúng mang lại lợi nhuận và lòng đỏ trứng gà cũng có màu vàng giống BNB!",
                faqBLockTitle2: "CÂU HỎI TÀI CHÍNH",
                faqItemTitle7: "Tôi có thể kiếm tiền với bạn như thế nào?",
                faqItemText7: "Bạn sẽ nhận lợi nhuận hàng giờ bằng cách mua một NFT của Chickly. Hãy nhớ cho gà ăn mỗi ngày để có được nhiều lợi nhuận nhất!",
                faqItemTitle8: "Bạn sử dụng loại tiền tệ nào?",
                faqItemText8: "Bạn chỉ có thể mua NFT của Chickly với BNB bằng cách kết nối ví Binance Smart Chain của bạn.",
                faqItemTitle9: "Số lượng mua tối thiểu là bao nhiêu?",
                faqItemText9: "Giá NFT của Chickly bắt đầu từ 0.04 BNB.",
                faqItemTitle10: "Khi nào tôi có thể rút lợi nhuận?",
                faqItemText10: "Bạn có thể rút lợi nhuận bất cứ lúc nào, nhưng hãy nhớ nó sẽ ảnh hưởng đến phần trăm thưởng lợi nhuận hàng ngày của bạn.",
                faqItemTitle11: "Làm cách nào để tôi tăng lợi nhuận?",
                faqItemText11: "Lợi nhuận cuối cùng phụ thuộc vào loại NFT mà bạn đã mua. Lợi nhuận hàng ngày tăng thêm 0.1% với điều kiện là bạn cho gà ăn và giữ số dư lợi nhuận. Thêm nữa, lợi nhuận hàng ngày tăng thêm 0.1% cho mỗi 400 BNB mà địa chỉ hợp đồng thông minh nhận được.",
                faqItemTitle12: "Cách cho gà ăn như thế nào và tôi sẽ nhận lại được gì?",
                faqItemText12: 'Nút "Cho gà ăn" tại Tài Khoản Cá Nhân của người dùng, phía trên danh sách NFT. Cho gà ăn phải được thực hiện theo ngày để tăng lợi nhuận.'
            },
            prt: {
                headerHome: "Casa",
                headerAbout: "Sobre",
                headerNft: "NFT",
                headerCondition: "Condições de investimento",
                headerHowWork: "Como funciona",
                headerReferral: "Programa de indicação",
                headerScheme: "Esquema de juros",
                headerRegional: "Regionais",
                headerFaq: "FAQ",
                headerSmartContract: "Contrato inteligente",
                headerReviews: "Avaliações",
                headerNewChickens: "Novas galinhas",
                headerBtn: "Conectar Carteira",
                otherHeaderHome: "Casa",
                otherHeaderAbout: "Sobre",
                otherHeaderNft: "NFT",
                otherHeaderCondition: "Condições de investimento",
                otherHeaderHowWork: "Como funciona",
                otherHeaderReferral: "Programa de indicação",
                otherHeaderScheme: "Esquema de juros",
                otherHeaderRegional: "Regionais",
                otherHeaderFaq: "FAQ",
                otherHeaderSmartContract: "Contrato inteligente",
                otherHeaderReviews: "Avaliações",
                otherHeaderNewChickens: "Novas galinhas",
                otherHeaderBtn: "Conectar Carteira",
                aboutTitle: "Investimentos confiáveis com",
                aboutSubTitle: "Ganhe até <span>+220%</span>  ou mais do custo de seu NFT",
                aboutItem1: "Plataforma descentralizada na Blockchain",
                aboutItem2: "Renda totalmente segura com base no contrato inteligente de BNB",
                aboutItem3: "Contrato inteligente verificado e auditado por empresa independente",
                aboutBtnDiscrord: "Entre no Discord",
                aboutBtnTwitter: "Siga o Twitter",
                aboutBtnConnect: "Conectar Carteira",
                benefitsTitle: "A BNB Chain possui mais de <span>3 milhões de usuários ativos únicos semanais</span>",
                benefitsItem1: "O primeiro projeto mais rentável em NFT",
                benefitsItem2: "Ganhos ilimitados com taxas cada vez maiores",
                nftTitle: "NFT de pintinhos lucrativos",
                nftProfit1: "lucro",
                nftProfit2: "lucro",
                nftProfit3: "lucro",
                nftProfit4: "lucro",
                nftProfit5: "lucro",
                nftProfit6: "lucro",
                nftProfit7: "lucro",
                nftProfit8: "lucro",
                nftProfit9: "lucro",
                nftProfit10: "lucro",
                nftBuy1: "Comprar",
                nftBuy2: "Comprar",
                nftBuy3: "Comprar",
                nftBuy4: "Comprar",
                nftBuy5: "Comprar",
                nftBuy6: "Comprar",
                nftBuy7: "Comprar",
                nftBuy8: "Comprar",
                nftBuy9: "Comprar",
                nftBuy10: "Comprar",
                conditionTitle: "Condições de investimento",
                conditionItem1: 'Trabalhando na rede <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">BNB</span><span data-help="Você pode comprar nossos NFT conectando sua carteira. Todas as transações no site são realizadas apenas através da Binance Smart Chain."class="_icon-question "></span>',
                conditionItem2: '\tDepósito mínimo de <span class="conditions__prompt-icon-coin conditions__prompt-bolt-text">0.04 BNB</span>',
                conditionItem3: 'Renda total <span class="conditions__prompt-bolt-text">de até 220%</span> <span data-help="O lucro final do NFT depende da galinha que você comprou. Como você pode ver em nosso bloco NFT, o lucro varia de 170% a 220%. O último é o mais lucrativo."class="_icon-question"></span>',
                conditionItem4: 'Ganhos <span class="conditions__prompt-bolt-text"> a cada momento,</span> saque quando quiser',
                conditionSlideTitle1: "TAXA DE JURO BÁSICA",
                conditionSlideSubTitle1: "+1% a cada 24 horas (+0,0416% por hora)",
                conditionSlideSubText1: "O contrato inteligente do BNB calcula o lucro por cada NFT desde a data em que foi comprado. A cada hora você receberá +0,0416%, todos os dias + de 1%.",
                conditionSlideTitle2: "BÔNUS DE HOLD PESSOAL",
                conditionSlideSubTitle2: "+0,1% a cada 24 horas sem saque",
                conditionSlideSubText2: "O contrato inteligente calcula o bônus de hold do seu depósito, ou da última data de saque. Se você não solicitou o pagamento, ele cobrará uma taxa bônus adicional. Após 24 horas +0,1%, após 48 horas +0,2%, após 72 horas +0,3% e assim por diante.",
                conditionSlideTitle3: "BÔNUS DO VALOR TOTAL DO CONTRATO",
                conditionSlideSubTitle3: "+0,15% para cada 400 BNB em contrato inteligente",
                conditionSlideSubText3: "O contrato inteligente verifica seu saldo atual e cobra um adicional de +0,15% até seus ganhos para cada 400 BNB no saldo.Bônus atual : 0,0%",
                howWorkTitle: "Como funciona?",
                howWorkItemTitle1: "Reabasteça sua carteira de BNB",
                howWorkItemText1: "e a conecte ao nosso site",
                howWorkItemBtn1: "Conectar",
                howWorkItemTitle2: "Compre uma",
                howWorkItemText2: "das galinhas rentáveis",
                howWorkItemTitle3: "Receba renda por hora",
                howWorkItemText3: "e saque instantaneamente para sua carteira",
                referralTitle: "Programa de indicação",
                referralSubTitle: "3 níveis de recompensas de afiliados",
                referralPersent1: "7% - 1º Nível",
                referralPersent2: "2% - 2º Nível",
                referralPersent3: "1% - 3º Nível",
                referralPersentPrompt: "* As recompensas por indicação chegam instantaneamente ao seu saldo e podem ser sacadas a qualquer momento junto com os ganhos.",
                referralBigText: "A cada 2 BNB ganhos como bônus de indicação aumenta",
                referralItem1: "1º nível por 1% (bônus máximo de 15%)",
                referralItem2: "2º nível por 0,05% (bônus máximo de 4%)",
                referralBtn: "Se unir",
                auditTitle: "Honesto e Transparente",
                auditSubTitle: "Audições e avaliações independentes de contrato inteligente",
                auditItemTitle1: "Empresa independente",
                auditWebsite: "(Site: ",
                auditBtn1: "Relatório de Auditoria (PDF)",
                auditItemTitle2: "Status da auditoria",
                auditSuccesfull: "Aprovado com sucesso",
                auditBtn2: "Relatório de Auditoria (PDF)",
                codeTitle: "Código do contrato inteligente:",
                codeItemText: "O contrato inteligente da plataforma BNB é publicado na Rede BNB. Ninguém pode mudar suas regras ou algoritmos, nem mesmo seus desenvolvedores. Isso proporciona aos nossos participantes confiança incondicional na segurança de seus fundos. Qualquer um pode verificar o código do contrato inteligente e ter certeza de que a plataforma BNB é honesta.",
                reviewsTitle: "Avaliações e menções",
                replenishmentTitle: "Reabastecimento de Nossa Farm",
                replenishmentSeeMore: "Ver mais",
                footerBlockTitle1: "Links",
                footerBlockTitle2: "Contatos",
                footerBlockTitle3: "Social",
                footerAbout: "Sobre",
                footerNft: "NFT",
                footerCondition: "Condições de investimento",
                footerHowWork: "Como funciona",
                footerReferral: "Programa de indicação",
                footerScheme: "Esquema de juros",
                footerRegional: "Regionais",
                footerFaq: "FAQ",
                footerSmartContract: "Contrato inteligente",
                footerReviews: "Avaliações",
                footerNewChickens: "Novas galinhas",
                otherFooterBlockTitle1: "Links",
                otherFooterBlockTitle2: "Contatos",
                otherFooterBlockTitle3: "Social",
                otherFooterAbout: "Sobre",
                otherFooterNft: "NFT",
                otherFooterCondition: "Condições de investimento",
                otherFooterHowWork: "Como funciona",
                otherFooterReferral: "Programa de indicação",
                otherFooterScheme: "Esquema de juros",
                otherFooterRegional: "Regionais",
                otherFooterFaq: "FAQ",
                otherFooterSmartContract: "Contrato inteligente",
                otherFooterReviews: "Avaliações",
                otherFooterNewChickens: "Novas galinhas",
                schemeTitle: "Esquema de juros",
                schemeCardTitle1: '<span>Volume de negociações de BNB</span> <span data-help="A taxa de lucro diária depende da quantidade de fundos no saldo do contrato inteligente. Assim, quanto maior a rotatividade do contrato inteligente, mais rápido cresce o percentual diário de acúmulo." class="_icon-info"></span>',
                schemeCardTitle2: '<span>Se você não sacar o lucro</span> <span data-help="Se você não retirar o lucro, a porcentagem de acúmulos aumentará 0,1% ao dia. A retirada faz com que seja zerado." class="_icon-info"></span>',
                schemeCardName2: "Dias",
                schemePrompt: "Seus fundos são creditados na carteira instantaneamente e ninguém pode pará-los, congelá-los ou qualquer outra coisa, então você pode ficar tranquilo com a segurança deles",
                schemeDailyProfit: "Seu lucro diário",
                schemePercentText1: "O acúmulo de lucro aumenta a cada 400 BNB recebidos no saldo do contrato inteligente. O incremento de crescimento depende do percentual real de acumulação (veja o plano abaixo):",
                schemePercentVal1: "De 1% a 2% de lucro em 0,15%",
                schemePercentVal2: "De 2% para 3% em 0,07%",
                schemePercentVal3: "De 3% a 4% em 0,035%",
                schemePercentVal4: "De 4% a 5% em 0,02%",
                schemePercentVal5: "De 5% a 20% em 0,01%",
                schemePercentText2: "Além disso, seu acúmulo de lucro aumenta em 0,1% a cada dia que você não retira lucro de sua conta.",
                "interest-calc__profit-input": "Valor do investimento",
                schemeDailySum: "Lucro diário",
                schemeInvestText: "É um projeto totalmente descentralizado escrito em um contrato inteligente na rede BSC",
                schemeBtn: "Contrato inteligente",
                regionalTitle: "Representantes regionais",
                regionalSubTitle: "Os representantes regionais são seguidores conhecidos do Chikly NFT de diferentes países e regiões. Assim, você pode conhecer os famosos holders do Chickly NFT entre seus influenciadores favoritos em seu país e grupo de idioma. Além disso, você pode usar o link de indicação deles ao comprar o NFT do Chickly ou contatá-los com dúvidas.",
                regionalChoose: "Escolha o país",
                select__option: "TUDO",
                regionalName: "Nome",
                regionalCountry: "País",
                regionalCity: "Cidade",
                regionalLanguage: "Idioma",
                regionalPhone: "Número de telefone",
                regionalSocial: "Links sociais",
                regionalReferral: "Link de indicação",
                faqBlockTitle1: "SOBRE O CHICKLY",
                faqItemTitle1: "O que é um NFT?",
                faqItemText1: "NFT significa token não fungível, um ativo digital único que não é intercambiável com outro item similar. Isso significa que cada um tem seu próprio conjunto de metadados que comprovam sua exclusividade e propriedade, que é criptografado na blockchain. É um item digital exclusivo que os usuários podem comprar, possuir e fazer trade.",
                faqItemTitle2: "O que é o Chickly",
                faqItemText2: "O Chicky é sua pequena farm dos sonhos no seu bolso ou na sua área de trabalho. Um lugar onde você pode obter ganhos estáveis. Basicamente Chickly é um jogo. Um jogo ocioso, onde você compra nossos pintinhos para ganhar mais com o tempo.",
                faqItemTitle3: "Para que serve o Chickly?",
                faqItemText3: "Ao comprar nossos NFT, você terá lucro por hora. O lucro final depende do NFT adquirido. A porcentagem de lucro depende de várias condições: há quanto tempo você saca o lucro e quanto dinheiro passou pelo contrato inteligente.",
                faqItemTitle4: "Onde posso comprar NFT do Chickly?",
                faqItemText4: "Você pode comprar NFT do Chikly apenas no site oficial. A recompra e a revenda não estão previstas e, portanto, impossíveis.",
                faqItemTitle5: "Quando posso conseguir?",
                faqItemText5: "Anunciaremos o início das vendas nas redes sociais. Você também pode assinar nossas notificações do navegador. Não enviaremos informações desnecessárias ou compartilharemos suas informações com terceiros.",
                faqItemTitle6: "Por que galinhas?",
                faqItemText6: "Elas são benéficas. E a gema do ovo é dourada como o BNB, obviamente!",
                faqBLockTitle2: "PERGUNTAS FINANCEIRAS",
                faqItemTitle7: "Como posso ganhar dinheiro com você?",
                faqItemText7: "Ao comprar um NFT do Chikly, você receberá lucro por hora. Lembre-se de alimentar as galinhas todos os dias para obter o máximo de lucro possível!",
                faqItemTitle8: "Com quais moedas você trabalha?",
                faqItemText8: "Você só pode comprar NFT do Chiclky com BNB conectando-se à sua carteira da Binance Smart Chain.",
                faqItemTitle9: "Qual o valor mínimo de compra?",
                faqItemText9: "O preço dos NFT do Chikly começa em 0,04 BNB.",
                faqItemTitle10: "Quando posso sacar o lucro?",
                faqItemText10: "Você pode sacar os lucros a qualquer momento, mas lembre-se de que isso queimará a porcentagem de bônus dos lucros diários.",
                faqItemTitle11: "Como posso aumentar meu lucro?",
                faqItemText11: "O lucro final depende do tipo de token comprado. O lucro diário aumenta 0,1% a cada dia, desde que você alimente as galinhas e mantenha o lucro na folha de balanço. Além disso, o lucro diário aumenta em 0,1% para cada 400 BNB que o endereço do contrato inteligente recebeu.",
                faqItemTitle12: "Como alimentar galinhas e o que isso me dará?",
                faqItemText12: 'O botão "Alimente as Galinhas" está localizado no Escritório Privado dos Usuários acima da lista de todos os seus NFT. A alimentação das galinhas deve ser feita diariamente para aumentar os lucros.'
            }
        };
        var mobListTranslations = {
            eng: {
                "regional-item__col-top_name": "Name",
                "regional-item__col-top_country": "Country",
                "regional-item__col-top_city": "City",
                "regional-item__col-top_language": "Language",
                "regional-item__col-top_phone": "Phone number",
                "regional-item__col-top_social": "Social links",
                "regional-item__col-top_referral": "Referral link"
            },
            esp: {
                "regional-item__col-top_name": "Nombre",
                "regional-item__col-top_country": "País",
                "regional-item__col-top_city": "Ciudad",
                "regional-item__col-top_language": "Idioma",
                "regional-item__col-top_phone": "Número telefónico",
                "regional-item__col-top_social": "Vínculos sociales",
                "regional-item__col-top_referral": "Vínculo de recomendación"
            },
            vnm: {
                "regional-item__col-top_name": "Tên",
                "regional-item__col-top_country": "Quốc gia",
                "regional-item__col-top_city": "Thành phố",
                "regional-item__col-top_language": "Ngôn ngữ",
                "regional-item__col-top_phone": "Số điện thoại",
                "regional-item__col-top_social": "Liên kết mạng xã hội",
                "regional-item__col-top_referral": "Liên kết giới thiệu"
            },
            prt: {
                "regional-item__col-top_name": "Nome",
                "regional-item__col-top_country": "País",
                "regional-item__col-top_city": "Cidade",
                "regional-item__col-top_language": "Idioma",
                "regional-item__col-top_phone": "Número de telefone",
                "regional-item__col-top_social": "Links sociais",
                "regional-item__col-top_referral": "Link de indicação"
            }
        };
        const eng_namespaceObject = JSON.parse('{"landing":{"banners":{"title":"Affiliate banners","label":"Your referral link"}},"cabinet":{"header":{"nav1":"Home","nav2":"My Partners","nav3":"Trade-in","nav4":"Reinvest","wallet":"Wallet Balance","exit":"Exit"},"aside":{"spollers":{"item1":"Current profit","item2":"Balances","item3":"Statistics","item4":"Share link with friends"},"profit":{"title":"Your current daily profit","link":"How <br> It works","basic":"Basic profit","hold":"Hold-bonus","contract":"Contract bonus"},"balance":{"investment":"Investment balance","referral":"Referral balance","btn":"Withdraw","text":"Click Withdraw button to get all your deposits earnings and affiliate bonuses at once with a single transaction. Your personal hold-bonus will be reset therefore."},"statistic":{"number":"Number of deposits","last":"Last deposit date","invested":"Invested","earned":"Total earned","withdrawn":"Total withdrawn"},"referral":{"title":"Share my referral link with friends","btn":"Partner dashboard"}},"home":{"title":"Buy NFT","nft":{"profit":"profit","input":"Enter amount","btn":"Buy","earnings":"Earnings"},"feed":{"btn":"Feed","text":"Chickens need to be fed so that their owner receives a full daily percentage of profit accrual. To feed a chicken, you need to go to your personal account and press the right button."},"active":{"title":"Active NFT","search":"Search","name":"Name","progress":"Progress","profit":"Daily profit","accrued":"Accrued","date":"Date"}},"partners":{"title":"Refer Friends & Earn Bonus","level":"Level","text":"Every 2 BNB earned in the form of a referral bonus increases the first level referral rate by 1%","refTitle":"Share your referral link with friends","refBtn":"Copy link","refLink":"Promotional materials","active":"Active referrals","total":"Total referral bonus","historyTitle":"Referral history","all":"All","item":{"ref":"Referral ","level":"Referral level ","purchase":"Purchase amount","bonus":"Your bonus","date":"Date"}},"trade-in":{"title":"Trade-in","profit":"profit","btn":"Activate"},"reinvest":{"title":"Reinvest","nft":{"profit":"profit","input":"Enter amount","btn":"Buy","earnings":"Earnings","blocked":"Insufficient funds"},"text":"Click Withdraw button, and you will get instantly all your deposits earnings and affiliate bonuses with a single"},"popups":{"copied":"Link copied to clipboard","withdraw":{"title":"Confirm withdrawal","subTitle":"Where will the money be sent","input":"Enter amount","text":"When withdrawing funds from this balance, your Hold Bonus will reset to zero.","btn1":"Confirm","btn2":"Cancel"},"feed":"You`ve successfully fed your chicks! They`re happy and full! Please don`t forget to feed them again later."}}}');
        const esp_namespaceObject = JSON.parse('{"landing":{"banners":{"title":"Pancartas de afiliados","label":"Tu enlace de referencia"}},"cabinet":{"header":{"nav1":"Página principal","nav2":"Mis socios","nav3":"Intercambio","nav4":"Reinvertir","wallet":"Saldo de la cartera","exit":"Salida"},"aside":{"spollers":{"item1":"Ganancia actual","item2":"Saldos","item3":"Estadísticas","item4":"Compartir enlace con amigos"},"profit":{"title":"Su ganancia diaria vigente","link":"Cómo <br> funciona","basic":"Ganancia básica","hold":"Bonificación de permanencia","contract":"Bonificación de contrato"},"balance":{"investment":"Balance de inversión","referral":"Balance de recomendación","btn":"Retiro","text":"Haga click en el botón de Retiro para obtener todas las ganancias de sus depósitos y bonificaciones asociadas en una sola transacción. Su bonificación de permanencia de fondos se reiniciará."},"statistic":{"number":"Número de depósitos","last":"Última fecha de depósito","invested":"Monto invertido","earned":"Total ganado","withdrawn":"Total retirado"},"referral":{"title":"Compartir mi enlace de referencia con la gente","btn":"Panel de socio"}},"home":{"title":"Adquirir NFT","nft":{"profit":"ganancia","input":"Ingrese el monto","btn":"Adquirir","earnings":"Ganancias"},"feed":{"btn":"Alimento","text":"Los pollos deben ser alimentados para que su propietario reciba un porcentaje diario completo de la acumulación de ganancias. Para alimentar a un pollo, debe ir a su cuenta personal y presionar el botón derecho."},"active":{"title":"NFT activo","search":"Búsqueda","name":"Nombre","progress":"Progreso","profit":"Ganancia diaria","accrued":"Acumulado","date":"Fecha"}},"partners":{"title":"Recomendar a Amigos y Recibir Bonificación","level":"Nivel","text":"Cada 2 BNB obtenidos en forma de bonificación por recomendación aumenta la tasa de recomendación de primer nivel en un 1 %.","refTitle":"Envíe su vínculo de recomendación a amigos","refBtn":"Copiar vínculo","refLink":"Material de promoción","active":"Recomendaciones activas","total":"Total de bonificaciones por recomendación","historyTitle":"Historial de recomendaciones","all":"Todos","item":{"ref":"Recomendaciones ","level":"Nivel de recomendaciones","purchase":"Monto adquirido","bonus":"Sus bonificaciones","date":"Fecha"}},"trade-in":{"title":"TIntercambio","profit":"ganancia","btn":"Activar"},"reinvest":{"title":"Reinvertir","nft":{"profit":"ganancia","input":"Ingrese el monto","btn":"Adquirir","earnings":"Ganancias","blocked":"Fondos insuficientes"},"text":"Haga clic en el botón Retirar y obtendrá instantáneamente todas las ganancias de sus depósitos y bonos de afiliados con un solo"},"popups":{"copied":"Link copiado al portapapeles","withdraw":{"title":"Confirmar retiro","subTitle":"¿Dónde se enviará el dinero?","input":"Ingrese la cantidad","text":"Al retirar fondos de este saldo, su bonificación de retención se restablecerá a cero.","btn1":"Confirmar","btn2":"Cancelar"},"feed":"¡Has alimentado con éxito a tus pollitos! ¡Están felices y llenos! Por favor, no olvide alimentarlos de nuevo más tarde."}}}');
        const vnm_namespaceObject = JSON.parse('{"landing":{"banners":{"title":"Biểu ngữ liên kết","label":"Liên kết giới thiệu của bạn"}},"cabinet":{"header":{"nav1":"Nhà","nav2":"Những đối tác của tôi","nav3":"Giao dịch","nav4":"Tái đầu tư","wallet":"Số dư trên Wallet","exit":"Lối ra"},"aside":{"spollers":{"item1":"Lợi nhuận hiện tại","item2":"Cân bằng","item3":"Số liệu thống kê","item4":"Chia sẻ liên kết với bạn bè"},"profit":{"title":"Lợi nhuận hàng ngày hiện tại của bạn","link":"Làm thế nào  <br> nó hoạt động","basic":"Lợi nhuận cơ bản","hold":"Thưởng giữ lợi nhuận","contract":"Thưởng hợp đồng thông minh"},"balance":{"investment":"Số dư đầu tư","referral":"Số dư giới thiệu","btn":"Rút","text":"Nhấn nút Rút để nhận tất cả thu nhập từ số tiền nạp vào để đầu tư và thưởng giới thiệu chỉ với một giao dịch. Thưởng cho việc giữ lợi nhuận của bạn sẽ bị đặt lại."},"statistic":{"number":"Số lần nạp","last":"Ngày nạp cuối cùng","invested":"Đã đầu tư","earned":"Tổng số tiền kiếm được","withdrawn":"Tổng số tiền đã rút"},"referral":{"title":"Chia sẻ liên kết giới thiệu của tôi với mọi người","btn":"Trang tổng quan đối tác"}},"home":{"title":"Mua NFT","nft":{"profit":"lợi nhuận","input":"Nhập số lượng","btn":"Mua","earnings":"Thu nhập"},"feed":{"btn":"Cho ăn","text":"Gà cần được cho ăn để người sở hữu chúng nhận được đầy đủ phần trăm thưởng tích lũy mỗi ngày. Bạn cần đi đến phần tài khoản cá nhân và nhấn nút bên phải để cho gà ăn."},"active":{"title":"Kích hoạt NFT","search":"Tìm kiếm","name":"Tên","progress":"Tiến triển","profit":"Lợi nhuận hàng ngày","accrued":"Đã tích lũy","date":"Ngày"}},"partners":{"title":"Giới thiệu bạn & Kiếm tiền thưởng","level":"Cấp độ","text":"Cứ mỗi 2 BNB kiếm được dưới dạng tiền thưởng giới thiệu sẽ tăng tỷ lệ giới thiệu cấp đầu tiên lên 1%","refTitle":"Chia sẻ liên kết giới thiệu với bạn bè","refBtn":"Sao chép liên kết","refLink":"Tài liệu quảng bá","active":"Người giới thiệu hoạt động","total":"Tổng tiền thưởng giới thiệu","historyTitle":"Lịch sử giới thiệu","all":"Tất cả các","item":{"ref":"Giới thiệu ","level":"Cấp độ giới thiệu","purchase":"Số tiền mua","bonus":"Thưởng của bạn","date":"Ngày"}},"trade-in":{"title":"Giao dịch","profit":"lợi nhuận","btn":"Hoạt động"},"reinvest":{"title":"Tái đầu tư","nft":{"profit":"lợi nhuận","input":"Nhập số lượng","btn":"Mua","earnings":"Thu nhập","blocked":"Không đủ tiền"},"text":"Nhấp vào nút Rút tiền, và bạn sẽ nhận được ngay lập tức tất cả các khoản thu nhập từ tiền gửi và tiền thưởng liên kết chỉ với một lần duy nhất"},"popups":{"copied":"Liên kết được sao chép vào khay nhớ tạm","withdraw":{"title":"Xác nhận rút tiền","subTitle":"Tiền sẽ được gửi đến đâu","input":"Nhập số tiền","text":"Khi rút tiền từ số dư này, Tiền thưởng Giữ lại của bạn sẽ đặt lại về 0.","btn1":"Xác nhận","btn2":"Hủy bỏ"},"feed":"Bạn đã cho gà con ăn thành công! Họ đang hạnh phúc và đầy đủ! Xin đừng quên cho chúng ăn lại sau này."}}}');
        const prt_namespaceObject = JSON.parse('{"landing":{"banners":{"title":"Banners de afiliados","label":"Seu link de referência"}},"cabinet":{"header":{"nav1":"Início","nav2":"Meus parceiros","nav3":"Trade-in","nav4":"Reinvestir","wallet":"Saldo da carteira","exit":"saída"},"aside":{"spollers":{"item1":"Lucro atual","item2":"Saldos","item3":"Estatisticas","item4":"Compartilhar link com amigos"},"profit":{"title":"Seu lucro diário atual","link":"Como <br> funciona","basic":"Lucro básico","hold":"Bônus de hold","contract":"Bônus de contrato"},"balance":{"investment":"Saldo do investimento","referral":"Saldo de indicação","btn":"Sacar","text":"Clique no botão Sacar para obter todos os seus ganhos de depósitos e bônus de afiliados de uma só vez com uma única transação. Seu bônus pessoal de hold será redefinido dessa forma."},"statistic":{"number":"Número de depósitos","last":"Data do último depósito","invested":"Investido","earned":"Total ganho","withdrawn":"Total sacado"},"referral":{"title":"Compartilhar meu link de referência com as pessoas","btn":"Painel do parceiro"}},"home":{"title":"Comprar NFT","nft":{"profit":"lucro","input":"Insira o valor","btn":"Comprar","earnings":"Ganhos"},"feed":{"btn":"Alimentação","text":"As galinhas precisam ser alimentadas para que seu proprietário receba uma porcentagem diária completa do acúmulo de lucro. Para alimentar uma galinha, você precisa acessar sua conta pessoal e pressionar o botão direito."},"active":{"title":"NFT ativo","search":"Procurar","name":"Nome","progress":"Progresso","profit":"Lucro diário","accrued":"Acumulado","date":"Encontro"}},"partners":{"title":"Indique amigos & ganhe bônus","level":"Nível","text":"Cada 2 BNB ganhos na forma de bônus de indicação aumenta a taxa de indicação de primeiro nível em 1%","refTitle":"Compartilhe seu link de indicação com amigos","refBtn":"Copiar link","refLink":"Materiais promocionais","active":"Indicações ativas","total":"Total referral bonus","historyTitle":"Referral history","all":"Tudo","item":{"ref":"Indicação ","level":"Nível de indicação","purchase":"Valor da compra","bonus":"Seu bônus","date":"Data"}},"trade-in":{"title":"Trade-in","profit":"lucro","btn":"Ativar"},"reinvest":{"title":"Reinvestir","nft":{"profit":"lucro","input":"Insira o valor","btn":"Comprar","earnings":"Ganhos","blocked":"Fundos insuficientes"},"text":"Clique no botão Retirar e você receberá instantaneamente todos os seus ganhos de depósitos e bônus de afiliados com um único"},"popups":{"copied":"Link copiado para a área de transferência","withdraw":{"title":"Confirmar retirada","subTitle":"Para onde será enviado o dinheiro","input":"Insira o valor","text":"Ao retirar fundos desse saldo, seu bônus de retenção será zerado.","btn1":"Сonfirme","btn2":"Cancelar"},"feed":"Você alimentou com sucesso seus filhotes! Eles estão felizes e cheios! Por favor, não se esqueça de alimentá-los novamente mais tarde."}}}');
        window.addEventListener("load", (function() {
            setLang();
            newSetLang();
        }));
        var langHeadEL = document.querySelector(".language-block__flag");
        var langHeadFlagImgEl = document.querySelector(".language-block__flag-head-img");
        var langListLEl = document.querySelector(".language-block__body");
        var lang = window.hasOwnProperty("localStorage") && window.localStorage.getItem("lang") || "eng";
        var flagLang = document.querySelector(".language-block__item[data-lang = ".concat(lang, "] .language-block__flag-img")).getAttribute("src");
        langListLEl.addEventListener("click", (function(e) {
            if (e.target.classList.contains("language-block__item")) {
                lang = e.target.querySelector(".language-block__item-text").textContent;
                flagLang = e.target.querySelector(".language-block__flag-img").getAttribute("src");
                window.localStorage.setItem("lang", lang);
                location.reload();
                setLang();
                newSetLang();
            }
        }));
        function setLang() {
            langHeadFlagImgEl.setAttribute("src", flagLang);
            if (langHeadEL.querySelector("source")) langHeadEL.querySelector("source").setAttribute("srcset", flagLang);
            for (var p in translations[lang]) {
                if (document.getElementById(p)) document.getElementById(p).innerHTML = translations[lang][p];
                if (document.querySelector(".".concat(p, "[data-placeholder]"))) document.querySelector(".".concat(p, "[data-placeholder]")).setAttribute("placeholder", translations[lang][p]);
            }
            translateListMob();
        }
        function translateListMob() {
            var _loop = function _loop(p) {
                document.querySelectorAll("." + p).forEach((function(el) {
                    el.innerHTML = mobListTranslations[lang][p];
                }));
            };
            for (var p in mobListTranslations[lang]) _loop(p);
        }
        function newSetLang() {
            var locales = selectLocales(lang);
            var allDataEl = document.querySelectorAll("[data-lg]");
            var allDataElPlaceholder = document.querySelectorAll("[data-lg-placeholder]");
            allDataEl.forEach((function(lgItem) {
                var landPath = lgItem.dataset.lg.split(".");
                var curVal = getTransfer(locales, landPath);
                lgItem.innerHTML = curVal;
            }));
            allDataElPlaceholder.forEach((function(lgItem) {
                var landPath = lgItem.dataset.lgPlaceholder.split(".");
                var curVal = getTransfer(locales, landPath);
                lgItem.setAttribute("placeholder", curVal);
            }));
        }
        function selectLocales(language) {
            if ("eng" === language) return eng_namespaceObject;
            if ("esp" === language) return esp_namespaceObject;
            if ("vnm" === language) return vnm_namespaceObject;
            if ("prt" === language) return prt_namespaceObject;
        }
        function getTransfer(obj, way) {
            var result;
            runner(obj, way);
            function runner(obj, way) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (way.length === n) return;
                result = obj[way[n]];
                runner(obj[way[n]], way, n += 1);
            }
            return result;
        }
        var MAIN_CALC_EL = document.getElementById("interestScreme");
        if (MAIN_CALC_EL) {
            var calcInit = function calcInit() {
                calcBnbInputEL.value = "400";
                calcDaysInputEL.value = "1";
                calcBnbResultEl.textContent = 1.15;
                calcDaysResultEl.textContent = .1;
                calcTotalPercent();
            };
            var addBnbInput = function addBnbInput() {
                calcBnbInputEL.value = +calcBnbInputEL.value + 400;
                calcBnbPercent();
            };
            var subBnbInput = function subBnbInput() {
                if (calcBnbInputEL.value > 400) {
                    calcBnbInputEL.value = +calcBnbInputEL.value - 400;
                    calcBnbPercent();
                }
            };
            var calcBnbPercent = function calcBnbPercent() {
                var resultBnb = Math.trunc(+calcBnbInputEL.value / 400);
                var bnbResult = 1;
                var stepsNow = stepsCounter(resultBnb);
                firstStep();
                calcBnbResultEl.textContent = bnbResult.toFixed(3);
                calcTotalPercent();
                function firstStep() {
                    var curVal = stepsNow.get();
                    if (curVal >= 7) {
                        bnbResult += 1.05;
                        stepsNow.sub(7);
                        secondStep();
                    } else bnbResult += .15 * curVal;
                }
                function secondStep() {
                    var curVal = stepsNow.get();
                    if (curVal >= 14) {
                        bnbResult += .98;
                        stepsNow.sub(14);
                        thirdStep();
                    } else bnbResult += .07 * curVal;
                }
                function thirdStep() {
                    var curVal = stepsNow.get();
                    if (curVal >= 28) {
                        bnbResult += .98;
                        stepsNow.sub(28);
                        fourthStep();
                    } else bnbResult += .035 * curVal;
                }
                function fourthStep() {
                    var curVal = stepsNow.get();
                    if (curVal >= 50) {
                        bnbResult += 1;
                        stepsNow.sub(50);
                        fifthStep();
                    } else bnbResult += .02 * curVal;
                }
                function fifthStep() {
                    var curVal = stepsNow.get();
                    bnbResult += .01 * curVal;
                }
            };
            var stepsCounter = function stepsCounter(val) {
                var result = val;
                return {
                    sub: function sub(n) {
                        return result -= n;
                    },
                    get: function get() {
                        return result;
                    }
                };
            };
            var addDaysInput = function addDaysInput() {
                calcDaysInputEL.value = +calcDaysInputEL.value + 1;
                calcDaysPercent();
            };
            var subDaysInput = function subDaysInput() {
                if (calcDaysInputEL.value > 1) {
                    calcDaysInputEL.value = +calcDaysInputEL.value - 1;
                    calcDaysPercent();
                }
            };
            var calcDaysPercent = function calcDaysPercent() {
                var resultDays = calcDaysInputEL.value / 10;
                calcDaysResultEl.textContent = resultDays.toFixed(3);
                calcTotalPercent();
            };
            var calcTotalPercent = function calcTotalPercent() {
                var resultPercent = +calcBnbResultEl.textContent + +calcDaysResultEl.textContent;
                calcTotalPercentEl.textContent = resultPercent.toFixed(3);
                calcDailyProfit();
            };
            var calcDailyProfit = function calcDailyProfit() {
                var profit = calcInvestmentSumInputEl.value / 100 * +calcTotalPercentEl.textContent;
                calcProfitSumEl.textContent = "".concat(profit.toFixed(3), "$");
            };
            var calcBnbInputEL = document.getElementById("calcInputBnb");
            var calcBnbBtnPlusEL = document.getElementById("calcBnbPlus");
            var calcBnbBtnMinusEL = document.getElementById("calcBnbMinus");
            var calcBnbResultEl = document.getElementById("calcBnbResult");
            var calcDaysInputEL = document.getElementById("calcInputDays");
            var calcDaysBtnPlusEL = document.getElementById("calcDaysPlus");
            var calcDaysBtnMinusEL = document.getElementById("calcDaysMinus");
            var calcDaysResultEl = document.getElementById("calcDaysResult");
            var calcTotalPercentEl = document.getElementById("calcTotalPercent");
            var calcInvestmentSumInputEl = document.getElementById("calcInvestmentSum");
            var calcProfitSumEl = document.getElementById("profitSum");
            var calcAllInput = MAIN_CALC_EL.querySelectorAll("input");
            calcAllInput.forEach((function(el) {
                return el.addEventListener("input", (function(e) {
                    this.value = this.value.replace(/[^\d.]/g, "");
                }));
            }));
            calcInit();
            calcBnbInputEL.addEventListener("input", calcBnbPercent);
            calcBnbBtnPlusEL.addEventListener("click", addBnbInput);
            calcBnbBtnMinusEL.addEventListener("click", subBnbInput);
            calcDaysInputEL.addEventListener("input", calcDaysPercent);
            calcDaysBtnPlusEL.addEventListener("click", addDaysInput);
            calcDaysBtnMinusEL.addEventListener("click", subDaysInput);
            calcInvestmentSumInputEl.addEventListener("input", calcDailyProfit);
        }
        function regional_toConsumableArray(arr) {
            return regional_arrayWithoutHoles(arr) || regional_iterableToArray(arr) || regional_unsupportedIterableToArray(arr) || regional_nonIterableSpread();
        }
        function regional_nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function regional_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" === typeof o) return regional_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if ("Object" === n && o.constructor) n = o.constructor.name;
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return regional_arrayLikeToArray(o, minLen);
        }
        function regional_iterableToArray(iter) {
            if ("undefined" !== typeof Symbol && null != iter[Symbol.iterator] || null != iter["@@iterator"]) return Array.from(iter);
        }
        function regional_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return regional_arrayLikeToArray(arr);
        }
        function regional_arrayLikeToArray(arr, len) {
            if (null == len || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        var regionaProduct = document.querySelector(".regional-list__main-content");
        if (regionaProduct) {
            var SplitParts = function SplitParts(arr) {
                if (arr.length > lengthPart) {
                    var _chunks = [];
                    Math.floor(arr.length / lengthPart);
                    for (var i = 0; i < arr.length; i += lengthPart) _chunks.push(arr.slice(i, i + lengthPart));
                    return _chunks;
                } else return [ arr ];
            };
            var RenderChunks = function RenderChunks(part) {
                if (part >= 0 && part < chunks.length) {
                    regionaProduct.innerHTML = "";
                    chunks[part].map((function(elem) {
                        return regionaProduct.append(elem);
                    }));
                } else return false;
            };
            var RenderPagination = function RenderPagination() {
                regionalPaginationEl.innerHTML = "";
                if (chunks.length > 1) {
                    regionalPaginationEl.innerHTML = '<div class="regional-pagination__list"></div>';
                    var regionalPaginationList = document.querySelector(".regional-pagination__list");
                    chunks.map((function(e, i) {
                        return regionalPaginationList.insertAdjacentHTML("beforeend", '<button class="regional-pagination__item '.concat(0 === i ? "_active" : "", '" data-part="').concat(i, '">').concat(i + 1, "</button>"));
                    }));
                    regionalPaginationEl.insertAdjacentHTML("afterbegin", '<button type="button"  class="regional-pagination__arrow regional-pagination__arrow_prev _icon-arrow-bottom _disable"></button>');
                    regionalPaginationEl.insertAdjacentHTML("beforeend", '<button type="button" class="regional-pagination__arrow regional-pagination__arrow_next _icon-arrow-bottom"></button>');
                }
                hideOverPages();
            };
            var hideOverPages = function hideOverPages() {
                var regionalPaginationList = document.querySelector(".regional-pagination__list");
                var active = regionalPaginationEl.querySelector(".regional-pagination__item._active");
                if (regionalPaginationList) {
                    var items = regional_toConsumableArray(regionalPaginationList.children);
                    if (items.length > 5) {
                        items.forEach((function(item) {
                            return item.classList.add("_hide");
                        }));
                        items[0].classList.remove("_hide");
                        if (active.previousElementSibling) active.previousElementSibling.classList.remove("_hide");
                        active.classList.remove("_hide");
                        if (active.nextElementSibling) active.nextElementSibling.classList.remove("_hide");
                        items[items.length - 1].classList.remove("_hide");
                    }
                }
            };
            var lengthPart = 6;
            var regionalPaginationEl = document.querySelector(".regional-pagination");
            var regional_data = regional_toConsumableArray(regionaProduct.children);
            var chunks = SplitParts(regional_data);
            RenderChunks(0);
            RenderPagination();
            document.addEventListener("selectCallback", (function(e) {
                var currentSelect = e.detail.select;
                var curVal = currentSelect.value;
                if ("ALL" === curVal) chunks = SplitParts(regional_data); else chunks = SplitParts(regional_data.filter((function(elem) {
                    return elem.classList.contains(curVal);
                })));
                RenderChunks(0);
                RenderPagination();
            }));
            regionalPaginationEl.addEventListener("click", (function(e) {
                e.preventDefault();
                var item = e.target;
                if (item.classList.contains("regional-pagination__item") || item.classList.contains("regional-pagination__arrow")) {
                    var active = regionalPaginationEl.querySelector(".regional-pagination__item._active");
                    var part;
                    if (item.classList.contains("regional-pagination__arrow")) {
                        if (item.classList.contains("_disable")) return false;
                        part = +active.dataset.part;
                        part = item.classList.contains("regional-pagination__arrow_prev") ? part - 1 : part + 1;
                        RenderChunks(part);
                        active.classList.remove("_active");
                        regionalPaginationEl.querySelector('.regional-pagination__item[data-part="'.concat(part, '"]')).classList.add("_active");
                    } else {
                        active.classList.remove("_active");
                        item.classList.add("_active");
                        part = +item.dataset.part;
                        RenderChunks(part);
                    }
                    var prev = regionalPaginationEl.querySelector(".regional-pagination__arrow_prev");
                    var next = regionalPaginationEl.querySelector(".regional-pagination__arrow_next");
                    if (prev.classList.contains("_disable")) prev.classList.remove("_disable");
                    if (next.classList.contains("_disable")) next.classList.remove("_disable");
                    if (0 === part) prev.classList.add("_disable");
                    if (part === chunks.length - 1) next.classList.add("_disable");
                    hideOverPages();
                }
            }));
        }
        currencyMagager();
        function currencyMagager() {
            var currencyElList = document.querySelectorAll(".cabinet-header-ballance");
            var headSumListEl = document.querySelectorAll(".cabinet-header-ballance__sum");
            if (currencyElList && headSumListEl) {
                var curWalletCurrency = window.hasOwnProperty("localStorage") && window.localStorage.getItem("currency") || "bnb";
                setCurrency(curWalletCurrency);
                currencyElList.forEach((function(el) {
                    el.addEventListener("click", (function(item) {
                        if (item.target.classList.contains("cabinet-header-ballance__body-item")) {
                            window.localStorage.setItem("currency", item.target.dataset.wallet);
                            setCurrency(item.target.dataset.wallet);
                        }
                    }));
                }));
            }
            function setCurrency(currency) {
                if ("bnb" === currency) writeCurrency(document.querySelector("[data-wallet-sum = bnb]"));
                if ("busd" === currency) writeCurrency(document.querySelector("[data-wallet-sum = busd]"));
            }
            function writeCurrency(val) {
                headSumListEl.forEach((function(el) {
                    el.textContent = val.textContent;
                }));
            }
        }
        cabinetNavigation();
        function cabinetNavigation() {
            var navListBtnEl = document.querySelectorAll("[data-nav-cabinet-btn]");
            var navListBodyEl = document.querySelectorAll("[data-cabinet-body]");
            var referalBtn = document.querySelector('[data-link="2"]');
            if (navListBtnEl && navListBodyEl && referalBtn) {
                navListBtnEl.forEach((function(btn) {
                    btn.addEventListener("click", (function(el) {
                        if (el.target.classList.contains("cabinet-header-menu__item") && !el.target.classList.contains("_active-nav")) {
                            resetCabinet(navListBtnEl, "_active-nav");
                            resetCabinet(navListBodyEl, "_active-body");
                            btn.classList.add("_active-nav");
                            var curBody = document.querySelector("[data-cabinet-body = '".concat(btn.dataset.navCabinetBtn, "']"));
                            curBody.classList.add("_active-body");
                            setBg(btn.dataset.navCabinetBtn);
                            menuClose();
                        }
                    }));
                }));
                referalBtn.addEventListener("click", (function() {
                    resetCabinet(navListBtnEl, "_active-nav");
                    resetCabinet(navListBodyEl, "_active-body");
                    document.querySelector('[data-nav-cabinet-btn = "2"]').classList.add("_active-nav");
                    document.querySelector('[data-cabinet-body = "2"]').classList.add("_active-body");
                    setBg("2");
                }));
            }
            function resetCabinet(arr, state) {
                arr.forEach((function(btn) {
                    btn.classList.remove(state);
                }));
            }
            function setBg(number) {
                var cabinetBg = document.querySelector("[data-bg]");
                cabinetBg.dataset.bg = number;
            }
        }
        asideController();
        function asideController() {
            var asideEl = document.querySelector(".cabinet-aside");
            if (asideEl) asideEl.addEventListener("click", (function(el) {
                if (el.target.classList.contains("cabinet-aside__opener")) asideEl.classList.toggle("_active");
            }));
        }
        copyRefLink();
        function copyRefLink() {
            var copuBlock = document.querySelectorAll("[data-copy-block]");
            if (copuBlock) copuBlock.forEach((function(block) {
                block.addEventListener("click", (function(el) {
                    if (el.target.hasAttribute("data-copy-btn")) {
                        copyLabel();
                        var copuValEl = block.querySelector("[data-copy-val]");
                        navigator.clipboard.writeText(copuValEl.textContent);
                    }
                }));
            }));
            function copyLabel() {
                var copiedLabel = document.querySelector(".copied");
                copiedLabel.classList.add("_active");
                setTimeout((function() {
                    copiedLabel.classList.remove("_active");
                }), 2e3);
            }
        }
        isWebp();
        menuInit();
        spollers();
        tabs();
        addLoadedClass();
        pageNavigation();
    })();
})();