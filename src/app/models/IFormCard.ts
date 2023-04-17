export interface IForm {
  title: string;
  date: string;
  type: string;
  developer: boolean;
  gender: string;
  file: FileList;
}

export interface IFormCard {
  title: string;
  date: string;
  type: string;
  developer: boolean;
  gender: string;
  image: string;
}

export interface IFormCardList {
  formCardList: IFormCard[];
}
