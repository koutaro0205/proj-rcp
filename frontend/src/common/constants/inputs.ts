export type FileType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf';

// NOTE: 必要に応じて増やす。
export type InputType = 'submit' | 'file' | 'email' | 'image' | 'button';
