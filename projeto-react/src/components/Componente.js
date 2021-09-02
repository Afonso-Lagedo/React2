import React, {Component} from 'react';//for create components

//process of components creating
class Componente extends Component{//create components

    //constructor for state and bind
    constructor(props){ //runed first on components
        super(props);//geted props

        this.state = {numero:5};//creating state who receives numero:5
        //is error to use setState inside of constructor

    }

    static getDerivedStateFromProps(props,state){
        console.log(props);
        console.log(state);
        //return {numero:7};//altered props numero for 7
        return null; //to return nothing
    }

    componentDidMount(){
        console.log('Para requisições AJAX');
    }

    //to confirmed if actualiza or not
    shouldComponentUpdate(nextProps, nextState){
        console.log ('shouldComponentUpdate');
        console.log ('Estado atual:', this.state);
        console.log ('Próximo estado:', nextState);
        //return false;//not actualized
        return true; //actualiza
    }

    //to talk if components will actualized
    componentDidUpdate(){
        console.log("FOI ATUALIZADO");
    }

    //test actualization state
    adicionaNumero(){
        let numeroAtual = this.state.numero;//numeroAtual receives state
        numeroAtual += 1;
        this.setState({numero: numeroAtual});//state actualized
    }

    render(){//all components have reder
        return <div>
            <p>Teste Componente</p>
            <p>{this.state.numero}</p>
            <p>{this.props.titulo}</p>

            <button onClick={this.adicionaNumero.bind(this)}>{/*bind to "get class"*/}
                Adicionar 1
            </button>
        </div>
    }

}

export default Componente;//send components