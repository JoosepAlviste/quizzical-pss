import * as React from 'react';

type Props = {
  children: React.Node,
  type?: string,
  buttonType?: string,
  onClick?: (Event) => void,
  className?: string,
};

const Button = (props: Props) => {
  const {
    type,
    buttonType,
    className,
    onClick,
  } = props;

  return (
    <button
      className={`button is-${type} ${className}`}
      type={buttonType}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
  buttonType: 'button',
  onClick: () => null,
  className: '',
};

export default Button;
