export type EmptyObject = { [key: string]: never };

export type StatusCode =
  | 'ok'
  | 'unprocessable_entity'
  | 'created'
  | 'unauthorized'
  | 'forbidden';

export type ImageInfo = {
  io: string | ArrayBuffer | null;
  filename: string;
};
