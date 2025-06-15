import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

import { deleteUser } from "../main";

const usersSlice = createSlice({
    name :'users',
    initialState :{
      data:[] , 
      isLoading :false,
      error :  null
    },
   reducers:{
    //  DeleteUser(state,action){
    //   state.data = state.data.filter((user) => user.id !== action.payload);
    //  },
   },

   extraReducers(buildder){
    buildder.addCase(fetchUsers.pending,(state)=>{
     state.isLoading = true;
    });
    buildder.addCase(fetchUsers.fulfilled ,(state,action)=>{
      state.isLoading = false ;
      state.data = action.payload ;
    });
    buildder.addCase(fetchUsers.rejected ,(state,action)=>{
        state.isLoading = false;
        state.error = action.error
    });
    buildder.addCase(addUser.pending,(state)=>{
      state.isLoading= true;
    });
    buildder.addCase(addUser.fulfilled,(state,action)=>{
      state.isLoading= false;
      state.data.push(action.payload);
    });
    buildder.addCase(addUser.rejected,(state,action)=>{
      state.isLoading= false;
      state.error = action.error
    });
    buildder.addCase(deleteUser.pending,(state)=>{
      state.isLoading= true;
    });
    buildder.addCase(deleteUser.fulfilled,(state,action)=>{
     state.isLoading=false
     state.data =state.data.filter(user =>user.id!== action.payload)
    });
    buildder.addCase(deleteUser.rejected,(state,action)=>{
      state.isLoading= false;
      state.error = action.error
    });
   


   }
   
})
// export const {DeleteUser} = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
