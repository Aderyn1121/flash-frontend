import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReviewDiv from "./ReviewDiv";
import Modal from "./Modal";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import { fetchReviews } from "../actions/reviewActions";
import { addToCart } from "../actions/cartButtonActions";

const ProductPage = (props) => {
    let id = Number(props.match.params.productId);

    useEffect(() => {
        (async () => {
            await props.fetchReviews(id);
        })();
    });

    let product = props.products[id];

    if (!product) return null;

    let { description, imgUrl, name, price } = props.products[id];

    const handleSubmit = event => {
        event.preventDefault();
        props.addToCart(id);
    }

    return (
        <>
            <Modal />
            <Navigation {...props} />
            <CategoryBar />
            <main className="products__main">
                <div className="products__container-main">
                    <div className="products__img">
                        <img src={imgUrl} alt={`${product.name}`} />
                    </div>
                    <div className="products__container-inner">
                        <div className="products__name">{name}</div>
                        <div className="products__price">${(price / 100).toFixed(2)}</div>
                    </div>
                    <form className="products__cart--container" onSubmit={handleSubmit}>
                        <label>Quantity:
                            <input className="products__quantity" type="number" placeholder="1" />
                        </label>
                        <button className="products__cart">Add to Cart</button>
                    </form>
                </div>

                <div className="products__desc">
                    <br></br>
                    <p className='details-header'>Details</p>
                    <br></br>
                    <p>{description}</p>
                </div>

                <div className="products__review-header">Reviews</div>

                <ReviewDiv id={id} />
            </main>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        addToCart: (productId) => dispatch(addToCart(productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
