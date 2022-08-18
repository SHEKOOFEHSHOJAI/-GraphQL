const {UserList}=require("../FakeData")
// amalyt with database
const _=require('lodash')
const resolvers={

    Query:{
        user:()=>{
            // connect database to api
            return UserList
        },
        users:(parent,arg)=>{
          const id= arg.id
          const user=_.find(UserList,{id:Number(id)})
          return user;
        }

    }
}

module.exports = { resolvers };