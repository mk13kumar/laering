
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk('users/delete', async (id) => {
 await axios.delete(`http://localhost:3006/users/${id}`);
  
  return  id; // Return the deleted user ID
});

export { deleteUser };
