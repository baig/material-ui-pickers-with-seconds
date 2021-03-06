'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePicker = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Fade = require('@material-ui/core/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _PickerToolbar = require('../_shared/PickerToolbar');

var _PickerToolbar2 = _interopRequireDefault(_PickerToolbar);

var _ToolbarButton = require('../_shared/ToolbarButton');

var _ToolbarButton2 = _interopRequireDefault(_ToolbarButton);

var _HourView = require('./HourView');

var _HourView2 = _interopRequireDefault(_HourView);

var _MinutesView = require('./MinutesView');

var _MinutesView2 = _interopRequireDefault(_MinutesView);

var _SecondsView = require('./SecondsView');

var _SecondsView2 = _interopRequireDefault(_SecondsView);

var _timeUtils = require('../_helpers/time-utils');

var _WithUtils = require('../_shared/WithUtils');

var _WithUtils2 = _interopRequireDefault(_WithUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimePicker = exports.TimePicker = function (_Component) {
  (0, _inherits3.default)(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TimePicker.__proto__ || (0, _getPrototypeOf2.default)(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TimePicker, [{
    key: 'handleChange',
    value: function handleChange(time, isFinish, openMinutes, openSeconds) {
      var withMeridiem = (0, _timeUtils.convertToMeridiem)(time, this.state.meridiemMode, this.props.ampm, this.props.utils);

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

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _PickerToolbar2.default,
          {
            className: (0, _classnames3.default)(classes.toolbar, (0, _defineProperty3.default)({}, classes.toolbarLeftPadding, ampm))
          },
          _react2.default.createElement(
            'div',
            { className: hourMinuteClassName },
            _react2.default.createElement(_ToolbarButton2.default, {
              variant: 'display3',
              onClick: this.openHourView,
              selected: isHourViewShown,
              label: utils.getHourText(date, ampm)
            }),
            _react2.default.createElement(_ToolbarButton2.default, {
              variant: 'display3',
              label: ':',
              selected: false,
              className: classes.separator
            }),
            _react2.default.createElement(_ToolbarButton2.default, {
              variant: 'display3',
              onClick: this.openMinutesView,
              selected: isMinuteViewShown,
              label: utils.getMinuteText(date)
            }),
            seconds && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(_ToolbarButton2.default, {
                variant: 'display3',
                label: ':',
                selected: false,
                className: classes.separator
              }),
              _react2.default.createElement(_ToolbarButton2.default, {
                variant: 'display3',
                onClick: this.openSecondsView,
                selected: !isHourViewShown && !isMinuteViewShown,
                label: utils.getSecondText(date)
              })
            )
          ),
          ampm && _react2.default.createElement(
            'div',
            { className: seconds ? classes.ampmSelectionWithSeconds : classes.ampmSelection },
            _react2.default.createElement(_ToolbarButton2.default, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'am',
              variant: 'subheading',
              label: utils.getMeridiemText('am'),
              onClick: this.setMeridiemMode('am')
            }),
            _react2.default.createElement(_ToolbarButton2.default, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'pm',
              variant: 'subheading',
              label: utils.getMeridiemText('pm'),
              onClick: this.setMeridiemMode('pm')
            })
          )
        ),
        this.props.children,
        _react2.default.createElement(
          'div',
          { className: classes.viewContainer },
          _react2.default.createElement(
            _Fade2.default,
            {
              timeout: fadeTimeout,
              'in': isHourViewShown,
              mountOnEnter: true,
              unmountOnExit: true
            },
            _react2.default.createElement(
              'div',
              { className: classes.viewRoot },
              _react2.default.createElement(_HourView2.default, {
                date: date,
                meridiemMode: meridiemMode,
                onChange: this.handleHourChange,
                utils: utils,
                ampm: ampm
              })
            )
          ),
          _react2.default.createElement(
            _Fade2.default,
            {
              timeout: fadeTimeout,
              'in': isMinuteViewShown,
              mountOnEnter: true,
              unmountOnExit: true
            },
            _react2.default.createElement(
              'div',
              { className: classes.viewRoot },
              _react2.default.createElement(_MinutesView2.default, {
                date: date,
                onChange: this.handleMinutesChange,
                utils: utils
              })
            )
          ),
          _react2.default.createElement(
            _Fade2.default,
            {
              timeout: fadeTimeout,
              'in': !isHourViewShown && !isMinuteViewShown,
              mountOnEnter: true,
              unmountOnExit: true
            },
            _react2.default.createElement(
              'div',
              { className: classes.viewRoot },
              _react2.default.createElement(_SecondsView2.default, {
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
}(_react.Component);

TimePicker.propTypes = {
  date: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node,
  utils: _propTypes2.default.object.isRequired,
  ampm: _propTypes2.default.bool,
  fadeTimeout: _propTypes2.default.number.isRequired,
  seconds: _propTypes2.default.bool
};
TimePicker.defaultProps = {
  children: null,
  ampm: true,
  seconds: false
};


var styles = function styles() {
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

exports.default = (0, _withStyles2.default)(styles, { withTheme: true, name: 'MuiPickersTimePicker' })((0, _WithUtils2.default)()(TimePicker));