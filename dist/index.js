"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const fs_1 = require("fs");
const index_js_1 = require("./resolvers/index.js");
const typeDefs = (0, fs_1.readFileSync)("graphql/schema.graphqls", 'utf-8');
const loggingPlugin = {
    async requestDidStart() {
        return {
            async willSendResponse(requestContext) {
                console.log("GraphQL Response:", requestContext.response);
            },
        };
    },
};
const server = new server_1.ApolloServer({
    typeDefs,
    resolvers: index_js_1.resolvers,
    plugins: [loggingPlugin]
});
async function main() {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: { port: 4000, host: "127.0.0.1" },
    });
    console.log(`🚀 Server ready at ${url}`);
}
main();
