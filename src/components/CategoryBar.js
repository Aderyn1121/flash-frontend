import React from "react";
import '../stylesheets/categorybar.css'


const CategoryBar = () => {

    return (
        <>
            <div className="category__bar">
                <div className="nav_dropdown">Cameras
                    <div className="dropdown_menu">
                        <a>Mirrorless Cameras</a>
                        <a>DSLR and SLR Cameras</a>
                        <a>Digital Point and Shoot Cameras</a>
                        <a>Instant Cameras</a>
                        <a>Specialty Cameras</a>
                    </div>
                </div>
                <div className="nav_dropdown">Lens
                    <div className="dropdown_menu">
                        <a>Mirrorless Lens</a>
                        <a>SLR Lens</a>
                        <a>Medium Format Lens</a>
                        <a>Range Finder Lens</a>
                        <a>Specialty Lens</a>
                    </div>
                </div>
                <div className="nav_dropdown">Tripods & Supports
                    <div className="dropdown_menu">
                        <a>Tripods</a>
                        <a>Tripod Heads</a>
                        <a>Monopods</a>
                        <a>Quick Release</a>
                        <a>Mounts & Supports</a>
                    </div>
                </div>
                <div className="nav_dropdown">Lighting & Studio
                    <div className="dropdown_menu">
                        <a>Flashes &  On-Camera Lighteing</a>
                        <a>Continuous Lighting</a>
                        <a>Monolights & Strobes</a>
                        <a>Light Modifiers</a>
                        <a>Light Stands</a>
                    </div>
                </div>
                <div className="nav_dropdown">Bags & Cases
                    <div className="dropdown_menu">
                        <a>Canon</a>
                        <a>Nikon</a>
                        <a>Sony</a>
                        <a>Fujifilm</a>
                        <a>Panasonic</a>
                    </div>
                </div>
                <div className="nav_dropdown">Camera Accessories
                    <div className="dropdown_menu">
                        <a>Camera Batteries</a>
                        <a>Battery Grips</a>
                        <a>Camera Battery Chargers</a>
                        <a>Remote Controls</a>
                        <a>Camera Grips</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryBar;
