import * as React from 'react';
import Button from './Button';
import styles from './MainActionButton.scss';

type Props = {
  buttonType?: string,
  children: React.Node,
};

const MainActionButton = (props: Props) => (
  <div className={`has-text-centered ${styles.container}`}>
    <Button
      buttonType={props.buttonType}
      type="primary"
      className="button--main-action"
    >
      {props.children}
    </Button>
  </div>
);

MainActionButton.defaultProps = {
  buttonType: 'button',
};

export default MainActionButton;
