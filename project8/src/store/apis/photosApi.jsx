import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3006",
  }),
  tagTypes: ["Photo", "AlbumPhotos"],  // Important for invalidation
  endpoints(builder) {
    return {
      // ✅ FETCH PHOTOS for a given album
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags =
            result?.map((photo) => ({
              type: "Photo",
              id: photo.id,
            })) || [];
          
          // Provide tags for both album and individual photos
          return [
            { type: "AlbumPhotos", id: album.id },
            ...tags
          ];
        },
        query: (album) => ({
          url: "/photos",
          method: "GET",
          params: {
            albumId: album.id,
          },
        }),
      }),

      // ✅ ADD PHOTO to album
      addPhotos: builder.mutation({
        query: (album) => ({
          url: "/photos",
          method: "POST",
          body: {
            albumId: album.id,
            url: faker.image.urlPicsumPhotos({ width: 150, height: 150 }),
          },
        }),
        // Invalidate the AlbumPhotos tag so RTK Query will re-fetch the album's photos
        invalidatesTags: (result, error, album) => [
          { type: "AlbumPhotos", id: album.id },
        ],
      }),
      

     
      removePhoto: builder.mutation({
        query: (photo) => ({
          url: `/photos/${photo.id}`,
          method: "DELETE",
        }),
        invalidatesTags: (result, error, photo) => [
          { type: "Photo", id: photo.id },
          { type: "AlbumPhotos", id: photo.albumId }, // Important to invalidate the AlbumPhotos tag as well
        ],
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotoMutation,
} = photosApi;

export { photosApi };

