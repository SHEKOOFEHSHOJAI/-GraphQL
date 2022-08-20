import React from "react";
import {useQuery,gql}from '@apollo/client';
import { logDOM } from "@testing-library/react";
// useQuery fetch data ,make query

const QUERY_ALL_USERS = gql`
  query getAllUser {
    user {
      id
      name
      age
      username
      nationality
    }
  }
`;
const DisPlayData = () => {

const {data,loading,error}=useQuery(QUERY_ALL_USERS);

if(loading){
    return <h1>DATA IS LOADING</h1>
}
if(data){
    <h1>hi</h1>
    console.log("okkk");
console.log(data)

}
if(error){
    console.log(error)
}
    return( <div>{data && data.user.map((user)=>{

        return (
          <div>
            <h1>Name:{user.name}</h1>
            <h1>Username:{user.username}</h1>
            <h1>Age:{user.age}</h1>
            <h1>Nationality:{user.nationality}</h1>
          </div>
        );
    })}</div>
        
    )
}
 
export default DisPlayData;