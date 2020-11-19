"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MODES;
(function (MODES) {
    MODES[MODES["CREATE"] = 0] = "CREATE";
    MODES[MODES["EDIT"] = 1] = "EDIT";
})(MODES = exports.MODES || (exports.MODES = {}));
var SharedState = /** @class */ (function () {
    function SharedState() {
        this.mode = MODES.EDIT;
    }
    return SharedState;
}());
exports.SharedState = SharedState;
//# sourceMappingURL=sharedState.model.js.map