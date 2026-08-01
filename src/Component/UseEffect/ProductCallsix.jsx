const ProductCallsix = ({ product }) => {

    return (
        <>
            <h1>Products</h1>

            {product.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </>
    );
};

export default ProductCallsix;