import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { RouteBranches } from './Router/RouteBranches';
import { RouteDistrict } from './Router/RouteDistrict';
import './app.scss';


export const App = () => {
    return (
        <div className="choise container list-links">
            <Router>
                <div className="choise-text d-flex justify-content-around flex-wrap text-center">
                    <NavLink 
                        to="/districts" 
                        className="text-danger" 
                        activeClassName='active'
                    >Округа Российской Федерации
                    </NavLink>
                    <NavLink 
                        to="/branches" 
                        className="text-danger" 
                        activeClassName='active'
                    >Филиалы
                    </NavLink>
                </div>

                <Switch>
                    <Route path='/districts' component={RouteDistrict}/>
                    <Route path='/branches' component={RouteBranches}/>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}
