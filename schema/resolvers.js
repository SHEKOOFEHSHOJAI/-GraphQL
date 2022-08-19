const {UserList,MovieList}=require("../FakeData")
// amalyt with database
const _=require('lodash')
const resolvers = {
  Query: {
    user: () => {
      // connect database to api
      return UserList;
    },
    users: (parent, arg) => {
      const id = arg.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    movies: () => {
      return MovieList;
    },
    movie: (parent, arg) => {
      const name = arg.name;
      const movie = _.find(MovieList, { name: name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return _.filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },

  Mutation: {
    createUser:(parent,arg)=>{
        const user=arg.Input;
        console.log(user)
        // return user
    }
  },
};

module.exports = { resolvers };