import { questItems } from "../datasources/questItemData.js";
import { Haversine } from '../utils/haversine.js';
import { Coordinate, Range } from '../types/dataTypes.js'

export function getQuestsByDistanceAndRating(
    rating?: Range,
    radius?: number,
    origin?: Coordinate): typeof questItems {

        let filteredQuestList = questItems;

            if (rating !== undefined) {
                filteredQuestList = filteredQuestList.filter(item => {
                return (item.rating >= rating.min && item.rating <= rating.max)
                });
            }

            if (radius !== undefined && origin) {
                filteredQuestList = filteredQuestList.filter(item => {
                const distance = Haversine(item.coordinates, origin);
                return distance <= radius;
                });
            }

        return filteredQuestList;
    }
