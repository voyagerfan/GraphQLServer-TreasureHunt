/*
This file combines all resolvers into in the ./resolvers into one export
"resolvers" used in src/index.ts
*/

import { greetingsResolver } from "./greetingsResolver.js";

export const resolvers = {
    Query: {
        ...greetingsResolver.Query
        // TODO: add more resolvers
    },
};