import React from "react";
import PropTypes from "prop-types";

/**
 * A welcome text
 */
function Input(props) {
  const { disabled, value, type } = props;
  return <input type={type} value={value} disabled={disabled}></input>;
}

Input.propTypes = {
  /**
   * The value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The type of input
   */
  type: PropTypes.oneOf(["text", "number"]),
  /**
   * A way to disable
   */
  disabled: PropTypes.bool
};

Input.defaultProps = {
  type: "text"
};

export default Input;
