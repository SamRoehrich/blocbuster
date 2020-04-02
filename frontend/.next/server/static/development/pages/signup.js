module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CreateTeam.js":
/*!**********************************!*\
  !*** ./components/CreateTeam.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_styled_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/styled/Button */ "./components/styled/Button.js");
var _jsxFileName = "/Users/sam/Desktop/playground/blocBuster/frontend/components/CreateTeam.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SignupForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CreateTeam = () => {
  return __jsx(SignupForm, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Create a team"), __jsx(_components_styled_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "Create Team!"));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateTeam);

/***/ }),

/***/ "./components/Signup.js":
/*!******************************!*\
  !*** ./components/Signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_querys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/querys */ "./lib/querys.js");
/* harmony import */ var _components_styled_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styled/Button */ "./components/styled/Button.js");
var _jsxFileName = "/Users/sam/Desktop/playground/blocBuster/frontend/components/Signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//this component controlls the signup for any athlete or coach
//arguments: fullName, email, password, team, keys





const SignupForm = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.form`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input`
    width: 80%;
    font-size: 1.8rem;
    cursor: pointer;

    &:active {
        text-decoration: none;
    }
`;

const Signup = () => {
  const {
    loading,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_lib_querys__WEBPACK_IMPORTED_MODULE_3__["ALL_TEAMS_QUERY"]);
  const {
    0: fullName,
    1: setFullName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: dob,
    1: setDob
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: teamId,
    1: setTeamId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: teamKey,
    1: setTeamKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: coachKey,
    1: setCoachKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    getAllTeams
  } = data;
  return __jsx(SignupForm, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Join your team"), __jsx("select", {
    name: "team",
    onChange: setTeamId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, getAllTeams.map(team => __jsx("option", {
    key: team.id,
    value: team.teamId,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, team.teamName))), __jsx(Input, {
    value: fullName,
    onChange: e => setFullName(e.target.value),
    type: "text",
    placeholder: "Full Name",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: email,
    onChange: e => setEmail(e.target.value),
    type: "email",
    placeholder: "Email Address",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: dob,
    onChange: e => setDob(e.target.value),
    type: "text",
    placeholder: "Date of Birth (mm/dd/yyyy)",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: phoneNumber,
    onChange: e => setPhoneNumber(e.target.value),
    type: "text",
    placeholder: "Phone number (xxx-xxx-xxxx)",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: password,
    onChange: e => setPassword(e.target.value),
    type: "password",
    placeholder: "Enter password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: confirmPassword,
    onChange: e => setConfirmPassword(e.target.value),
    type: "password",
    placeholder: "Confirm password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: teamKey,
    onChange: e => setTeamKey(e.target.value),
    type: "text",
    placeholder: "Enter Team Key",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }), __jsx(Input, {
    value: coachKey,
    onChange: e => setCoachKey(e.target.value),
    type: "text",
    placeholder: "Enter the coach key (Optional: Requried for coaches to get proper access)",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx(_components_styled_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "Sign up!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./components/styled/Button.js":
/*!*************************************!*\
  !*** ./components/styled/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
    width: 20%; 
    background: white;
    color: blue;
    margin: 0 auto;
    font-size: 2rem;
    border: 1px solid blue;
    z-index: 2;

    &:active {
        text-decoration: none;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./lib/querys.js":
/*!***********************!*\
  !*** ./lib/querys.js ***!
  \***********************/
/*! exports provided: ALL_TEAMS_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_TEAMS_QUERY", function() { return ALL_TEAMS_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ALL_TEAMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query ALL_TEAMS_QUERY{
        getAllTeams {
            teamName
            id
        }
    }
`;

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Signup */ "./components/Signup.js");
/* harmony import */ var _components_CreateTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateTeam */ "./components/CreateTeam.js");
var _jsxFileName = "/Users/sam/Desktop/playground/blocBuster/frontend/pages/signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//this page allows users to either sign up to an existing team
//or create a new team
//layout
//2 buttons to toggle which form is shown




const SignupPageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    border: 1px solid black;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display: flex;
    flex-direction: row;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
    background-color: blue;
    border-radius: 10px;
    height: 50px;
    width: 100px;
`;

const SignupPage = () => {
  const {
    0: createTeamButtonActive,
    1: setCreateTeamButtonActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(SignupPageContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(ButtonContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(Button, {
    onClick: () => setCreateTeamButtonActive(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Join your team"), __jsx(Button, {
    onClick: () => setCreateTeamButtonActive(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Create a team")), !createTeamButtonActive ? __jsx(_components_Signup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 43
    }
  }) : __jsx(_components_CreateTeam__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 56
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SignupPage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam/Desktop/playground/blocBuster/frontend/pages/signup.js */"./pages/signup.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map