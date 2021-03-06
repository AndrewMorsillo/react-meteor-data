'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Container helper using react-meteor-data.
                                                                                                                                                                                                                                                                   */

exports.default = createContainer;

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _ReactMeteorData = require('./ReactMeteorData');

var _ReactMeteorData2 = _interopRequireDefault(_ReactMeteorData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createContainer() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Component = arguments[1];

  var expandedOptions = options;
  if (typeof options === 'function') {
    expandedOptions = {
      getMeteorData: options
    };
  }

  var _expandedOptions = expandedOptions,
      _getMeteorData = _expandedOptions.getMeteorData,
      _expandedOptions$pure = _expandedOptions.pure,
      pure = _expandedOptions$pure === undefined ? true : _expandedOptions$pure;


  var mixins = [_ReactMeteorData2.default];
  if (pure) {
    mixins.push(_reactAddonsPureRenderMixin2.default);
  }

  /* eslint-disable react/prefer-es6-class */
  return (0, _createReactClass2.default)({
    displayName: 'MeteorDataContainer',
    mixins: mixins,
    getMeteorData: function getMeteorData() {
      return _getMeteorData(this.props);
    },
    render: function render() {
      return _react2.default.createElement(Component, _extends({}, this.props, this.data));
    }
  });
}