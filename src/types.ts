export type Id = string | number;

export type Task = {
  id: Id;
  columnId: Id;
  content: string;
};

export interface ITEM {
  type: string;
  ID: string;
}
