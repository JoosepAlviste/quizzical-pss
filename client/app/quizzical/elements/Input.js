import React from 'react';

type Props = {
  value: string,
  type: string,
  name: string,
  onChange: (Event) => void,
};

const Input = (props: Props) => (
  <input
    className="input"
    id={props.name}
    name={props.name}
    type={props.type}
    value={props.value}
    onChange={props.onChange}
  />
);

export default Input;
