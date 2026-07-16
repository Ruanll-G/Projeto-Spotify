import SongItem from './SongItem';
import type { TypeSongList } from '../types'
import { useState } from 'react';

const SongList = ({ songsArray }: TypeSongList) => {
  const [items, setItems] = useState(5);

  return(
    <div className="song-list">
      {songsArray .filter((_, index) => index < items).map((currentSongObj, index) => (
        <SongItem {...currentSongObj} index={index} key={currentSongObj._id}/>
      ))}

      <p className="song-list__see-more" onClick={() => {setItems(items + 5);}}>
        Ver Mais
      </p>
    </div>
  );
};

export default SongList