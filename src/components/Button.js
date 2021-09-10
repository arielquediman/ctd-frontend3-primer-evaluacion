import React from "react";

class Button extends React.Component{
    render(){
        return (
                <div className="opcion">
                    <button id={`opcion_${this.props.name}`} className="botones" onClick={this.props.handlerClic}>{this.props.name}</button>
                    <h2>{this.props.opcion}</h2>
                </div>
        );
    }
}

export default Button;
