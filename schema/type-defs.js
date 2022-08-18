// let writeen
// covert to graphql
const {gql}=require("apollo-server");


const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
  }
  type Query {
    user: [User!]!
    users(id:ID!):User!
  }
  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;
module.exports={typeDefs};