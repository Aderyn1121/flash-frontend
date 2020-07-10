import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { baseUrl } from "../config";
import { fetchTransaction, createTransaction } from "../actions/transactionActions";

const CheckOut = (props) => {
    const userId = props.sessionId;
    const total = props.total;
    const cartItems = props.cartItems;
    // const handleClick = async (event) => {
    //     event.preventDefault();
    //     // if (props.products.length === 0) return null;

    //     // let products = props.products

    //     // const res = await fetch(`${baseUrl}/api/transactions/${userId}`, {
    //     //   method: 'POST',
    //     //   headers: { 'Content-Type': 'application/json' },
    //     //   body: JSON.stringify({ products, userId, total })
    //     // })

    // };
    const handleClick = event => {
        console.log(cartItems);
        props.createTransaction(userId, cartItems, total);
        props.history.push('/profile')
        props.closeModal();
    }

    return (
        <div className="checkout__bg">
            <div className="checkout__main">
                <div className="checkout__total-container">
                    <div className="checkout__total-name">Total</div>
                    <div className="checkout__total-num">${(props.total / 100).toFixed(2)}</div>
                </div>
                <div className="checkout__payment">Payment Type: Card</div>
                <button className="checkout__button" onClick={handleClick}>Checkout</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        reviews: state.reviews,
        sessionId: state.session.id,
        firstName: state.session.firstName,
        cartItems: state.cart,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createTransaction: (userId, products, total) => dispatch(createTransaction(userId, products, total)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
