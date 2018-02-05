import * as React from 'react';
import Button from './Button';

type Props = {
  children: React.Node,
};

const SubmitField = (props: Props) => (
  <div className="field">
    <div className="control">
      <Button buttonType="submit">
        {props.children}
      </Button>
    </div>
  </div>
);

export default SubmitField;
