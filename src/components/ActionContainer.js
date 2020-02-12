// importer les modules dont le composant a besoin
import React, {Component} from 'react';
import propTypes from 'prop-types';
import TimerForm from "./TimerForm";
import Button from "./Button";


// Créer le composant
class ActionContainer extends Component{
    // PropTypes pour la validation de types des "props ou propriétés" du composant ActionContainer
    // passées dans le composant Box
    static propTypes = {
        onFormSubmit: propTypes.func.isRequired
    }

    state = {
        isFormOpen: false
    }
    //Méthode liée au Bouton "+" qui permet de créer un Timer
    handleFormOpen = () =>{
        this.setState({isFormOpen: true});
    }
    //Méthode qui d'annuler la création d'un Timer via le formulaire
    handleCloseForm = () =>{
        this.setState({isFormOpen: false});
    }
    //Méthode pour fermer le formulaire automatiquement après avoir Créer ou Modifier un Timer
    onFormSubmit = ({title, project}) => {
        this.handleCloseForm()
        this.props.onFormSubmit({title, project});
    }
    render() {
        if(this.state.isFormOpen){
            return <TimerForm
                // onFormSubmit "Props ou propriété" définie dans le composant TimerForm (la méthode hanleclick)
                // qui fait appel à la méthode onFormSubmit de ce composant
                onFormSubmit={this.onFormSubmit}
                // onCloseForm "Props ou propriété" définie dans le composant TimerForm
                // qui fait appel à la méthode handleCloseForm de ce composant
                onCloseForm={this.handleCloseForm}
            />
        } else {
                // handleFormOpen "Props ou propriété" de l'evenement onClick définie dans le composant Button,
                // qui fait appel à la méthode handleFormOpen de ce composant
            return  <Button handleFormOpen={this.handleFormOpen}/>
        }
    }

}

// Exporter le composant

export default ActionContainer;