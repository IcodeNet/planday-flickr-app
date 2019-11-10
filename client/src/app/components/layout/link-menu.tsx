import React, { Fragment } from 'react';
import propTypes from 'prop-types';

import SidebarItem from './sidebar-item';

const LinkMenu = ({ title, items }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      {
        Object.keys(items).map(k =>
          <SidebarItem
            key={k}
            selected={false}
            label={k}
            icon={items[k]} />
        )
      }
    </Fragment>
  );
};

LinkMenu.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.array.isRequired
}

export default LinkMenu;