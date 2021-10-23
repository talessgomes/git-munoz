import React from "react";
import { ProductCard } from "./ProductCard";
import { ProductsContainer, ProductsHeader, ProductsGrid } from "./styled";

export class Products extends React.Component {

    state= {
        sort: 'CRESCENTE'
    }
    getFilteredAndOrderedList = () => {
        return this.props.products
          .filter((product) => this.props.maxFilter ? product.price < this.props.maxFilter : true) /*os dois são filtros para colocar os valores na barra de busca*/
          .filter((product) => this.props.minFilter ? product.price > this.props.minFilter : true)
          .filter((product) => this.props.nameFilter ? product.name.includes(this.props.nameFilter) : true) /*Filtro para poder procurar o nome de cada produto*/
          .sort((a, b) => this.state.sort === 'CRESCENTE' ? a.price - b.price : b.price - a.price) /*Filtro para saber a ordem do preço dos produtos*/
      }

      onChangeSort = (event) => {
        this.setState({sort: event.target.value})
      }
    render() {
        const filteredAndOrderedList = this.getFilteredAndOrderedList() /* Aqui é onde esta sendo pego os filtros */
        return (
            <ProductsContainer>
                <ProductsHeader>
                    <p>Quantidade de produtos: {filteredAndOrderedList.length}</p> {/* atráves do length, é possível registrar a quantidade produtos */}
                    <label>
                        Ordenação:
                        <select value={this.state.sort} onChange={this.onChangeSort}> {/* Com o option, os itens são registrados conforme o valor */}
                            <option value={'CRESCENTE'}>Crescente</option>
                            <option value={'DECRESCENTE'}>Decrescente</option>
                        </select>
                    </label>
                </ProductsHeader>
                <ProductsGrid>
                    {filteredAndOrderedList.map((product) => { /* aqui é onde vai ser passado as informações para outro componente */
                        return <ProductCard product={product} onAddProductToCart={this.props.onAddProductToCart}/>
                    })}
                </ProductsGrid>
            </ProductsContainer>
        )
    }
}