// importer les modules dont le composant a besoin
import React, {Component} from 'react';


// Créer le composant
class TimerForm extends Component{
    // Le state permet de rendre les props dynamique
    state = {
        title: this.props.title || "",
        project: this.props.project || "",
    }
    handleTitleChange = e => {
        this.setState({title: e.target.value});
    }
    handleProjectChange = e => {
        this.setState({project: e.target.value});
    }
    //Méthode qui permet d'ouvrir le formulaire de création ou de modification du Timer
    // Appelée par l'évenement onClick de la balise button de ce composant
    handleClick = () => {
        const {title, project} = this.state;
        if(this.props.id){
            //On veut Modifier
            const id= this.props.id
            //onFormSubmit "Props ou propriété", que l'on va utilisé dans le composant Container
            this.props.onFormSubmit({id, title, project});
        }else {
            //On veut Créer
            //onFormSubmit "Props ou propriété", que l'on va utilisé dans le composant ActionContainer
            this.props.onFormSubmit({title, project});
        }
    }
    render() {
        const submitText = this.props.title ? "Modifier" : "Créer";
        return(
            <div className="form">
                <div className="form--content">
                    <div className="form--item">
                        <label>Titre</label>
                        <input
                            type="text"
                            placeholder="Mon Titre"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div><br/>
                    <div className="form--item">
                        <label>Projet</label>
                        <input
                            type="text"
                            placeholder="Mon Projet"
                            value={this.state.project}
                            onChange={this.handleProjectChange}
                        />
                    </div><br/>
                </div>
                <div className="form--button">
                    <button className="button btn--submit" onClick={this.handleClick}>
                        {submitText}
                    </button>
                    <button onClick={this.props.onCloseForm} className="button btn--cancel">
                        Annuler
                    </button>
                </div>
            </div>

        )
    }

}

// Exporter le composant

export default TimerForm;