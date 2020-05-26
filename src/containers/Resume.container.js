import React, {Component} from 'react';

import Aux from '../hoc/ReactAux';
import Router from "../components/Router/Router";
import Navbar from '../components/Navbar/Navbar.component'


class ResumeContainer extends Component {
    state = {

    };

    render() {
        return (
            <Aux>
                <Navbar/>
                <Router/>
            </Aux>

        );
    }
}

export default ResumeContainer;