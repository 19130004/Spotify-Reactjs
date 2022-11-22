import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSongById, selectSong } from "../store/slice/SongSlice";
import { selectSongs } from "../store/slice/SongsSlice";
const Playing = () => {
  const dispatch = useDispatch();
  const { song } = useSelector(selectSong);
  const { songs } = useSelector(selectSongs);
  const handleClickNext = () => {
    if (song.id === songs[songs.length - 1].id) {
      dispatch(getSongById(songs[0].id));
    } else {
      dispatch(getSongById(song.id + 1));
    }
  };
  const handleClickPrev = () => {
    if (song.id === 0) {
      dispatch(getSongById(songs.length - 1));
    } else {
      dispatch(getSongById(song.id - 1));
    }
  };

  return (
    <div>
      <AudioPlayer
        className="player-music"
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        src={song.url}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      ></AudioPlayer>
    </div>
  );
};
export default Playing;
