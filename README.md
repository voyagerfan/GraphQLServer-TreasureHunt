# Treasure-Hunt GraphQL Server

## Table of Contents

- [Overview](#overview)
- [GraphQL Server File Structure](#graphql-server-file-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Operation](#installation-and-operation)


## Overview

This program is designed to serve string data for the [TreasureHunt App](https://github.com/voyagerfan/Treasure-Hunt). The server is configured for `localhost` and requests are processed via `/resolver/index.ts` which consolidates and exports the resolvers listed in the `resolvers` folder.
>[!NOTE]
> All TypesScript files are compiled to Javascript and live in '~/dist' - this folder is included in `.gitignore` but will be available once compiled [see Installation and Operation](#installation-and-operation).

## GraphQL Server File Structure
The following is a brief overview of the file structure

[~/src/index.ts](https://github.com/voyagerfan/GraphQLServer-TreasureHunt/blob/main/src/index.ts) - The main entry point for the server.

[~/src/resolvers]() - Logic to resolve ApolloClient Requests.

[~/src/datasources]() - Sample Data to return back to the client.

[~/graphql/schema.graphqls](https://github.com/voyagerfan/GraphQLServer-TreasureHunt/blob/main/graphql/schema.graphqls) - Schema for GraphQL

## Features

This server includes the following features:
* Resolves to handle client requests.
* Logic to filter the request based on client supplied data.
* A small repo of sample data to use with the TreasureHunt App.

## Technologies Used

- **Programming Languages:** TypeScript, JavaScript
- **Frameworks:** Node, Express, GraphQL

## Installation and Operation
*Prerequisites:* A suitable IDE of your choice (e.g. Intellij, Eclipse, VSCode)

Initial Setup:
* Clone the repo to your desired directory.
* Open your IDE, then open the location you cloned the files to.

Start the Server:
* Open a terminal within the IDE. Alternatively, you may open a separate terminal and navigate to the root directory of the cloned project.
* At the terminal prompt, enter `npm run start`

To Test the server from a browser:
>[!NOTE]
> The server must be running in order for this to work properly. Start with `npm start` as shown above
* Navigate to the [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/v2/testing/graphql-playground)
* Click on the `Launch Sandbox` button.
* GraphQL will automatically load the schema and allow you to make queries

To Test the server with the TreasureHunt Client:
* See the [TreasureHunt README.md](https://github.com/voyagerfan/Treasure-Hunt)

To shut down the server:
* Press `ctrl + c`. This should return the terminal prompt.

> [!IMPORTANT]
> This server is a work in progress with plans to incorporate more data. As the app grows, data may be moved to another location