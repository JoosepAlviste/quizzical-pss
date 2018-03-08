// @flow
/* eslint-disable jsx-a11y/label-has-for */
import * as React from 'react';
import styles from './FloatingLabelTextArea.scss';

type Props = {
  children: React.Node,
  value: string,
  name: string,
  id: string,
  onChange: (string) => null,
};

class FloatingLabelTextArea extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.textarea.setAttribute('style', 'height: 1.5em; overflow-y: hidden;');
    this.textarea.setAttribute('style', 'overflow-x: hidden;');
  }

  handleChange(e) {
    this.props.onChange(e.target.value);

    this.textarea.style.height = 'auto';
    this.textarea.style.height = `${this.textarea.scrollHeight}px`;
    this.textarea.style.width = 'auto';
    this.textarea.style.width = `${this.textarea.scrollWidth}px`;
  }

  render() {
    const {
      id, value, children, name,
    } = this.props;
    const labelClass = `
      ${styles.label} 
      ${this.state.focused ? styles.isFocused : ''} 
      ${value.length ? styles.isDirty : ''}
    `;

    return (
      <div className={`${styles.container}`}>
        <label className={labelClass} htmlFor={id}>
          {children}
        </label>
        <textarea
          className={styles.textarea}
          name={name}
          id={id}
          ref={(textarea) => { this.textarea = textarea; }}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          onChange={this.handleChange}
          onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
          value={value}
          rows="1"
        />
      </div>
    );
  }
}

export default FloatingLabelTextArea;
