import facepaint from 'facepaint';

import { breakpoints } from '@/theme/breakpoints';

export const mq = facepaint(
  Object.values(breakpoints).map((bp) => `@media (min-width: ${bp}px)`)
);
