import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/songs.json";
export const songSlice = createSlice({
  name: "song",
  initialState: {
    song: {
      name: "",
      author: "",
      url: "",
      id: null,
      links: {
        images: [
          {
            url: "",
          },
          {
            url: "",
          },
        ],
      },
    },
  },
  reducers: {
    getSongById: (state, action) => {
      state.song = data.find((song) => song.id === action.payload);
    },
  },
});
export const { getSongById } = songSlice.actions;
export const selectSong = (state) => state.song;
