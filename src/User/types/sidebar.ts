export type Sublist = {
  _id: number;
  title: string;
  path: string;
};

export type sidebarItem = {
  _id: number;
  title: string;
  path?: string;
  subList?: sidebarItem[];
};

export type sidebarList = sidebarItem[];
