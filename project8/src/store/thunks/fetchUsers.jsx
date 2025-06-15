import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('',async()=>{
 const response = await axios.get('http://localhost:3006/users');
   
 await pause(1000)
  return response.data;
});

const pause =(Tduration)=>{
    return new Promise((resolve)=>{
       setTimeout(resolve,Tduration)
    });
}
  

export{fetchUsers};