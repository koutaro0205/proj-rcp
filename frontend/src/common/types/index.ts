export type EmptyObject = { [key: string]: never };

export type StatusCode =
  | 'ok'
  | 'unprocessable_entity'
  | 'created'
  | 'unauthorized';
