'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _luxon = require('luxon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LuxonUtils = function () {
  function LuxonUtils() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref.locale;

    (0, _classCallCheck3.default)(this, LuxonUtils);
    this.parse = _luxon.DateTime.fromFormat;

    this.locale = locale || 'en';
  }

  (0, _createClass3.default)(LuxonUtils, [{
    key: 'date',
    value: function date(value) {
      if (value instanceof Date) {
        return _luxon.DateTime.fromJSDate(value);
      }

      if (typeof value === 'string') {
        return _luxon.DateTime.fromJSDate(new Date(value));
      }

      if (value instanceof _luxon.DateTime) {
        return value;
      }

      return _luxon.DateTime.local();
    }
  }, {
    key: 'addDays',
    value: function addDays(date, count) {
      if (count < 0) {
        return date.minus({ days: Math.abs(count) });
      }

      return date.plus({ days: count });
    }
  }, {
    key: 'isValid',
    value: function isValid(date) {
      return date.isValid;
    }
  }, {
    key: 'isEqual',
    value: function isEqual(value, comparing) {
      return value === comparing;
    }
  }, {
    key: 'isSameDay',
    value: function isSameDay(value, comparing) {
      return value.hasSame(comparing, 'day');
    }
  }, {
    key: 'isAfter',
    value: function isAfter(value, comparing) {
      return value > comparing;
    }
  }, {
    key: 'isAfterDay',
    value: function isAfterDay(value, comparing) {
      var diff = value.diff(comparing, 'days').toObject();
      return diff.days > 0;
    }
  }, {
    key: 'isAfterYear',
    value: function isAfterYear(value, comparing) {
      var diff = value.diff(comparing, 'years').toObject();
      return diff.years > 0;
    }
  }, {
    key: 'isBefore',
    value: function isBefore(value, comparing) {
      return value < comparing;
    }
  }, {
    key: 'isBeforeDay',
    value: function isBeforeDay(value, comparing) {
      var diff = value.diff(comparing, 'days').toObject();
      return diff.days < 0;
    }
  }, {
    key: 'isBeforeYear',
    value: function isBeforeYear(value, comparing) {
      var diff = value.diff(comparing, 'years').toObject();
      return diff.years < 0;
    }
  }, {
    key: 'getDiff',
    value: function getDiff(value, comparing) {
      return value.diff(comparing, 'milliseconds');
    }
  }, {
    key: 'startOfDay',
    value: function startOfDay(value) {
      return value.startOf('day');
    }
  }, {
    key: 'endOfDay',
    value: function endOfDay(value) {
      return value.endOf('day');
    }
  }, {
    key: 'format',
    value: function format(date, _format) {
      return date.setLocale(this.locale).toFormat(_format);
    }
  }, {
    key: 'formatNumber',
    value: function formatNumber(number) {
      return String(number);
    }
  }, {
    key: 'getHours',
    value: function getHours(value) {
      return value.get('hour');
    }
  }, {
    key: 'setHours',
    value: function setHours(value, count) {
      return value.set({ hour: count });
    }
  }, {
    key: 'getMinutes',
    value: function getMinutes(value) {
      return value.get('minute');
    }
  }, {
    key: 'setMinutes',
    value: function setMinutes(value, count) {
      return value.set({ minute: count });
    }
  }, {
    key: 'getSeconds',
    value: function getSeconds(value) {
      return value.get('second');
    }
  }, {
    key: 'setSeconds',
    value: function setSeconds(value, count) {
      return value.set({ second: count });
    }
  }, {
    key: 'getMonth',
    value: function getMonth(value) {
      // See https://github.com/moment/luxon/blob/master/docs/moment.md#major-functional-differences
      return value.get('month') - 1;
    }
  }, {
    key: 'getYear',
    value: function getYear(value) {
      return value.get('year');
    }
  }, {
    key: 'setYear',
    value: function setYear(value, year) {
      return value.set({ year: year });
    }
  }, {
    key: 'getStartOfMonth',
    value: function getStartOfMonth(value) {
      return value.startOf('month');
    }
  }, {
    key: 'getNextMonth',
    value: function getNextMonth(value) {
      return value.plus({ months: 1 });
    }
  }, {
    key: 'getPreviousMonth',
    value: function getPreviousMonth(value) {
      return value.minus({ months: 1 });
    }
  }, {
    key: 'getWeekdays',
    value: function getWeekdays() {
      return _luxon.Info.weekdaysFormat('narrow', { locale: this.locale });
    }
  }, {
    key: 'getWeekArray',
    value: function getWeekArray(date) {
      var _date$endOf$endOf$dif = date.endOf('month').endOf('week').diff(date.startOf('month').startOf('week'), 'days').toObject(),
          days = _date$endOf$endOf$dif.days;

      var weeks = [];
      new Array(Math.round(days)).fill().map(function (_, i) {
        return i;
      }).map(function (day) {
        return date.startOf('month').startOf('week').plus({ days: day });
      }).forEach(function (v, i) {
        if (i === 0 || i % 7 === 0 && i > 6) {
          weeks.push([v]);
          return;
        }

        weeks[weeks.length - 1].push(v);
      });

      return weeks;
    }
  }, {
    key: 'getYearRange',
    value: function getYearRange(start, end) {
      start = this.date(start);
      end = this.date(end);

      var _end$diff$toObject = end.diff(start, 'years').toObject(),
          years = _end$diff$toObject.years;

      if (!years || years <= 0) {
        return [];
      }

      return new Array(Math.round(years)).fill().map(function (_m, i) {
        return i;
      }).map(function (year) {
        return start.plus({ years: year });
      });
    }
  }, {
    key: 'getMeridiemText',
    value: function getMeridiemText(ampm) {
      return _luxon.Info.meridiems({ locale: this.locale }).find(function (v) {
        return v.toLowerCase() === ampm.toLowerCase();
      });
    }
  }, {
    key: 'getCalendarHeaderText',
    value: function getCalendarHeaderText(date) {
      return this.format(date, 'MMMM yyyy');
    }
  }, {
    key: 'getDatePickerHeaderText',
    value: function getDatePickerHeaderText(date) {
      return this.format(date, 'ccc, MMM d');
    }
  }, {
    key: 'getDateTimePickerHeaderText',
    value: function getDateTimePickerHeaderText(date) {
      return this.format(date, 'MMM d');
    }
  }, {
    key: 'getDayText',
    value: function getDayText(date) {
      return this.format(date, 'd');
    }
  }, {
    key: 'getHourText',
    value: function getHourText(date, ampm) {
      if (ampm) {
        return date.toFormat('hh');
      }

      return date.toFormat('HH');
    }
  }, {
    key: 'getMinuteText',
    value: function getMinuteText(date) {
      return date.toFormat('mm');
    }
  }, {
    key: 'getSecondText',
    value: function getSecondText(date) {
      return date.toFormat('ss');
    }
  }, {
    key: 'getYearText',
    value: function getYearText(date) {
      return date.toFormat('yyyy');
    }
  }, {
    key: 'isNull',
    value: function isNull(date) {
      return date === null;
    }
  }]);
  return LuxonUtils;
}();

exports.default = LuxonUtils;