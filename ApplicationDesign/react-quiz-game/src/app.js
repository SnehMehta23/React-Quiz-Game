import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import AboutPage from "./about/about-page";
import DemosPage from "./demos/demos-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      {/* Order matters with Routes*/}
      {/* Switch enforces that only ONE route can be matched */}
      <Switch>
        {/* Route allows you to conditionally render children based on router's path */}
        <Route path="/" exact>
          {/* Put whatever you want to render for this Route here. */}
          <HomePage />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/demos">
          <DemosPage />
        </Route>
      </Switch>
      <PageFooter />
    </BrowserRouter>
  );
}
export default App;
