import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import listProducts from '../utils/ListProducts.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";import '../styles/listProducts.css';
import '../styles/listProducts.css';


const ListProducts = () => {
    // eslint-disable-next-line no-unused-vars
    const [listsProducts, setListsProducts] = useState(listProducts);
    return (
        <div className='Listproducts' >
            <button >
                <Link to='/' >
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className='burger-icon' />
                </Link>
            </button>
            <h1>
                Productos
            </h1>
            <div className="map-product">
                {
                    listsProducts.map( listProduct => (
                        <div className="mapJson" key={listProduct.id} >
                            <img src={listProduct.link} alt={listProduct.categorita} width='250' className='img-product' />
                            <div className="mapJson-content">
                                <h4> {listProduct.title} </h4>
                                <p>
                                    <b>Categoria:</b> {listProduct.categoria}
                                </p>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
};

export default ListProducts;