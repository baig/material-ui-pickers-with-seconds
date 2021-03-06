'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePickerWrapper = undefined;

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

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _propTypes3 = require('../constants/prop-types');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _ModalWrapper = require('../wrappers/ModalWrapper');

var _ModalWrapper2 = _interopRequireDefault(_ModalWrapper);

var _DateTimePicker = require('./DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

var _PickerBase2 = require('../_shared/PickerBase');

var _PickerBase3 = _interopRequireDefault(_PickerBase2);

var _WithUtils = require('../_shared/WithUtils');

var _WithUtils2 = _interopRequireDefault(_WithUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimePickerWrapper = exports.DateTimePickerWrapper = function (_PickerBase) {
  (0, _inherits3.default)(DateTimePickerWrapper, _PickerBase);

  function DateTimePickerWrapper() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DateTimePickerWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DateTimePickerWrapper.__proto__ || (0, _getPrototypeOf2.default)(DateTimePickerWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.default12hFormat = 'MMMM Do hh:mm a', _this.default24hFormat = 'MMMM Do HH:mm', _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DateTimePickerWrapper, [{
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
          other = (0, _objectWithoutProperties3.default)(_props, ['value', 'format', 'autoOk', 'openTo', 'classes', 'minDate', 'maxDate', 'showTabs', 'autoSubmit', 'disablePast', 'disableFuture', 'leftArrowIcon', 'rightArrowIcon', 'dateRangeIcon', 'timeIcon', 'renderDay', 'utils', 'ampm', 'shouldDisableDate', 'animateYearScrolling', 'fadeTimeout', 'seconds']);


      return _react2.default.createElement(
        _ModalWrapper2.default,
        (0, _extends3.default)({
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
        _react2.default.createElement(_DateTimePicker2.default, {
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
}(_PickerBase3.default);

DateTimePickerWrapper.propTypes = {
  utils: _propTypes2.default.object.isRequired,
  classes: _propTypes2.default.object.isRequired,
  /** DateTimepicker value */
  value: _propTypes4.default.date,
  /** Date format string for input */
  format: _propTypes2.default.string,
  /** Callback firing when date accepted */
  onChange: _propTypes2.default.func.isRequired,
  /** Auto accept date on minute selection */
  autoOk: _propTypes2.default.bool,
  /** Move to the next part of date on select (year -> date -> hour -> minute) */
  autoSubmit: _propTypes2.default.bool,
  /** Disable future dates */
  disableFuture: _propTypes2.default.bool,
  /** Disable past dates */
  disablePast: _propTypes2.default.bool,
  /** Min selectable date */
  minDate: _propTypes4.default.date,
  /** Max selectable date */
  maxDate: _propTypes4.default.date,
  /** Show date/time tabs */
  showTabs: _propTypes2.default.bool,
  /** Left arrow icon */
  leftArrowIcon: _propTypes2.default.node,
  /** Right arrow icon */
  rightArrowIcon: _propTypes2.default.node,
  /** Date tab icon */
  dateRangeIcon: _propTypes2.default.node,
  /** Time tab icon */
  timeIcon: _propTypes2.default.node,
  /** Custom renderer for day renderDay(date, selectedDate, dayInCurrentMonth) */
  renderDay: _propTypes2.default.func,
  /** 12h/24h view for hour selection clock */
  ampm: _propTypes2.default.bool,
  /** Disable specific date */
  shouldDisableDate: _propTypes2.default.func,
  /** Enable animated scrolling to current year */
  animateYearScrolling: _propTypes2.default.bool,
  /** Open directly to particular view */
  openTo: _propTypes2.default.oneOf(['year', 'date', 'hour', 'minutes']),
  /** Switching hour/minutes animation timeout in milliseconds (set 0 to disable) */
  fadeTimeout: _propTypes2.default.number,
  /** Show the seconds view */
  seconds: _propTypes2.default.bool
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


var styles = {
  dialogContent: {
    width: 310
  }
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiPickerDTPickerModal' })((0, _WithUtils2.default)()(DateTimePickerWrapper));