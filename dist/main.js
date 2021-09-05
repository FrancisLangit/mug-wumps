/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Open Sans Bold.ttf */ \"./src/assets/Open Sans Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Open Sans Regular.ttf */ \"./src/assets/Open Sans Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Open Sans Light.ttf */ \"./src/assets/Open Sans Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header {\\n  margin-top: 50px;\\n}\\n.header > div, .header a {\\n  color: white;\\n}\\n.header-text {\\n  font-family: \\\"Open Sans Bold\\\";\\n  font-size: 50px;\\n}\\n.header-text:hover {\\n  text-decoration: none;\\n}\\n.header-subtext {\\n  font-family: \\\"Open Sans Regular\\\";\\n  font-size: 20px;\\n}\\n.header-link {\\n  font-family: \\\"Open Sans Light\\\";\\n  font-size: 15px;\\n  text-decoration: none;\\n}\\n.header-link:hover {\\n  text-decoration: underline;\\n}\\n.header-links {\\n  margin-top: 10px;\\n}\\n\\n.play-area {\\n  margin-top: 30px;\\n}\\n\\n.controls {\\n  display: inline-block;\\n  margin: 20px auto 10px auto;\\n  padding: 10px 5px;\\n  border: 1px dashed white;\\n  border-radius: 10px;\\n  text-align: center;\\n}\\n\\n.footer {\\n  display: block;\\n  margin: 50px auto;\\n  padding: 10px;\\n  width: 225px;\\n  border-bottom: 1px dotted grey;\\n}\\n.footer-text {\\n  color: white;\\n  font-size: 20px;\\n  font-family: \\\"Open Sans Bold\\\";\\n}\\n.footer-subtext {\\n  color: snow;\\n  font-size: 12px;\\n  font-family: \\\"Open Sans Light\\\";\\n}\\n\\n.button {\\n  display: inline-block;\\n  margin: 0 5px;\\n  padding: 5px 10px;\\n  border: 1px solid white;\\n  border-radius: 5px;\\n  color: white;\\n  font-family: \\\"Open Sans Regular\\\";\\n  font-size: 12px;\\n  cursor: pointer;\\n  user-select: none;\\n  transition: all 0.25s;\\n}\\n.button:hover {\\n  background: white;\\n  color: black;\\n}\\n\\n.cell {\\n  width: 30px;\\n  height: 30px;\\n  border: 0.5px solid white;\\n}\\n.cell-computer:hover {\\n  background-color: rgba(125, 125, 125, 0.5);\\n  cursor: pointer;\\n}\\n.cell-hit {\\n  background-color: red;\\n}\\n.cell-miss {\\n  background-color: lime;\\n}\\n.cell-ship {\\n  background-color: white;\\n}\\n.cell-hit, .cell-miss, .cell-player {\\n  pointer-events: none;\\n}\\n\\n.gameboard {\\n  display: inline-grid;\\n  grid-template-columns: repeat(10, 30px);\\n  grid-gap: 3px;\\n  margin: 5px 15px;\\n}\\n.gameboard-inactive div {\\n  border: 0.5px solid #414141;\\n  pointer-events: none;\\n}\\n\\n.modal {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  padding-top: 100px;\\n  background: rgba(0, 0, 0, 0.8);\\n  font-family: \\\"Open Sans Regular\\\";\\n  font-size: 20px;\\n  overflow: auto;\\n  z-index: 1;\\n}\\n.modal-content {\\n  width: 200px;\\n  margin: auto;\\n  padding: 20px;\\n  background: black;\\n  border: 1px solid white;\\n  border-radius: 12px;\\n  color: white;\\n  text-align: center;\\n}\\n.modal-text {\\n  margin-bottom: 15px;\\n}\\n.modal-subtext {\\n  color: lightgrey;\\n  font-family: \\\"Open Sans Regular\\\";\\n  font-size: 15px;\\n}\\n\\n@font-face {\\n  font-family: \\\"Open Sans Bold\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n@font-face {\\n  font-family: \\\"Open Sans Regular\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n@font-face {\\n  font-family: \\\"Open Sans Light\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n}\\nbody {\\n  background-color: black;\\n  text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _scripts_UserInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/UserInterface */ \"./src/scripts/UserInterface.js\");\n\n\n\n_scripts_UserInterface__WEBPACK_IMPORTED_MODULE_1__.UserInterface.update();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _objects_Computer_Computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects/Computer/Computer */ \"./src/scripts/objects/Computer/Computer.js\");\n/* harmony import */ var _objects_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/Gameboard/Gameboard */ \"./src/scripts/objects/Gameboard/Gameboard.js\");\n/* harmony import */ var _objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/GameState/GameState */ \"./src/scripts/objects/GameState/GameState.js\");\n/* harmony import */ var _objects_Player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/Player/Player */ \"./src/scripts/objects/Player/Player.js\");\n/* harmony import */ var _UserInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserInterface */ \"./src/scripts/UserInterface.js\");\n\n\n\n\n\n\n\n/**\n * Module holding the objects of the application.\n * \n * @module Game\n */\nconst Game = (() => {\n    let playerGameboard = (0,_objects_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(true);\n    let computerGameboard = (0,_objects_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(true);\n\n    let player = (0,_objects_Player_Player__WEBPACK_IMPORTED_MODULE_3__.Player)(computerGameboard);\n    let computer = (0,_objects_Computer_Computer__WEBPACK_IMPORTED_MODULE_0__.Computer)(playerGameboard);\n\n    /**\n     * Stops the game.\n     * \n     * @memberof module:Game\n     */\n     const _stop = () => {\n        _objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_2__.GameState.stop();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_4__.UserInterface.update();\n    }\n\n    /**\n     * Checks if someone won the game and renders such effect accordingly.\n     * \n     * @memberof module:Game\n     */\n    const _checkWinner = () => {\n        const isPlayerWon = computerGameboard.isShipsSunk();\n        const isComputerWon = playerGameboard.isShipsSunk();\n        if (isPlayerWon || isComputerWon) {\n            _UserInterface__WEBPACK_IMPORTED_MODULE_4__.UserInterface.displayWinner(isComputerWon);\n            _stop();\n        }\n    }\n\n    /**\n     * Runs a turn of the game, whereby the Player and Computer make moves to\n     * attack each other.\n     * \n     * @memberof module:Game\n     * \n     * @param {int} playerAttackX X-coordinate of Player's attack.\n     * @param {int} playerAttackY Y-coordinate of Player's attack.\n     */\n    const runTurn = (playerAttackX, playerAttackY) => {\n        computerGameboard.receiveAttack(playerAttackX, playerAttackY);\n        _UserInterface__WEBPACK_IMPORTED_MODULE_4__.UserInterface.update(true);\n        _checkWinner();\n        if (_objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_2__.GameState.isRunning()) {\n            computer.makeRandomAttack();\n            setTimeout(_UserInterface__WEBPACK_IMPORTED_MODULE_4__.UserInterface.update, 500);\n            _checkWinner();\n        }\n    }\n\n    /**\n     * Stops the game and updates all objects to initial settings.\n     * \n     * @memberof module:Game\n     */\n    const reset = () => {\n        _objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_2__.GameState.stop();\n        playerGameboard.reset();\n        computerGameboard.reset();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_4__.UserInterface.startButton.show();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_4__.UserInterface.randomizeButton.show();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_4__.UserInterface.update();\n    }\n\n    return { \n        playerGameboard, \n        computerGameboard,\n        player, \n        computer,\n\n        runTurn,\n        reset,\n    }\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/Game.js?");

