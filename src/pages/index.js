import { Route, Switch, Redirect } from "react-router-dom";
import * as ROUTES from '../shared/api/routes';
import ClientLandingPage from './landing';

export const Routing = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LANDING} component={ClientLandingPage} />
      <Redirect to="/" />
    </Switch>
  );
};
