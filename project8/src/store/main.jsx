import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

 const store = configureStore({
  reducer:{
    users : usersReducer,
    // albums : albumsApi.reducer
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,    
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware()
    .concat(albumsApi.middleware)
    .concat(photosApi.middleware)
  }
})
 setupListeners(store.dispatch) 

export {store} ;

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';
export {useFetchAlbumsQuery ,useAddAlbumMutation,useRemoveAlbumMutation} from './apis/albumsApi';
export
  {
    useFetchPhotosQuery,
    useAddPhotosMutation,
    useRemovePhotoMutation,
   } from'./apis/photosApi';




