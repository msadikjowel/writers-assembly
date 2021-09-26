import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { writer } = props;

    console.log(writer)
    let total = 0;
    for (const man of writer) {
        total = total + man.salary;
    }

    // const invited = writer.map(invite => invite.name)

    return (
        <div>
            <h2>Total Invited: {writer.length} </h2>
            <h3>Total Cost: $ {total}</h3>
            <h3>Invited- </h3>
            {
                writer.map(invite => <Invited name={invite.name}></Invited>)
            }
        </div>
    );
};

// component for showing invited person after invite button click
const Invited = (props) => {
    return (
        <div>
            <h5>{props.name}</h5>
        </div>
    )
}

export default Cart;