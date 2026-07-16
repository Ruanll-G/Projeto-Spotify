import { Link } from 'react-router-dom';
/*import Song from '../pages/Song';*/
import type { TypeSongItem } from '../types';

const SongItem = ({ image, name, duration, /*artist,*/ /*audio,*/ _id, index }: TypeSongItem) => {
  return (
    <Link to={`/song/${_id}`} className='song-item'>
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img src={image} alt={`Imagem da Música ${name}`} />
          <p className='song-item__name'>{name}</p>
        </div>  
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;