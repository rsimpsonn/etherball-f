import React, { Component } from 'react';

import '../themes.css';
import Toolbar from './Toolbar';
import Aux from '../hoc/aaux';

class Layout extends Component {
    state = {
        address: true, //authentication variable, name it whatever you want
    }

    //Insert authentication logic

    render() {
        return (
            <Aux>
                <Toolbar />
                {this.props.children}
            </Aux>
        );
    }

}

export default Layout;