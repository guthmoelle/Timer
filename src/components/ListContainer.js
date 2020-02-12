// importer les modules dont le composant a besoin
import React from 'react';
import propTypes from 'prop-types';
import Container from "./Container";


// Créer le composant
// Ce composant devient un functional component étant donné qu'on utilise pas de state et de sigle d'évenement
const ListContainer = (props) => {
    const renderContainer = () => {
        return props.timers.map((timer => {
            return (
                <Container
                    //onFormSubmit "Props ou propriété", que l'on va utilisé dans le composant Container
                    onFormSubmit={props.onFormSubmit}
                    onDelete={props.onDelete}
                    onPlay={props.onPlay}
                    onPause={props.onPause}
                    key={timer.id}
                    {...timer}
                />)
        }))
    }
        return(
            <div className="list--container">
                {renderContainer()}
            </div>

        )
}

// PropTypes pour la validation de types des "props ou propriétés" du composant ListContainer
// passées dans le composant Box
ListContainer.propTypes = {
    onFormSubmit: propTypes.func.isRequired,
    timers: propTypes.array.isRequired,
    onPlay: propTypes.func.isRequired,
    onPause: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
}

// Exporter le composant

export default ListContainer;


