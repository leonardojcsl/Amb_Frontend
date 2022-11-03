import styled from "styled-components"

export const ContainerLi = styled.li`
    border: 1px solid black;
    margin: 1em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;    

    h3,
    .card-price {
        text-align: center;
    }    
`

const Ingredients = styled.p`
        display: flex;
        flex-direction: column;
        margin-left: 13em;
        font-size: large
`



function PizzaCard(props) {

    const { pizza, addToCart } = props   
    

    return (
        <ContainerLi>
            <h3>{pizza.name}</h3>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </p>
            <Ingredients>
                {pizza.ingredients.map((item) => {
                    const updateName = str => {
                        return str.toLowerCase().replace(/(?:^|\s)(?!da|de|do)\S/g, l => l.toUpperCase())
                    }
                    return (
                        <span key={item}>{updateName(item)}</span>
                    )
                })}
            </Ingredients>
            <button onClick={() => addToCart(pizza)}>Adicionar no carrinho</button>
        </ContainerLi>
    )
}

export default PizzaCard


