import React, { useEffect, useState } from "react";
import { get } from "../services/product.service";
function Cart(props) {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {

        const rs = await get();
        setProducts(rs);

    }
    useEffect(() => {

    }); //component did update

    useEffect(() => {

        getProducts();

    }, []); //component did mount
    useEffect(() => {

    }, [products]); //run when products updated

    return (
        <section>
            <div className="container">
                <h1>Cart</h1>
                <div classNameName='row'>
                    {
                        products.map((e, k) => {
                            return (
                                <tr key={k}>
                                    <td><img src={e.thumbnail} width={120} className="img-thumbnail" /></td>
                                    <td>{e.title}</td>
                                    <td>{e.price}</td>
                                    <td>{1}</td>
                                    <td>{e.price * 1}</td>
                                </tr>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Cart;
