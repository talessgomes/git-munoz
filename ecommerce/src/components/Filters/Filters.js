import React from "react";
import { FilterContainer,InputContainer } from "./styled";

export class Filters extends React.Component {
    render() {
        return (
            <FilterContainer>
                <h3>Filtros</h3>
                    <InputContainer>
                        Valor mínimo:
                        <input 
                        type="number"
                        value={this.props.minFilter}
                        onChange={this.props.onChangeMinFilter}
                        />
                    </InputContainer>

                    <InputContainer>
                        Valor náximo:
                        <input 
                        type="number"
                        value={this.props.maxFilter}
                        onChange={this.props.onChangeMaxFilter}
                        />
                    </InputContainer>

                    <InputContainer>
                        Buscar por nome:
                        <input 
                        type="text"
                        value={this.props.nameFilter}
                        onChange={this.props.onChangeNameFilter}
                        />
                    </InputContainer>

            </FilterContainer>
        )
    }
}