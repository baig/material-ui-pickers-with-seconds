'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _addDays = require('date-fns/addDays');

var _addDays2 = _interopRequireDefault(_addDays);

var _addMonths = require('date-fns/addMonths');

var _addMonths2 = _interopRequireDefault(_addMonths);

var _addYears = require('date-fns/addYears');

var _addYears2 = _interopRequireDefault(_addYears);

var _differenceInMilliseconds = require('date-fns/differenceInMilliseconds');

var _differenceInMilliseconds2 = _interopRequireDefault(_differenceInMilliseconds);

var _eachDayOfInterval = require('date-fns/eachDayOfInterval');

var _eachDayOfInterval2 = _interopRequireDefault(_eachDayOfInterval);

var _endOfDay = require('date-fns/endOfDay');

var _endOfDay2 = _interopRequireDefault(_endOfDay);

var _endOfMonth = require('date-fns/endOfMonth');

var _endOfMonth2 = _interopRequireDefault(_endOfMonth);

var _endOfWeek = require('date-fns/endOfWeek');

var _endOfWeek2 = _interopRequireDefault(_endOfWeek);

var _endOfYear = require('date-fns/endOfYear');

var _endOfYear2 = _interopRequireDefault(_endOfYear);

var _format2 = require('date-fns/format');

var _format3 = _interopRequireDefault(_format2);

var _getHours = require('date-fns/getHours');

var _getHours2 = _interopRequireDefault(_getHours);

var _getSeconds = require('date-fns/getSeconds');

var _getSeconds2 = _interopRequireDefault(_getSeconds);

var _getYear = require('date-fns/getYear');

var _getYear2 = _interopRequireDefault(_getYear);

