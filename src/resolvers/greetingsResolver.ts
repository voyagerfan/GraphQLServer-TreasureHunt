/*
Simple greetings resolver for testing purposes. Used in ./resolvers/index.ts
*/

import { greetings } from "../datasources/greetingsData.js"

export const greetingsResolver = {
    Query: {
        greetings: () => greetings,
    },
};
