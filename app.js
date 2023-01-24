 import React, { Component } from 'react';

 const list = [
    { id: "1", nom: "Assurance", date: "24/03/21", prix: "99€99" },
    { id: "2", nom: "Course supermarché", date: "29/03/21", prix: "250€00" },
    { id: "3", nom: "essence voiture", date: "02/04/21", prix: "50€02" },
    { id: "4", nom: "Restaurant", date: "05/04/21", prix: "29€59" },
    { id: "5", nom: "Basic-Fit", date: "06/04/21", prix: "19€99" },
 ];

 class App extends Component {
    renderList() {
        return list.map(item => {
            return (
                <h3> Le prélèvement {item.nom} à été fait le {item.date}, d'une valeure de {item.prix} </h3>
            )
        })
    }

    render () {
        return (
            <div>
                <p> Dépenses mensuel</p>
                {this.renderList()}
            </div>
        )
    }
 }