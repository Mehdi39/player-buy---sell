import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(props);
    let totalBudget = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        let remove$Sign = cart.slice(1);
        console.log(remove$Sign);
        totalBudget = totalBudget + player.salary;
        
    }
    return (
        <div className="cart-container">
            <ul>
                {
                    cart.map(player => <li>{player.name} - ${player.salary}</li>)
                }
            </ul>
            <p>total budget: ${totalBudget}</p>
        </div>
    );
};

export default Cart;