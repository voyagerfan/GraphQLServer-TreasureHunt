/*
Registers a custom Double scalar to support geospatial precision (e.g., coordinates)
*/

import { GraphQLScalarType, Kind } from 'graphql';

export const doubleScalar = new GraphQLScalarType({
   name: 'Double',
   description: 'Double-precision floating-point number',
   serialize(value: any) {
       return value;
   },
   parseValue(value: any) {
       return parseFloat(value);
   },
   parseLiteral(ast) {
     if (ast.kind === Kind.FLOAT || ast.kind === Kind.INT) {
       return parseFloat(ast.value)
     }
     return null
   },
});