export interface IMenu {
  items: IMenuItem[];
}

export interface IMenuItem {
  link?: string;
  text: string;
  translate: string;
  icon?: string;
  children?: IMenuItem[];
}