/***/ }),

/***/ "./src/scripts/UserInterface.js":
/*!**************************************!*\
  !*** ./src/scripts/UserInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserInterface\": () => (/* binding */ UserInterface)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/scripts/Game.js\");\n/* harmony import */ var _displays_buttons_RandomizeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displays/buttons/RandomizeButton */ \"./src/scripts/displays/buttons/RandomizeButton.js\");\n/* harmony import */ var _displays_buttons_RestartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displays/buttons/RestartButton */ \"./src/scripts/displays/buttons/RestartButton.js\");\n/* harmony import */ var _displays_buttons_StartButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displays/buttons/StartButton */ \"./src/scripts/displays/buttons/StartButton.js\");\n/* harmony import */ var _displays_gameboards_PlayArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displays/gameboards/PlayArea */ \"./src/scripts/displays/gameboards/PlayArea.js\");\n/* harmony import */ var _displays_modals_RestartModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displays/modals/RestartModal */ \"./src/scripts/displays/modals/RestartModal.js\");\n/* harmony import */ var _displays_modals_WinnerModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displays/modals/WinnerModal */ \"./src/scripts/displays/modals/WinnerModal.js\");\n/* harmony import */ var _displays_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displays/Header */ \"./src/scripts/displays/Header.js\");\n/* harmony import */ var _displays_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displays/Footer */ \"./src/scripts/displays/Footer.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Module holding methods that update the user interface.\n * \n * @module UserInterface\n */\nconst UserInterface = (() => {\n    const root = document.getElementById('root');\n\n    const startButton = (0,_displays_buttons_StartButton__WEBPACK_IMPORTED_MODULE_3__.StartButton)();\n    const randomizeButton = (0,_displays_buttons_RandomizeButton__WEBPACK_IMPORTED_MODULE_1__.RandomizeButton)(_Game__WEBPACK_IMPORTED_MODULE_0__.Game.playerGameboard);\n    const restartButton = (0,_displays_buttons_RestartButton__WEBPACK_IMPORTED_MODULE_2__.RestartButton)();\n\n    const restartModal = (0,_displays_modals_RestartModal__WEBPACK_IMPORTED_MODULE_5__.RestartModal)();\n    const winnerModal = (0,_displays_modals_WinnerModal__WEBPACK_IMPORTED_MODULE_6__.WinnerModal)();\n\n    /**\n     * Returns `div` with buttons that control the game.\n     * \n     * @returns {HTMLElement}\n     */\n     const _getControls = () => {\n        const controls = document.createElement('div');\n        controls.classList.add('controls');\n        controls.append(\n            startButton.get(),\n            randomizeButton.get(),\n            restartButton.get(),\n        );\n        return controls;\n    }\n\n    /**\n     * Returns `div` holding updated `PlayArea` object.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getPlayArea = (isComputerTurn) => {\n        const playAreaContainer = document.createElement('div');\n        playAreaContainer.classList.add('play-area');\n        playAreaContainer.appendChild((0,_displays_gameboards_PlayArea__WEBPACK_IMPORTED_MODULE_4__.PlayArea)(isComputerTurn));\n        return playAreaContainer;\n    }\n\n    /**\n     * Refreshes the user interface with new displays of game's objects.\n     * \n     * @memberof module:UserInterface\n     */\n    const update = (isComputerTurn) => {\n        root.innerHTML = '';\n        root.append(\n            (0,_displays_Header__WEBPACK_IMPORTED_MODULE_7__.Header)(),\n            _getPlayArea(isComputerTurn),\n            _getControls(), \n            restartModal.get(),\n            winnerModal.get(),\n            (0,_displays_Footer__WEBPACK_IMPORTED_MODULE_8__.Footer)(),\n        );\n    }\n\n    /**\n     * Displays winner of the game.\n     * \n     * @param {boolean} isComputerWon `true` if to display that computer won.\n     */\n    const displayWinner = (isComputerWon) => {\n        winnerModal.update(isComputerWon);\n        winnerModal.show();\n    }\n\n    return { \n        startButton,\n        randomizeButton,\n        restartButton,\n        restartModal,\n        winnerModal,\n    \n        update, \n        displayWinner,\n    }\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/UserInterface.js?");

