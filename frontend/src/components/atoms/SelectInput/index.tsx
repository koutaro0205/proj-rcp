import React from 'react';

import styles from './styles';

type Data = {
  id: number;
  name: string;
};
type Props = {
  array: Data[];
  onOptionChange: () => void;
  selectedOption: string;
};

const INITIAL_OPTION_LABEL = '選択されていません';

const SelectInput: React.FC<Props> = ({
  array,
  onOptionChange,
  selectedOption,
}) => {
  return (
    <div className={styles.container}>
      <select
        className={styles.selector}
        onChange={onOptionChange}
        value={selectedOption}
      >
        <option value={0}>{INITIAL_OPTION_LABEL}</option>
        {array.map((arr, index) => (
          <option key={arr.id} value={index}>
            {arr.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
