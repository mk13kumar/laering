import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Button from './Button';
import { useRemovePhotoMutation } from '../store/main';

const PhotosListItem = ({ photo }) => {
  const [removePhoto, result] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    console.log(photo.id)
    removePhoto(photo);
  };

  return (
    <div  onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <img
        src={photo.url}
        alt="random"
        className="h-20 w-20 "
      />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-100  opacity-0 hover:opacity-80">
        
          <RiDeleteBin6Line className="text-red-600" />
      
      </div>
    </div>
  );
};

export default PhotosListItem;
