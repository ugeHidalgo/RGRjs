import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main';

/*var Hello = React.createClass({
    render: function() {
        //return React.createElement("h2",null,"Hello React con webpack!!");
        return <h3>Hello React with JSX, ¿como ta quedao? con let y func</h3>;
    }
}); */

ReactDOM.render(<Main />,document.getElementById('react'));