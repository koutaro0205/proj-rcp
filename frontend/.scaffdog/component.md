---
name: 'component'
description: 'Generate standard React component.'
root: 'src/'
output: './components'
ignore: []
questions:
  name: 'Please enter component name'
  variant:
    message: 'Please select a directory name'
    choices:
      - 'atoms'
      - 'molecules'
      - 'organisms'
      - 'templates'
      - 'layouts'
---

# `{{ inputs.variant | lower }}/{{ inputs.name | pascal }}/index.tsx`

```tsx
import React from 'react';

import styles from './styles';

type Props = {
  children: string;
};

const {{ inputs.name }}: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default {{ inputs.name }};

```

# `{{ inputs.variant | lower }}/{{ inputs.name | pascal }}/styles.ts`

```ts
import { css } from '@emotion/css';

const styles = {
  container: css({}),
};

export default styles;

```
