import React from 'react';

type Props = {
  isActive: boolean,
  title: string,
  children: React.Node,
  footerContent: React.Node,
};

const Modal = (props: Props) => (
  <div className={`modal ${props.isActive && 'is-active'}`}>
    <div className="modal-background" />
    <div className="modal-card">
      <header className="modal-card-head">
        <h2 className="subtitle">{props.title}</h2>
      </header>
      <div className="modal-card-body has-text-centered">
        {props.children}
      </div>
      <footer className="modal-card-foot">
        {props.footerContent}
      </footer>
    </div>
  </div>
);

export default Modal;
