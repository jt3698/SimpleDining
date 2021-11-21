import React, { Component } from 'react';
import { HashRouter, Route, Switch, useNavigate } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const App = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [])

  return (
    <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
          </Switch>
        </React.Suspense>
    </HashRouter>
  );
}

export default App;