/***/ }),

/***/ "./src/scripts/displays/Footer.js":
/*!****************************************!*\
  !*** ./src/scripts/displays/Footer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\n/**\n * Returns `div` containing footer section of user interface.\n * \n * @namespace\n * @returns {HTMLElement}\n */\nconst Footer = () => {\n    const footerText = document.createElement('div');\n    footerText.classList.add('footer-text');\n    footerText.textContent = 'MIT License';\n\n    const footerSubtext = document.createElement('div');\n    footerSubtext.classList.add('footer-subtext');\n    footerSubtext.textContent = 'Copyright © 2021 • Francis Langit';\n\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n    footer.append(footerText, footerSubtext);\n\n    return footer;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/Footer.js?");

/***/ }),

/***/ "./src/scripts/displays/Header.js":
/*!****************************************!*\
  !*** ./src/scripts/displays/Header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/**\n * Returns `div` containing header section of interface.\n * \n * @namespace\n * @returns {HTMLElement}\n */\nconst Header = () => {\n    /**\n     * Returns main text of the header.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getText = () => {\n        const headerText = document.createElement('a');\n        headerText.href = (\n            'https://en.wikipedia.org/wiki/Mugwump_(video_game)');\n        headerText.classList.add('header-text');\n        headerText.textContent = 'mug.wumps';\n        return headerText;\n    }\n\n    /**\n     * Returns subtext section of the header.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getSubtext = () => {\n        const headerSubtext = document.createElement('div');\n        headerSubtext.classList.add('header-subtext');\n        headerSubtext.textContent = 'Sighted wump, sank same.';\n        return headerSubtext;\n    }\n\n    /**\n     * \n     * Returns a link to be placed in the header.\n     * \n     * @param {string} href URL of the link. \n     * @param {string} text Placeholder text the link.\n     * @returns {HTMLElement}\n     */\n    const _getLink = (href, text) => {\n        const link = document.createElement('a');\n        link.href = href;\n        link.textContent = text;\n        link.classList.add('header-link');\n        return link;\n    }\n\n    /**\n     * Returns section holding links of the header.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getLinksSection = () => {\n        const aboutLink = _getLink(\n            'http://github.com/FrancisLangit/mug-wumps', 'About');\n        const authorLink = _getLink(\n            'http://github.com/FrancisLangit', 'Author');\n        const headerLinks = document.createElement('div');\n        headerLinks.classList.add('header-links')\n        headerLinks.append(aboutLink, ' • ', authorLink);\n        return headerLinks;\n    }\n\n    const header = document.createElement('div');\n    header.classList.add('header');\n    header.append(_getText(), _getSubtext(), _getLinksSection());\n    \n    return header;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/Header.js?");

/***/ }),

/***/ "./src/scripts/displays/ShowHideElement.js":
/*!*************************************************!*\
  !*** ./src/scripts/displays/ShowHideElement.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShowHideElement\": () => (/* binding */ ShowHideElement)\n/* harmony export */ });\n/**\n * Returns object representing `HTMLElement` that can be shown and hidden.\n * \n * @namespace\n * @returns {Object}\n */\nconst ShowHideElement = () => {\n    const showHideElement = document.createElement('div');\n\n    /**\n     * Returns object's `HTMLElement`.\n     * \n     * @returns {HTMLElement}\n     */\n    const get = () => {\n        return showHideElement;\n    }\n\n    /**\n     * Hides the object.\n     */\n    const hide = () => {\n        showHideElement.style.display = 'none';\n    }\n\n    /**\n     * Shows the object if it was hidden.\n     */\n    const show = () => {\n        showHideElement.style.display = 'inline-block';\n    }\n    \n    return {\n        get,\n        hide,\n        show,\n    };\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/ShowHideElement.js?");

/***/ }),

/***/ "./src/scripts/displays/buttons/Button.js":
/*!************************************************!*\
  !*** ./src/scripts/displays/buttons/Button.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _ShowHideElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShowHideElement */ \"./src/scripts/displays/ShowHideElement.js\");\n\n\n\n/**\n * Returns an object representing a button.\n * \n * @namespace\n * @param {string} text Text to be displayed in button.\n * @param {Function} callback Callback function called when button clicked.\n * @param {boolean} isLink `true` if button to be styled as link.\n * @returns {Object}\n */\nconst Button = (text, callback) => {\n    const { get, hide, show } = (0,_ShowHideElement__WEBPACK_IMPORTED_MODULE_0__.ShowHideElement)();\n    \n    const button = get();\n    button.textContent = text;\n    button.classList.add('button');\n    button.addEventListener('click', callback);\n\n    return {\n        get,\n        hide,\n        show,\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/buttons/Button.js?");

