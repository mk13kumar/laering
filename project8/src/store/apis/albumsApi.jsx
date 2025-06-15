import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3006",
  }),
  tagTypes: ["Album", "UsersAlbums"], // Important for invalidation to work
  endpoints(builder) {
    return {
    
      fetchAlbums: builder.query({
        providesTags: (result, error, user) => {
          const tags =
            result?.map((album) => ({
              type: "Album",
              id: album.id,
            })) || [];

          return [
            { type: "UsersAlbums", id: user.id },
            ...tags
          ]
        },
        query: (user) => ({
          url: "/albums",
          method: "GET",
          params: {
            userId: user.id,
          },
        }),
      }),

      
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => [
          { type: "UsersAlbums", id: user.id },
        ],
        query: (user) => ({
          url: "/albums",
          method: "POST",
          body: {
            userId: user.id,
            title: faker.commerce.productName(),
          },
        }),
      }),

    
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => [
          { type: "Album", id: album.id },
        ],
        query: (album) => ({
          url: `/albums/${album.id}`,
          method: "DELETE",
        }),
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };

