export type TPosts = {
  breaking?: boolean;
  categories?: { text?: string; path?: string };
  regions?: string;
  date?: string;
  time?: string;
  id?: number;
  title?: string;
  img?: string;
  isSave?: boolean;
  text?: string;
  description?: any | string;
};

export type TGovernor = {
  img?: string;
  name?: string;
  yearOfAppointment?: string;
  title?: string;
};

export type TRegion = {
  path?: string;
  title?: string;
  img?: string;
  aboutState?: string;
  population?: string;
  area?: { size?: string; text?: string };
  governor?: TGovernor;
};

export type TPhoto = {
  region: string;
  date: string;
  id: number;
  title: string;
  img: string;
  price: string;
  size: string;
  pixels: string;
  author: string;
  category: string;
};

export type TAudioData = {
  id: number;
  img: string;
  date: string;
  time: string;
  title: string;
  audio: string;
};

export type TAudio = {
  activeAudioId: number;
  data: TAudioData[];
};
