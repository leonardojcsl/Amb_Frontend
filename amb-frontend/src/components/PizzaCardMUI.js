import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
        font-size: small
`

export default function PizzaCardMUI(props) {
    const { pizza, addToCart } = props

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    <h3>{pizza.name}</h3>
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

                    <p className="card-price">
                        {pizza.price.toLocaleString(
                            'pt-br',
                            { style: 'currency', currency: 'USD' }
                        )}
                    </p>
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addToCart(pizza)}>Adicionar no carrinho</Button>
            </CardActions>
        </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}

