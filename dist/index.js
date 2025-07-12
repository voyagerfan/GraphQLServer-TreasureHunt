import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from 'fs';
import { resolvers } from "./resolvers/index.js";
const typeDefs = readFileSync("graphql/schema.graphqls", 'utf-8');
const loggingPlugin = {
    async requestDidStart() {
        return {
            async willSendResponse(requestContext) {
                console.log("GraphQL Response:", requestContext.response);
            },
        };
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [loggingPlugin]
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000, host: "127.0.0.1" },
});
console.log(`🚀 Server ready at ${url}`);
