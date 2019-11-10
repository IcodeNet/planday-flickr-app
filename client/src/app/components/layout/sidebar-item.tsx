import React from 'react';
import propTypes from 'prop-types';

const SideBarItem  = ({
  icon,
  label,
  selected,
  iconColor
}) => {
  return (
    <a className={selected ? 'selected' : ''}>
      {icon && <span className="icon"><i className={`${icon} ${iconColor ? iconColor : ''}`}></i></span>}
      <span className="label">{label}</span>
      <span className="icon"><i className="icon-chevron-right icon-sm"></i></span>
    </a>
  );
}

SideBarItem.propTypes = {
  icon: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  selected: propTypes.bool.isRequired,
  iconColor: propTypes.string.isRequired

}

export default SideBarItem;