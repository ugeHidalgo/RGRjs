import React, {Component,PropTypes} from 'react';
import Api from '../api/API';
import LinkStore from '../stores/linkStore';

//Esta función se usa para obtener todos los links del store
let _getAppState = () => {
    return {links : LinkStore.getAll()};  
};

class Main extends Component {
    
    //Sirven para forzar validaciones, en este caso limit debe ser un número.
    static propTypes = {
        limit: React.PropTypes.number
    };
        
    //Sirven para establecer un valor por defecto en caso de que falte.
    static defaultProps = {
        limit: 4
    };
    
    
    constructor(props){
        super(props);
        
        //Hay que leer los datos de los links de 
        //manera que al crear la clase ya se tengan los datos.
        this.state = _getAppState();
        
        //Se define la función que se asocia al evento onChange
        this.onChange = this.onChange.bind(this);
    }
   
    componentDidMount(){
        Api.fetchLinks();
        
        //Una vez mostrada la pantalla crea un evento que se lanze cuando haya un change
        LinkStore.on('change',this.onChange);
    }
    
    componentWilUnmount() {
        //Quita el evento antes de dejar de mostrar la pantalla al salir de ella
        LinkStore.removeListener('change',this.onChange);
    }
    
    //Este método detecta el event change y reresca el componente.
    onChange(){
        console.log ('- (4) The componet has detected a change in the store');
        this.setState(_getAppState());
    }
    
    render() {
        
        let content = this.state.links.slice(0,this.props.limit).map(link => {
            return <li key={link._id}>
                        <a href={link.url}>{link.title}</a>
                        ({link.description})
                   </li>;
        });
        
        return (
            <div>
            	<h3>Links</h3>
                <ul>
                    {content}
                </ul>
            </div>
        );
    } 
}

export default Main