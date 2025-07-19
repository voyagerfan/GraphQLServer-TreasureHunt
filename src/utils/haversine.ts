import { Coordinate } from "../types/dataTypes.js"

const earthRadius = 6371000

export function Haversine(
    origin: Coordinate,
    destination: Coordinate
) : number {

    const deltaPhi = degreesToRadians(destination.latitude - origin.latitude);
    const deltaLamba = degreesToRadians(destination.longitude - origin.longitude);

    const angulardistance = 
        Math.pow(Math.sin(deltaPhi/2), 2) + 
        Math.cos(degreesToRadians(origin.latitude)) * Math.cos(degreesToRadians(destination.latitude)) *
        Math.pow(Math.sin(deltaLamba/2), 2);
    
    const arcangle = 2 * Math.atan2(Math.sqrt(angulardistance), Math.sqrt(1-angulardistance));

    return earthRadius * arcangle;
}

function degreesToRadians(degrees: number): number {
    return degrees * Math.PI / 180;
}

    