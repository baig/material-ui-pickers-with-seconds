'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePickerHeader = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames6 = require('classnames');

var _classnames7 = _interopRequireDefault(_classnames6);

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _PickerToolbar = require('../_shared/PickerToolbar');

var _PickerToolbar2 = _interopRequireDefault(_PickerToolbar);

var _ToolbarButton = require('../_shared/ToolbarButton');

var _ToolbarButton2 = _interopRequireDefault(_ToolbarButton);

var _WithUtils = require('../_shared/WithUtils');

var _WithUtils2 = _interopRequireDefault(_WithUtils);

var _datePickerView = require('../constants/date-picker-view');

var viewType = _interopRequireWildcard(_datePickerView);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTimePickerHeader = exports.DateTimePickerHeader = function DateTimePickerHeader(props) {
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

  return _react2.default.createElement(
    _PickerToolbar2.default,
    { className: classes.toolbar },
    _react2.default.createElement(
      'div',
      { className: classes.dateHeader },
      _react2.default.createElement(_ToolbarButton2.default, {
        variant: 'subheading',
        onClick: changeOpenView(viewType.YEAR),
        selected: openView === viewType.YEAR,
        label: utils.getYearText(date)
      }),
      _react2.default.createElement(_ToolbarButton2.default, {
        variant: 'display1',
        onClick: changeOpenView(viewType.DATE),
        selected: openView === viewType.DATE,
        label: utils.getDateTimePickerHeaderText(date)
      })
    ),
    _react2.default.createElement(
      'div',
      {
        className: (0, _classnames7.default)(classes.timeHeader, (_classnames = {}, (0, _defineProperty3.default)(_classnames, classes.timeHeaderWithSeconds, seconds), (0, _defineProperty3.default)(_classnames, classes.timeHeaderWithoutAmPm, !ampm), _classnames))
      },
      _react2.default.createElement(
        'div',
        { className: hourMinuteClassName },
        _react2.default.createElement(_ToolbarButton2.default, {
          variant: seconds ? 'display1' : 'display2',
          onClick: changeOpenView(viewType.HOUR),
          selected: openView === viewType.HOUR,
          label: utils.getHourText(date, ampm)
        }),
        _react2.default.createElement(_ToolbarButton2.default, {
          variant: seconds ? 'display1' : 'display2',
          label: ':',
          selected: false,
          className: classes.separator
        }),
        _react2.default.createElement(_ToolbarButton2.default, {
          variant: seconds ? 'display1' : 'display2',
          onClick: changeOpenView(viewType.MINUTES),
          selected: openView === viewType.MINUTES,
          label: utils.getMinuteText(date)
        }),
        seconds && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_ToolbarButton2.default, {
            variant: 'display1',
            label: ':',
            selected: false,
            className: classes.separator
          }),
          _react2.default.createElement(_ToolbarButton2.default, {
            variant: 'display1',
            onClick: changeOpenView(viewType.SECONDS),
            selected: openView === viewType.SECONDS,
            label: utils.getSecondText(date)
          })
        )
      ),
      ampm && _react2.default.createElement(
        'div',
        {
          className: (0, _classnames7.default)((_classnames2 = {}, (0, _defineProperty3.default)(_classnames2, classes.ampmSelectionWithSeconds, seconds), (0, _defineProperty3.default)(_classnames2, classes.ampmSelection, !seconds), _classnames2))
        },
        _react2.default.createElement(_ToolbarButton2.default, {
          className: (0, _classnames7.default)(classes.ampmLabel, (0, _defineProperty3.default)({}, classes.ampmLabelWithSeconds, seconds)),
          selected: meridiemMode === 'am',
          type: 'subheading',
          label: utils.getMeridiemText('am'),
          onClick: setMeridiemMode('am')
        }),
        seconds && _react2.default.createElement(_ToolbarButton2.default, {
          className: (0, _classnames7.default)(classes.ampmLabel, (0, _defineProperty3.default)({}, classes.ampmLabelWithSeconds, seconds)),
          label: ' / '
        }),
        _react2.default.createElement(_ToolbarButton2.default, {
          className: (0, _classnames7.default)(classes.ampmLabel, (0, _defineProperty3.default)({}, classes.ampmLabelWithSeconds, seconds)),
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
  date: _propTypes2.default.object.isRequired,
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired,
  meridiemMode: _propTypes2.default.string.isRequired,
  openView: _propTypes2.default.string.isRequired,
  onOpenViewChange: _propTypes2.default.func.isRequired,
  setMeridiemMode: _propTypes2.default.func.isRequired,
  utils: _propTypes2.default.object.isRequired,
  ampm: _propTypes2.default.bool,
  seconds: _propTypes2.default.bool
};

DateTimePickerHeader.defaultProps = {
  ampm: true,
  seconds: false
};

var styles = function styles() {
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

exports.default = (0, _withStyles2.default)(styles, { withTheme: true })((0, _WithUtils2.default)()(DateTimePickerHeader));