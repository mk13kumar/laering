import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser =createAsyncThunk('users/add',async()=>{
   const response = await axios.post('http://localhost:3006/users',{
    name :faker.person.firstName()
   }) ;
    //   paus(0.5)
    return response.data
});

// const paus =(Tduration)=>{
//     return new Promise((resolve)=>{
//        setTimeout(resolve,Tduration)
//     })
// }

export {addUser}