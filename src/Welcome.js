import React from "react";
import PropTypes from "prop-types";

/**
 * A welcome text
 */
function Welcome(props) {
  const { disabled } = props;
  return (
    <h1 style={{ opacity: disabled ? 0.2 : 1 }}>
      Hello, {props.name} are you {props.age}?
    </h1>
  );
}

Welcome.propTypes = {
  /**
   * The user's name
   */
  name: PropTypes.string,
  /**
   * The user's age
   */
  age: PropTypes.number.isRequired,
  /**
   * A way to disable
   */
  disabled: PropTypes.bool
};

Welcome.defaultProps = {
  name: "Stranger",
  age: 30
};

export default Welcome;
