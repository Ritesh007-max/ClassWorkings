import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productSlice";

function Products() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <h2>Loading products...</h2>
    if (error) return <h2>Error: {error}</h2>;

    return (
        <div className="products-container">
            {products.map((product) => (
                <div key={product.id} className="card">

                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                    />

                    <h3>{product.title}</h3>

                    <p className="category">{product.category}</p>

                    <p className="description">
                        {product.description}
                    </p>

                    <h2>${product.price}</h2>

                    <p>
                        ⭐ {product.rating.rate}
                        ({product.rating.count} reviews)
                    </p>

                </div>
            ))}

        </div>
    );
}

export default Products;
