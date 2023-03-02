import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/product.actions';

export const ProductDetailsComponents = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product);

    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {
        const response = await axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .catch((err) => {
            console.log("Err: ", err);
          });
        dispatch(selectedProduct(response.data));
      };

    useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
        dispatch(removeSelectedProduct());
    };
    }, [productId]);

    return (
        <>
            <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                ) : (
                <div className="ui placeholder segment">
                <div className="ui two column stackable aligned grid">
                    <div className="ui vertical divider">E-Commerce Products</div>
                    <div className="middle aligned row py-3">
                    <div>
                        <img className="image-details" src={image} />
                    </div>
                    <div className="column rp">
                        <h1>{title}</h1>
                        <h2>
                            <a className="ui teal tag label">₹ {price}</a>
                        </h2>
                        <h3 className="ui brown block header">{category}</h3>
                            <p>{description}</p>
                        <div className="ui vertical animated button" tabIndex="0">
                            <div className="hidden content">
                                <i className="shop icon"></i>
                            </div>
                            <div className="visible content add-button" onClick={e => alert("Add Product...")}>Add to Cart</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            )}
            </div>
        </>
    )
}
