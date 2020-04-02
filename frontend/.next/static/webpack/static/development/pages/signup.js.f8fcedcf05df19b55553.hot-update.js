webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/Signup.js":
/*!******************************!*\
  !*** ./components/Signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_querys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/querys */ "./lib/querys.js");
/* harmony import */ var _components_styled_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styled/Button */ "./components/styled/Button.js");


var _this = undefined,
    _jsxFileName = "/Users/sam/Desktop/playground/blocBuster/frontend/components/Signup.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 80%;\n    font-size: 1.8rem;\n    cursor: pointer;\n\n    &:active {\n        text-decoration: none;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 90vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//this component controlls the signup for any athlete or coach
//arguments: fullName, email, password, team, keys





var SignupForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form(_templateObject());
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input(_templateObject2());

var Signup = function Signup() {
  //const { loading, data } = useQuery(ALL_TEAMS_QUERY)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      fullName = _useState[0],
      setFullName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      confirmPassword = _useState4[0],
      setConfirmPassword = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      phoneNumber = _useState5[0],
      setPhoneNumber = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      dob = _useState6[0],
      setDob = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      teamId = _useState7[0],
      setTeamId = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      teamKey = _useState8[0],
      setTeamKey = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      coachKey = _useState9[0],
      setCoachKey = _useState9[1]; //console.log(data)


  return __jsx(SignupForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Join your team"), __jsx(Input, {
    value: fullName,
    onChange: function onChange(e) {
      return setFullName(e.target.value);
    },
    type: "text",
    placeholder: "Full Name",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    type: "email",
    placeholder: "Email Address",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: dob,
    onChange: function onChange(e) {
      return setDob(e.target.value);
    },
    type: "text",
    placeholder: "Date of Birth (mm/dd/yyyy)",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: phoneNumber,
    onChange: function onChange(e) {
      return setPhoneNumber(e.target.value);
    },
    type: "text",
    placeholder: "Phone number (xxx-xxx-xxxx)",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    type: "password",
    placeholder: "Enter password",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: confirmPassword,
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value);
    },
    type: "password",
    placeholder: "Confirm password",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: teamKey,
    onChange: function onChange(e) {
      return setTeamKey(e.target.value);
    },
    type: "text",
    placeholder: "Enter Team Key",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: coachKey,
    onChange: function onChange(e) {
      return setCoachKey(e.target.value);
    },
    type: "text",
    placeholder: "Enter the coach key (Optional: Requried for coaches to get proper access)",
    required: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx(_components_styled_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Sign up!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ })

})
//# sourceMappingURL=signup.js.f8fcedcf05df19b55553.hot-update.js.map