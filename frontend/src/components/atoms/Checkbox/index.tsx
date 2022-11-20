import React from 'react';

type Props = {
  name: string;
  type: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<Props> = ({ name, type, id, onChange }) => {
  return <input type={type} name={name} id={id} onChange={onChange} />;
};

export default Checkbox;
