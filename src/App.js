import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Dashboard from './containers/Dashboard';
import NotFound from './containers/404';

import Introduction from "./containers/documentation/Introduction";

import Authentication from "./containers/documentation/Authentication";
import Endpoint from "./containers/documentation/Endpoints";
import GetStarted from "./containers/documentation/GetStarted";
import Errors from "./containers/documentation/Errors";


import ReactNotification from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'

import Layout from './hoc/Layout';

const App = () => (
  <Provider store={store}>
    <Router>
    <ReactNotification />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <Route exact path="/activate/:uid/:token" component={Activate} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Route exact path="/docs/intro" component={Introduction} />
          <Route exact path="/docs/authentication" component={Authentication} />
          <Route exact path="/docs/endpoints" component={Endpoint} />
          <Route exact path="/docs/get-started" component={GetStarted} />
          <Route exact path="/docs/errors" component={Errors} />
          <Route path="*" component={NotFound} />

        </Switch>
      </Layout>

    </Router>
  </Provider>
);

export default App;