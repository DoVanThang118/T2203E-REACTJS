import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { find } from "../services/product.service";

function Product(props){
    const [product,setProduct] = useState({});
    const {id} = useParams();
    const findProduct = async ()=>{
        const p = await find(id);
        setProduct(p);
    }
    useEffect(()=>{
        findProduct();
    },[]);
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={product.thumbnail}/>
                    </div>
                    <div className="col">
                        <h1>{product.title}</h1>
                        <button type="button" className="btn btn-danger">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Product;
