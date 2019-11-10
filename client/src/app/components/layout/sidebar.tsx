import React from 'react';

import SideBarItem from './sidebar-item';
import LinkMenu from './link-menu';

import './sidebar.style.scss';

const SIDEBAR_ITEMS = {
  "Home": "icon-home",
  "Explore": "icon-images",
  "Trending": "icon-activity",
  "Events": "icon-heart1",
}


const SIDEBAR_ITEMS_COLORS = {
  "Events": "red",
  "Trending": "base-blue",
  
}

const QUICK_LINKS = {
  "My Account": "icon-user",
}

const USEFUL_LINKS = {
  "What's New": "",
  "Live Help": "",
  "Settings": "",
  "Contact Us": "",
  "Help": "",
  "Blog": "",
  "T&Cs": "",
  "Cookie Policy": "",
  "Privacy Policy": "",
  "Feedback": "",
  "Careers": "",
  "Events": "",
  "About Us": ""
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-menu">
      {
        Object.keys(SIDEBAR_ITEMS).map((k,i) => 
          <SideBarItem 
            key={k}
            selected={i===0}
            label={k} 
            icon={SIDEBAR_ITEMS[k]}
            iconColor={SIDEBAR_ITEMS_COLORS[k]} />
        )
      }
      </div>
      <div className="link-menu">
        <LinkMenu
          title="QUICK LINKS"
          items={QUICK_LINKS} />
      </div>
      <div className="link-menu useful-links">
        <LinkMenu
          title="USEFUL LINKS"
          items={USEFUL_LINKS} />
      </div>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar