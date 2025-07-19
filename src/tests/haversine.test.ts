import { describe, expect, test } from '@jest/globals';
import { Coordinate } from '../types/dataTypes.js';
import { Haversine } from '../utils/haversine';

describe('haversine module', () => {
    test('calculate distance between San Francisco and NYC', () => {
        const sanFrancisco: Coordinate = {latitude: 37.77, longitude: -122.42};
        const nyc: Coordinate = {latitude: 40.71, longitude: -74.01};

        expect(Haversine(sanFrancisco, nyc)).toBeCloseTo(4129.06)
    });
});