/***/ }),

/***/ "./src/scripts/displays/buttons/RandomizeButton.js":
/*!*********************************************************!*\
  !*** ./src/scripts/displays/buttons/RandomizeButton.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RandomizeButton\": () => (/* binding */ RandomizeButton)\n/* harmony export */ });\n/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.js */ \"./src/scripts/displays/buttons/Button.js\");\n/* harmony import */ var _UserInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UserInterface */ \"./src/scripts/UserInterface.js\");\n\n\n\n\n/**\n * Returns `Button` object that re-randomizes a `Gameboard` object.\n * \n * @namespace\n * \n * @param {Object} gameboard Gameboard that button will be randomizing.\n * @returns {Object}\n */\nconst RandomizeButton = (gameboard) => {\n    return (0,_Button_js__WEBPACK_IMPORTED_MODULE_0__.Button)('Randomize', () => {\n        gameboard.reset();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_1__.UserInterface.update();\n    });\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/buttons/RandomizeButton.js?");

/***/ }),

/***/ "./src/scripts/displays/buttons/RestartButton.js":
/*!*******************************************************!*\
  !*** ./src/scripts/displays/buttons/RestartButton.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RestartButton\": () => (/* binding */ RestartButton)\n/* harmony export */ });\n/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.js */ \"./src/scripts/displays/buttons/Button.js\");\n/* harmony import */ var _UserInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UserInterface.js */ \"./src/scripts/UserInterface.js\");\n\n\n\n\n/**\n * Returns button that resets the game to initial setings.\n * \n * @namespace\n * @returns {HTMLElement} \n */\nconst RestartButton = () => {\n    /**\n     * Resests the game and hides the Restart button.\n     */\n    const restartGame = () => {\n        _UserInterface_js__WEBPACK_IMPORTED_MODULE_1__.UserInterface.restartModal.show();\n    }\n    \n    const restartButton = (0,_Button_js__WEBPACK_IMPORTED_MODULE_0__.Button)('Restart', restartGame);\n    restartButton.hide(); // Restart button is hidden initially.\n\n    return restartButton;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/buttons/RestartButton.js?");

/***/ }),

/***/ "./src/scripts/displays/buttons/StartButton.js":
/*!*****************************************************!*\
  !*** ./src/scripts/displays/buttons/StartButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StartButton\": () => (/* binding */ StartButton)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/scripts/displays/buttons/Button.js\");\n/* harmony import */ var _objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../objects/GameState/GameState */ \"./src/scripts/objects/GameState/GameState.js\");\n/* harmony import */ var _UserInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UserInterface */ \"./src/scripts/UserInterface.js\");\n\n\n\n\n\n/**\n * Returns `Button` object that starts the game.\n * \n * @namespace\n * \n * @returns {Object}\n */\nconst StartButton = () => {\n    /**\n     * Hides Start and Randomize buttons, shows restart button, starts the\n     * game, and updates the user interface.\n     */\n    const _startGame = () => {\n        startButton.hide();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.randomizeButton.hide();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.restartButton.show();\n        _objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_1__.GameState.start();\n        _UserInterface__WEBPACK_IMPORTED_MODULE_2__.UserInterface.update();\n    }\n    \n    const startButton = (0,_Button__WEBPACK_IMPORTED_MODULE_0__.Button)('Start', _startGame);\n    return startButton;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/buttons/StartButton.js?");

/***/ }),

/***/ "./src/scripts/displays/gameboards/GameboardCellDisplay.js":
/*!*****************************************************************!*\
  !*** ./src/scripts/displays/gameboards/GameboardCellDisplay.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameboardCellDisplay\": () => (/* binding */ GameboardCellDisplay)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Game */ \"./src/scripts/Game.js\");\n\n\n\n/**\n * Returns a styled `div` representing a gameboard cell.\n * \n * @namespace\n * @param {int} x Coordinate of cell on x-axis of gameboard.\n * @param {int} y Coordinate of cell on y-axis of gameboard.\n * @param {Object} gameboard Parent `Gameboard` object of cell to render.\n * @param {boolean} isComputer `true` if parent `Gameboard` is computer's.\n * @returns {HTMLElement}\n */\nconst GameboardCellDisplay = (x, y, gameboard, isComputer) => {\n    /**\n     * Returns array of the cell's CSS classes in strings.\n     * \n     * @returns {Array}\n     */\n    const _getClasses = () => {\n        let classes = ['cell'];\n\n        if (isComputer) {\n            classes.push('cell-computer');\n        } else {\n            classes.push('cell-player');\n        }\n\n        if (gameboard.isPositionMiss(x, y)) {\n            classes.push('cell-miss');\n        } else if (gameboard.isPositionShip(x, y, true)) {\n            classes.push('cell-hit');\n        } else if (gameboard.isPositionShip(x, y) && !isComputer) {\n            classes.push('cell-ship');\n        }\n\n        return classes;\n    }\n\n    /**\n     * Renders a turn of the game given attack of user on cell.\n     */\n    const _renderTurn = () => {\n        _Game__WEBPACK_IMPORTED_MODULE_0__.Game.runTurn(x, y);\n    }\n\n    let cell = document.createElement('div');\n    cell.classList.add(..._getClasses());\n    cell.addEventListener('click', _renderTurn);\n\n    return cell;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/gameboards/GameboardCellDisplay.js?");

