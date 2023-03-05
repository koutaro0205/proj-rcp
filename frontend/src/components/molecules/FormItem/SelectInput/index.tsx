import React from 'react';

import styles from './styles';

type Option = {
  id: number;
  name: string;
};
type Props = {
  options: readonly Option[];
  initialOptionLabal?: string;
  onChangeOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOptionIndex: number;
  name: string;
};

const INITIAL_OPTION_LABEL = '選択されていません';

const SelectInput: React.FC<Props> = ({
  options,
  initialOptionLabal = INITIAL_OPTION_LABEL,
  onChangeOption,
  selectedOptionIndex,
  name,
}) => {
  return (
    <div className={styles.container}>
      <select
        className={styles.selector}
        onChange={onChangeOption}
        value={selectedOptionIndex}
        name={name}
      >
        <option value={0}>{initialOptionLabal}</option>
        {options.map((option, index) => (
          <option key={option.id} value={index + 1}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
