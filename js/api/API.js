import {get} from 'jquery'; //Se usa para hace un AJAX call tipo get
import ServerActions from '../actions/serverActions';//Require al módulo del dispatcher

let API = {
  fetchLinks(fetchLinks){
      console.log ('- (1.1) Fetching Links API...');
      
      //Read Links API using an AJAX call a /data/links
      //Cuando la llamada get devuelva se lanza el callback definido en done
      get("/data/links").done (linksResponse => {
          console.log ('- (1.2) Links API was fetched.');
          
          //usaremos un modulo ServerActions que se encargará de usar el dispatcher 
          //para lanzar las acciones
          ServerActions.receiveLinks(linksResponse);
      });
  }
    
};

export default API;