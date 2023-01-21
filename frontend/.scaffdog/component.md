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

type Props = {};

const {{ inputs.name }}: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>

    </div>
  );
};

export default {{ inputs.name }};

```

# `{{ inputs.variant | lower }}/{{ inputs.name | pascal }}/styles.ts`

```ts
import { css } from '@emotion/css';

const styles = {
  container: {},
};

export default styles;

```
