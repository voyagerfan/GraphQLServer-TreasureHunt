"use strict";
/*
This file combines all resolvers into in the ./resolvers into one export
"resolvers" used in src/index.ts
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const greetingsResolver_js_1 = require("./greetingsResolver.js");
const questItemResolver_js_1 = require("./questItemResolver.js");
exports.resolvers = {
    Query: {
        ...greetingsResolver_js_1.greetingsResolver.Query,
        ...questItemResolver_js_1.questItemResolver.Query
        // TODO: add more resolvers
    },
};
