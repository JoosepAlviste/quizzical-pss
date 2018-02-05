import * as React from 'react';
import Input from './Input';

type Props = {
  label: string,
  name: string,
  value: string,
  onChange: (Event) => void,
};

const TextField = (props: Props) => (
  <div className="field">
    <label className="label" htmlFor={props.name}>
      {props.label}
      <div className="control">
        <Input
          name={props.name}
          type="text"
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </label>
  </div>
);

export default TextField;
