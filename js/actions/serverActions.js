import AppDispatcher from '../appDispatcher'; //Require al dispatcher de la app
import {ActionTypes} from '../constants/constants'; //la definición de las acciones

let ServerActions =  {

    //Esta función es un actionCreator
    receiveLinks(links) {
        //Lanzar un acción de tipo RECEIVE_LINKS con los links incluidos
        console.log('- Action dispatched: '+ActionTypes.RECEIVE_LINKS);
        debugger;
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_LINKS,
            links: links
        });
    }
};


export default ServerActions;