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
    createUser: (parent, arg) => {
      const user = arg.Input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      console.log(user);
      return user;
    },

    updateUser: (parent, arg) => {
      // const id = arg.Input.id;
      // const newUsername=arg.Input.newUsername
      const { id, newUsername } = arg.input;
      let userUpdute;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdute = user;
        }
      });
      return userUpdute;
    },
    deleteUser:(parent,args)=>{
      const id=args.id
      _.remove(UserList,(user)=>user.id===Number(id))
      return null;

    }
  },
};

module.exports = { resolvers };