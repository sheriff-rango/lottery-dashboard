import React from "react";
import "./App.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 95px);
  display: flex;
  color: white;
`;

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <PageLayout>
          <Sidebar />
          <Main />
        </PageLayout>
      </Router>
    </div>
  );
}

export default App;
