/* eslint-disable jsx-a11y/label-has-for */
// @flow
import * as React from 'react';
import styles from './TextArea.scss';

type Props = {
  value: string,
  onChange: (string) => null,
  name?: string | null,
  id?: string | null,
  placeholder?: string,
  children?: React.Node | null,
};

class TextArea extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.textarea.setAttribute('style', `height: ${this.textarea.scrollHeight}px; overflow-y: hidden;`);
    this.textarea.setAttribute('style', 'overflow-x: hidden;');
  }

  handleChange(e) {
    this.props.onChange(e.target.value);

    this.textarea.style.height = 'auto';
    this.textarea.style.height = `${this.textarea.scrollHeight + 1}px`;
  }

  render() {
    const {
      id, value, name, placeholder, children,
    } = this.props;

    return (
      <div className={styles.field}>
        {children}
        <div className={`${styles.container} ${this.state.focused ? styles.isFocused : ''}`}>
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
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

TextArea.defaultProps = {
  id: null,
  name: null,
  placeholder: '',
  children: null,
};

export default TextArea;
