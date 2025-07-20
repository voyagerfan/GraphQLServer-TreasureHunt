/*
Data used for the questItems query for testing. Used in ./resolvers/questItemResolver.ts
*/

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface QuestItem {
  title: string;
  description: string;
  clue: string;
  hint: string;
  coordinate: Coordinate;
  rating: number;
  endGameImageID: string;
}

export const questItems: QuestItem[] = [
    {
        title: "Hello",
        description: "World!",
        clue: "test clue",
        hint: "test hint",
        coordinate: {latitude: 0.0, longitude: 0.0},
        rating: 3.5,
        endGameImageID: "testID.jpg"
    },
    {
        title: "The Sweet Inheritance",
        description: "An old letter was found in the pocket of a sea-worn jacket, speaking of a place where cocoa once flowed and chimneys whispered secrets of invention. The scent of legacy lingers still",
        clue: "Follow the path where the cable cars climb, and seek the square where gold turned to chocolate",
        hint: "Once a place of industry, now a place of indulgence. It sits near where waves meet brick.",
        coordinate: {latitude: 37.805920, longitude: -122.423096},
        rating: 4.5, 
        endGameImageID: "ghirardelliSquare.jpg"
    },
    {
        title: "Seals and Surpirse",
        description: "A bustling boardwalk alive with chatter, the splash of sea, and the unmistakable barks of some furry residents lounging on floating docks. Street performers, quirky shops, and carousel lights add to the carnival feeling by the bay.",
        clue: "Catch the sun-warmed pileups on the docks before you dive into clam chowder or ride the carousel.",
        hint: "Look for the sea lions’ stage just past the Aquarium, where tourists pause for nature’s show.",
        coordinate: {latitude: 37.8087, longitude: -122.409981},
        rating: 4.2,
        endGameImageID: "pier39.jpg"
    },
    {
        title: "Colors on Canvas",
        description: "Walls come alive with stories — bright, bold, and bursting with history. Each stroke speaks of culture, struggle, and celebration, turning the neighborhood into an open-air gallery.",
        clue: "Follow the murals, find the alley where Diego’s legacy still inspires, and taste the spice in the air.",
        hint: "Look for the vibrant alley named after a poet and the colorful street where taquerias reign supreme.",
        coordinate: {latitude: 37.751777, longitude: -122.412406},
        rating: 4.7,
        endGameImageID: "balmyAlley.jpg"
    }
];