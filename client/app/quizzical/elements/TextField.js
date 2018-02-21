// @flow
import * as React from 'react';
import Input from './Input';

type Props = {
  label: string,
  name: string,
  value: string,
  onChange: (Event) => void,
  type?: string,
};

const TextField = (props: Props) => (
  <div className="field">
    <label className="label" htmlFor={props.name}>
      {props.label}
      <div className="control">
        <Input
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </label>
  </div>
);

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
