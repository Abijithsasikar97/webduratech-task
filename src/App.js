import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Launches from "./components/Views/Launches";
import Rockets from "./components/Views/Rockets";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <MainWrapper>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Router>
        <Switch>
          <Route>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/launches" />;
              }}
            />
            <Route exact path="/launches" component={Launches} />
            <Route exact path="/rockets" component={Rockets} />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

export default App;
