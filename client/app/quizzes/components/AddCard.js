// @flow
import * as React from 'react';
import styles from './AddCard.scss';

type Props = {
  children: React.Node,
  onClick: () => null,
};

const AddCard = (props: Props) => (
  <div className={styles.addCard} onClick={props.onClick}>
    {props.children}
  </div>
);

export default AddCard;
