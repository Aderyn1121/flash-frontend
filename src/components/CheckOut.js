import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { baseUrl } from "../config";
import { fetchTransaction } from "../actions/transactionActions";

const CheckOut = (props) => {
  const handleClick = async (event) => {
    event.preventDefault();
    // await checkout / post to transactions
    // if (props.products.length === 0) return null;

    let userId = props.sessionId
    let total = props.total
    let products = props.products
    
    const res = await fetch(`${baseUrl}/api/transactions/${userId}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({products, userId, total})
    })
    
    props.history.push('/profile')
    props.closeModal();
  };

  return (
    <div className="checkout__bg">
      <div className="checkout__main">
        <div className="checkout__total-container">
          <div className="checkout__total-name">Total</div>
          <div className="checkout__total-num">${props.total}</div>
        </div>
        <div className="checkout__payment">Payment Type: Card</div>
        <button className="checkout__button" onClick={handleClick}>
          Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
      // products: state.session.products
      reviews: state.reviews,
      sessionId: state.session.id,
      firstName: state.session.firstName,
      products: Object.values(state.products)
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
