// importer les modules dont le composant a besoin
import React, {Component} from 'react';
import ActionContainer from "./ActionContainer";
import ListContainer from "./ListContainer";
import uuid from 'uuid';


// Créer le composant
class Box extends Component{
    //state du composant Box, avec un object timers initialisant ces différentes propriétés
    state = {
        timers: [
            {
                title: "Apprendre React",
                project: "Dévoleppement web",
                id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d7",
                elapsed: 3609620, /* Propriété qui définie le nombre de seconde écoulé depuis la première fois qu'on a cliqué sur Play */
                runningSince: null /* Propriété qui définie depuis quand on a cliqué sur Play */
            },
            {
                title: "Apprendre Angular",
                project: "Dévoleppement web",
                id: "0a4a79cb-b06d-4cb1-883d-549a1e3b66d4",
                elapsed: 2349620, /* Nombre de seconde écoulé depuis la première fois qu'on a cliqué sur Play */
                runningSince: null /* Propriété qui définie depuis quand on a cliqué sur Play */
            }

        ]
    }
    // Méthode pour créer un nouveau Timer
    handleCreateTimer = ({title, project}) => {
        const timer = {
            title,
            project,
            id: uuid.v4(),
            elapsed: 0,
            runningSince: null
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }
    // Méthode pour modifier un Timer
    handleEditTimer = ({id, title, project}) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if(timer.id === id){
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return {...timer}
            })
        })
    }
    handleDelete = id =>{
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !== id)
        });
    }
    handlePlay = id => {
        console.log('Play');
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(id === timer.id){
                    return {
                        ...timer,
                        runningSince: now
                    }
                }else {
                    return {...timer}
                }
            })
        })
    }

    handlePause = id => {
        console.log('Pause');
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if(id === timer.id){
                    const nextElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed
                    }
                }else {
                    return {...timer}
                }
            })
        })
    }

    render() {
        //onFormSubmit "Props ou propriété" définie dans le composant ListContainer
        // qui fait appel à la méthode handleEditTimer de ce composant
        return(
            <div className="boxed--view">
                <div className="boxed--view__box">
                    <ListContainer
                        onFormSubmit={this.handleEditTimer}
                        timers={this.state.timers}
                        onPlay={this.handlePlay}
                        onPause={this.handlePause}
                        onDelete={this.handleDelete}
                    />
                    <ActionContainer onFormSubmit={this.handleCreateTimer}/>
                </div>
            </div>

        )
        //onFormSubmit "Props ou propriété" définie dans le composant ActionContainer
        // qui fait appel à la méthode handleCreateTimer de ce composant
    }

}

// Exporter le composant

export default Box;