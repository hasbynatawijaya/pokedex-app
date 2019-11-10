import React from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <div>
      <Menu stackable>
        <Menu.Item name="Pokedex" active={false} />
        <Menu.Menu position="right"></Menu.Menu>
      </Menu>
    </div>
  );
};

export default Header;