/***/ }),

/***/ "./src/scripts/displays/gameboards/GameboardDisplay.js":
/*!*************************************************************!*\
  !*** ./src/scripts/displays/gameboards/GameboardDisplay.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameboardDisplay\": () => (/* binding */ GameboardDisplay)\n/* harmony export */ });\n/* harmony import */ var _GameboardCellDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardCellDisplay */ \"./src/scripts/displays/gameboards/GameboardCellDisplay.js\");\n\n\n\n/**\n * Returns an object representing a rendered Gameboard.\n * \n * @namespace\n * @param {Object} gameboard `Gameboard` object to render.\n * @param {boolean} isInactive `true` if to be rendered as unclickable.\n * @param {boolean} isComputer `true` if `Gameboard` object is computer's.\n * @returns {Object}\n */\nconst GameboardDisplay = (gameboard, isInactive, isComputer) => {\n    let element = document.createElement('div');\n\n    /**\n     * Returns a styled `div` representing a gameboard cell.\n     * \n     * @param {int} x X-coordinate of the cell.\n     * @param {int} y Y-coordinate of the cell.\n     * @returns {HTMLElement}\n     */\n    const _getCell = (x, y) => {\n        return (0,_GameboardCellDisplay__WEBPACK_IMPORTED_MODULE_0__.GameboardCellDisplay)(x, y, gameboard, isComputer);\n    }\n\n    /**\n     * Fills up the gameboard's grid `div` with its cells.\n     */\n    const _fill = () => {\n        for (let y = 0; y < 10; y++) {\n            for (let x = 0; x < 10; x++) {\n                element.append(_getCell(x, y));\n            }\n        };\n    }\n\n    /**\n     * Adds respective classes to the gameboard's display.\n     */\n    const _style = () => {\n        element.classList.add('gameboard');\n        if (isInactive) {\n            element.classList.add('gameboard-inactive');\n        }\n    }\n\n    _fill();\n    _style();\n\n    return element;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/gameboards/GameboardDisplay.js?");

/***/ }),

/***/ "./src/scripts/displays/gameboards/PlayArea.js":
/*!*****************************************************!*\
  !*** ./src/scripts/displays/gameboards/PlayArea.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayArea\": () => (/* binding */ PlayArea)\n/* harmony export */ });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Game */ \"./src/scripts/Game.js\");\n/* harmony import */ var _GameboardDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameboardDisplay */ \"./src/scripts/displays/gameboards/GameboardDisplay.js\");\n/* harmony import */ var _objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/GameState/GameState */ \"./src/scripts/objects/GameState/GameState.js\");\n\n\n\n\n\n/**\n * Returns a `div` containing both of the game's Gameboard interfaces.\n * \n * @namespace\n * @param {boolean} isComputerTurn `true` if current turn is computer's.\n * @returns {HTMLElement}\n */\nconst PlayArea = (isComputerTurn) => {\n    // Destructured Game object for shorter lines.\n    let { playerGameboard, computerGameboard } = _Game__WEBPACK_IMPORTED_MODULE_0__.Game;\n\n    /**\n     * Returns `isInactive` argument to a `GameboardDisplay` call.\n     * \n     * @param {*} isComputer `true` if state to be returned is computer's.\n     * @returns {boolean}\n     */\n    const _getIsInactive = (isComputer) => {\n        if (_objects_GameState_GameState__WEBPACK_IMPORTED_MODULE_2__.GameState.isRunning()) {\n            if (isComputer) {\n                return isComputerTurn ? true : false;\n            }\n            return isComputerTurn ? false : true;\n            }\n        return true;\n    }\n    \n    /**\n     * Returns `div` holding display of both user and computer gameboard.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getGameboards = () => {\n        const gameboards = document.createElement('div');\n        gameboards.append(\n            (0,_GameboardDisplay__WEBPACK_IMPORTED_MODULE_1__.GameboardDisplay)(playerGameboard, _getIsInactive(), false),\n            (0,_GameboardDisplay__WEBPACK_IMPORTED_MODULE_1__.GameboardDisplay)(computerGameboard, _getIsInactive(true), true),\n        );\n        return gameboards;\n    }\n\n    return _getGameboards();\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/gameboards/PlayArea.js?");

/***/ }),

