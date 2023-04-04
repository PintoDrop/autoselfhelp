"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parentStyles = {
  overflow: 'hidden',
  position: 'relative'
};
var defaultStyles = {
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  display: 'block',
  float: 'left'
};

var getHalfStarStyles = function getHalfStarStyles(color, uniqueness) {
  return "\n    .stars-rating-".concat(uniqueness, ":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: ").concat(color, ";\n  }");
};

var StarsRating =
/*#__PURE__*/
function (_Component) {
  _inherits(StarsRating, _Component);

  function StarsRating(props) {
    var _this;

    _classCallCheck(this, StarsRating);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StarsRating).call(this, props)); // set defaults

    props = _extends({}, props);
    _this.state = {
      uniqueness: (Math.random() + '').replace('.', ''),
      value: props.value || 0,
      stars: [],
      halfStar: {
        at: Math.floor(props.value),
        hidden: props.half && props.value % 1 < 0.5
      }
    };
    _this.state.config = {
      count: props.count,
      size: props.size,
      char: props.char,
      // default color of inactive star
      color1: props.color1,
      // color of an active star
      color2: props.color2,
      half: props.half,
      edit: props.edit
    };
    return _this;
  }

  _createClass(StarsRating, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        stars: this.getStars(this.state.value)
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setState({
        stars: this.getStars(props.value),
        value: props.value,
        halfStar: {
          at: Math.floor(props.value),
          hidden: this.state.config.half && props.value % 1 < 0.5
        },
        config: _extends({}, this.state.config, {
          count: props.count,
          size: props.size,
          char: props.char,
          color1: props.color1,
          color2: props.color2,
          half: props.half,
          edit: props.edit
        })
      });
    }
  }, {
    key: "isDecimal",
    value: function isDecimal(value) {
      return value % 1 !== 0;
    }
  }, {
    key: "getRate",
    value: function getRate() {
      var stars;

      if (this.state.config.half) {
        stars = Math.floor(this.state.value);
      } else {
        stars = Math.round(this.state.value);
      }

      return stars;
    }
  }, {
    key: "getStars",
    value: function getStars(activeCount) {
      if (typeof activeCount === 'undefined') {
        activeCount = this.getRate();
      }

      var stars = [];

      for (var i = 0; i < this.state.config.count; i++) {
        stars.push({
          active: i <= activeCount - 1
        });
      }

      return stars;
    }
  }, {
    key: "mouseOver",
    value: function mouseOver(event) {
      var _this$state = this.state,
          config = _this$state.config,
          halfStar = _this$state.halfStar;
      if (!config.edit) return;
      var index = Number(event.target.getAttribute('data-index'));

      if (config.half) {
        var isAtHalf = this.moreThanHalf(event, config.size);
        halfStar.hidden = isAtHalf;
        if (isAtHalf) index = index + 1;
        halfStar.at = index;
      } else {
        index = index + 1;
      }

      this.setState({
        stars: this.getStars(index)
      });
    }
  }, {
    key: "moreThanHalf",
    value: function moreThanHalf(event, size) {
      var target = event.target;
      var mouseAt = event.clientX - target.getBoundingClientRect().left;
      mouseAt = Math.round(Math.abs(mouseAt));
      return mouseAt > size / 2;
    }
  }, {
    key: "mouseLeave",
    value: function mouseLeave() {
      var _this$state2 = this.state,
          value = _this$state2.value,
          halfStar = _this$state2.halfStar,
          config = _this$state2.config;
      if (!config.edit) return;

      if (config.half) {
        halfStar.hidden = !this.isDecimal(value);
        halfStar.at = Math.floor(this.state.value);
      }

      this.setState({
        stars: this.getStars()
      });
    }
  }, {
    key: "clicked",
    value: function clicked(event) {
      var _this$state3 = this.state,
          config = _this$state3.config,
          halfStar = _this$state3.halfStar;
      if (!config.edit) return;
      var index = Number(event.target.getAttribute('data-index'));
      var value;

      if (config.half) {
        var isAtHalf = this.moreThanHalf(event, config.size);
        halfStar.hidden = isAtHalf;
        if (isAtHalf) index = index + 1;
        value = isAtHalf ? index : index + .5;
        halfStar.at = index;
      } else {
        value = index = index + 1;
      }

      this.setState({
        value: value,
        stars: this.getStars(index)
      });
      this.props.onChange(value);
    }
  }, {
    key: "renderHalfStarStyleElement",
    value: function renderHalfStarStyleElement() {
      var _this$state4 = this.state,
          config = _this$state4.config,
          uniqueness = _this$state4.uniqueness;
      return _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: getHalfStarStyles(config.color2, uniqueness)
        }
      });
    }
  }, {
    key: "renderStars",
    value: function renderStars() {
      var _this2 = this;

      var _this$state5 = this.state,
          halfStar = _this$state5.halfStar,
          stars = _this$state5.stars,
          uniqueness = _this$state5.uniqueness,
          config = _this$state5.config;
      var color1 = config.color1,
          color2 = config.color2,
          size = config.size,
          char = config.char,
          half = config.half,
          edit = config.edit;
      return stars.map(function (star, i) {
        var starClass = '';

        if (half && !halfStar.hidden && halfStar.at === i) {
          starClass = "stars-rating-".concat(uniqueness);
        }

        var style = _extends({}, defaultStyles, {
          color: star.active ? color2 : color1,
          cursor: edit ? 'pointer' : 'default',
          fontSize: "".concat(size, "px")
        });

        return _react.default.createElement("span", {
          className: starClass,
          style: style,
          key: i,
          "data-index": i,
          "data-forhalf": char,
          onMouseOver: _this2.mouseOver.bind(_this2),
          onMouseMove: _this2.mouseOver.bind(_this2),
          onMouseLeave: _this2.mouseLeave.bind(_this2),
          onClick: _this2.clicked.bind(_this2)
        }, char);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      return _react.default.createElement("div", {
        className: className,
        style: parentStyles
      }, this.state.config.half ? this.renderHalfStarStyleElement() : '', this.renderStars());
    }
  }]);

  return StarsRating;
}(_react.Component);

StarsRating.propTypes = {
  className: _propTypes.default.string,
  edit: _propTypes.default.bool,
  half: _propTypes.default.bool,
  value: _propTypes.default.number,
  count: _propTypes.default.number,
  char: _propTypes.default.string,
  size: _propTypes.default.number,
  color1: _propTypes.default.string,
  color2: _propTypes.default.string
};
StarsRating.defaultProps = {
  edit: true,
  half: true,
  value: 0,
  count: 6,
  char: '★',
  size: 15,
  color1: 'gray',
  color2: '#ffd700',
  onChange: function onChange() {}
};
var _default = StarsRating;
exports.default = _default;