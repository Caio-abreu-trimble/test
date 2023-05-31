import React from "react";
import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to={"/home"}>Start</Link>
        </li>
        <li>
          <Link to={"/param/123"}>Param #01</Link>
        </li>
        <li>
          <Link to={"/param/cool"}>Param #02</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/notExist"}>Not exist</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
