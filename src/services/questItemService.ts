
import { doubleScalar } from "./scalars/doubleScalar";
import { questItems } from "../datasources/questItemData.js";
import { Haversine } from '../utils/haversine';


export type Coordinate = {
    latitude: number
    longitude: number
}

export function getQuestsByDistanceAndRating(
    rating?: number,
    radius?: number,
    origin?: Coordinate): typeof questItems {

        let filteredQuestList = questItems;

            if (rating !== undefined) {
                filteredQuestList = filteredQuestList.filter(item => item.rating >= rating);
            }

            if (radius !== undefined && origin) {
                filteredQuestList = filteredQuestList.filter(item => {
                const distance = Haversine(item.coordinate, origin);
                return distance <= radius;
                });
            }

        return filteredQuestList;
    }
}
