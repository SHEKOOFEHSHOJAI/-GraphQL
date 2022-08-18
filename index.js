
// run api
const {ApolloServer}=require("apollo-server")
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

// call 
// typeDefs each query   
// resolve each function  make call to api make call to database
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url})=>{
 console.log(`(YOUR API IS RUNNING :) ${url}`)
})