import React, { useContext, useEffect, useState } from "react";
import UserContext from "../store/context";

function Withlist(props) {
    const [products, setProducts] = useState([]);
    const { withlist, setWithlist } = useContext(UserContext);
    const getProducts = async () => {

        setProducts(withlist);

    }
    useEffect(() => {

    }); //component did update

    useEffect(() => {

        getProducts();

    }, []); //component did mount
    useEffect(() => {

    }, [products]); //run when products updated
    return(
        <section>
            <div className='container'>
                <h1>Danh sách sản phẩm yêu thích</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        products.map((e, k) => {
                            return (
                                <div key={k} className='col-3'>
                                    <div class="card h-100">
                                        <img src={e.thumbnail} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{e.title}</h5>
                                            <p class="card-text">{e.description}</p>
                                            <span className='text-danger'>{e.price}</span>
                                            <NavLink to={"/product/"+e.id} class="btn btn-primary">Buy</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}