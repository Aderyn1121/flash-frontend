import React from "react";
import '../stylesheets/categorybar.css'


const CategoryBar = () => {

    return (
        <>
            <div className="category__bar">
                <div className="nav_dropdown">Cameras
                    <div className="dropdown_menu">
                        <a href='/category/1'>DSLR and SLR Cameras</a>
                        <a href='/category/2'>Mirrorless Cameras</a>
                        <a href='/category/3'>Range Finder Cameras</a>
                    </div>
                </div>
                <div className="nav_dropdown">Lens
                    <div className="dropdown_menu">
                        <a href='/category/4'>DSLR Lens</a>
                        <a href='/category/5'>Mirrorless Lens</a>
                        <a href='/category/6'>Range Finder Lens</a>
                    </div>
                </div>
                <div className="nav_dropdown">Lighting & Studio
                    <div className="dropdown_menu">
                        <a href='/category/7'>Flashes & On-Camera Lighting</a>
                        <a href='/category/8'>Studio Lighting</a>
                    </div>
                </div>
                <div className="nav_dropdown">Bags & Cases
                    <div className="dropdown_menu">
                        <a href='/category/9'>Bags</a>
                        <a href='/category/10'>Cases</a>
                    </div>
                </div>
                <div className="nav_dropdown">Camera Accessories
                    <div className="dropdown_menu">
                        <a href='/category/11'>Camera Batteries</a>
                        <a href='/category/12'>Tripods</a>
                        <a href='/category/13'>Misc</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryBar;
