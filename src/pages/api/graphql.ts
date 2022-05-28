import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiHandler } from "next";

const typeDefs = gql`
  type User {
    id: ID
  }

  type Query {
    getUser: User
  }
`;

const resolvers = {
  Query: {
    getUser: () => {
      return {
        id: "Foo",
      };
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();
const handdler: NextApiHandler = async (req, res) => {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};
export default handdler;
export const config = {
  api: {
    bodyParser: false,
  },
};
