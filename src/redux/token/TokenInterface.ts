export interface tokenReducerInterface {
  token: tokenDataInterface;
  error: Error;
}

export interface tokenActionInterface {
  type: string;
  token?: tokenDataInterface;
  error?: string;
}

export interface tokenDataInterface {
  value: string;
}
