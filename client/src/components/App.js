import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';

import Home from './../Routes/Home';
import Save from './../Routes/Save';
import NotFound from './../Routes/Not-found';
const App = () =>{
    return (
        <div>
        <BrowserRouter>
        <Nav />
        <Switch>

        <Route path='/save' exact component={Save} />
        <Route path='/' exact component={Home} />
        <Route component={NotFound} />
        </Switch>

        </BrowserRouter>
       

        </div>
    )
}
export default App;