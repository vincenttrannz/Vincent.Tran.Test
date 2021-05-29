import React, {useState} from 'react'
import Item from './Item'
import products from '../data/products.json'

export default function Home() {
    const [state, setState] = useState(products);
    const sizes = ['XL', 'L', 'M', 'S', 'XS'];
    const handleChange = (e) => {
        const selected = e.target.value;
        const filteredProducts = [];
        products.map(product => product.size.includes(selected) && filteredProducts.push(product));
        // Set new products
        setState((filteredProducts.length > 0) ? filteredProducts : products);
    }

    return (
        <div className="container px-0 my-5">
            <div className="filterBar row mx-0 mb-2 d-flex justify-content-between align-items-center">
                <div className="col-12 col-md-9 col-lg-10">
                    <h1>Women's tops</h1>
                </div>
                <div className="col-12 col-md-3 col-lg-2 mb-2 mb-sm-0">
                    <select onChange={handleChange} className="form-select form-select-sm" aria-label="Filter by size">
                        <option value="" defaultValue>Filter by size</option>
                        {sizes.map((size, i) => <option key={i} value={size}>{size}</option>)}
                    </select>
                </div>
            </div>
            <div className="col-12 d-flex flex-wrap">
                {state.map((item, i) => <Item key={i} product={item}/>)}
            </div>
        </div>
    )
}
