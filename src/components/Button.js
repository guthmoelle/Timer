// importer les modules dont le composant a besoin
import React, {Component} from 'react';


// Créer le composant
class Button extends Component{
    render() {
        // handleFormOpen "Props ou propriété" utilisée dans le composant ActionContainer,
        return(

            <button onClick={this.props.handleFormOpen} className="button__outline">
                +
            </button>

        )
    }

}

// Exporter le composant

export default Button;