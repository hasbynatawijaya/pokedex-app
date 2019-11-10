import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Menu stackable>
        <Link to="/">
          <Menu.Item name="Pokedex" active={false} />
        </Link>
      </Menu>
    </div>
  );
};

export default Header;
