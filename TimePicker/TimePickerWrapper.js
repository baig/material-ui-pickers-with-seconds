'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePickerWrapper = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalWrapper = require('../wrappers/ModalWrapper');

var _ModalWrapper2 = _interopRequireDefault(_ModalWrapper);

var _TimePicker = require('./TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _PickerBase2 = require('../_shared/PickerBase');

var _PickerBase3 = _interopRequireDefault(_PickerBase2);

var _WithUtils = require('../_shared/WithUtils');

var _WithUtils2 = _interopRequireDefault(_WithUtils);

var _propTypes3 = require('../constants/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePickerWrapper = exports.TimePickerWrapper = function (_PickerBase) {
  (0, _inherits3.default)(TimePickerWrapper, _PickerBase);

  function TimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TimePickerWrapper.__proto__ || (0, _getPrototypeOf2.default)(TimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'hh:mm A', _this.default24hFormat = 'HH:mm', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TimePickerWrapper, [{
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
          other = (0, _objectWithoutProperties3.default)(_props, ['value', 'format', 'autoOk', 'onChange', 'utils', 'ampm', 'fadeTimeout', 'seconds']);


      return _react2.default.createElement(
        _ModalWrapper2.default,
        (0, _extends3.default)({
          ref: this.getRef,
          value: value,
          format: this.getFormat(),
          onClear: this.handleClear,
          onAccept: this.handleAccept,
          onChange: this.handleTextFieldChange,
          onDismiss: this.handleDismiss,
          onSetToday: this.handleSetTodayDate
        }, other),
        _react2.default.createElement(_TimePicker2.default, {
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
}(_PickerBase3.default);

TimePickerWrapper.propTypes = {
  utils: _propTypes2.default.object.isRequired,
  /** DateTimepicker value */
  value: _propTypes4.default.date,
  /** Date format string for input */
  format: _propTypes2.default.string,
  /** Callback firing when date accepted */
  onChange: _propTypes2.default.func.isRequired,
  /** Auto accept date on minute selection */
  autoOk: _propTypes2.default.bool,
  /** 12h/24h view for hour selection clock */
  ampm: _propTypes2.default.bool,
  /** Switching hour/minutes animation timeout in milliseconds (set 0 to disable) */
  fadeTimeout: _propTypes2.default.number,
  /** Show the seconds view */
  seconds: _propTypes2.default.bool
};
TimePickerWrapper.defaultProps = {
  value: new Date(),
  format: undefined,
  autoOk: false,
  ampm: true,
  fadeTimeout: 400,
  seconds: false
};
exports.default = (0, _WithUtils2.default)()(TimePickerWrapper);