
const typeDefs = `#graphql

  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    category: String!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      name: String!
      description: String!
      price: Float!
      category: String!
    ): Product!

    updateProduct(
      id: ID!
      name: String
      description: String
      price: Float
      category: String
    ): Product

    deleteProduct(id: ID!): Product
  }
`;

export default typeDefs;