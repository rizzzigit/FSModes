"use strict";
exports.__esModule = true;
exports.Mode = exports.ModeValues = void 0;
var ModeValues;
(function (ModeValues) {
    ModeValues[ModeValues["UserRead"] = 256] = "UserRead";
    ModeValues[ModeValues["UserWrite"] = 128] = "UserWrite";
    ModeValues[ModeValues["UserExecute"] = 64] = "UserExecute";
    ModeValues[ModeValues["GroupRead"] = 64] = "GroupRead";
    ModeValues[ModeValues["GroupWrite"] = 16] = "GroupWrite";
    ModeValues[ModeValues["GroupExecute"] = 8] = "GroupExecute";
    ModeValues[ModeValues["OtherRead"] = 4] = "OtherRead";
    ModeValues[ModeValues["OtherWrite"] = 2] = "OtherWrite";
    ModeValues[ModeValues["OtherExecute"] = 1] = "OtherExecute";
})(ModeValues = exports.ModeValues || (exports.ModeValues = {}));
var Mode = /** @class */ (function () {
    function Mode(input) {
        this.userRead = input.userRead;
        this.userWrite = input.userWrite;
        this.userExecute = input.userExecute;
        this.groupRead = input.groupRead;
        this.groupWrite = input.groupWrite;
        this.groupExecute = input.groupExecute;
        this.otherRead = input.otherRead;
        this.otherWrite = input.otherWrite;
        this.otherExecute = input.otherExecute;
    }
    Mode.fromNumber = function (input) {
        return new this({
            userRead: !!(input & ModeValues.UserRead),
            userWrite: !!(input & ModeValues.UserWrite),
            userExecute: !!(input & ModeValues.UserExecute),
            groupRead: !!(input & ModeValues.GroupRead),
            groupWrite: !!(input & ModeValues.GroupWrite),
            groupExecute: !!(input & ModeValues.GroupExecute),
            otherRead: !!(input & ModeValues.OtherRead),
            otherWrite: !!(input & ModeValues.OtherWrite),
            otherExecute: !!(input & ModeValues.OtherExecute)
        });
    };
    Mode.prototype.toNumber = function () {
        var output = 0;
        if (this.userRead) {
            output |= ModeValues.UserRead;
        }
        if (this.userWrite) {
            output |= ModeValues.UserWrite;
        }
        if (this.userExecute) {
            output |= ModeValues.UserExecute;
        }
        if (this.groupRead) {
            output |= ModeValues.GroupRead;
        }
        if (this.groupWrite) {
            output |= ModeValues.GroupWrite;
        }
        if (this.groupExecute) {
            output |= ModeValues.GroupExecute;
        }
        if (this.otherRead) {
            output |= ModeValues.OtherRead;
        }
        if (this.otherWrite) {
            output |= ModeValues.OtherWrite;
        }
        if (this.otherExecute) {
            output |= ModeValues.OtherExecute;
        }
        return output;
    };
    return Mode;
}());
exports.Mode = Mode;
