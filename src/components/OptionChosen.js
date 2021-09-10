import React from "react";
class OptionChosen extends React.Component{
    render(){
        return(
        <div className="recordatorio">
            <p>Selección anterior: {this.props.prevOption}</p>
            <p>Historial de opciones elegidas: </p>   
            <ul>{this.props.list.map((content, index) => ( <li key={index}>{content}</li>))}</ul>
        </div>)
    }
}

export default OptionChosen;