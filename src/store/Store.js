import { configureStore } from "@reduxjs/toolkit";
import { songsSlice } from "./slice/SongsSlice";
import { songSlice } from "./slice/SongSlice";
export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    song: songSlice.reducer,
  },
});
