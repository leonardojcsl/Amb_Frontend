import styled from "styled-components"

export const ContainerLi = styled.li`
    display: flex;
    border: 1px solid black;
`

function OrderItemCard(props) {
    const { pizza, removeFromCart } = props

    return (
        <ContainerLi>
            <p>
                Pizza {pizza.name}
                - {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
                {" "} x {pizza.quantity}
            </p>
            <button onClick={() => removeFromCart(pizza)}>Remover item</button>
        </ContainerLi>
    )
}

export default OrderItemCard