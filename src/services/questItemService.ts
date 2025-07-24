import { questItems } from "../datasources/questItemData.js";
import { Haversine } from '../utils/haversine.js';
import { Coordinate, Range } from '../types/dataTypes.js'

export function getQuestsByDistanceAndRating(
    rating?: Range,
    radius?: number,
    origin?: Coordinate): typeof questItems {

        let filteredQuestList = questItems;

        

        if (rating != null) {
            const max = Math.ceil(rating.max * 10) / 10; 
            const min = Math.ceil(rating.min * 10) / 10; 
            filteredQuestList = filteredQuestList.filter(item => {
            return (item.rating >= min && item.rating <= max)
            });
        }

        if (radius != null && origin != null) {
            filteredQuestList = filteredQuestList.filter(item => {
            const distance = Haversine(item.coordinates, origin);
            return distance <= radius;
            });
        }

        return filteredQuestList;
    }
