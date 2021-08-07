import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * A component that groups Buttons together, separated by borders.
 */
const ButtonGroup = ({ className, children, id, label, width = "full" }) => {
  return (
    <div className={className} id={id} role="group" aria-label={label}>
      {children !== undefined
        ? React.Children.map(children, (child, i) =>
            child
              ? React.cloneElement(child, {
                  key: i,
                  className: child.props.className
                })
              : child
          )
        : null}
    </div>
  );
};

ButtonGroup.propTypes = {
  /** Controls the width of the ButtonGroup. (`'full'` by default.)  */
  width: PropTypes.oneOf(["auto", "full", "half"]),
  /** A descriptive string to be passed to the `aria-label` HTML attribute. */
  label: PropTypes.string,
  /** The Button components to be included in the Group. */
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element
  ]).isRequired,
  /** The HTML id attribute to associate with the ButtonGroup wrapper. */
  id: PropTypes.string,
  /** Extra CSS class names to add to the ButtonGroup wrapper. */
  className: PropTypes.string
};

export default styled(ButtonGroup)`
  display: inline-flex;
  vertical-align: middle;

  border-top-width: 0;
  border-bottom-width: 0;
  box-shadow: none;

  > * {
    flex: 0 1 auto;
    min-width: 0;

    // First Element in Button Group
    // Apply correct border color and radius to the first element in a btn-group
    &:first-child:not(:only-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    // Middle Elements in Button Group
    // Apply correct border color and radius to the middle elements in a btn-group
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }

    // Last Element in Button Group
    // Apply correct border color and radius to the last element in a btn-group
    &:last-child:not(:only-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
`;
