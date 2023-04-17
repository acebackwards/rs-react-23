export interface IApiResults {
  info: IInfo;
  results: ICard[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICardOrigin;
  location: ICardLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ICardOrigin {
  name: string;
  url: string;
}

interface ICardLocation {
  name: string;
  url: string;
}
