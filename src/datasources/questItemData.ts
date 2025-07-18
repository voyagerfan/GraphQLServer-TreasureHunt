/*
Data used for the questItems query for testing. Used in ./resolvers/questItemResolver.ts
*/

import { Coordinate } from "../types/dataTypes.js";

export const questItems = [
    {
        title: "Hello",
        description: "World!",
        clue: "test clue",
        hint: "test hint",
        coordinate: {latitude: 0.0, longitude: 0.0},
        rating: 3.5
    }
];


/*
data class QuestItem(
    val title: String,
    val description: String,
    val clue: String,
    val hint: String,
    val coordinates: Coordinate,
    val rating: Double,
    val endGameAssets: CompletedQuestData
)
*/