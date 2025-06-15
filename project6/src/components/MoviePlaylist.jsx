import React from 'react'
import { useDispatch,useSelector  } from 'react-redux'
import { addMovie, removeMovie } from '../store/main'




const moviesList=[
    {movie:'Movie1',id:0},
    {movie:'Movie2',id:1},
    {movie:'Movie3',id:2},
]


const getMovie=()=>{
   const movie = moviesList[Math.floor(Math.random()*moviesList.length)]
   return movie.movie;
      
     
      
}


const MoviePlaylist = () => {
    const dispatch= useDispatch()

    const moviePlaylist = useSelector((state)=>{
        // console.log(state.movie)
        return state.movie;
    })

    const handleMovieAdd = (movie) => {
       dispatch(addMovie(movie))    
    };
    const handleMovieRemove = (movie) => {
       dispatch(removeMovie(movie))
    };
  
    const renderedMovies = moviePlaylist.map((movie,index) => {
        // console.log(movie)
      return (
        <li key={index+1}>
          {movie}
          <button
            onClick={() => handleMovieRemove(movie)}
            className="button is-danger"
          >
            X
          </button>
        </li>
      );
    });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(getMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  )
}

export default MoviePlaylist