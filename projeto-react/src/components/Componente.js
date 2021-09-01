import React, {Component} from 'react';//for create components

class Componente extends Component{//create components

    //constructor for state and bind
    constructor(props){ //runed first on components
        super(props);

        this.state = {numero:5};//creating state who receives numero:5
        //is error to use setState inside of constructor
    }
    render(){//all components have reder
        return <div>
            <p>Teste Componente</p>
            <p>{this.state.numero}</p>
        </div>
    }

}

export default Componente;//send components