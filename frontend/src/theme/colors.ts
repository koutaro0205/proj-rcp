export type Color = keyof typeof colors;

const colors = {
  PrimaryColor: '#f9b69c',
  baseColor: '#e25d6e',
  background: '#fff0db',
  transparent: 'transparent',
  black: '#333333',
  alto: '#DDDDDD',
  cream: '#F3F3F3',
  white: '#FFFFFF',
  grey: '#555555',
  favorite: 'gold',
  error: 'red',
  logo: '#db3340',
} as const;

export default colors;
