import React, { Component } from 'react';

import Connector from './Connector';
import { Provider } from 'react-redux';
import NotFound from './NotFound';
import SingleCapital from './SingleCapital';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import store from '../store'

class App extends Component {

   

     render() {
        
       return (
            <Provider store={store}>
              <Router >
            <div> 
                <h1 className="display-3 logo__h1"><Link to='/' style={{ textDecoration: 'none' }}>Capitalsgram</Link> </h1>
                    <Switch>
                      <Route path='/' component={Connector} exact={true} />
                      <Route path='/view/:id' render = { ({ match }) => {
                        
                        return <SingleCapital test={match} exact/>
                      }}/>
                      <Route render={()=><NotFound />} />
                    </Switch>
                   
                   
            </div>
            </Router>
            </Provider>
            
        );
    }
}

export default App;