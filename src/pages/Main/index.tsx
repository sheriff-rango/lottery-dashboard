import React from "react";
import { useLocation, Switch, Route, Redirect } from "react-router-dom";

import Routes from "../Routes";
import { Wrapper, PageTitle } from "./styled";

const Main: React.FC = () => {
  return (
    <Wrapper>
      <Switch>
        {Routes.map((route, index) => (
          <Route
            exact
            path={route.url}
            render={() => (
              <>
                <PageTitle>{route.title}</PageTitle>
                {React.createElement(route.component)}
              </>
            )}
          />
        ))}
      </Switch>
    </Wrapper>
  );
};

export default Main;
