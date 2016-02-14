import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,    
    GraphQLInt,
    GraphQLString
    
} from 'graphql';
import LinkStore from '../js/stores/linkStore';

/** Se define como una función Schema que devolverá un objeto schema,
 *  que recibe un objeto db (viene se server.js) y es una conexión a la base de
 *  datos de mongoDB
 */
let Schema = (db) => {
    
    let linkType = new GraphQLObjectType({
        name: 'Link',
        fields: () => ({
            _id: { type: GraphQLString },
            title: { type: GraphQLString },
            url: { type: GraphQLString }
        })
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({
                links: { //Lista de enteros
                    type: new GraphQLList(linkType),
                    resolve: () => db.collection('links').find({}).toArray()
                        /** Aqui hay una callback definida de manera que espera
                         *  a leer los datos de mongoDb, por eso no es necesario 
                         *  hacer una callback aqui para esperar a los datos
                         */
                }
            })
        })
    });

    return schema;
};

export default Schema;