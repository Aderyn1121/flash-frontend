import React from "react";
import '../stylesheets/categorybar.css'


const CategoryBar = () => {

    return (
        <>
            <div className="category__bar">
                <div className="nav_dropdown">Cameras
                    <div className="dropdown_menu">
                        <a href=''>Mirrorless Cameras</a>
                        <a href=''>DSLR and SLR Cameras</a>
                        <a href=''>Range Finder Cameras</a>
                    </div>
                </div>
                <div className="nav_dropdown">Lens
                    <div className="dropdown_menu">
                        <a href=''>Mirrorless Lens</a>
                        <a href=''>SLR Lens</a>
                        <a href=''>Range Finder Lens</a>
                    </div>
                </div>
                <div className="nav_dropdown">Lighting & Studio
                    <div className="dropdown_menu">
                        <a href=''>Flashes & On-Camera Lighteing</a>
                        <a href=''>Studio Lighting</a>
                    </div>
                </div>
                <div className="nav_dropdown">Bags & Cases
                    <div className="dropdown_menu">
                        <a href=''>Bags</a>
                        <a href=''>Cases</a>
                    </div>
                </div>
                <div className="nav_dropdown">Camera Accessories
                    <div className="dropdown_menu">
                        <a href=''>Camera Batteries</a>
                        <a href=''>Tripods</a>
                        <a href=''>Misc</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryBar;
