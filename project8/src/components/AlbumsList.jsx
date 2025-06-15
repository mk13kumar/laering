import React, { use } from 'react'
import { useFetchAlbumsQuery } from '../store/main';
import Skeleton from './Skeleton';

import Button from './Button';
import { useAddAlbumMutation } from '../store/main';
import AlbumListItem from './AbbumListItem';


const AlbumsList = ({user}) => {
  const {data,error ,isFetching}= useFetchAlbumsQuery
  (user);
  //  data is coming from server by using RTK query
  // error is error 
  //  is Loading is boolean (true is false)

 const [addAlbum,results]= useAddAlbumMutation();
//  console.log(results)

 const handleAddAlbums=()=>{
  addAlbum(user)
 }

  let content;

  if (isFetching) {
    content = <Skeleton className='h-10 w-full'  itmes={6}/>;
  } else if (error) {
    content = <div>Error loading albums...</div>;
  } else if (data) {
    content = data.map((album) => (
      <AlbumListItem key={album.id} album={album} />
    ));
  }



  return (
    <div>
      <div className='m-2 flex flex-row item-center justify-between'>
        <h3 className='text-lg font-bold'>Albums for : {user.name} </h3>
      
      <Button loading={results.isLoading} onClick={handleAddAlbums}>
        + Add Album
        </Button> 
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumsList;