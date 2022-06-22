import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import price from '../utils/Price.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import '../styles/prices.css';
const Prices = () => {
    // eslint-disable-next-line no-unused-vars
    const [prices, setPrices] = useState(price);
    
    return (
        <div className='Prices' >
            <button >
                <Link to='/' >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className='burger-icon' />
                </Link>
            </button>
            <h4>
                <b>Más productos y precios</b>
            </h4>
            <div className="total">
                {
                    prices.map( price => (
                        <div className="PricesCont" key={price.id} >
                            <h4>
                                <b>Categoria:</b> {price.categoria}
                            </h4>
                            <p>
                                <b>Producto:</b> {price.producto}
                            </p>
                            <p>
                                <b>Precio:</b> {price.precio}
                            </p>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
};

export default Prices;