var _isAfter = require('date-fns/isAfter');

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = require('date-fns/isBefore');

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isEqual = require('date-fns/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isSameDay = require('date-fns/isSameDay');

var _isSameDay2 = _interopRequireDefault(_isSameDay);

var _isValid = require('date-fns/isValid');

var _isValid2 = _interopRequireDefault(_isValid);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _setHours = require('date-fns/setHours');

var _setHours2 = _interopRequireDefault(_setHours);

var _setMinutes = require('date-fns/setMinutes');

var _setMinutes2 = _interopRequireDefault(_setMinutes);

var _setSeconds = require('date-fns/setSeconds');

var _setSeconds2 = _interopRequireDefault(_setSeconds);

var _setYear = require('date-fns/setYear');

var _setYear2 = _interopRequireDefault(_setYear);

var _startOfDay = require('date-fns/startOfDay');

var _startOfDay2 = _interopRequireDefault(_startOfDay);

var _startOfMonth = require('date-fns/startOfMonth');

var _startOfMonth2 = _interopRequireDefault(_startOfMonth);

var _startOfWeek = require('date-fns/startOfWeek');

var _startOfWeek2 = _interopRequireDefault(_startOfWeek);

var _startOfYear = require('date-fns/startOfYear');

var _startOfYear2 = _interopRequireDefault(_startOfYear);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateFnsUtils = function () {
  function DateFnsUtils() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref.locale;

    (0, _classCallCheck3.default)(this, DateFnsUtils);
    this.addDays = _addDays2.default;
    this.isValid = _isValid2.default;
    this.isEqual = _isEqual2.default;
    this.getDiff = _differenceInMilliseconds2.default;
    this.isAfter = _isAfter2.default;
    this.isBefore = _isBefore2.default;
    this.startOfDay = _startOfDay2.default;
    this.endOfDay = _endOfDay2.default;
    this.getHours = _getHours2.default;
    this.setHours = _setHours2.default;
    this.setMinutes = _setMinutes2.default;
    this.getSeconds = _getSeconds2.default;
    this.setSeconds = _setSeconds2.default;
    this.isSameDay = _isSameDay2.default;
    this.getStartOfMonth = _startOfMonth2.default;
    this.getYear = _getYear2.default;
    this.setYear = _setYear2.default;

    this.locale = locale;
  }

  (0, _createClass3.default)(DateFnsUtils, [{
    key: 'date',
    value: function date(value) {
      if (typeof value === 'undefined') {
        return new Date();
      }

      if (value === null) {
        return null;
      }

      return new Date(value);
    }
  }, {
    key: 'parse',
    value: function parse(value, formatString) {
      if (value === '') {
        return null;
      }

      return (0, _parse2.default)(value, formatString, new Date());
    }
  }, {
    key: 'format',
    value: function format(date, formatString) {
      return (0, _format3.default)(date, formatString, { locale: this.locale });
    }
  }, {
    key: 'isNull',
    value: function isNull(date) {
      return date === null;
    }
  }, {
    key: 'isAfterDay',
    value: function isAfterDay(date, value) {
      return (0, _isAfter2.default)(date, (0, _endOfDay2.default)(value));
    }
  }, {
    key: 'isBeforeDay',
    value: function isBeforeDay(date, value) {
      return (0, _isBefore2.default)(date, (0, _startOfDay2.default)(value));
    }
  }, {
    key: 'isBeforeYear',
    value: function isBeforeYear(date, value) {
      return (0, _isBefore2.default)(date, (0, _startOfYear2.default)(value));
    }
  }, {
    key: 'isAfterYear',
    value: function isAfterYear(date, value) {
      return (0, _isAfter2.default)(date, (0, _endOfYear2.default)(value));
    }
  }, {
    key: 'formatNumber',
    value: function formatNumber(num) {
      return num;
    }
  }, {
    key: 'getMinutes',
    value: function getMinutes(date) {
      return date.getMinutes();
    }
  }, {
    key: 'getMonth',
    value: function getMonth(date) {
      return date.getMonth();
    }
  }, {
    key: 'getMeridiemText',
    value: function getMeridiemText(ampm) {
      return ampm === 'am' ? 'AM' : 'PM';
    }
  }, {
    key: 'getNextMonth',
    value: function getNextMonth(date) {
      return (0, _addMonths2.default)(date, 1);
    }
  }, {
    key: 'getPreviousMonth',
    value: function getPreviousMonth(date) {
      return (0, _addMonths2.default)(date, -1);
    }
  }, {
    key: 'getWeekdays',
    value: function getWeekdays() {
      var _this = this;

      var now = new Date();
      return (0, _eachDayOfInterval2.default)({
        start: (0, _startOfWeek2.default)(now, { locale: this.locale }),
        end: (0, _endOfWeek2.default)(now, { locale: this.locale })
      }, { locale: this.locale }).map(function (day) {
        return (0, _format3.default)(day, 'dd', { locale: _this.locale });
      });
    }
  }, {
    key: 'getWeekArray',
    value: function getWeekArray(date) {
      var start = (0, _startOfWeek2.default)((0, _startOfMonth2.default)(date), { locale: this.locale });
      var end = (0, _endOfWeek2.default)((0, _endOfMonth2.default)(date), { locale: this.locale });

      var nestedWeeks = [];
      var count = 0;
      var current = start;
      while ((0, _isBefore2.default)(current, end)) {
        var weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = (0, _addDays2.default)(current, 1);
        count += 1;
      }

      return nestedWeeks;
    }
  }, {
    key: 'getYearRange',
    value: function getYearRange(start, end) {
      var startDate = (0, _startOfYear2.default)(new Date(start));
      var endDate = (0, _endOfYear2.default)(new Date(end));
      var years = [];

      var current = startDate;
      while ((0, _isBefore2.default)(current, endDate)) {
        years.push(current);
        current = (0, _addYears2.default)(current, 1);
      }

      return years;
    }

    // displaying methpds

  }, {
    key: 'getCalendarHeaderText',
    value: function getCalendarHeaderText(date) {
      return (0, _format3.default)(date, 'MMMM YYYY', { locale: this.locale });
    }
  }, {
    key: 'getYearText',
    value: function getYearText(date) {
      return (0, _format3.default)(date, 'YYYY', { locale: this.locale });
    }
  }, {
    key: 'getDatePickerHeaderText',
    value: function getDatePickerHeaderText(date) {
      return (0, _format3.default)(date, 'ddd, MMM D', { locale: this.locale });
    }
  }, {
    key: 'getDateTimePickerHeaderText',
    value: function getDateTimePickerHeaderText(date) {
      return (0, _format3.default)(date, 'MMM D', { locale: this.locale });
    }
  }, {
    key: 'getDayText',
    value: function getDayText(date) {
      return (0, _format3.default)(date, 'D', { locale: this.locale });
    }
  }, {
    key: 'getHourText',
    value: function getHourText(date, ampm) {
      return (0, _format3.default)(date, ampm ? 'hh' : 'HH', { locale: this.locale });
    }
  }, {
    key: 'getMinuteText',
    value: function getMinuteText(date) {
      return (0, _format3.default)(date, 'mm', { locale: this.locale });
    }
  }, {
    key: 'getSecondText',
    value: function getSecondText(date) {
      return (0, _format3.default)(date, 'ss', { locale: this.locale });
    }
  }]);
  return DateFnsUtils;
}();

exports.default = DateFnsUtils;