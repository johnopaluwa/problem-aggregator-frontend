export interface problemReducerInterface {
  problems: problemDataInterface[] | null;
  page: number;
}

export interface problemActionInterface {
  type: string;
  problems?: problemDataInterface;
  page?: number;
}

export interface problemDataInterface {
  text: string;
  numberOfHaves: number;
  have: boolean;
}
