"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var davinciRPC = /** @class */ (function () {
    /* class init */
    function davinciRPC() {
        var PythonShell = require('python-shell').PythonShell;
        this.pythonInstance = PythonShell;
        this.currentProject = "";
        this.elapsedTime = new Date();
    }
    /* RUN RPC */
    davinciRPC.prototype.runRPC = function (client, appID, buttons) {
        var _this = this;
        if (buttons === void 0) { buttons = []; }
        client.on('ready', function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, error_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("RPC is starting...");
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = (_a = client).setActivity;
                        return [4 /*yield*/, this.getRPCInfo(client, buttons)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        console.error('seems like you ran into some errors, pls fix them before you continue!');
                        console.error(error_1);
                        process.exit();
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("RPC is running...");
                        setInterval(function () { return __awaiter(_this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _b = (_a = client).setActivity;
                                    return [4 /*yield*/, this.getRPCInfo(client, buttons)];
                                case 1:
                                    _b.apply(_a, [_c.sent()]);
                                    return [2 /*return*/];
                            }
                        }); }); }, 1000);
                        return [2 /*return*/];
                }
            });
        }); });
        /* connect to discord-api / start rpc */
        client.login({ clientId: appID }).catch(console.error);
    };
    /* get object for discord-activity */
    davinciRPC.prototype.getRPCInfo = function (client, buttons) {
        return __awaiter(this, void 0, void 0, function () {
            var output, tasks, formattedButtons;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!client)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.getTasks()];
                    case 1:
                        tasks = _a.sent();
                        if (this.currentProject !== tasks[0])
                            this.updateProject(tasks[0]);
                        switch (tasks[0]) {
                            case "Idling":
                                output = {
                                    details: "Idling",
                                    state: 'currently asleep...',
                                    largeImageKey: 'https://cdn-icons-png.flaticon.com/512/10466/10466150.png',
                                    largeImageText: 'Davinci Resolve',
                                    startTimestamp: this.elapsedTime,
                                    instance: false,
                                };
                                break;
                            default:
                                output = {
                                    details: "Editing: ".concat(this.currentProject),
                                    state: 'making some progress...',
                                    largeImageKey: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png',
                                    largeImageText: 'Davinci Resolve',
                                    startTimestamp: this.elapsedTime,
                                    instance: false,
                                };
                                break;
                        }
                        formattedButtons = this.getButtons(buttons);
                        if (formattedButtons.length !== 0) {
                            output.buttons = formattedButtons;
                        }
                        return [2 /*return*/, output];
                }
            });
        });
    };
    /* get current davinci task via python3 */
    davinciRPC.prototype.getTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pythonInstance.run('./src/info.py', null)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* get required object for buttons */
    davinciRPC.prototype.getButtons = function (input) {
        if (input.length > 2)
            console.error('the limit for buttons is 2, only the first 2 will be rendered!');
        if (input.length == 0)
            return [];
        var output = [];
        for (var i = 0; i < 1; i++) {
            var current = input[i];
            if (!Object.keys(current).includes('label') || !Object.keys(current).includes('url')) {
                throw 'buttons require a "url" and "label" attribute!';
            }
            output.push({ label: current.label, url: current.url });
        }
        return output;
    };
    /* update current project and reset time */
    davinciRPC.prototype.updateProject = function (newName) {
        this.currentProject = newName;
        this.elapsedTime = new Date();
    };
    return davinciRPC;
}());
module.exports = davinciRPC;
