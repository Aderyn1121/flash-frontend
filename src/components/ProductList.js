import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import { Modal } from "@material-ui/core";

const ProductList = (props) => {
    if (props.products.length === 0) return null;

    let products = props.products
    let category = (props.match.params.categoryId);

    // console.log(typeof (category));
    if (typeof (category) === "string" && category.length > 2) {
        const matchedProducts = products.filter(product => {
            return product.brand === (category.slice(0, 1).toUpperCase() + category.slice(1));
        })

        return (
            <>
                <Modal />
                <Navigation />
                <CategoryBar />
                <div className="category__list">
                    <div>{(category.slice(0, 1).toUpperCase() + category.slice(1))}</div>
                    {matchedProducts.map((product, i) => {
                        return (
                            <div className="category__list-product" key={i}>
                                <a className="category__list-product-img" href={`/products/${product.id}`}><img className="product__item--img" src={product.imgUrl} /></a>
                                <div className="category__list-nameprice-container">
                                    <a className="category__list-product-name" href={`/products/${product.id}`}>{product.name}</a>
                                    <div className="category__list-product-price">${(product.price / 100.00).toFixed(2)}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }

    const productsArray = ["DSLR and SLR Cameras", "Mirrorless Cameras", "Range Finder Cameras", "DSLR Lens", "Mirrorless Lens", "Range Finder Lens", "Flashes & On-Camera Lighting", "Studio Lighting", "Bags", "Cases", "Camera Batteries", "Tripods", "Misc"];
    if (typeof (parseInt(category, 10)) === "number") {
        const matchedProducts = products.filter(product => {
            return product.category === (parseInt(category, 10));
        })

        return (
            <>
                <Modal />
                <Navigation />
                <CategoryBar />
                <div className="category__list">
                    <div>{productsArray[parseInt(category, 10) + 1]}</div>
                    <h1>Products</h1>
                    {matchedProducts.map((product, i) => {
                        return (
                            <div className="category__list-product" key={i}>
                                <a className="category__list-product-img" href={`/products/${product.id}`}><img className="product__item--img" src={product.imgUrl} /></a>
                                <div className="category__list-nameprice-container">
                                    <a className="category__list-product-name" href={`/products/${product.id}`}>{product.name}</a>
                                    <div className="category__list-product-price">${(product.price / 100.00).toFixed(2)}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
    };
};


export default connect(
    mapStateToProps
)(
    ProductList
);