import React from 'react';
import { useAddPhotosMutation,useFetchPhotosQuery } from '../store/main';
import Button from './Button';
import Skeleton from './Skeleton';
import PhotosListItem from './PhotosListItem';

const PhotoList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotosMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full mb-2" times={5} />;
  } else if (error) {
    content = <div>Error loading photos...</div>;
  } else {
    content = data.map((photo) => (
      <PhotosListItem key={photo.id} photo={photo} />
    ));
  }

  return (
    <div className="ml-4">
      <div className="m-2 flex flex-row items-center justify-between">
        <h2 className="text-sm font-bold">Photos in: {album.title}</h2>
        <Button loading={results.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div 
      className=" flex"
      >
        {content}
      </div>
    </div>
  );
};

export default PhotoList;