/***/ "./src/scripts/displays/modals/RestartModal.js":
/*!*****************************************************!*\
  !*** ./src/scripts/displays/modals/RestartModal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RestartModal\": () => (/* binding */ RestartModal)\n/* harmony export */ });\n/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buttons/Button */ \"./src/scripts/displays/buttons/Button.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Game */ \"./src/scripts/Game.js\");\n/* harmony import */ var _ShowHideElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ShowHideElement */ \"./src/scripts/displays/ShowHideElement.js\");\n/* harmony import */ var _UserInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UserInterface */ \"./src/scripts/UserInterface.js\");\n\n\n\n\n\n\n/**\n * Returns `ShowHideElement` of a modal prompting user to restart game.\n * \n * @namespace\n * @returns {Object}\n */\nconst RestartModal = () => {\n    // Create hidden ShowHideElement.\n    const { get, hide, show } = (0,_ShowHideElement__WEBPACK_IMPORTED_MODULE_2__.ShowHideElement)();\n    hide();\n\n    /**\n     * Returns `div` holding text of modal.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getText = () => {\n        const textContainer = document.createElement('div');\n        textContainer.textContent = `Restart? This game will be lost.`;\n        textContainer.classList.add('modal-text');\n        return textContainer;\n    }\n\n    /**\n     * Returns \"Yes\" button that resets the game and user interface.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getYesButton = () => {\n        const yesButton = (0,_buttons_Button__WEBPACK_IMPORTED_MODULE_0__.Button)('Yes', () => {\n            _Game__WEBPACK_IMPORTED_MODULE_1__.Game.reset();\n            _UserInterface__WEBPACK_IMPORTED_MODULE_3__.UserInterface.restartButton.hide();\n            _UserInterface__WEBPACK_IMPORTED_MODULE_3__.UserInterface.winnerModal.hide();\n            hide();\n        });\n        return yesButton.get();\n    }\n\n    /**\n     * Returns \"Cancel\" button that closes the modal.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getCancelButton = () => {\n        return (0,_buttons_Button__WEBPACK_IMPORTED_MODULE_0__.Button)('Cancel', hide).get();\n    }\n\n    /**\n     * Returns `div` holding contents of modal.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getContent = () => {\n        const content = document.createElement('div');\n        content.classList.add('modal-content');\n        content.append(\n            _getText(),\n            _getYesButton(),\n            _getCancelButton(),\n        )\n        return content;\n    }\n\n    const modal = get();\n    modal.append(_getContent());\n    modal.classList.add('modal', 'restart-modal');\n\n    return {\n        get,\n        hide,\n        show,\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/modals/RestartModal.js?");

/***/ }),

/***/ "./src/scripts/displays/modals/WinnerModal.js":
/*!****************************************************!*\
  !*** ./src/scripts/displays/modals/WinnerModal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WinnerModal\": () => (/* binding */ WinnerModal)\n/* harmony export */ });\n/* harmony import */ var _buttons_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../buttons/Button */ \"./src/scripts/displays/buttons/Button.js\");\n/* harmony import */ var _ShowHideElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ShowHideElement */ \"./src/scripts/displays/ShowHideElement.js\");\n\n \n\n/**\n * Returns `ShowHideElement` of a modal showing winner of the game.\n * \n * @namespace\n * @returns {Object}\n */\nconst WinnerModal = () => {\n    let computerWon;\n\n    // Create hidden ShowHideElement.\n    const { get, hide, show } = (0,_ShowHideElement__WEBPACK_IMPORTED_MODULE_1__.ShowHideElement)();\n    hide();\n\n    // Style modal.\n    get().classList.add('modal');\n\n    /**\n     * Returns `div` holding sub-text of modal.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getSubText = () => {\n        const subText = document.createElement('div');\n        subText.classList.add('modal-subtext');\n        if (computerWon) {\n            subText.textContent = 'Try again next time.';\n        } else {\n            subText.textContent = 'Mission accomplished.';\n        }\n        return subText;\n    }\n\n    /**\n     * Returns `div` holding text of modal displaying winner.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getWinnerText = () => {\n        const winnerText = document.createElement('div');\n        if (computerWon) {\n            winnerText.textContent = 'You lost.';\n        } else {\n            winnerText.textContent = 'You win!';\n        }\n        return winnerText;\n    }\n\n    /**\n     * Returns `div` containing text of the modal.\n     */\n    const _getText = () => {\n        const modalText = document.createElement('div');\n        modalText.classList.add('modal-text');\n        modalText.append(_getWinnerText(), _getSubText());\n        return modalText;\n    }\n\n    /**\n     * Returns button that closes the modal.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getCloseButton = () => {\n        return (0,_buttons_Button__WEBPACK_IMPORTED_MODULE_0__.Button)('Close', hide).get();\n    }\n\n    /**\n     * Returns `div` holding contents of modal.\n     * \n     * @returns {HTMLElement}\n     */\n    const _getContent = () => {\n        const content = document.createElement('div');\n        content.classList.add('modal-content');\n        content.append(\n            _getText(), \n            _getCloseButton(),\n        )\n        return content;\n    }\n\n    /**\n     * Updates the object's local `computerWon` boolean and display.\n     * \n     * @param {boolean} isComputerWon `true` if computer won game.\n     */\n    const update = (isComputerWon) => {\n        computerWon = isComputerWon;\n\n        const modal = get();\n        modal.innerHTML = '';\n        modal.appendChild(_getContent());\n    }\n\n    return {\n        get,\n        hide,\n        show,\n\n        update,\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/displays/modals/WinnerModal.js?");

/***/ }),

/***/ "./src/scripts/objects/Computer/Computer.js":
/*!**************************************************!*\
  !*** ./src/scripts/objects/Computer/Computer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Computer\": () => (/* binding */ Computer)\n/* harmony export */ });\n/**\n * Factory function returning `Computer` object capable of random attacks.\n * \n * @namespace\n * @param {Object} enemyGameboard `Gameboard` object of opponent.\n * @returns {Object}\n */\nconst Computer = (enemyGameboard) => {\n    /**\n     * Returns an array of positions that have yet to be hit.\n     * \n     * @returns {Array}\n     */\n    const _getRandomAttackChoices = () => {\n        let randomAttackChoices = [];\n        for (let x = 0; x < 10; x++) {\n            for (let y = 0; y < 10; y++) {\n                const isPosHit = enemyGameboard.isPositionShip(x, y, true);\n                const isPosMiss = enemyGameboard.isPositionMiss(x, y);\n                if (!isPosHit && !isPosMiss) {\n                    randomAttackChoices.push([x, y]);\n                }\n            }\n        }\n        return randomAttackChoices;\n    }\n    \n    /**\n     * Makes a legal random attack on the enemy gameboard.\n     */\n    const makeRandomAttack = () => {\n        const choices = _getRandomAttackChoices();\n        const choiceIndex = Math.floor(Math.random() * choices.length);\n        const choice = choices[choiceIndex];\n        enemyGameboard.receiveAttack(choice[0], choice[1]);\n    }\n\n    return { makeRandomAttack }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/objects/Computer/Computer.js?");

/***/ }),

