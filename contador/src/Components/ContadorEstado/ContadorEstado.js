import React from "react";

export class ContadorEstado extends React.Component {
    state= {
        valorContador: 0
    };
    onSomaContador = () => {
        this.setState({ valorContador: this.state.valorContador + 1});
    };

    onSubtrairContador = () => {
        this.setState({ valorContador: this.state.valorContador -1});
    };

    render() {
        return (
            <div>
                <h3>Contador</h3>
                <p>{this.state.valorContador}</p>
                <button onClick={this.onSubtrairContador}>-</button>
                <button onClick={this.onSomaContador}>+</button>
            </div>
        )
    }
}