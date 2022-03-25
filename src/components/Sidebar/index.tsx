import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import Routes from "../../pages/Routes";

import { Wrapper, SidebarItem } from "./styled";

const Sidebar: React.FC = () => {
  let history = useHistory();
  const { pathname } = useLocation();
  return (
    <Wrapper>
      {Routes.map((route, index) => (
        <SidebarItem
          key={index}
          onClick={() => history.push(route.url)}
          checked={pathname.indexOf(route.url) > -1}
        >
          {route.title}
        </SidebarItem>
      ))}
    </Wrapper>
  );
};

export default Sidebar;
