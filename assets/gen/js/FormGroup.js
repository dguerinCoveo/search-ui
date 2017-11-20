webpackJsonpCoveo__temporary([52],{

/***/ 447:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dom_1 = __webpack_require__(3);
var _ = __webpack_require__(1);
__webpack_require__(447);
var GlobalExports_1 = __webpack_require__(4);
/**
 * A simple `fieldset` HTMLElement containing multiple form widgets.
 */
var FormGroup = /** @class */ (function () {
    /**
     * Creates a new `FormGroup`.
     * @param contents The form widgets to include in the form group.
     * @param label The label to display for the form group.
     */
    function FormGroup(contents, label) {
        var _this = this;
        this.element = Dom_1.$$('fieldset', { className: 'coveo-form-group' }, Dom_1.$$('span', { className: 'coveo-form-group-label' }, label));
        _.each(contents, function (content) {
            _this.element.append(content.build());
        });
    }
    FormGroup.doExport = function () {
        GlobalExports_1.exportGlobally({
            FormGroup: FormGroup
        });
    };
    /**
     * Gets the element on which the form group is bound.
     * @returns {HTMLElement} The form group element.
     */
    FormGroup.prototype.build = function () {
        return this.element.el;
    };
    return FormGroup;
}());
exports.FormGroup = FormGroup;


/***/ })

});
//# sourceMappingURL=FormGroup.js.map