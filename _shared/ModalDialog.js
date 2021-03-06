'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDialog = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _withStyles = require('@material-ui/core/styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      other = (0, _objectWithoutProperties3.default)(_ref, ['children', 'classes', 'onKeyDown', 'onAccept', 'onDismiss', 'onClear', 'onSetToday', 'okLabel', 'cancelLabel', 'clearLabel', 'todayLabel', 'dialogContentClassName', 'clearable', 'showTodayButton']);
  return _react2.default.createElement(
    _Dialog2.default,
    (0, _extends3.default)({ onClose: onDismiss, classes: { paper: classes.dialogRoot } }, other),
    _react2.default.createElement(_reactEventListener2.default, { target: 'window', onKeyDown: onKeyDown }),
    _react2.default.createElement(
      _DialogContent2.default,
      { className: (0, _classnames3.default)(classes.dialog, dialogContentClassName) },
      children
    ),
    _react2.default.createElement(
      _DialogActions2.default,
      {
        classes: {
          root: clearable && classes.dialogActions,
          action: (0, _classnames3.default)(classes.dialogAction, (_classnames = {}, (0, _defineProperty3.default)(_classnames, classes.clearableDialogAction, clearable), (0, _defineProperty3.default)(_classnames, classes.todayDialogAction, !clearable && showTodayButton), _classnames))
        }
      },
      clearable && _react2.default.createElement(
        _Button2.default,
        {
          color: 'primary',
          onClick: onClear,
          'aria-label': clearLabel
        },
        clearLabel
      ),
      !clearable && showTodayButton && _react2.default.createElement(
        _Button2.default,
        {
          color: 'primary',
          onClick: onSetToday,
          'aria-label': todayLabel
        },
        todayLabel
      ),
      _react2.default.createElement(
        _Button2.default,
        {
          color: 'primary',
          onClick: onDismiss,
          'aria-label': cancelLabel
        },
        cancelLabel
      ),
      _react2.default.createElement(
        _Button2.default,
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

exports.ModalDialog = ModalDialog;
ModalDialog.propTypes = {
  children: _propTypes2.default.node.isRequired,
  onKeyDown: _propTypes2.default.func.isRequired,
  onAccept: _propTypes2.default.func.isRequired,
  onDismiss: _propTypes2.default.func.isRequired,
  onClear: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.object.isRequired,
  dialogContentClassName: _propTypes2.default.string,
  okLabel: _propTypes2.default.string.isRequired,
  cancelLabel: _propTypes2.default.string.isRequired,
  clearLabel: _propTypes2.default.string.isRequired,
  clearable: _propTypes2.default.bool.isRequired,
  todayLabel: _propTypes2.default.string.isRequired,
  showTodayButton: _propTypes2.default.bool.isRequired,
  onSetToday: _propTypes2.default.func.isRequired
};

ModalDialog.defaultProps = {
  dialogContentClassName: ''
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiPickersModal' })(ModalDialog);