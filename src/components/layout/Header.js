import React from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <div>
      <Menu stackable>
        <Menu.Item name="Pokedex" active={true} />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search Pokemon..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Header;
