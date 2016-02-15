import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main';

/*var Hello = React.createClass({
    render: function() {
        //return React.createElement("h2",null,"Hello React con webpack!!");
        return <h3>Hello React with JSX, ¿como ta quedao? con let y func</h3>;
    }
}); */


//limit fija el número máximo de elementos que puedo mostrar 
// <Main limit={4} />, si no se pone, como ahora se coge el default
ReactDOM.render(<Main />,document.getElementById('react'));