/*
QuestItem Resolver
*/

import { doubleScalar } from "./scalars/doubleScalar"
import { questItems } from "../datasources/questItemData.js"

export const questItemResolver = {
    Double: doubleScalar,
    Query: {
        questItems: (
            _: unknown,
            args: {
                rating?: Double,
                radium?: Double,
                originCoordinates:
            }
        ) => {
            if(rating && radius) {

                /*
                - iterate through questItems 1 by 1
                - for each one, calculate the distance between origin and the item location
                - if a match with radius and rating, append the item json list
                - return the list
                */
            } else if (rating || radius) {
                if(radius) {
                    // return list matching radius
                } else if(rating) {
                    // return list with matching rating
                }
            }  else {
                // return empty list
            }
        }
    },
};


