import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiHandler } from "next";
import { createANewEmpresa } from "../../services/createANewEmpresa";
import jwt from "jsonwebtoken"
const typeDefs = gql`
  enum typeUser {
    admin
    user
  }
  type token {
    token: String!
  }

  type User {
    id: ID!
    key: Int!
    password: String!
    typeUser: typeUser!
  }
  type Product {
    _id: ID!
    nombre: String!
    descripcion: String!
    precioCompra: Float!
    precioVenta: Float!
    cantidad: Int!
  }
  type facturaVenta {
    _id: ID!
    listaProductosVendidos: [Product!]!
    total: Float!
  }
  type facturaCompra {
    _id: ID!
    listaProductosVendidos: [Product!]!
    total: Float!
  }
  type Empresa {
    _id: ID!
    nombre: String!
    email: String!
    password: String!
    listUsers: [User!]!
    listProduct: [Product!]!
    listFacturaVenta: [facturaVenta!]!
    listFacturaCompra: [facturaCompra!]!
  }
  type Query {
    hello: String!
  }
  type prueva {
    hello: String!
  }
  type Mutation {
    LogUp(nombre:String!,email:String!,password:String!): token!
  }
`;
type datosEmpresa = {
  email: string;
  password: string;
  nombre: string;
}
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
  Mutation: {
    LogUp: async (_parent: any, args: datosEmpresa, context: any) => {
      const { email, password, nombre } = args;
      console.log(args)
      const newEmpresa = await createANewEmpresa({
        nombre,
        email,
        password,
        listUsers:[]
      })

      const token = jwt.sign({
        id: newEmpresa?._id,
      },process.env.SERCRET_KEY_JWT as string)
      return {
        token
      };
    }
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
