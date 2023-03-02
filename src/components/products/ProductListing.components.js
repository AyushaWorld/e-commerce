import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/product.actions';
import { Link } from 'react-router-dom'

export const ProductListingComponents = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });

        dispatch(setProducts(response.data));
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
       
  return (
    <div className="ui grid container">
      {products.map((product,i) => { 
      return(
        <div className="four wide column" key={i}>
          <Link to={`/products/${product.id}`}>
            <div className="ui link cards py-3">
              <div className="card">
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="content p-2">
                  <div className="header">{product.title}</div>
                  <div className="meta price">₹ {product.price}</div>
                  <div className="meta">{product.category}</div>
                </div>
              </div>
            </div>
          </Link>
      </div>
      )
      })}
    </div>
  );
}
