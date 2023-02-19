import React from 'react';

import styles from './styles';

type Option = {
  id: number;
  name: string;
};
type Props = {
  options: Option[];
  onOptionChange: () => void;
  selectedOption: number;
};

const INITIAL_OPTION_LABEL = '選択されていません';

const SelectInput: React.FC<Props> = ({
  options,
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
        {options.map((option, index) => (
          <option key={option.id} value={index}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
