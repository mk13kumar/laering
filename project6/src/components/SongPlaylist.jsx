import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addSong,removeSong } from '../store/main';


const songsList=[
    { song: "Song 1", id: 1 },
    { song: "Song 2", id: 2 },
    { song: "Song 3", id: 3 }, 
]

const getRandomSong =()=>{
   const song = songsList[Math.floor(Math.random() * songsList.length)];
   return song.song
}


    





const SongPlaylist = () => {
    const  dispatch = useDispatch();

    const songPlaylist =useSelector((state)=>{
        // console.log(state.songs)
        return state.songs
    })
   

    

    const handleSongAdd = (song) => {
       dispatch(addSong(song))
    
    };
    const handleSongRemove = (song) => {
        // console.log(song)
      dispatch(removeSong(song))
    };
  
    const renderedSongs = songPlaylist.map((song,index) => {
       
      return (
        <li key={index+1}>
          {song}
          <button
            onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={()=>handleSongAdd(getRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  )
}

export default SongPlaylist