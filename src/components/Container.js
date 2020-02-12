// importer les modules dont le composant a besoin
import React, {Component} from 'react';
import TimerForm from "./TimerForm";
import Timer from "./Timer";


// Créer le composant
class Container extends Component{
    state = {
        isFormOpen: false
    }
    handleEditFormOpen = () => {
        this.setState({isFormOpen: true});
    }
    handleEditFormClose = () => {
        this.setState({isFormOpen: false});
    }
    //Fermer le formulaire automatiquement après avoir Créer ou Modifier un Timer
    onFormSubmit = ({ id, title, project }) => {
        this.handleEditFormClose()
        this.props.onFormSubmit({id, title, project});
    }
    render() {
        return(
            <div className="list--container">
                {this.state.isFormOpen ?
                    (
                        <TimerForm
                            title = {this.props.title}
                            project = {this.props.project}
                            id = {this.props.id}
                            //onFormSubmit "Props ou propriété" de ActionContainer,
                            // que l'on va utilisé dans le composant ListContainer
                            onFormSubmit={this.onFormSubmit}
                            // onCloseForm "Props ou propriété" définie dans le composant TimerForm
                            // qui fait appel à la méthode handleEditFormClose de ce composant
                            onCloseForm={this.handleEditFormClose}
                        />
                    ) :
                    (
                        <Timer
                            title = {this.props.title}
                            project = {this.props.project}
                            id = {this.props.id}
                            elapsed = {this.props.elapsed} /* Nombre de seconde écoulé depuis la première fois qu'on a cliqué sur Play */
                            runningSince = {this.props.runningSince} /* Depuis quand on a cliqué sur Play */
                            //onEditFormOpen "Props ou propriété", de l'évenement onClick du bouton Modifier
                            // du composant Timer, qui fait appel à la méthode handleEditFormOpen de ce composant
                            onEditFormOpen = {this.handleEditFormOpen}
                            onDelete = {this.props.onDelete}
                            onPlay={this.props.onPlay}
                            onPause={this.props.onPause}
                        />
                    )}
            </div>

        )
    }

}

// Exporter le composant

export default Container;