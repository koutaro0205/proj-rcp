export type Color = keyof typeof colors;

const colors = {
  PrimaryColor: '#DED36E',
  baseColor: '#C6020C',
  background: '#fff0db',
  transparent: 'transparent',
  black: '#000000',
  alto: '#DDDDDD',
  cream: '#F3F3F3',
  white: '#FFFFFF',
  grey: '#555555',
  favorite: 'gold',
  error: 'red',
} as const;

export default colors;
