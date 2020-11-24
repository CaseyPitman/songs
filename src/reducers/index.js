//Reducers

import { combineReducers } from "redux";

//List of songs
const songsReducer = () => {
  return [
    {
      title: "There, There",
      artist: "Radiohead",
      duration: "5:23",
    },
    {
      title: "Via Chicago",
      artist: "Wilco",
      duration: "5:33",
    },
    {
      title: "I Believe",
      artist: "R.E.M.",
      duration: "3:49",
    },
    {
      title: "The Boy with the Arab Strap",
      artist: "Belle & Sebastian",
      duration: "5:14",
    },
    {
      title: "Exile",
      artist: "Taylor Swift",
      duration: "4:45",
    },
  ];
};

// User selected song
const selectedSongReducer = (selectedSong = null, action) => {
  if (type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

