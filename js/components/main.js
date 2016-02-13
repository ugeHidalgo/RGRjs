import React from 'react';
import Api from '../api/API';

export default class Main extends React.Component {
    
/*    componentWillMount(){
        debugger;
    }
 */   
    componentDidMount(){
        Api.fetchLinks();
    }
    
    render() {
        return (
            <div>
            	<h3>Links</h3>
                <ul>
                    <li>Link ..</li>
                    <li>Link ..</li>
                </ul>
            </div>
        );
    } 
}