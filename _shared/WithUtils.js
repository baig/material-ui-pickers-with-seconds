'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MuiPickersUtilsProvider = require('../utils/MuiPickersUtilsProvider');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithUtils = function WithUtils() {
  return function (Component) {
    var withUtils = function withUtils(_ref) {
      var pickerRef = _ref.pickerRef,
          props = (0, _objectWithoutProperties3.default)(_ref, ['pickerRef']);
      return _react2.default.createElement(
        _MuiPickersUtilsProvider.MuiPickersContextConsumer,
        null,
        function (utils) {
          return _react2.default.createElement(Component, (0, _extends3.default)({ ref: pickerRef, utils: utils }, props));
        }
      );
    };

    withUtils.displayName = 'WithUtils(' + (Component.displayName || Component.name) + ')';

    withUtils.propTypes = {
      pickerRef: _propTypes2.default.func
    };

    withUtils.defaultProps = {
      pickerRef: undefined
    };

    return withUtils;
  };
};

exports.default = WithUtils;