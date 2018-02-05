import * as React from 'react';

type Props = {
  children: React.Node,
  type: string,
};

const Button = (props: Props) => (
  <button className="button is-primary" type={props.type}>
    {props.children}
  </button>
);

export default Button;
