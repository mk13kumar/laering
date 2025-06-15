import React from 'react'
import ExpandablePanel from './ExpandablePanel';
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from './Button';
import { useRemoveAlbumMutation } from '../store/main';
import PhotosList from './PhotosList';
const AlbumListItem = ({album}) => {
  const [removeAlbum ,result]= useRemoveAlbumMutation()
   const handleRemoveAlbum=()=>{
    removeAlbum(album)
   }
  const  header = <>
    <Button className='mr-2' loading={result.isLoading} onClick={handleRemoveAlbum}>
      <RiDeleteBin6Line/>
    </Button>
    {album.title}
    </>
  return <ExpandablePanel key ={album.id} header={header}>
   <PhotosList album={album}/>
  </ExpandablePanel>
}

export default AlbumListItem;