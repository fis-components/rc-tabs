'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TabPane = _react2.default.createClass({
  displayName: 'TabPane',

  propTypes: {
    onDestroy: _react2.default.PropTypes.func
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.rootPrefixCls + '-tabpane';
    var cls = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, prefixCls + '-hidden', !props.active), _defineProperty(_classnames, 'prefixCls', 1), _classnames));
    return _react2.default.createElement(
      'div',
      { className: cls },
      props.children
    );
  }
});

exports.default = TabPane;
module.exports = exports['default'];