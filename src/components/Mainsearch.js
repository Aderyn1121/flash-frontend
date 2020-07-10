import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';

const Mainsearch = props => {
    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState("");
    const productsArray = [
        'Canon EOS 6D Mark II',
        'Canon EOS 5D Mark IV',
        'Canon EOS 1D Mark III',
        'Nikon Z7 FX-Format Mirrorless Camera with NIKKOR Z 24-70mm f/4 S Lens',
        'Nikon Z6 FX-Format Mirrorless Camera with NIKKOR Z 24-70mm f/4 S Lens',
        'Nikon Z50 DX-Format Mirrorless Camera with NIKKOR Z DX 16-50mm f/3.5-6.3 VR & Z DX 50-250mm f/4.5-6.3 VR Lenses',
        'Nikon D850 DSLR Camera Body',
        'Nikon D750 DSLR Body',
        'Nikon D3500 24MP DSLR Camera with AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Lens, Black',
        'Sony a99 II',
        'Sony Alpha a7R IV',
        'Sony Alpha a9 II',
        'Olympus PEN E-PL8 Mirrorless Camera with Silver M.Zuiko Digital ED 14-42mm f/3.5-5.6 II R Lens - White',
        'Olympus OM-D E-M10 Mark III Mirrorless Silver Camera with 14-42 EZ Lens, Case, 16GB SD Card',
        'Olympus OM-D E-M1X Mirrorless Digital Camera Body',
        'Fujifilm X-T30',
        'Fujifilm X100F 24.3MP Digital Camera, Fujinon 23mm f/2 Lens, Silver',
        'Fujifilm X-T4 Mirrorless Digital Camera Body, Black',
        'Fujifilm X-T3 26.1MP Mirrorless Digital Camera with XF 18-55mm f/2.8-4 R LM OIS Lens, Silver',
        'Leica M-A(Typ 127)',
        'Leica MP',
        'Leica M10-P',
        'Canon EF 24-70mm f/2.8L II USM',
        'Canon EF 50mm f/1.4 USM',
        'Canon EF 85mm f/1.2L II USM',
        'Canon RF 35mm f/1.8 Macro IS STM Lens',
        'Canon RF 24-105mm f/4 L IS USM Lens',
        'Canon EF-M 22mm f/2 STM Lens - Black',
        'Nikon 50mm f/1.8G AF-S NIKKOR',
        'Nikon 35mm f/1.8G AF-S NIKKOR',
        'Nikon 24-70mm f/2.8G ED-IF AF-S NIKKOR',
        'Nikon NIKKOR Z 14-30mm f/4 S Ultra-Wide Zoom Lens',
        'Nikon NIKKOR Z 24-70mm f/2.8 S Lens',
        'Nikon NIKKOR Z 70-200mm f/2.8 VR S Lens for Z Series Mirrorless Cameras',
        'Sony FE 12-24mm f/2.8 E-Mount Lens',
        'Sony FE 85mm f/1.8 E-Mount Lens',
        'Sony FE 24-105mm f/4 G OSS E-Mount Lens',
        'Sony 70-400mm F4-5.6 G Series SSM Super Telephoto Lens for A Alpha DSLR Cameras',
        'Sony 50mm f/1.4 Lens for A-Mount',
        'Sony 16-80mm f/3.5-4.5 Vario-Sonnar T* DT Carl Zeiss A-Mount Lens',
        'Olympus M. Zuiko 7-14mm f2.8 - ED 40-150mm F2.8 - ED 300mm F/4.0 Pro Lenses 4/3',
        'Olympus M. Zuiko Digital ED 12-40mm f/2.8 Pro Zoom Lens for Micro Four Thirds System - Black',
        'Olympus M. Zuiko Digital ED 40-150mm f/4-5.6 R Zoom Lens, Silver, for Micro Four Thirds System',
        'Fujifilm XF 16mm F/2.8 R WR Lens',
        'Fujifilm XF 23mm F/2 R WR Lens',
        'Fujifilm XF 35mm F/2 R WR Lens',
        'Leica Summilux-M 35mm f/1.4 ASPH FLE Lens',
        'Leica Summicron-M 35mm f/2.0 ASPH Lens',
        'Leica Summilux-M 50mm f/1.4 ASPH Lens',
        'Canon Speedlite 600EX II-RT, Shoe Mount Flash, U.S.A. Warranty',
        'Canon Speedlite 430EX III-RT, Guide Number 141 at ISO 100, 24-105mm Flash Coverage, U.S.A. Warranty',
        'Flashpoint Zoom Li-on R2 TTL On-Camera Flash Speedlight for Canon',
        'Nikon SB-700 TTL AF Shoe Mount Speedlight Flash - USA Warranty',
        'Nikon SB-5000 AF Speedlight',
        'Sony HVL-F45RM Compact External Radio Wireless Flash, Guide Number 147',
        'Sony HVL-F60RM Wireless Radio Control Shoe Mount Flash',
        'Olympus FL-LM3 Replacement Flash for OM-D E-M5 Mark II Camera Body',
        'Olympus FL-700WR Wireless Flash',
        'Fujifilm EF-X20 TTL Flash',
        'Fujifilm EF-X500 TTL Flash for X-Series Cameras',
        'Leica SF 40 TTL Flash, GN 131.23',
        'Leica SF 60 TTL Flash, (GN 197',
        'Godox LC500R RGB LED Light Stick',
        'Godox SL Series SL150W 150W White LED Video Light, 5600K Color Temperature',
        'Flashpoint XPLOR 600 HSS Battery-Powered Monolight with Built-in R2 2.4GHz Radio Remote System - Bowens Mount (AD600)',
        'Flashpoint XPLOR 600PRO TTL Battery-Powered Monolight with Built-in R2 2.4GHz Radio Remote System (Bowens Mount) - Godox AD600 Pro',
        'Nova P300c Softbox',
        'Glow Easy Lock Medium Deep White Fiberglass Umbrella (33)',
        'Glow 40 White Umbrella with Black Back - Made with Optical White Viscoelastic Polymer Fabric Material',
        'Glow 40 Translucent Umbrella',
        'Photoflex Umbrella Convertible 60',
        'Canon EDC-10 Sling Backpack, Dark Heather Gray',
        'Vivitar Gadget Bag',
        'Leica Case with Carrying Strap for D-Lux 7 Compact Camera, Brown',
        'Leica Holster Case for Q2 Compact Camera, Leather, Black',
        'Canon LP-E6 N Rechargeable Li-ion Battery Pack',
        'Nikon EN-EL3e Rechargeable Li-ion Battery Pack',
        'Fujifilm NP-W126S Li-ion Battery',
        'Olympus BLN-1 Rechargeable Li-ion Battery',
        'Manfrotto MT190 XPRO4 190 Aluminum 4-Section Tripod',
        'Manfrotto PIXI Evo mini Tripod',
        'Joby GorillaPod',
        'Vanguard Alta Pro 263AB 100 Aluminum-Alloy Tripod',
        'Sekonic L-308X-U Digital Light Meter',
        'Sekonic L-858D-U Speedmaster Light Meter',
        'Canon imageCLASS MF269dw All in One Wireless Duplex Mobile Ready Monochrome Laser Printer - Print/Copy/Scan/Fax',
        'Canon IVY Mini Photo Printer',
        'Epson SureColor P800 UltraChrome HD Inkjet Photo Printer'
    ];

    const handleSearchInput = event => {
        const value = event.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, "i");
            suggestions = productsArray.sort().filter(val => regex.test(val));
        }
        setSuggestions(suggestions)
        setText(value);
    }

    const suggestionSelected = value => {
        setText(value);
        setSuggestions([]);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const targetProduct = (productsArray.indexOf(text) + 1);
        props.history.push(`/products/${targetProduct}`);
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) return null;
        return (
            <ul className="search__suggestion-wrapper">
                {suggestions.map((item) => <li key={item} onClick={() => suggestionSelected(item)} className="search__suggestion">{item}</li>)}
            </ul>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="search__form">
            <SearchIcon className="search__icon" style={{ fontSize: 28 }} />
            <div className="searchbar__container">
                <input onChange={handleSearchInput} type="search" value={text} className="search__input" placeholder="Try Canon, Nikon, Sony, Leica..." />
                {renderSuggestions()}
            </div>
            <button className="search__form-button">Search</button>
        </form>
    );

}


export default Mainsearch;
