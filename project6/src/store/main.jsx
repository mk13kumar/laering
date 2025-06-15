import { configureStore} from "@reduxjs/toolkit";
import { movieReducer ,addMovie,removeMovie} from "./slices/moviesSlice";
import { songsReducer,addSong,removeSong } from "./slices/songsSlice";
import { reset } from "./actions";


// console.log(reset())




// console.log( 'createSlice',songsSlice)
 const store = configureStore({
    reducer:{
      songs : songsReducer,
      movie : movieReducer
    }
 });

 
//  console.log(store.getState())

 export {store};
 export {reset,addSong,removeSong,addMovie,removeMovie};

// console.log(movieSclice.actions.reset.toString())

//  console.log( 'store',store)

//  const startingState = store.getState();
//  console.log(JSON.stringify(startingState))

//  store.dispatch(songsSlice.actions.addSong('new songs'))

//  const finnalState = store.getState();
//  console.log(JSON.stringify(finnalState))

