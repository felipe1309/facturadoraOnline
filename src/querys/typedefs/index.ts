import { gql } from "apollo-server-micro";
export const typeDefs = gql`
enum typeUser {
    admin
    user
  }
  type token {
    value: String!
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
`

