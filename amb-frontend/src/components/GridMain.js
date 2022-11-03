import * as React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PizzasMenu from '../screens/PizzasMenu';
import axios from 'axios';
import { BASE_URL } from '../constants';
import OrderSummary from '../screens/OrderSummary';

export default function BasicGrid() {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        calculateTotal()
    }, [cart])

    const addToCart = (pizzaToAdd) => {

        const foundIndex = cart.findIndex((pizzaInCart) => {
            return pizzaInCart.name === pizzaToAdd.name
        })

        if (foundIndex >= 0) {
            const newCart = [...cart]
            newCart[foundIndex].quantity += 1

            setCart(newCart)
        } else {
            const newCart = [...cart]
            const newPizza = {
                name: pizzaToAdd.name,
                price: pizzaToAdd.price,
                quantity: 1
            }

            newCart.push(newPizza)

            setCart(newCart)
        }
    }

    const removeFromCart = (pizzaToRemove) => {

        if (pizzaToRemove.quantity > 1) {
            const newCart = cart.map((pizza) => {
                if (pizza.name === pizzaToRemove.name) {
                    pizza.quantity -= 1
                }

                return pizza
            })

            setCart(newCart)

        } else {
            const newCart = cart.filter((pizza) => {
                return pizza.name !== pizzaToRemove.name
            })

            setCart(newCart)
        }
    }

    const calculateTotal = () => {
        const total = cart.reduce(
            (acc, item) => acc + (item.price * item.quantity),
            0
        )

        setTotal(total)
    }

    const confirmOrder = async () => {
        try {
            const body = {
                pizzas: cart
            }

            const res = await axios.post(`${BASE_URL}/orders`, body)
            alert("Pedido Confirmado! Muito Obrigado!")
            setCart([])

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <PizzasMenu addToCart={addToCart} />
                </Grid>
                <Grid item xs={4}>
                    <OrderSummary
                        cart={cart}
                        removeFromCart={removeFromCart}
                        total={total}
                        confirmOrder={confirmOrder}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
