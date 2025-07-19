/*
QuestItem Resolver
*/

import { doubleScalar } from "../scalars/doubleScalars.js"
import { questItems } from "../datasources/questItemData.js"
import { Coordinate } from "../types/dataTypes.js";

export const questItemResolver = {
    Double: doubleScalar,
    Query: {
        questItems: (
            _: unknown,
            args: {
                rating?: number,
                radium?: number,
                originCoordinates: Coordinate
            }
        ) => {
            
        }
    },
};


