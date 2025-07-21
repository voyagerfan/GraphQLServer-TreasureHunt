/*
QuestItem Resolver
*/

import { doubleScalar } from "../scalars/doubleScalars.js"
import { Coordinate, Range } from "../types/dataTypes.js";
import { getQuestsByDistanceAndRating } from "../services/questItemService.js";

export const questItemResolver = {
    Double: doubleScalar,
    Query: {
        questItems: (
            _: unknown,
            args: {
                rating?: Range,
                radius?: number,
                originCoordinates: Coordinate
            }
        ) => getQuestsByDistanceAndRating(args.rating, args.radius, args.originCoordinates)
    },
};