/***/ "./src/scripts/objects/GameState/GameState.js":
/*!****************************************************!*\
  !*** ./src/scripts/objects/GameState/GameState.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameState\": () => (/* binding */ GameState)\n/* harmony export */ });\n/**\n * Module holding modules that control the running state of the game.\n * \n * @module GameState\n */\nconst GameState = (() => {\n    let running = false;\n\n    /**\n     * Returns the value of GameState's `running` variable.\n     * \n     * @memberof module:GameState\n     */\n    const isRunning = () => {\n        return running;\n    }\n\n    /**\n     * Sets `running` to `true`.\n     * \n     * @memberof module:GameState\n     */\n    const start = () => {\n        running = true;\n    }\n\n    /**\n     * Sets `running` to `false`.\n     * \n     * @memberof module:GameState\n     */\n    const stop = () => {\n        running = false;\n    }\n\n    return { \n        isRunning,\n        start,\n        stop,   \n    }\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/objects/GameState/GameState.js?");

/***/ }),

/***/ "./src/scripts/objects/Gameboard/Gameboard.js":
/*!****************************************************!*\
  !*** ./src/scripts/objects/Gameboard/Gameboard.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship/Ship */ \"./src/scripts/objects/Ship/Ship.js\");\n\n\n\n/**\n * Returns an object representing a gameboard.\n * \n * @namespace\n * @param {boolean} isPrefilled `true` if `Gameboard.ships` to be prefilled.\n * @returns {Object}\n */\nconst Gameboard = (isPrefilled=false) => {\n    /**\n     * Returns an array to contain `Ship` objects of gameboard. Is prefilled\n     * with `Ship` objects if `isPrefilled` argument is `true`.\n     * \n     * @returns {Array}\n     */\n    const _getShips = () => {\n        let ships = [];\n        if (isPrefilled) {\n            ships.push((0,_Ship_Ship__WEBPACK_IMPORTED_MODULE_0__.RandomShip)(5));\n            ships.push((0,_Ship_Ship__WEBPACK_IMPORTED_MODULE_0__.RandomShip)(4));\n            ships.push((0,_Ship_Ship__WEBPACK_IMPORTED_MODULE_0__.RandomShip)(3));\n            ships.push((0,_Ship_Ship__WEBPACK_IMPORTED_MODULE_0__.RandomShip)(3));\n            ships.push((0,_Ship_Ship__WEBPACK_IMPORTED_MODULE_0__.RandomShip)(2));\n        }\n        return ships;\n    }\n\n    /**\n     * Pushes a passed `Ship` object into `ships` array.\n     * \n     * @param {Object} ship `Ship` object to be added to gameboard. \n     */\n    const addShip = (ship) => {\n        ships.push(ship);\n    }\n\n    /**\n     * Receives an attack and renders a hit on a ship or records a miss\n     * dependents on coordinates passed.\n     * \n     * @param {int} x X-coordinate of the attack.\n     * @param {int} y Y-coordinate of the attack.\n     */\n    const receiveAttack = (x, y) => {\n        let isHit = false;\n        ships.forEach((ship) => {\n            ship.getPositions().forEach((position, index) => {   \n                if (position.toString() === [x, y].toString()) {\n                    ship.hit(index);\n                    isHit = true;\n                }\n            });\n        });\n        !isHit && misses.push([x, y]);\n    }\n\n    /**\n     * Returns `true` if `isSunk()` method of all `Ship` objects in `ships`\n     * array return `true`.\n     * \n     * @returns {boolean} Boolean dependent on status of ships.\n     */\n    const isShipsSunk = () => {\n        return ships.every((ship) => {\n            return ship.isSunk() === true;\n        });\n    }\n\n    /**\n     * Returns `true` if position on hit square of one of gameboard's ships.\n     * \n     * @param {int} x X-coordinate of target position.\n     * @param {int} y Y-coordinate of target position.\n     * @param {boolean} getIsHit `true` if method to return if position is on\n     *      a ship AND if it is hit.\n     * @returns {boolean}\n     */\n    const isPositionShip = (x, y, getIsHit) => {\n        for (const ship of ships) {\n            for (const [i, pos] of ship.getPositions().entries()) {\n                if (pos.toString() === [x, y].toString()) {\n                    return getIsHit ? ship.hits[i] : true;\n                }\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns `true` if coordinates in `misses` array.\n     * \n     * @param {int} x X-coordinate of target position.\n     * @param {int} y Y-coordinate of target position.\n     * @returns {boolean}\n     */\n    const isPositionMiss = (x, y) => {\n        const missesAsString = JSON.stringify(misses);\n        const position = JSON.stringify([x, y]);\n        return missesAsString.indexOf(position) !== -1;\n    }\n\n    /**\n     * Re-randomizes `ships` array and empties `misses` array.\n     */\n    const reset = () => {\n        ships = _getShips()\n        misses = [];\n    }\n\n    let ships = _getShips();\n    let misses = [];\n\n    return { \n        ships, \n        misses,\n\n        addShip,\n        receiveAttack,\n        isShipsSunk,\n        isPositionShip,\n        isPositionMiss,\n        reset,\n    }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/objects/Gameboard/Gameboard.js?");

