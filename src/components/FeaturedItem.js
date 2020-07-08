import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const FeaturedItem = () => {
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

    return (
        <Carousel className="featured__carousel" responsive={responsive} infinite>
            <div className="featured__item"><img className="featured__item--img" src={require("../assets/carousel/fujifilm-x100v.jpg")} alt="featured-item" /></div>
            <div className="featured__item">Item 2</div>
            <div className="featured__item">Item 3</div>
            <div className="featured__item">Item 4</div>
            <div className="featured__item">Item 5</div>
            <div className="featured__item">Item 6</div>
            <div className="featured__item">Item 7</div>
            <div className="featured__item">Item 8</div>
        </Carousel >
    );
}

export default FeaturedItem;