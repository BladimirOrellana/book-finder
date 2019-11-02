import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from '../components/Nav';

import Home from './../Pages/Home';
import Save from './../Pages/Save';
import Footer from './../components/Footer';
import NotFound from './../Pages/Not-found';
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
        <Footer />

        </BrowserRouter>
       

        </div>
    )
}
export default App;