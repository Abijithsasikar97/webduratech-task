const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require("graphql");
const fetch = require("node-fetch");

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "..",

  fields: () => ({
    launchesPast: { type: "lauchpast" },
    resolve: (root, args) =>
      fetch("https://api.spacex.land/graphql/").then((res) => res.json()),
  }),
});

module.exports = new GraphQLSchema({
  query: QueryType,
});
