"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
// Init app
var app = express_1.default();
app.get('/', function (req, res, next) {
    return res
        .json({
        msg: 'Hello world'
    })
        .status(200);
});
app.get('/about', function (req, res, next) {
    return res
        .json({
        msg: 'Hello from about page'
    })
        .status(200);
});
app.listen(3000, function () { return console.log('server is running on port 3000'); });
