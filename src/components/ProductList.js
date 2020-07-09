import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import { Modal } from "@material-ui/core";

const ProductList = (props) => {
  //This is going to pull an array of product objects
  //where Brand or Category = X
  if (props.products.length === 0) return null;
  let list = [
    { name: "camera", price: 100 },
    { name: "bag", price: 50 },
  ];

  // let canon = [
  //   props.products[0],
  //   props.products[1],
  //   props.products[2],
  //   props.products[22],
  //   props.products[23],
  //   props.products[24],
  //   props.products[25],
  //   props.products[26],
  //   props.products[27],
  //   props.products[49],
  //   props.products[50],
  //   props.products[51],
  //   props.products[71],
  //   props.products[75],
  //   props.products[85],
  //   props.products[86],
  // ]

  // console.log(props.products)

  // console.log(canon)
  //List will have an if switch to work off of props.category or props.brand?
  

  return (
    <>
      <Modal />
      <Navigation />
      <CategoryBar />
      <div className="category__list">
        {list.map((product, i) => {
          let id = i;
          return (
            <div key={id} className="category__list-product" key={i}>
              <div className="category__list-product-img">Image</div>
              <div className="category__list-nameprice-container">
                <div className="category__list-product-name">
                  {product.name}
                </div>
                <div className="category__list-product-price">
                  ${product.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     products: Object.values(state.products),
//   };
// };


// export default connect(
//   mapStateToProps
// )(
//   ProductList
// );

export default ProductList;
