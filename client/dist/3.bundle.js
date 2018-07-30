(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/src/components/dashboard.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/dashboard.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _firebaseConfig = __webpack_require__(/*! ../firebaseConfig.js */ \"./client/src/firebaseConfig.js\");\n\nvar _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_React$Component) {\n  _inherits(Dashboard, _React$Component);\n\n  function Dashboard(props) {\n    _classCallCheck(this, Dashboard);\n\n    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));\n\n    _this.state = {\n      userId: '',\n      addCubeForm: false,\n      cubes: []\n    };\n    return _this;\n  }\n\n  _createClass(Dashboard, [{\n    key: 'addCube',\n    value: function addCube() {\n      _axios2.default.post('/cubes', {\n        userId: this.state.userId,\n        pass: 'testpass',\n        solution: 'Li L Li L',\n        cubeState: 'Random State',\n        etherContractId: 'W.H.O.K.N.O.W.S',\n        title: 'fakeTitle',\n        userMessage: 'THIS IS A FAKE MESSAGE'\n      }).then(function (data) {\n        return console.log(data);\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      _firebaseConfig2.default.auth().onAuthStateChanged(function (user) {\n        _this2.setState({\n          userId: user.uid\n        });\n        _axios2.default.get('/cubes?userId=' + user.uid).then(function (response) {\n          _this2.setState({\n            cubes: response.data\n          });\n        });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'Ether Cube Dashboard'\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          'Your Cubes'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          this.state.cubes.map(function (cube) {\n            return _react2.default.createElement(\n              'li',\n              { key: cube.id },\n              cube.id\n            );\n          })\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              _this3.setState({ addCubeForm: !_this3.state.addCubeForm });\n            } },\n          'Add Cube'\n        ),\n        this.state.addCubeForm ? _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            'let\\'s add a cube'\n          ),\n          _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                _this3.addCube();\n              } },\n            'Submit'\n          )\n        ) : ''\n      );\n    }\n  }]);\n\n  return Dashboard;\n}(_react2.default.Component);\n\nexports.default = Dashboard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzeD9lY2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlQ29uZmlnLmpzJztcbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VySWQ6ICcnLFxuICAgICAgYWRkQ3ViZUZvcm06IGZhbHNlLFxuICAgICAgY3ViZXM6IFtdXG4gICAgfVxuICB9XG5cbiAgYWRkQ3ViZSgpIHtcbiAgICBBeGlvcy5wb3N0KCcvY3ViZXMnLCB7XG4gICAgICB1c2VySWQ6IHRoaXMuc3RhdGUudXNlcklkLCBcbiAgICAgIHBhc3M6ICd0ZXN0cGFzcycsXG4gICAgICBzb2x1dGlvbjogJ0xpIEwgTGkgTCcsIFxuICAgICAgY3ViZVN0YXRlOiAnUmFuZG9tIFN0YXRlJywgXG4gICAgICBldGhlckNvbnRyYWN0SWQ6ICdXLkguTy5LLk4uTy5XLlMnLFxuICAgICAgdGl0bGU6ICdmYWtlVGl0bGUnLFxuICAgICAgdXNlck1lc3NhZ2U6ICdUSElTIElTIEEgRkFLRSBNRVNTQUdFJ1xuICAgIH0pLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VySWQ6IHVzZXIudWlkXG4gICAgICB9KTtcbiAgICAgIEF4aW9zLmdldChgL2N1YmVzP3VzZXJJZD0ke3VzZXIudWlkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGN1YmVzOiByZXNwb25zZS5kYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FdGhlciBDdWJlIERhc2hib2FyZDwvaDE+XG4gICAgICAgIDxkaXY+WW91ciBDdWJlczwvZGl2PlxuICAgICAgICA8dWw+IFxuICAgICAgICAgIHt0aGlzLnN0YXRlLmN1YmVzLm1hcCgoY3ViZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuKDxsaSBrZXkgPSB7Y3ViZS5pZH0+e2N1YmUuaWR9PC9saT4pO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4ge3RoaXMuc2V0U3RhdGUoe2FkZEN1YmVGb3JtOiAhdGhpcy5zdGF0ZS5hZGRDdWJlRm9ybX0pfX0+QWRkIEN1YmU8L2J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUuYWRkQ3ViZUZvcm0gPyBcbiAgICAgICAgPGRpdj4gXG4gICAgICAgICAgPGRpdj5sZXQncyBhZGQgYSBjdWJlPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IHt0aGlzLmFkZEN1YmUoKX19PlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQU9BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBUUE7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVkE7QUFpQkE7Ozs7QUF0REE7QUFDQTtBQXdEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/dashboard.jsx\n");

/***/ }),

/***/ "./client/src/firebaseConfig.js":
/*!**************************************!*\
  !*** ./client/src/firebaseConfig.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _firebase = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.cjs.js\");\n\nvar firebase = _interopRequireWildcard(_firebase);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar config = {\n  apiKey: \"AIzaSyCv5PskVEXnR7FHNj0faz-wIOezT8OvW-I\",\n  authDomain: \"ether-cube.firebaseapp.com\",\n  databaseURL: \"https://ether-cube.firebaseio.com\",\n  projectId: \"ether-cube\",\n  storageBucket: \"ether-cube.appspot.com\",\n  messagingSenderId: \"688509177020\"\n};\n\nfirebase.initializeApp(config);\n\nexports.default = firebase;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2ZpcmViYXNlQ29uZmlnLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvZmlyZWJhc2VDb25maWcuanM/YTY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5cbnZhciBjb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDdjVQc2tWRVhuUjdGSE5qMGZhei13SU9lelQ4T3ZXLUlcIixcbiAgYXV0aERvbWFpbjogXCJldGhlci1jdWJlLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2V0aGVyLWN1YmUuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcImV0aGVyLWN1YmVcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJldGhlci1jdWJlLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY4ODUwOTE3NzAyMFwiXG59O1xuXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xuXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/firebaseConfig.js\n");

/***/ })

}]);