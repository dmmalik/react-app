import React from 'react';
import data from '../data';
function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    console.log(props.match.params.name);
    return (<div>
        <h3>{product.category}</h3>
        </div>)
}
export default ProductScreen;