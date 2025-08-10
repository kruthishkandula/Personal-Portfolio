import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <ul className="sidebar__list">
        <li className="sidebar__item">Category 1</li>
        <li className="sidebar__item">Category 2</li>
        <li className="sidebar__item">Category 3</li>
      </ul>
    </aside>
  );
}

export default Sidebar;