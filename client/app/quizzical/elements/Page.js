import * as React from 'react';
import BackButton from './BackButton';

type Props = {
  children: React.Node,
  title?: string,
  showBackButton?: boolean,
};

const Page = (props: Props) => (
  <div className="page--padding-top">
    <div className="container">
      {props.showBackButton && <BackButton />}

      <h1 className="title has-text-centered">{props.title}</h1>

      {props.children}
    </div>
  </div>
);

Page.defaultProps = {
  showBackButton: true,
  title: '',
};

export default Page;
