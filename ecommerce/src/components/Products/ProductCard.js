import React from "react";
import { CardContainer, CardInfo, AddToCardButton } from "./styled";

export class ProductCard extends React.Component {
    render() {
        const product = this.props.product
        return (
            <CardContainer>
             <img src={product.photo}/>
             <CardInfo>
                 <p>{product.name}</p>
                 <p>R${product.price},00</p>
                 <AddToCardButton
                  onClick={() => this.props.onAddProductToCart(product.id)}>
                     Adicionar
                     </AddToCardButton>
             </CardInfo>
            </CardContainer>
        )
    }
}