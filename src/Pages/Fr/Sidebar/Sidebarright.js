import React from 'react';

function Sidebarright() {
    return (
        <aside className="sidebar">
            <div className="sidebar-content">
            <h2>Menu</h2>
            <ul>
                <li><a href="/page1">Page 1</a></li>
                <li><a href="/page2">Page 2</a></li>
                <li><a href="/page3">Page 3</a></li>
                <li><a href="/page4">Page 4</a></li>
            </ul>
            </div>
            <div className="sidebar-widget">
            <h2>Dernières Actualités</h2>
            <ul>
                <li><a href="/actualite1">Actualité 1</a></li>
                <li><a href="/actualite2">Actualité 2</a></li>
                <li><a href="/actualite3">Actualité 3</a></li>
            </ul>
            </div>
      </aside>
    );
  }
  
  export default Sidebarright;
  