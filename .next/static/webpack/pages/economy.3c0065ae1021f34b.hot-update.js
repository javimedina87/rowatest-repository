"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/economy",{

/***/ "./pages/economy/index.js":
/*!********************************!*\
  !*** ./pages/economy/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Expenses; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Filter */ \"./components/Filter/index.js\");\n/* harmony import */ var _mocks_economy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mocks/economy */ \"./pages/mocks/economy.js\");\n/* harmony import */ var _components_SmartInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SmartInput */ \"./components/SmartInput/index.js\");\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Expenses() {\n    var _this = this;\n    _s();\n    var initialFilterOptions = [\n        'C',\n        'J',\n        'P'\n    ]; // Común, Javier, Paula\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialFilterOptions), /*#__PURE__*/ filterOptionsSelected = ref2[0], setFilterOptionsSelected = ref2[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), expenses = ref1[0], setExpenses = ref1[1];\n    var _handleOnChangeSmartInput = function(event) {\n        var ref;\n        console.log('_handleInputChange ', event);\n        console.log('event.target?.value ', (ref = event.target) === null || ref === void 0 ? void 0 : ref.value);\n    // setInputValue(event.target?.value);\n    };\n    var handleModalOption = function(optionSelected) {\n        var index = filterOptionsSelected.indexOf(optionSelected);\n        // Try to find item index in current array\n        if (index > -1) {\n            setFilterOptionsSelected(filterOptionsSelected.filter(function(item) {\n                return item !== optionSelected;\n            }));\n        } else {\n            // Item was not in the current array, so add it to array\n            setFilterOptionsSelected(function(oldArray) {\n                return _toConsumableArray(oldArray).concat([\n                    optionSelected\n                ]);\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var currentExpenses = _mocks_economy__WEBPACK_IMPORTED_MODULE_4__.Economy.filter(function(expense) {\n            return filterOptionsSelected.includes(expense.owner);\n        });\n        setExpenses(currentExpenses); // TODO remove mock\n    }, [\n        filterOptionsSelected\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-932f33ad08bdcd8a\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                fixedOptions: initialFilterOptions,\n                selectedOptions: filterOptionsSelected,\n                onSelectFilterOption: handleModalOption\n            }, void 0, false, {\n                fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            expenses === null || expenses === void 0 ? void 0 : expenses.map(function(expense, index) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-932f33ad08bdcd8a\" + \" \" + \"expense-row \".concat(index % 2 && 'odd-expense-row'),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SmartInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            initialValue: expense.amount,\n                            inputSize: 4\n                        }, void 0, false, {\n                            fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SmartInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            initialValue: expense.amount,\n                            inputSize: 4\n                        }, void 0, false, {\n                            fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SmartInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            initialValue: expense.amount,\n                            inputSize: 4\n                        }, void 0, false, {\n                            fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SmartInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            initialValue: expense.description,\n                            inputSize: 13\n                        }, void 0, false, {\n                            fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SmartInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            initialValue: expense.amount,\n                            inputSize: 4\n                        }, void 0, false, {\n                            fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SmartInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            initialValue: expense.description,\n                            inputSize: 13\n                        }, void 0, false, {\n                            fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, expense.id, true, {\n                    fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 21\n                }, _this));\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"932f33ad08bdcd8a\",\n                children: \".container.jsx-932f33ad08bdcd8a{}\\n.expense-row.jsx-932f33ad08bdcd8a{background:lightsalmon;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex}\\n.odd-expense-row.jsx-932f33ad08bdcd8a{background:rgba(69, 134, 184, 0.7)}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/javiermedinalopez/Desktop/Code/nextjs/rowatest-repository/pages/economy/index.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this));\n};\n_s(Expenses, \"ZF5fCixxyhGzUYTyYrS/K20BZew=\");\n_c = Expenses;\nvar _c;\n$RefreshReg$(_c, \"Expenses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDZCLFlBQVksRUFBRVIsT0FBTyxDQUFDUyxNQUFNOzRCQUM1QkMsU0FBUyxFQUFFLENBQUM7Ozs7OztvR0FFZi9CLDhEQUFVOzRCQUNQNkIsWUFBWSxFQUFFUixPQUFPLENBQUNTLE1BQU07NEJBQzVCQyxTQUFTLEVBQUUsQ0FBQzs7Ozs7O29HQUVmL0IsOERBQVU7NEJBQ1A2QixZQUFZLEVBQUVSLE9BQU8sQ0FBQ1csV0FBVzs0QkFDakNELFNBQVMsRUFBRSxFQUFFOzs7Ozs7b0dBRWhCL0IsOERBQVU7NEJBQ1A2QixZQUFZLEVBQUVSLE9BQU8sQ0FBQ1MsTUFBTTs0QkFDNUJDLFNBQVMsRUFBRSxDQUFDOzs7Ozs7b0dBRWYvQiw4REFBVTs0QkFDUDZCLFlBQVksRUFBRVIsT0FBTyxDQUFDVyxXQUFXOzRCQUNqQ0QsU0FBUyxFQUFFLEVBQUU7Ozs7Ozs7bUJBdkJnRFYsT0FBTyxDQUFDWSxFQUFFOzs7OztZQTBCbEYsQ0FBQzs7Ozs7Ozs7Ozs7QUFtQmxCLENBQUM7R0FyRnVCaEMsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Vjb25vbXkvaW5kZXguanM/ZmU1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgeyBFY29ub215IH0gZnJvbSAnLi4vbW9ja3MvZWNvbm9teSc7XG5pbXBvcnQgU21hcnRJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TbWFydElucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cGVuc2VzKCkge1xuICAgIGNvbnN0IGluaXRpYWxGaWx0ZXJPcHRpb25zID0gWydDJywgJ0onLCAnUCddOyAvLyBDb23Dum4sIEphdmllciwgUGF1bGFcbiAgICBjb25zdCBbZmlsdGVyT3B0aW9uc1NlbGVjdGVkLCBzZXRGaWx0ZXJPcHRpb25zU2VsZWN0ZWRdID0gdXNlU3RhdGUoaW5pdGlhbEZpbHRlck9wdGlvbnMpO1xuICAgIGNvbnN0IFtleHBlbnNlcywgc2V0RXhwZW5zZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBfaGFuZGxlT25DaGFuZ2VTbWFydElucHV0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGFuZGxlSW5wdXRDaGFuZ2UgJywgZXZlbnQpO1xuICAgICAgICBjb25zb2xlLmxvZygnZXZlbnQudGFyZ2V0Py52YWx1ZSAnLCBldmVudC50YXJnZXQ/LnZhbHVlKTtcblxuICAgICAgICAvLyBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldD8udmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1vZGFsT3B0aW9uID0gKG9wdGlvblNlbGVjdGVkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyT3B0aW9uc1NlbGVjdGVkLmluZGV4T2Yob3B0aW9uU2VsZWN0ZWQpO1xuXG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGl0ZW0gaW5kZXggaW4gY3VycmVudCBhcnJheVxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgc2V0RmlsdGVyT3B0aW9uc1NlbGVjdGVkKGZpbHRlck9wdGlvbnNTZWxlY3RlZC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG9wdGlvblNlbGVjdGVkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVtIHdhcyBub3QgaW4gdGhlIGN1cnJlbnQgYXJyYXksIHNvIGFkZCBpdCB0byBhcnJheVxuICAgICAgICAgICAgc2V0RmlsdGVyT3B0aW9uc1NlbGVjdGVkKChvbGRBcnJheSkgPT4gWy4uLm9sZEFycmF5LCBvcHRpb25TZWxlY3RlZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudEV4cGVuc2VzID0gRWNvbm9teS5maWx0ZXIoKGV4cGVuc2UpID0+IGZpbHRlck9wdGlvbnNTZWxlY3RlZC5pbmNsdWRlcyhleHBlbnNlLm93bmVyKSlcblxuICAgICAgICBzZXRFeHBlbnNlcyhjdXJyZW50RXhwZW5zZXMpOyAvLyBUT0RPIHJlbW92ZSBtb2NrXG4gICAgfSwgW2ZpbHRlck9wdGlvbnNTZWxlY3RlZF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEZpbHRlclxuICAgICAgICAgICAgICAgIGZpeGVkT3B0aW9ucz17aW5pdGlhbEZpbHRlck9wdGlvbnN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb25zPXtmaWx0ZXJPcHRpb25zU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgb25TZWxlY3RGaWx0ZXJPcHRpb249e2hhbmRsZU1vZGFsT3B0aW9ufVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge2V4cGVuc2VzPy5tYXAoKGV4cGVuc2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BleHBlbnNlLXJvdyAke2luZGV4ICUyICYmICdvZGQtZXhwZW5zZS1yb3cnfWB9IGtleT17ZXhwZW5zZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U21hcnRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17ZXhwZW5zZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTaXplPXs0fSAvLyBzdW0gdG90YWwgNDJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U21hcnRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17ZXhwZW5zZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTaXplPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFydElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtleHBlbnNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFNpemU9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNtYXJ0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2V4cGVuc2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTaXplPXsxM31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U21hcnRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17ZXhwZW5zZS5hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRTaXplPXs0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFydElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtleHBlbnNlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U2l6ZT17MTN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiBsaWdodGN5YW47ICBcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5leHBlbnNlLXJvdyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRzYWxtb247XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5vZGQtZXhwZW5zZS1yb3cge1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY5LCAxMzQsIDE4NCwgMC43KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlsdGVyIiwiRWNvbm9teSIsIlNtYXJ0SW5wdXQiLCJFeHBlbnNlcyIsImluaXRpYWxGaWx0ZXJPcHRpb25zIiwiZmlsdGVyT3B0aW9uc1NlbGVjdGVkIiwic2V0RmlsdGVyT3B0aW9uc1NlbGVjdGVkIiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsIl9oYW5kbGVPbkNoYW5nZVNtYXJ0SW5wdXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU1vZGFsT3B0aW9uIiwib3B0aW9uU2VsZWN0ZWQiLCJpbmRleCIsImluZGV4T2YiLCJmaWx0ZXIiLCJpdGVtIiwib2xkQXJyYXkiLCJjdXJyZW50RXhwZW5zZXMiLCJleHBlbnNlIiwiaW5jbHVkZXMiLCJvd25lciIsImRpdiIsImZpeGVkT3B0aW9ucyIsInNlbGVjdGVkT3B0aW9ucyIsIm9uU2VsZWN0RmlsdGVyT3B0aW9uIiwibWFwIiwiaW5pdGlhbFZhbHVlIiwiYW1vdW50IiwiaW5wdXRTaXplIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/economy/index.js\n");

/***/ })

});