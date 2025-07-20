/*
This file combines all resolvers into in the ./resolvers into one export
"resolvers" used in src/index.ts
*/

import { greetingsResolver } from "./greetingsResolver.js";
import { questItemResolver } from "./questItemResolver.js";

export const resolvers = {
    Query: {
        ...greetingsResolver.Query,
        ...questItemResolver.Query
        // TODO: add more resolvers
    },
};