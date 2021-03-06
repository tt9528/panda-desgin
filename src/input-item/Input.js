import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

class Input extends React.PureComponent {
  static propTypes = propTypes

  static defaultProps = {
    onBlur() { },
    onFocus() { },
  }

  onInputBlur = (e) => {
    const value = e.target.value;
    this.props.onBlur(value);
  }

  onInputFocus = (e) => {
    const value = e.target.value;
    this.props.onFocus(value);
  }

  focus = () => {
    this.inputRef.focus();
  }

  render() {
    const { onBlur, onFocus, ...restProps } = this.props;
    return (
      <input
        ref={el => (this.inputRef = el)}
        onBlur={this.onInputBlur}
        onFocus={this.onInputFocus}
        {...restProps}
      />
    );
  }
}

export default Input;
