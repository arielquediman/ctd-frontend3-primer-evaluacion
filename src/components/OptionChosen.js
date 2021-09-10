import React from "react";
class OptionChosen extends React.Component{
    render(){
        return(
        <div className="recordatorio">
            <h3>Selección anterior: {this.props.prevOption}</h3>
            <h4>Historial de opciones elegidas: </h4>   
            <ul>{this.props.list.map((content, index) => ( <li key={index}>{content}</li>))}</ul>
        </div>)
    }
}

export default OptionChosen;