import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReviewDiv from "./ReviewDiv";
import Modal from "./Modal";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";

const ProductPage = (props) => {
  console.log(props);

  let id = Number(props.match.params.productId);

  let product = props.products[id];

  console.log(product);

  if (!product) return null;

  let { brand, category, description, imgUrl, name, price } = props.products[
    id
  ];

  return (
    <>
      <Modal />
      <Navigation />
      <CategoryBar />
      <main className="products__main">
        <div className="products__container-main">
          <div className="products__img">
            <img src={imgUrl} alt={`${product.name}`} />
          </div>
          <div className="products__container-inner">
            <div className="products__name">{name}</div>
            <div className="products__price">{price}</div>
          </div>
        </div>

        <div className="products__desc">{description}</div>

        <div className="products__review-header">Reviews</div>

        <ReviewDiv productID={id} />
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }

export default connect(mapStateToProps, null)(ProductPage);
