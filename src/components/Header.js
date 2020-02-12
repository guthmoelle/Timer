// importer les modules dont le composant a besoin
import React, {Component} from 'react';
import Box from "./Box";


// Créer le composant
class Header extends Component{
    render() {
        return(
            <div className="title">
                <h1>Timer App</h1>
            </div>

        )
    }

}

// Exporter le composant

export default Header;