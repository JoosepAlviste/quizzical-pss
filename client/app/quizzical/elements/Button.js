import * as React from 'react';

type Props = {
  children: React.Node,
  type?: string,
  buttonType?: string,
  onClick?: (Event) => void,
};

const Button = (props: Props) => {
  const { type, buttonType } = props;

  return (
    <button
      className={`button is-${type}`}
      type={buttonType}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
  buttonType: 'button',
  onClick: () => null,
};

export default Button;
