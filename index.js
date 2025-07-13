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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var node_process_1 = require("node:process");
var readline = require("node:readline/promises");
var rl = readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
var todoList = [];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var action, item, item, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Welcome to the to-do list.");
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 13];
                    return [4 /*yield*/, rl.question("What would you like to do? (Hint: add/delete/update/list/close) ")];
                case 2:
                    action = (_a.sent())
                        .toLowerCase()
                        .trim();
                    if (!(action === "close")) return [3 /*break*/, 3];
                    console.log("Closing to-do list...");
                    rl.close();
                    return [3 /*break*/, 13];
                case 3:
                    if (!(action === "add")) return [3 /*break*/, 5];
                    return [4 /*yield*/, rl.question("What would you like to add to your to-do list? ")];
                case 4:
                    item = _a.sent();
                    if (item === "cancel") {
                        console.log("Operation is cancelled");
                        rl.pause();
                    }
                    else {
                        addItem(item);
                    }
                    return [3 /*break*/, 12];
                case 5:
                    if (!(action === "delete")) return [3 /*break*/, 7];
                    return [4 /*yield*/, rl.question("What would you like to delete from your to-do list? ")];
                case 6:
                    item = _a.sent();
                    if (item === "cancel") {
                        console.log("Operation is cancelled");
                        rl.pause();
                    }
                    else {
                        deleteItem(item);
                    }
                    return [3 /*break*/, 12];
                case 7:
                    if (!(action === "list")) return [3 /*break*/, 8];
                    list();
                    return [3 /*break*/, 12];
                case 8:
                    if (!(action === "update")) return [3 /*break*/, 12];
                    return [4 /*yield*/, rl.question("Which item would you like to update? ")];
                case 9:
                    item = _a.sent();
                    if (!(item === "cancel")) return [3 /*break*/, 10];
                    console.log("Operation is cancelled");
                    rl.pause();
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, updateItem(item)];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12: return [3 /*break*/, 1];
                case 13: return [2 /*return*/];
            }
        });
    });
}
function addItem(item) {
    todoList.push(item);
    console.log(item, "added to your to-do list");
}
function deleteItem(item) {
    var itemNo = todoList.indexOf(item);
    if (itemNo !== -1) {
        todoList.splice(itemNo, 1);
        console.log(item, "deleted from your to-do list");
    }
    else {
        console.log(item, "not found in your to-do list");
    }
}
function list() {
    if (todoList.length === 0) {
        console.log("Looks like your to-do list is empty.");
    }
    else {
        console.log("Your to-do list:");
        todoList.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    }
}
function updateItem(item) {
    return __awaiter(this, void 0, void 0, function () {
        var newItem, itemNo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!todoList.includes(item)) return [3 /*break*/, 2];
                    return [4 /*yield*/, rl.question("What do you want to update ".concat(item, " to? "))];
                case 1:
                    newItem = _a.sent();
                    itemNo = todoList.indexOf(item);
                    todoList.splice(itemNo, 1, newItem);
                    console.log("".concat(item, " is updated as ").concat(newItem));
                    return [2 /*return*/];
                case 2:
                    console.log("".concat(item, " is not in your to-do list"));
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function cancelOperation() {
    console.log("Operation Cancelled.");
}
main();