/***/ }),

/***/ "./src/scripts/objects/Player/Player.js":
/*!**********************************************!*\
  !*** ./src/scripts/objects/Player/Player.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/**\n * Returns a `Player` object that can be controlled by the user.\n * \n * @namespace\n * @param {Object} enemyGameboard `Gameboard` object of opponent. \n * @returns {Object} Player object.\n */\nconst Player = (enemyGameboard) => {\n    /**\n     * Attacks the Player's enemy gameboard on specified coordinates.\n     * \n     * @param {int} x X-coordinate of attack.\n     * @param {int} y Y-coordinate of attack.\n     */\n    const makeAttack = (x, y) => {\n        enemyGameboard.receiveAttack(x, y);\n    }\n\n    return { makeAttack };\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/objects/Player/Player.js?");

/***/ }),

/***/ "./src/scripts/objects/Ship/Ship.js":
/*!******************************************!*\
  !*** ./src/scripts/objects/Ship/Ship.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship),\n/* harmony export */   \"RandomShip\": () => (/* binding */ RandomShip)\n/* harmony export */ });\n/**\n * Returns an object representing a ship on the gameboard.\n * \n * @namespace\n * @param {int} x X-coordinate of the top-left most square of the ship.\n * @param {int} y Y-coordinate of the top-left most square of the ship. \n * @param {int} length  Number of squares occupied by the ship.\n * @param {boolean} isVertical `true` if ship vertical on the gameboard.\n * @returns {Object}\n */\nconst Ship = (x, y, length, isVertical=false) => {\n    // Array as long as `length` argument with booleans set to false.\n    let hits = Array(length).fill(false);\n\n    /**\n     * Sets `isHit` of target `Square` object in `squares` array to `true`.\n     * \n     * @param {int} index Index of target `Square` object in `Ship.squares`.\n     */\n    const hit = (index) => {\n        hits[index] = true;\n    }\n\n    /**\n     * Returns `true` if `isHit` of all `Square` objects in squares `true`.\n     * \n     * @returns {boolean}\n     */\n    const isSunk = () => {\n        return hits.every((hit) => {\n            return hit === true;\n        });\n    }\n\n    /**\n     * Returns array of coordinates where Ship's squares will be placed. \n     * \n     * @returns {Array} Contains arrays of coordinates.\n     * \n     * @example\n     * let ship = Ship(3, 3, 4);\n     * console.log(ship.getPositions()); // [[3, 3], [4, 3], [5, 3], [6, 3]]\n     */\n    const getPositions = () => {\n        let positions = [];\n        for (let i = 0; i < length; i++) {\n            positions.push(isVertical ? [x, y + i] : [x + i, y]);\n        }\n        return positions;\n    }\n\n    /**\n     * Sets all booleans in object's `hits` array back to `false`.\n     */\n    const reset = () => {\n        for (let i = 0; i < hits.length; i++) {\n            hits[i] = false;\n        }\n    }\n\n    return { \n        x,\n        y,\n        length,\n        isVertical,\n        hits,\n        \n        hit,\n        isSunk,\n        getPositions,\n        reset,\n    };\n}\n\n\n/**\n * Returns a `Ship` object with randomly generated position and alignment. \n * \n * @namespace\n * @param {int} length Length of the Ship.\n * @returns {Object}\n */\nconst RandomShip = (length) => {\n    let isVertical = Math.random() < 0.5;\n\n    /**\n     * Returns a randomly generated coordinate for the Ship. \n     * \n     * @param {boolean} isY `true` if y-coordinate to be generated. \n     * @returns {int}\n     */\n    const _getCoordinate = (isY) => {\n        let limit = 10;\n        if (isVertical && isY || !isVertical && !isY) {\n            limit -= length;\n        }\n        return Math.floor(Math.random() * limit);\n    }\n\n    return Ship(\n        _getCoordinate(),\n        _getCoordinate(true), \n        length, \n        isVertical,\n    );\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/objects/Ship/Ship.js?");

/***/ }),

/***/ "./src/assets/Open Sans Bold.ttf":
/*!***************************************!*\
  !*** ./src/assets/Open Sans Bold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dbb97fd982ce1b96b6de.ttf\";\n\n//# sourceURL=webpack://battleship/./src/assets/Open_Sans_Bold.ttf?");

/***/ }),

/***/ "./src/assets/Open Sans Light.ttf":
/*!****************************************!*\
  !*** ./src/assets/Open Sans Light.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed41bedf131bc097372a.ttf\";\n\n//# sourceURL=webpack://battleship/./src/assets/Open_Sans_Light.ttf?");

/***/ }),

/***/ "./src/assets/Open Sans Regular.ttf":
/*!******************************************!*\
  !*** ./src/assets/Open Sans Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b0809d519837cb7aad3.ttf\";\n\n//# sourceURL=webpack://battleship/./src/assets/Open_Sans_Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;