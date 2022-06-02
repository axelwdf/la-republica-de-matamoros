import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import price from '../utils/Price.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import '../styles/prices.css';
const Prices = () => {
    const [prices, setPrices] = useState(price);
    
    return (
        <div className='Prices' >
            <button >
                <Link to='/' >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className='burger-icon' />
                </Link>
            </button>
            <h4>Más productos y precios</h4>
            {
                prices.map( price => (
                    <div className="PricesCont">
                        <h4>
                            <b>Producto:</b> {price.producto}
                        </h4>
                        <p>
                            <b>Precio:</b> {price.precio}
                        </p>
                    </div>
                ) )
            }
        </div>
    );
};

export default Prices;