// import React, { useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import Playing from "./components/Playing";
// import { Songs } from "./Context";
// import DataSongs from "./data/songs.json";
import { Provider } from "react-redux";
import { store } from "./store/Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong />
        </div>
        <Playing />
      </Provider>
    </div>
  );
}

export default App;
