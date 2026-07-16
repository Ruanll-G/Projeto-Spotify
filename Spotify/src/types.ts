export interface MainProps {
  type?: "artists" | "songs";
}

export interface ItensList {
  title: string,
  items: number,
  itemsArray: any[],
  path: string,
  idPath: string;
}

export interface TypePlayer {
  duration: string,
  audio: string,
  randomIdFromArtist: string,
  randomId2FromArtist: string;
}

export interface TypeSingleItem {
  name: string,
  image: string,
  artist: string,
  _id: number,
  idPath: string;
}

export interface TypeSongItem {
  image: string,
  name: string,
  duration: string,
  _id: number,
  index: number;
}

export interface TypeSongList {
  songsArray: any[];
}

export interface Artists {
  _id: string,
  name: string,
  banner: string,
  image:string;
}

export interface Songs {
  _id: string,
  name: string,
  audio: string,
  artist: string,
  duration: string
  image:string;
}