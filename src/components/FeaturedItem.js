import React from "react";
import { connect } from "react-redux"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import imageSelector from "../store/configureStore";



const FeaturedItem = (props) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        largerDesktop: {
            breakpoint: { max: 3000, min: 2500 },
            items: 7
        },
        largeDesktop: {
            breakpoint: { max: 2500, min: 2000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
            items: 5
        },
        smallerDesktop: {
            breakpoint: { max: 1024, min: 750 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 750, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };


    // if (Object.keys(props.products).length === 0) {
    //     return null
    // }
    if (props.products.length === 0) return null;

    let product1 = props.products[0]  // CanonE06
    let product2 = props.products[6]  //NikonD850
    let product3 = props.products[21] //LeicaM10
    let product4 = props.products[17] //FFT4
    let product5 = props.products[10] //Sonya7
    let product6 = props.products[1]  //CanonE05
    let product7 = props.products[12] //Olympus
    let product8 = props.products[7] //NikonD750


    // console.log(props.products)

    
    // Name can be a linked to product page
    return (
        <Carousel className="featured__carousel" responsive={responsive} infinite>
            <div className="featured__item"><img className="featured__item--img" src={product1.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name">Canon E0S 6D Mark II</div>
                                            <div className="featured__item--price">${(product1.price/100.00).toFixed(2)}</div>
            </div>
            <div className="featured__item"><img className="featured__item--img" src={product2.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name">Nikon D850 DSLR Body</div>
                                            <div className="featured__item--price">${(product2.price/100.00).toFixed(2)}</div>
            </div>
            <div className="featured__item"><img className="featured__item--img" src={product3.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name"> Leica M10-P</div>
                                            <div className="featured__item--price">${(product3.price/100.00).toFixed(2)}</div>
            </div>
            <div className="featured__item"><img className="featured__item--img" src={product4.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name">Fujifilm X-T4</div>
                                            <div className="featured__item--price">${(product4.price/100.00).toFixed(2)}</div>
            </div>
            <div className="featured__item"><img className="featured__item--img" src={product5.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name">Sony Alpha a7R IV</div>
                                            <div className="featured__item--price">${(product5.price/100.00).toFixed(2)}</div>
            </div>
            <div className="featured__item"><img className="featured__item--img" src={product6.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name">Canon E0S 5D Mark IV </div>
                                            <div className="featured__item--price">${(product6.price/100.00).toFixed(2)}</div>
            </div>
            <div className="featured__item"><img className="featured__item--img" src={product7.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name">Olympus PEN E-PL8 Mirrorless</div>
                                            <div className="featured__item--price">${(product7.price/100.00).toFixed(2)}</div>
            </div>
            <div className="featured__item"><img className="featured__item--img" src={product8.imgUrl} alt="featured-item" /> 
                                            <div className="featured__item--name">Nikon D750 DSLR Body</div>
                                            <div className="featured__item--price">${(product8.price/100.00).toFixed(2)}</div>
            </div>
        </Carousel >
    );
}


const mapStateToProps = state => {
    return {
        // products: state.session.products
        products: Object.values(state.products)
    }
}


export default connect(
    mapStateToProps
)(
    FeaturedItem
);
