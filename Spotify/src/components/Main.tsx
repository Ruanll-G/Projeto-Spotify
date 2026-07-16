import { artistsArray } from '../../api/api';
import { songsArray } from '../../api/api';
import type { MainProps } from '../types';
import ItemList from './ItemList';

const Main = ({ type }: MainProps) => {
  return (
    <div className="main">
      {
        type === 'artists' || type === undefined ? (
            <ItemList
              title="Artists"
              items={10}
              itemsArray={artistsArray}
              path="/artists"
              idPath="/artist"
            />
        ) : null
      }
      {
        type === 'songs' || type === undefined ? (
          <ItemList
            title="Songs"
            items={20}
            itemsArray={songsArray}
            path="/songs"
            idPath="/song"
          />
        ) : null
      }
    </div>
  );
};

export default Main;