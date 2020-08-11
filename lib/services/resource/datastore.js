"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dkan = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _lodash = _interopRequireDefault(require("lodash"));

var _axios = _interopRequireDefault(require("axios"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Datastore = /*#__PURE__*/function () {
  function Datastore() {
    (0, _classCallCheck2["default"])(this, Datastore);
  }

  (0, _createClass2["default"])(Datastore, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _query,
            fields,
            facets,
            range,
            page,
            sort,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _query = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                fields = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                facets = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                range = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
                page = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
                sort = _args.length > 5 && _args[5] !== undefined ? _args[5] : null;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);
  return Datastore;
}();

var dkan = /*#__PURE__*/function (_Datastore) {
  (0, _inherits2["default"])(dkan, _Datastore);

  var _super = _createSuper(dkan);

  function dkan(id, columns, rootUrl) {
    var _this;

    (0, _classCallCheck2["default"])(this, dkan);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", null);
    _this.id = id;
    _this.columns = columns;
    _this.rootUrl = rootUrl;
    return _this;
  }

  (0, _createClass2["default"])(dkan, [{
    key: "getDatastoreInfo",
    value: function () {
      var _getDatastoreInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _axios["default"].get("".concat(this.rootUrl, "datastore/imports/").concat(this.id)).then(function (data) {
                  if (data) {
                    return data.data;
                  }

                  return null;
                })["catch"](function (error) {
                  // handle error
                  console.log(error);
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getDatastoreInfo() {
        return _getDatastoreInfo.apply(this, arguments);
      }

      return getDatastoreInfo;
    }()
  }, {
    key: "getColumns",
    value: function () {
      var _getColumns = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(function (resolve, reject) {
                  resolve(_this2.columns);
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getColumns() {
        return _getColumns.apply(this, arguments);
      }

      return getColumns;
    }()
  }, {
    key: "query",
    value: function () {
      var _query3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var q,
            fields,
            facets,
            range,
            page,
            sort,
            count,
            showDBColumnNames,
            new_q,
            _args6 = arguments;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                q = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : null;
                fields = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;
                facets = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : null;
                range = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : null;
                page = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : null;
                sort = _args6.length > 5 && _args6[5] !== undefined ? _args6[5] : null;
                count = _args6.length > 6 && _args6[6] !== undefined ? _args6[6] : false;
                showDBColumnNames = _args6.length > 7 ? _args6[7] : undefined;

                if (sort === null) {
                  sort = [];
                }

                new_q = [];

                if (q !== null) {
                  new_q = JSON.parse(JSON.stringify(q));
                }

                new_q.map(function (v) {
                  v.value = "%25".concat(v.value, "%25");
                  return v;
                });
                return _context6.abrupt("return", this._fetch(range, page * range, new_q, sort[0], count, showDBColumnNames));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function query() {
        return _query3.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "update",
    value: function () {
      var _update2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function update() {
        return _update2.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function remove() {
        return _remove2.apply(this, arguments);
      }

      return remove;
    }()
  }, {
    key: "_fetch",
    value: function () {
      var _fetch2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(limit, offset, where, sort, count, showDBColumnNames) {
        var _this3 = this;

        var query, where_string, where_clauses, sort_string, fields, limit_string, dbColumns;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                query = '';
                where_string = '';

                if (where.length !== 0) {
                  where_clauses = [];
                  where.forEach(function (v, i) {
                    // Switch delimiter to, and strip any double-quote for Dkan2's sql query.
                    where_clauses[i] = "".concat(v.id, " = \"").concat(v.value.replace('"', ''), "\"");
                  });
                  where_string = "[WHERE ".concat(where_clauses.join(' AND '), "]");
                }

                sort_string = '';

                if ((0, _typeof2["default"])(sort) === 'object') {
                  sort_string = "[ORDER BY ".concat(sort.id);

                  if (sort.desc === false) {
                    sort_string += ' ASC]';
                  } else {
                    sort_string += ' DESC]';
                  }
                }

                fields = '';
                limit_string = '';

                if (count) {
                  fields = 'COUNT(*)';
                } else {
                  fields = '*';
                  limit_string = "[LIMIT ".concat(limit, " OFFSET ").concat(offset, "]");
                }

                dbColumns = showDBColumnNames ? '&show-db-columns' : '';
                query = "datastore/sql/?query=[SELECT ".concat(fields, " FROM ").concat(this.id, "]").concat(where_string).concat(sort_string).concat(limit_string, ";").concat(dbColumns);
                return _context9.abrupt("return", new Promise(function (resolve, reject) {
                  _axios["default"].get(_this3.rootUrl + query).then(function (response) {
                    _this3.data = response.data;
                    resolve({
                      data: _this3.data,
                      count: _this3.data.length
                    });
                  }, function (error) {
                    _this3.data = [];
                    resolve(_this3.data);
                  });
                }));

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function _fetch(_x, _x2, _x3, _x4, _x5, _x6) {
        return _fetch2.apply(this, arguments);
      }

      return _fetch;
    }()
  }]);
  return dkan;
}(Datastore);

exports.dkan = dkan;
var datastore = {
  dkan: dkan
};
var _default = datastore;
exports["default"] = _default;