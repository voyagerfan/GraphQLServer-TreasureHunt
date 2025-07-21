"use strict";
/*
Simple greetings resolver for testing purposes. Used in ./resolvers/index.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingsResolver = void 0;
const greetingsData_js_1 = require("../datasources/greetingsData.js");
exports.greetingsResolver = {
    Query: {
        greetings: () => greetingsData_js_1.greetings,
    },
};
