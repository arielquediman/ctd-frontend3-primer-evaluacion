import React from "react";
import Button from "./Button";
import OptionChosen from "./OptionChosen"
import swal from 'sweetalert';

const allOptions = [];

class RenderData extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        count: 0,
        prevOption: "", 
    }
}


handlerClic = (e) => {
    const option = e.target.id;
    console.log(e.target.id);
    if (this.state.count > 5) {
        swal({
            title:"Fin.",
            text: "Se termino la historia 😅",
            icon: "warning",
            button: "Aceptar",
            timer: "2000",
            dangerMode: true,
            }
        )
    }else if ((option === "opcion_A") && (this.state.prevOption !== "A")) {
        this.setState({
            count: this.state.count + 1,
            prevOption: "A",
        });
    }else if ((option === "opcion_A") && (this.state.prevOption === "A")) {
        this.setState({
            count: this.state.count + 2,
            prevOption: "A",
        });
        }else if ((option === "opcion_A") && (this.state.prevOption === "A")) {
        this.setState({
            count: this.state.count + 2,
            prevOption: "A",
        });
    } else if ((option === "opcion_B") && (this.state.prevOption === "A")) {
        this.setState({
            count: this.state.count + 3,
            prevOption: "B",
        })
    } else if (option === "opcion_B") {
        this.setState({
            count: this.state.count + 2,
            prevOption: "B",
        });
    }
}

componentDidUpdate(prevState) {
    if (prevState.prevOption !== this.state.prevOption) { 
        allOptions.push(this.state.prevOption)
    }
    console.log(allOptions)
}  

    render(){
        return(
        <>
        <h1 className="historia">{this.props.data[this.state.count].historia}</h1>
        <div className="opciones">
            <Button handlerClic={this.handlerClic} opcion={this.props.data[this.state.count].opciones.a} name="A"/>
            <Button handlerClic={this.handlerClic} opcion={this.props.data[this.state.count].opciones.b} name="B"/>
        </div>
        <OptionChosen prevOption = {this.state.prevOption} list={allOptions} />
        </>
        );
    }
}

export default RenderData;